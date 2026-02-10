import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send email function
export const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `${process.env.EMAIL_FROM_NAME || 'AJCE Website'} <${
        process.env.EMAIL_FROM || process.env.EMAIL_USER
      }>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: %s', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Send welcome email
export const sendWelcomeEmail = async (user) => {
  const subject = 'Welcome to AJCE Website Admin Panel';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Welcome to AJCE Website!</h2>
      <p>Dear ${user.name},</p>
      <p>Your account has been created successfully. You can now login to the admin panel.</p>
      <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Email:</strong> ${user.email}</p>
        <p style="margin: 5px 0;"><strong>Role:</strong> ${user.role}</p>
      </div>
      <p>Please change your password after your first login for security purposes.</p>
      <p>Best regards,<br>AJCE Development Team</p>
    </div>
  `;

  return await sendEmail({
    to: user.email,
    subject,
    html,
  });
};

// Send password reset email
export const sendPasswordResetEmail = async (user, resetToken) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  const subject = 'Password Reset Request';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p>Dear ${user.name},</p>
      <p>You requested a password reset for your AJCE Website admin account.</p>
      <p>Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
      </div>
      <p>Or copy and paste this link in your browser:</p>
      <p style="background-color: #f5f5f5; padding: 10px; word-break: break-all;">${resetUrl}</p>
      <p><strong>This link will expire in 1 hour.</strong></p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Best regards,<br>AJCE Development Team</p>
    </div>
  `;

  return await sendEmail({
    to: user.email,
    subject,
    html,
  });
};

// Send contact form email
export const sendContactFormEmail = async (contactData) => {
  const subject = `New Contact Form Submission from ${contactData.name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Name:</strong> ${contactData.name}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${contactData.email}</p>
        <p style="margin: 5px 0;"><strong>Phone:</strong> ${contactData.phone || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Subject:</strong> ${contactData.subject || 'N/A'}</p>
      </div>
      <div style="background-color: #fff; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Message:</strong></p>
        <p style="margin: 10px 0 0 0;">${contactData.message}</p>
      </div>
      <p style="color: #666; font-size: 12px;">Sent: ${new Date().toLocaleString()}</p>
    </div>
  `;

  return await sendEmail({
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    subject,
    html,
  });
};

// Send event registration confirmation
export const sendEventRegistrationEmail = async (event, user) => {
  const subject = `Registration Confirmed: ${event.title}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Event Registration Confirmation</h2>
      <p>Dear ${user.name},</p>
      <p>Your registration for the following event has been confirmed:</p>
      <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #007bff;">${event.title}</h3>
        <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(event.startDate).toLocaleDateString()}</p>
        <p style="margin: 5px 0;"><strong>Time:</strong> ${event.time || 'TBA'}</p>
        <p style="margin: 5px 0;"><strong>Venue:</strong> ${event.venue}</p>
      </div>
      <p>We look forward to seeing you at the event!</p>
      <p>Best regards,<br>AJCE Event Team</p>
    </div>
  `;

  return await sendEmail({
    to: user.email,
    subject,
    html,
  });
};

// Send bulk email (for announcements)
export const sendBulkEmail = async (recipients, subject, html) => {
  try {
    const promises = recipients.map((email) =>
      sendEmail({
        to: email,
        subject,
        html,
      })
    );

    const results = await Promise.allSettled(promises);

    const succeeded = results.filter((r) => r.status === 'fulfilled').length;
    const failed = results.filter((r) => r.status === 'rejected').length;

    return {
      success: true,
      total: recipients.length,
      succeeded,
      failed,
    };
  } catch (error) {
    console.error('Error sending bulk emails:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Test email configuration
export const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('Email configuration is valid');
    return { success: true, message: 'Email configuration is valid' };
  } catch (error) {
    console.error('Email configuration error:', error);
    return { success: false, error: error.message };
  }
};
