'use server';
import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export default async function sendEmail({
  email,
  subject,
  description,
  html,
}: {
  email: string[];
  subject: string;
  description?: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      'SMTP configuration invalid:',
      { SMTP_SERVER_USERNAME, SMTP_SERVER_HOST },
      error
    );
    throw new Error('SMTP verification failed');
  }

  try {
    const info = await transporter.sendMail({
      from: `"IQLab" <${SMTP_SERVER_USERNAME}>`,
      to: email,
      subject,
      text: description || '',
      html: html || '',
    });

    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
