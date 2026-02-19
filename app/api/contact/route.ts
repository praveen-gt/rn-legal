// import { NextRequest, NextResponse } from 'next/server'
// import { contactFormSchema } from '@/lib/schemas'

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const parsed = contactFormSchema.safeParse(body)
//     if (!parsed.success) {
//       return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
//     }
//     // TODO: Integrate Resend / SendGrid / Nodemailer
//     console.log('Contact form submission:', { ...parsed.data, timestamp: new Date().toISOString() })
//     return NextResponse.json({ message: 'Enquiry received. We will be in touch within 1 business day.' })
//   } catch {
//     return NextResponse.json({ error: 'Unexpected error. Please call us directly.' }, { status: 500 })
//   }
// }


// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/schemas'
import { ContactEmailTemplate } from '@/components/emails/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Send notification email to the firm
    const { error: sendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['info@rnlegal.com.au'],
      // to: ['tewatiapraveen94@gmail.com'],
      replyTo: data.email,
      subject: `New Enquiry – ${data.practiceArea} – ${data.fullName}`,
      react: ContactEmailTemplate({ data }),
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return NextResponse.json(
        { error: 'Failed to send enquiry. Please call us directly.' },
        { status: 500 }
      )
    }

    // Send confirmation email to the enquirer
    await resend.emails.send({
      from: 'R&N Legal <noreply@rnlegal.com.au>',
      to: [data.email],
      subject: 'We have received your enquiry – R&N Legal',
      react: ContactEmailTemplate({ data }),
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