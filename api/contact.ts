import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail, sendAutoReply } from '../server/email';
import { storage } from '../server/storage';
import { insertContactRequestSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Headers CORS più permissivi
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, User-Agent');
  res.setHeader('Access-Control-Allow-Credentials', 'false');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log dettagliati per debug Mac vs Windows
    console.log('--- REQUEST DEBUG ---');
    console.log('Method:', req.method);
    console.log('User-Agent:', req.headers['user-agent']);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Origin:', req.headers.origin);
    console.log('Raw body type:', typeof req.body);
    console.log('Raw body:', req.body);

    // Gestione body più robusta per Mac
    let parsedBody = req.body;
    
    // Se il body è una stringa, prova a fare il parse
    if (typeof req.body === 'string') {
      try {
        parsedBody = JSON.parse(req.body);
      } catch (e) {
        console.log('Body string parse failed:', e);
        return res.status(400).json({ error: 'Invalid JSON format' });
      }
    }

    // Validazione con logging dettagliato
    const result = insertContactRequestSchema.safeParse(parsedBody);
    if (!result.success) {
      console.error('Validation error details:', JSON.stringify(result.error.errors, null, 2));
      return res.status(400).json({ 
        error: 'Invalid data', 
        details: result.error.errors,
        receivedData: parsedBody 
      });
    }

    const { name, company, email, message } = result.data;
    console.log('Parsed data success:', { name, company, email, hasMessage: !!message });

    // Send emails con timeout e retry
    const emailPromises = [
      sendContactEmail({ name, company, email, message: message ?? undefined }),
      sendAutoReply({ name, company, email, message: message ?? undefined })
    ];

    const [emailSent, autoReplySent] = await Promise.allSettled(emailPromises);
    
    const emailResult = emailSent.status === 'fulfilled' ? emailSent.value : false;
    const autoReplyResult = autoReplySent.status === 'fulfilled' ? autoReplySent.value : false;

    if (emailSent.status === 'rejected') {
      console.error('Email send failed:', emailSent.reason);
    }
    if (autoReplySent.status === 'rejected') {
      console.error('Auto-reply send failed:', autoReplySent.reason);
    }

    // Store contact request
    const contactRequest = await storage.createContactRequest({
      name,
      company,
      email,
      message: message || null,
      timestamp: new Date(),
      emailSent: emailResult,
      autoReplySent: autoReplyResult
    });

    console.log('Contact saved successfully:', contactRequest.id);

    return res.status(200).json({
      success: true,
      message: emailResult ? 'Contact request sent successfully' : 'Contact request saved (email disabled)',
      emailSent: emailResult,
      autoReplySent: autoReplyResult,
      debug: {
        userAgent: req.headers['user-agent'],
        contentType: req.headers['content-type']
      }
    });

  } catch (error) {
    console.error('--- CONTACT FORM ERROR ---');
    console.error('Error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack available');
    console.error('Error message:', error instanceof Error ? error.message : 'No message');
    
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined,
      timestamp: new Date().toISOString()
    });
  }
}