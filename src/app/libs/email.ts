import nodemailer from 'nodemailer';

interface EmailPayload {
  name: string;
  email: string;
  message: string;
  phoneNo: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASS,
  },
});

export async function sendContactEmail({
  name,
  email,
  message,
  phoneNo,
}: EmailPayload) {
  console.log('im in email, and the email is:', process.env.EMAIL_TO);
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone No.:</strong> ${phoneNo}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message || 'something went wrong sending email');
    } else {
      console.log('Unknown error', error);
    }
  }
}
