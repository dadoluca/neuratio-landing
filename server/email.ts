import sgMail from '@sendgrid/mail';

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

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', data);
    return true; // For development without API key
  }

  try {
    const msg = {
      to: 'info@neuratio.ai',
      from: 'info@neuratio.ai', // Use verified sender address
      replyTo: data.email, // Quando rispondi, la mail va al cliente
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
      text: `
        New Demo Request
        
        Name: ${data.name}
        Company: ${data.company}
        Email: ${data.email}
        ${data.message ? `Message: ${data.message}` : ''}
        
        Sent from Neuratio website contact form
      `
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully to info@neuratio.ai', response[0].statusCode);
    return true;
  } catch (error: any) {
    console.error('Email sending failed:', error.message);
    if (error.response?.body?.errors) {
      console.error('SendGrid error details:', error.response.body.errors);
    }
    if (error.response?.body) {
      console.error('Full SendGrid response:', error.response.body);
    }
    return false;
  }
}

export async function sendAutoReply(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    return true; // Skip in development
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
        <p>In the meantime, feel free to connect with us on LinkedIn:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/luca-dadone-8858a41a9/">Luca Dadone</a></li>
          <li><a href="https://www.linkedin.com/in/andrea-bioddo/">Andrea Bioddo</a></li>
        </ul>
        <p>Best regards,<br>The Neuratio Team</p>
      `,
      text: `
        Thank you for contacting Neuratio!
        
        Dear ${data.name},
        
        Thank you for your interest in Neuratio's AI-powered customer service platform. We have received your demo request and will get back to you within 24 hours.
        
        Best regards,
        The Neuratio Team
      `
    };

    await sgMail.send(msg);
    console.log(`Auto-reply sent to ${data.email}`);
    return true;
  } catch (error: any) {
    console.error('Auto-reply sending failed:', error);
    if (error.response && error.response.body && error.response.body.errors) {
      console.error('SendGrid auto-reply error details:', JSON.stringify(error.response.body.errors, null, 2));
    }
    return false;
  }
}