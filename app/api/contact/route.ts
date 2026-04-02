// app/api/contact/route.ts  ← stays .ts, no JSX needed

import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { render } from '@react-email/render'
import React from 'react'
import { contactFormSchema } from '@/lib/schemas'
import { ContactEmailTemplate } from '@/components/emails/ContactEmailTemplate'
import { ConfirmationEmailTemplate } from '@/components/emails/ConfirmationEmailTemplate'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const data = parsed.data

    // No JSX needed — React.createElement works in plain .ts files
    const firmHtml = await render(React.createElement(ContactEmailTemplate, { data }))
    const confirmHtml = await render(React.createElement(ConfirmationEmailTemplate, { data }))

    // 1️⃣  Notify the firm
    await sgMail.send({
      to: 'info@rnlegal.com.au',
      // to: 'tewatiapraveen94@gmail.com', // ← dev override
      from: 'info@rnlegal.com.au',
      replyTo: data.email,
      subject: `New Enquiry – ${data.practiceArea} – ${data.fullName}`,
      html: firmHtml,
    })

    // 2️⃣  Confirm receipt to the enquirer
    await sgMail.send({
      to: data.email,
      from: 'info@rnlegal.com.au',
      subject: 'We have received your enquiry – R&N Legal',
      html: confirmHtml,
    })

    return NextResponse.json({
      message: 'Enquiry received. We will be in touch within 1 business day.',
    })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json(
      { error: 'Unexpected error. Please call us directly.' },
      { status: 500 }
    )
  }
}