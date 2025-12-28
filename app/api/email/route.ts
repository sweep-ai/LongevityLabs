import { NextRequest, NextResponse } from 'next/server'

// Template for email sending API
// This can be used for transactional emails, newsletters, etc.

interface EmailData {
  to: string | string[]
  subject: string
  template: 'welcome' | 'coaching-confirmation' | 'lead-magnet' | 'newsletter'
  data: {
    firstName?: string
    lastName?: string
    [key: string]: any
  }
}

export async function POST(request: NextRequest) {
  try {
    const emailData: EmailData = await request.json()

    // Validate required fields
    if (!emailData.to || !emailData.subject) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service
    // Examples:
    
    // Option 1: Resend (recommended for Next.js)
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Dwayne Dunning <dwayne@longevitylab.com>',
    //   to: emailData.to,
    //   subject: emailData.subject,
    //   html: getEmailTemplate(emailData.template, emailData.data),
    // })

    // Option 2: SendGrid
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: emailData.to,
    //   from: 'dwayne@longevitylab.com',
    //   subject: emailData.subject,
    //   html: getEmailTemplate(emailData.template, emailData.data),
    // })

    // Option 3: Nodemailer (SMTP)
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    // await transporter.sendMail({
    //   from: 'dwayne@longevitylab.com',
    //   to: emailData.to,
    //   subject: emailData.subject,
    //   html: getEmailTemplate(emailData.template, emailData.data),
    // })

    console.log('Email sent:', {
      to: emailData.to,
      subject: emailData.subject,
      template: emailData.template,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

// Email template function
function getEmailTemplate(template: string, data: any): string {
  const templates: Record<string, string> = {
    welcome: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #D32F2F;">Welcome to Longevity Lab, ${data.firstName}!</h1>
          <p>Thank you for joining the Longevity Lab community. We're excited to help you on your journey to peak performance.</p>
          <p>Stay tuned for exclusive content, tips, and strategies designed specifically for men 35+.</p>
          <p style="margin-top: 30px;">- Dwayne Dunning<br/>Founder, Longevity Lab</p>
        </body>
      </html>
    `,
    'coaching-confirmation': `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #D32F2F;">Application Received, ${data.firstName}!</h1>
          <p>Thank you for applying to Longevity Lab coaching. We've received your application and will review it within 24 hours.</p>
          <p>Our team will reach out to schedule a strategy call to see if you're a good fit for our program.</p>
          <p style="margin-top: 30px;">- Dwayne Dunning<br/>Founder, Longevity Lab</p>
        </body>
      </html>
    `,
    'lead-magnet': `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #D32F2F;">Your Free Resources, ${data.firstName}!</h1>
          <p>Thank you for your interest! Here are your requested resources:</p>
          <ul>
            ${data.resourceType?.includes('trt') ? '<li><a href="#">TRT Optimization Checklist</a></li>' : ''}
            ${data.resourceType?.includes('macro') ? '<li><a href="#">Advanced Macro Calculator</a></li>' : ''}
          </ul>
          <p>These resources are designed to help you take the first step toward optimizing your performance.</p>
          <p style="margin-top: 30px;">- Dwayne Dunning<br/>Founder, Longevity Lab</p>
        </body>
      </html>
    `,
    newsletter: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #D32F2F;">Longevity Lab Newsletter</h1>
          <p>Hi ${data.firstName},</p>
          <p>${data.content || 'Here are this week\'s insights on optimizing your performance.'}</p>
          <p style="margin-top: 30px;">- Dwayne Dunning<br/>Founder, Longevity Lab</p>
        </body>
      </html>
    `,
  }

  return templates[template] || templates.newsletter
}

