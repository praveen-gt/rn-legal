'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    reset()
  }

  const fieldClass = (err: boolean) =>
    `w-full bg-transparent border-b ${err ? 'border-red-400' : 'border-white/20 focus:border-gold-400'} px-0 py-3.5 font-body text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors duration-300`

  const labelClass = 'block font-body text-2xs tracking-[0.2em] uppercase text-white/55 mb-2'

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 border border-gold-400/30 flex items-center justify-center"
          style={{ background: 'rgba(196,145,26,0.08)' }}>
          <CheckCircle2 size={28} className="text-gold-400" />
        </div>
        <h3 className="font-display font-semibold text-white text-2xl mb-3">Enquiry Received</h3>
        <p className="text-white/65 font-body text-sm leading-relaxed max-w-sm mx-auto mb-6">
          Thank you. We will be in touch within 1 business day. For urgent matters, please call directly.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline !text-xs">
          Submit Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register('fullName')} type="text" placeholder="Your full name"
            className={fieldClass(!!errors.fullName)} autoComplete="name" />
          {errors.fullName && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1"><AlertCircle size={11} />{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Mobile Number *</label>
          <input {...register('mobile')} type="tel" placeholder="04xx xxx xxx"
            className={fieldClass(!!errors.mobile)} autoComplete="tel" />
          {errors.mobile && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1"><AlertCircle size={11} />{errors.mobile.message}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register('email')} type="email" placeholder="you@example.com"
            className={fieldClass(!!errors.email)} autoComplete="email" />
          {errors.email && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1"><AlertCircle size={11} />{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Preferred Contact Time</label>
          <input {...register('preferredContactTime')} type="text" placeholder="e.g. Mornings, After 3pm"
            className={fieldClass(false)} />
        </div>
      </div>

      {/* Practice area */}
      <div>
        <label className={labelClass}>Practice Area *</label>
        <div className="relative">
          <select {...register('practiceArea')} defaultValue=""
            className={`${fieldClass(!!errors.practiceArea)} appearance-none pr-8 cursor-pointer bg-transparent`}
            style={{ background: 'transparent' }}>
            <option value="" disabled>Select a practice area…</option>
            {siteConfig.practiceAreas.map(a => <option key={a} value={a} className="bg-navy-900">{a}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
        </div>
        {errors.practiceArea && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1"><AlertCircle size={11} />{errors.practiceArea.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>
          Brief Description *
          <span className="normal-case text-white/55 font-normal ml-2 tracking-normal">
            (What happened + any urgent dates)
          </span>
        </label>
        <textarea {...register('description')} rows={4} placeholder="Please briefly describe your matter, including any court dates or deadlines…"
          className={`${fieldClass(!!errors.description)} resize-none`} />
        {errors.description && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1"><AlertCircle size={11} />{errors.description.message}</p>}
      </div>

      {/* Terms */}
      <div>
        <label className="flex items-start gap-4">
          <div className="relative mt-0.5">
            <input {...register('agreeToTerms')} type="checkbox"
              className="peer sr-only" />
            <div className="w-4 h-4 border border-white/30 peer-checked:border-gold-400 peer-checked:bg-gold-400/10 transition-all duration-200 flex items-center justify-center">
              <div className="w-2 h-2 bg-gold-400 opacity-0 peer-checked:opacity-100 transition-opacity" style={{ clipPath: 'polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)' }} />
            </div>
          </div>
          <span className="text-white/60 font-body text-xs leading-relaxed hover:text-white/75 transition-colors cursor-pointer">
            I acknowledge this website provides general information only, that contacting R&N Legal does not create a lawyer–client relationship, and that I have read the{' '}
            <Link href="/disclaimer" className="text-gold-400/80 hover:text-gold-300 underline underline-offset-2">disclaimer</Link>.
          </span>
        </label>
        {errors.agreeToTerms && <p className="mt-2 text-red-400 text-xs font-body flex items-center gap-1 ml-8"><AlertCircle size={11} />{errors.agreeToTerms.message}</p>}
      </div>

      {/* Privacy note */}
      <div className="border border-white/10 px-5 py-4">
        <p className="text-white/55 font-body text-xs leading-relaxed">
          <strong className="text-white/70">Privacy:</strong>{' '}
          Your information will be used only to respond to your enquiry and provide legal services, in accordance with Australian privacy legislation.
        </p>
      </div>

      {/* Submit */}
      <button type="submit" disabled={status === 'loading'}
        className={`btn-gold w-full justify-center ${status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''}`}>
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  )
}