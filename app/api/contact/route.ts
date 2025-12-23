// app/api/contact/route.ts - REPLACE YOUR ENTIRE FILE WITH THIS
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// CHANGE THIS: Export a named POST function instead of default
export async function POST(request: NextRequest) {
  try {
    // ADD LOGGING to debug
    console.log('📧 API Route Called. Checking env vars...');
    console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✅ Set' : '❌ Not set');
    
    const { name, email, phone, message } = await request.json();
    console.log('📝 Received form data:', { name, email, phone, messageLength: message.length });

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Phone validation (Indian phone numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanedPhone)) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit Indian phone number' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Missing environment variables!');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('🔧 Creating email transporter...');
    
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sribharathividhyalaya@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { 
              background: linear-gradient(135deg, #f97316, #ec4899); 
              padding: 30px; 
              text-align: center; 
              color: white; 
              border-radius: 10px 10px 0 0;
            }
            .content { padding: 30px; }
            .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .info-table td { padding: 12px 15px; border-bottom: 1px solid #e0e0e0; }
            .info-table tr:last-child td { border-bottom: none; }
            .field-label { 
              background-color: #f8f9fa; 
              font-weight: 600; 
              color: #495057;
              width: 120px;
            }
            .message-box { 
              background-color: #f8f9fa; 
              padding: 20px; 
              border-radius: 8px; 
              border-left: 4px solid #f97316;
              margin: 20px 0;
            }
            .footer { 
              text-align: center; 
              padding: 20px; 
              color: #6c757d; 
              font-size: 14px;
              border-top: 1px solid #e0e0e0;
              margin-top: 30px;
            }
            .school-name { 
              color: #f97316; 
              font-weight: bold; 
              font-size: 18px;
            }
            .highlight { color: #f97316; }
            .contact-link { 
              color: #f97316; 
              text-decoration: none; 
              font-weight: 500;
            }
            .contact-link:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">SRI BHARATHI VIDHYALAYA</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Contact Form Submission</p>
            </div>
            
            <div class="content">
              <h2 style="color: #2d3748; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 2px solid #f97316;">
                📝 New Inquiry Received
              </h2>
              
              <table class="info-table">
                <tr>
                  <td class="field-label">👤 Name:</td>
                  <td><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td class="field-label">📧 Email:</td>
                  <td>
                    <a href="mailto:${email}" class="contact-link">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td class="field-label">📱 Phone:</td>
                  <td>
                    <a href="tel:${cleanedPhone}" class="contact-link">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td class="field-label">📅 Date:</td>
                  <td>${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })} (IST)</td>
                </tr>
              </table>
              
              <div style="margin-top: 30px;">
                <h3 style="color: #2d3748; margin-bottom: 15px;">💬 Message:</h3>
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-line;">${message}</p>
                </div>
              </div>
              
              <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #1e40af;">
                  <strong>💡 Quick Action:</strong> 
                  <br>You can reply directly to this email to contact ${name}.
                  <br>For immediate response, call them at <a href="tel:${cleanedPhone}" class="contact-link">${phone}</a>
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <span class="school-name">SRI BHARATHI VIDHYALAYA</span> - Putting the pupil first
              </p>
              <p style="margin: 0 0 10px 0; font-size: 13px;">
                10, Raja Nagar, Church Bus Stop, 88 Veppampattu, Tiruvallur, TamilNadu 602024
              </p>
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                📞 9597462662 | ✉️ sribharathividhyalaya@gmail.com
                <br>Celebrating 25 Years of Excellence (2001-2026)
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('📤 Attempting to send email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully! Message ID:', info.messageId);

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We will contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    
    // Log specific error details
    if (error.code === 'EAUTH') {
      console.error('🔐 Authentication error - Check GMAIL_USER and GMAIL_APP_PASSWORD');
    } else if (error.code === 'ENOTFOUND') {
      console.error('🌐 Network error - Cannot connect to Gmail SMTP');
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly at 9597462662.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add a GET method for testing (if needed)
export async function GET(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'Contact API is working! Use POST to submit the form.',
      status: 'active'
    },
    { status: 200 }
  );
}