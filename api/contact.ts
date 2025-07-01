import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail, sendAutoReply } from '../server/email';
import { storage } from '../server/storage';
import { insertContactRequestSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Aggiungi headers CORS espliciti
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log più dettagliati per debug
    console.log('Request headers:', req.headers);
    console.log('Request body:', req.body);
    console.log('User-Agent:', req.headers['user-agent']);

    const result = insertContactRequestSchema.safeParse(req.body);
    if (!result.success) {
      console.error('Validation error:', result.error.errors);
      return res.status(400).json({ error: 'Invalid data', details: result.error.errors });
    }

    const { name, company, email, message } = result.data;

    // Send emails con gestione errori migliorata
    const emailSent = await sendContactEmail({ name, company, email, message: message ?? undefined });
    const autoReplySent = await sendAutoReply({ name, company, email, message: message ?? undefined });

    // Store contact request
    const contactRequest = await storage.createContactRequest({
      name,
      company,
      email,
      message: message || null,
      timestamp: new Date(),
      emailSent,
      autoReplySent
    });

    console.log('New contact request:', contactRequest);

    return res.status(200).json({
      success: true,
      message: emailSent ? 'Contact request sent successfully' : 'Contact request saved (email disabled)',
      emailSent,
      autoReplySent
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack available');
    
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}