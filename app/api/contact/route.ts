import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
    }
    // TODO: Integrate Resend / SendGrid / Nodemailer
    console.log('Contact form submission:', { ...parsed.data, timestamp: new Date().toISOString() })
    return NextResponse.json({ message: 'Enquiry received. We will be in touch within 1 business day.' })
  } catch {
    return NextResponse.json({ error: 'Unexpected error. Please call us directly.' }, { status: 500 })
  }
}
