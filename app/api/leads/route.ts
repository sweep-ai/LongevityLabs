import { NextRequest, NextResponse } from 'next/server'

// This is a template for handling lead submissions
// You'll need to integrate with your email service (SendGrid, Mailchimp, etc.)

interface LeadData {
  firstName: string
  lastName: string
  email: string
  age?: string
  phone?: string
  goals?: string
  preferredTime?: string
  resourceType?: 'trt-checklist' | 'macro-calculator' | 'both'
  leadType: 'book-call' | 'lead-magnet' | 'email' | 'apply-coaching'
  fitnessExperience?: string
  fitnessGoals?: string
  instagram?: string
  resourceUrl?: string
  resourceName?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Forward to Google Sheets for apply-coaching, lead-magnet, and email
    const sheetsLeadTypes = ['apply-coaching', 'lead-magnet', 'email'] as const
    if (sheetsLeadTypes.includes(data.leadType as typeof sheetsLeadTypes[number])) {
      const sourceLabel =
        data.leadType === 'apply-coaching'
          ? 'Apply for Coaching'
          : data.leadType === 'lead-magnet'
          ? 'Free Resource'
          : 'Newsletter'
      const payload = {
        timestamp: new Date().toISOString(),
        source: sourceLabel,
        fitnessExperience: data.fitnessExperience ?? '',
        fitnessGoals: data.fitnessGoals ?? '',
        firstName: data.firstName ?? '',
        lastName: data.lastName ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
        instagram: data.instagram ?? '',
        resource: data.leadType === 'lead-magnet' ? (data.resourceUrl ?? '') : '',
        resourceName: data.leadType === 'lead-magnet' ? (data.resourceName ?? '') : '',
      }
      const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL
      if (webAppUrl) {
        try {
          const res = await fetch(webAppUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          const text = await res.text()
          if (!res.ok) {
            const wrongUrl =
              res.status === 404 ||
              text.includes('Page Not Found') ||
              text.includes('does not exist')
            if (wrongUrl) {
              console.error(
                'GOOGLE_SHEETS_WEB_APP_URL appears wrong. Use the Web App URL from Apps Script (Deploy → Deploy as web app), e.g. https://script.google.com/macros/s/.../exec — NOT the spreadsheet URL (docs.google.com/...).'
              )
            }
            console.error('Google Sheets Web App error:', res.status, text.slice(0, 200))
            return NextResponse.json(
              { error: 'Failed to save submission' },
              { status: 502 }
            )
          }
          let parsed: { success?: boolean }
          try {
            parsed = JSON.parse(text)
          } catch {
            parsed = {}
          }
          if (parsed?.success !== true) {
            console.error('Google Sheets Web App returned 200 but not { success: true }: ', text.slice(0, 300))
            return NextResponse.json(
              { error: 'Failed to save submission' },
              { status: 502 }
            )
          }
        } catch (fetchError) {
          console.error('Google Sheets Web App fetch failed:', fetchError)
          return NextResponse.json(
            { error: 'Failed to save submission' },
            { status: 502 }
          )
        }
      } else {
        console.warn('GOOGLE_SHEETS_WEB_APP_URL not set — submission logged only:', payload)
      }

      if (data.leadType === 'apply-coaching') {
        return NextResponse.json({ success: true, message: 'Application received. We will be in contact soon.' })
      }
      if (data.leadType === 'lead-magnet') {
        return NextResponse.json({ success: true, message: 'Check your email for download links.' })
      }
      return NextResponse.json({ success: true, message: 'Welcome to the Longevity Lab community!' })
    }

    // Validate required fields for other lead types (e.g. book-call)
    if (!data.email || !data.firstName || !data.lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service
    // Example integrations:
    
    // Option 1: SendGrid
    // await sendEmailViaSendGrid(data)
    
    // Option 2: Mailchimp
    // await addToMailchimp(data)
    
    // Option 3: Resend
    // await sendEmailViaResend(data)
    
    // Option 4: Custom SMTP
    // await sendEmailViaSMTP(data)

    // TODO: Save to database (e.g., Supabase, MongoDB, PostgreSQL)
    // await saveLeadToDatabase(data)

    // TODO: Segment leads based on type
    // - Call bookings: Hot leads → immediate follow-up and calendar scheduling
    // - Lead magnets: Warm leads → nurture sequence
    // - Email list: Cold leads → general newsletter

    // For now, we'll just log the data
    console.log('Lead captured:', {
      type: data.leadType,
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      timestamp: new Date().toISOString(),
    })

    // Send different responses based on lead type (apply-coaching handled above)
    if (data.leadType === 'book-call') {
      // Hot lead - booking a call
      // TODO: Send immediate notification to Dwayne/team
      // TODO: Send confirmation email to lead with calendar link
      return NextResponse.json({
        success: true,
        message: 'Call request received. We\'ll be in touch within 24 hours to schedule.',
      })
    } else if (data.leadType === 'lead-magnet') {
      // Warm lead - lead magnet download
      // TODO: Send download links via email
      // TODO: Add to nurture sequence
      return NextResponse.json({
        success: true,
        message: 'Check your email for download links.',
      })
    } else {
      // Cold lead - email list signup
      // TODO: Add to general newsletter
      // TODO: Send welcome email
      return NextResponse.json({
        success: true,
        message: 'Welcome to the Longevity Lab community!',
      })
    }
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}

// Example email sending function (template)
async function sendEmailViaSendGrid(data: LeadData) {
  // TODO: Implement SendGrid integration
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // 
  // const msg = {
  //   to: data.email,
  //   from: 'dwayne@longevitylab.com',
  //   subject: 'Welcome to Longevity Lab',
  //   text: `Hi ${data.firstName}, welcome to Longevity Lab!`,
  //   html: `<p>Hi ${data.firstName}, welcome to Longevity Lab!</p>`,
  // }
  // 
  // await sgMail.send(msg)
}

// Example database save function (template)
async function saveLeadToDatabase(data: LeadData) {
  // TODO: Implement database integration
  // Example with Supabase:
  // const { createClient } = require('@supabase/supabase-js')
  // const supabase = createClient(
  //   process.env.SUPABASE_URL,
  //   process.env.SUPABASE_KEY
  // )
  // 
  // await supabase.from('leads').insert({
  //   first_name: data.firstName,
  //   last_name: data.lastName,
  //   email: data.email,
  //   age: parseInt(data.age),
  //   lead_type: data.leadType,
  //   created_at: new Date().toISOString(),
  // })
}


