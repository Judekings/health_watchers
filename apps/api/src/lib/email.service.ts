import nodemailer from 'nodemailer';
import { config } from '@health-watchers/config';
import logger from '@api/utils/logger';

/**
 * Basic email service using Nodemailer.
 * In a production environment, you'd use a service like SendGrid, SES, or Mailgun.
 */

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
  port: parseInt(process.env.EMAIL_PORT || '2525'),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Enqueue an email to be sent.
 * Currently sends synchronously, but could be moved to a background job queue (e.g. BullMQ).
 */
export async function enqueue(to: string, subject: string, text: string, html?: string) {
  if (process.env.NODE_ENV === 'test') return;

  try {
    const info = await transporter.sendMail({
      from: `"Health Watchers" <${process.env.EMAIL_FROM || 'noreply@healthwatchers.com'}>`,
      to,
      subject,
      text,
      html,
    });
    logger.info({ messageId: info.messageId, to }, 'Email sent');
  } catch (err) {
    logger.error({ err, to, subject }, 'Failed to send email');
  }
}

export function sendWelcomeEmail(to: string, name: string) {
  const subject = 'Welcome to Health Watchers';
  const text = `Hi ${name},\n\nWelcome to Health Watchers! Your account has been successfully created.`;
  const html = `<h3>Welcome to Health Watchers</h3><p>Hi <strong>${name}</strong>,</p><p>Your account has been successfully created. You can now log in to the portal.</p>`;
  enqueue(to, subject, text, html);
}

export function sendPasswordResetEmail(to: string, token: string) {
  const resetUrl = `${config.portalUrl}/reset-password?token=${token}`;
  const subject = 'Password Reset Request';
  const text = `You requested a password reset. Please use the following link: ${resetUrl}`;
  const html = `<h3>Password Reset</h3><p>You requested a password reset. Please click the link below to set a new password:</p><p><a href="${resetUrl}">Reset Password</a></p><p>If you didn't request this, you can safely ignore this email.</p>`;
  enqueue(to, subject, text, html);
}

export function sendAppointmentReminderEmail(to: string, patientName: string, date: Date, doctorName: string) {
  const dateStr = date.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });
  const subject = 'Appointment Reminder';
  const text = `This is a reminder for your appointment with Dr. ${doctorName} on ${dateStr} for patient ${patientName}.`;
  const html = `<h3>Appointment Reminder</h3><p>This is a reminder for your upcoming appointment:</p><ul><li><strong>Doctor:</strong> Dr. ${doctorName}</li><li><strong>Patient:</strong> ${patientName}</li><li><strong>Time:</strong> ${dateStr}</li></ul>`;
  enqueue(to, subject, text, html);
}

export function sendPaymentConfirmationEmail(to: string, amount: string, assetCode: string, txHash: string) {
  const subject = 'Payment Confirmation';
  const text = `Your payment of ${amount} ${assetCode} has been confirmed.\n\nTransaction Hash: ${txHash}`;
  const html = `<h3>Payment Confirmed</h3><p>Your payment has been successfully processed.</p><ul><li><strong>Amount:</strong> ${amount} ${assetCode}</li><li><strong>Transaction Hash:</strong> <code style="word-break: break-all;">${txHash}</code></li></ul><p>Thank you for using Health Watchers.</p>`;
  enqueue(to, subject, text, html);
}

export function sendAISummaryNotification(to: string, patientName: string, encounterId: string) {
  const APP_BASE_URL = config.portalUrl || 'http://localhost:3000';
  const encounterUrl = `${APP_BASE_URL}/encounters/${encounterId}`;
  const text = `The AI clinical summary for ${patientName}'s encounter is ready.\n\nView it here: ${encounterUrl}`;
  const html = `
    <h3>AI Clinical Summary Ready</h3>
    <p>The AI-generated clinical summary for <strong>${patientName}</strong>'s encounter is now available.</p>
    <p><a href="${encounterUrl}">View Encounter Summary</a></p>
  `;
  enqueue(to, 'AI Clinical Summary Ready — Health Watchers', text, html);
}
