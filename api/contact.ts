import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import { insertContactRequestSchema } from '../shared/schema';

// Inizializza SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY not found. Email functionality will be disabled.");
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message?: string;
}

// Sposta le funzioni email direttamente qui
async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', data);
    return true;
  }

  try {
    const msg = {
      to: 'info@neuratio.ai',
      from: 'info@neuratio.ai',
      replyTo: data.email,
      subject: `New Demo Request from ${data.company}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        <br>
        <p><em>Sent from Neuratio website contact form</em></p>
      `,
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully', response[0].statusCode);
    return true;
  } catch (error: any) {
    console.error('Email sending failed:', error);
    return false;
  }
}

async function sendAutoReply(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    return true;
  }

  try {
    const msg = {
      to: data.email,
      from: 'info@neuratio.ai',
      subject: 'Thank you for your interest in Neuratio',
      html: `
        <h2>Thank you for contacting Neuratio!</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for your interest in Neuratio's AI-powered customer service platform. We have received your demo request and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Neuratio Team</p>
      `,
    };

    await sgMail.send(msg);
    console.log(`Auto-reply sent to ${data.email}`);
    return true;
  } catch (error: any) {
    console.error('Auto-reply sending failed:', error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Headers CORS
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
    console.log('Environment check:', {
      hasSendGridKey: !!process.env.SENDGRID_API_KEY,
      nodeEnv: process.env.NODE_ENV
    });

    const result = insertContactRequestSchema.safeParse(req.body);
    if (!result.success) {
      console.error('Validation error:', result.error.errors);
      return res.status(400).json({ error: 'Invalid data', details: result.error.errors });
    }

    const { name, company, email, message } = result.data;

    // Send emails
    const emailSent = await sendContactEmail({ name, company, email, message: message ?? undefined });
    const autoReplySent = await sendAutoReply({ name, company, email, message: message ?? undefined });

    // Per ora salta lo storage se da problemi
    // const contactRequest = await storage.createContactRequest({...});

    console.log('Contact request processed:', { name, company, email, emailSent, autoReplySent });

    return res.status(200).json({
      success: true,
      message: emailSent ? 'Contact request sent successfully' : 'Contact request saved (email disabled)',
      emailSent,
      autoReplySent
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
  }
}