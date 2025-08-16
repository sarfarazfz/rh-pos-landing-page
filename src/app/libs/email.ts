import { z } from 'zod';
import * as brevo from '@getbrevo/brevo';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  phoneNo: z.string(),
  message: z.string(),
  restaurantName: z.string(),
  restaurantCity: z.string(),
  restaurantCountry: z.string(),
});
const inquiryFormSchema = z.object({
  name: z.string(),
  phoneNo: z.string(),
  countryCode: z.string(),
  queryType: z.string(),
});

type ContactFormPayload = z.infer<typeof contactFormSchema>;
type InquiryFormPayload = z.infer<typeof inquiryFormSchema>;

export async function sendContactEmail(payload: ContactFormPayload) {
  const {
    name,
    email,
    phoneNo,
    message,
    restaurantName,
    restaurantCity,
    restaurantCountry,
  } = payload;

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    // Set recipient
    sendSmtpEmail.to = [{ email: process.env.EMAIL_TO! }];

    // Set subject
    sendSmtpEmail.subject = `New Submission from ${name} - ${restaurantName}`;

    // Set HTML content
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone No.:</strong> ${phoneNo}</p>
          <hr>
          <p><strong>Restaurant Name:</strong> ${restaurantName}</p>
          <p><strong>Restaurant City:</strong> ${restaurantCity}</p>
          <p><strong>Restaurant Country:</strong> ${restaurantCountry}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;

    sendSmtpEmail.sender = {
      name: `${name} (via rh poss landing page)`,
      email: process.env.FROM_EMAIL!,
    };

    sendSmtpEmail.replyTo = { email: email, name: name };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return { success: true, data: result };
  } catch (error: unknown) {
    console.error('Email sending failed:', error);

    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while sending email');
    }
  }
}

export async function sendInquiryEmail(payload: InquiryFormPayload) {
  const { name, phoneNo, countryCode, queryType } = payload;

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.to = [{ email: process.env.EMAIL_TO! }];

    sendSmtpEmail.subject = `New Inquiry from ${name}`;

    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h2>New Inquiry Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone No.:</strong> ${countryCode} ${phoneNo}</p>
          <p><strong>Query Type:</strong> ${queryType}</p>
        </body>
      </html>
    `;

    sendSmtpEmail.sender = {
      name: `${name} (via rh poss landing page)`,
      email: process.env.FROM_EMAIL!,
    };

    sendSmtpEmail.replyTo = { email: process.env.FROM_EMAIL!, name: name };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return { success: true, data: result };
  } catch (error: unknown) {
    console.error('Inquiry email sending failed:', error);

    if (error instanceof Error) {
      throw new Error(`Failed to send inquiry email: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while sending inquiry email');
    }
  }
}
