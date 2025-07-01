import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail, sendAutoReply } from '../server/email';
import { storage } from '../server/storage';
import { insertContactRequestSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log(!!process.env.SENDGRID_API_KEY, 'SendGrid API Key is set:', process.env.SENDGRID_API_KEY);

  try {
    const result = insertContactRequestSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ 
        error: 'Invalid data', 
        details: result.error.errors 
      });
    }

    const { name, company, email, message } = result.data;

    // Send emails
    const emailSent = await sendContactEmail({ 
      name, 
      company, 
      email, 
      message: message ?? undefined 
    });
    const autoReplySent = await sendAutoReply({ 
      name, 
      company, 
      email, 
      message: message ?? undefined 
    });

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
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}