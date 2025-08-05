import { sendContactEmail } from '@/app/libs/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phoneNo } = body;
    validateFormData(name, email, message, phoneNo);
    await sendContactEmail({ name, email, message, phoneNo });
    console.log('email sent');
    return NextResponse.json(
      { message: 'Thank you! Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

function validateFormData(
  name: string,
  email: string,
  message: string,
  phoneNo: string
) {
  if (!name || !email || !message || !phoneNo) {
    throw new Error('All fields are required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (name.trim().length < 2) {
    throw new Error('Name must be at least 2 characters long.');
  }
  if (phoneNo.trim().length < 10) {
      throw new Error('Phone number should be valid.');
  }

  if (message.trim().length < 10) {
    throw new Error('Message must be at least 10 characters long.');
  }
}
