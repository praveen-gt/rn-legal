import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/ui/ContactForm'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact R&N Legal for appointments and legal enquiries in Melbourne. Phone: 0430 593 124.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact R&N Legal"
        title="Get in"
        italic="Touch"
        description="For appointments and enquiries contact us directly. If your matter is urgent — for immediate safety risks — seek emergency assistance first."
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop"
      />

      {/* Urgent alert */}
      <div className="bg-amber-950/60 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="text-amber-300/80 font-body text-sm leading-relaxed">
              <strong className="text-amber-300">Urgent matters:</strong> If you or someone else is in immediate danger, call{' '}
              <strong>000</strong>. We are not an emergency service. For urgent FVIO matters, contact the Magistrates Court or police family violence unit.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-navy-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: contact + map */}
            <div className="lg:col-span-4 space-y-10">
              {/* Contact details */}
              <div data-animate>
                <p className="section-label text-gold-400/70 mb-7">Contact Details</p>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone, label: 'Phone',
                      content: (
                        <div>
                          <a href={`tel:${siteConfig.contact.phone1}`} className="block text-white font-body font-medium hover:text-gold-300 transition-colors">{siteConfig.contact.phone1}</a>
                          <a href={`tel:${siteConfig.contact.phone2}`} className="block text-white/40 font-body text-sm hover:text-gold-300/70 transition-colors mt-0.5">{siteConfig.contact.phone2}</a>
                        </div>
                      ),
                    },
                    {
                      icon: Mail, label: 'Email',
                      content: <a href={`mailto:${siteConfig.contact.email}`} className="text-white font-body font-medium hover:text-gold-300 transition-colors">{siteConfig.contact.email}</a>,
                    },
                    {
                      icon: MapPin, label: 'Office',
                      content: <address className="not-italic text-white/65 font-body text-sm leading-relaxed">{siteConfig.contact.address}<br />{siteConfig.contact.suburb}</address>,
                    },
                    {
                      icon: Clock, label: 'Hours',
                      content: (
                        <div>
                          <p className="text-white/65 font-body text-sm">{siteConfig.contact.hours}</p>
                          <p className="text-white/60 font-body text-xs mt-0.5">{siteConfig.contact.responseTime}</p>
                        </div>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} className="flex items-start gap-4 pb-6 border-b border-white/8 last:border-0 last:pb-0">
                      <div className="w-9 h-9 border border-gold-400/20 flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(196,145,26,0.06)' }}>
                        <Icon size={14} className="text-gold-400/60" />
                      </div>
                      <div>
                        <p className="text-white/25 font-body text-2xs tracking-widest uppercase mb-1.5">{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map image */}
              <div className="relative overflow-hidden aspect-video border border-white/10" data-animate data-delay="2">
                <img
                  src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80&auto=format&fit=crop"
                  alt="Melbourne CBD"
                  className="w-full h-full object-cover opacity-40 hover:opacity-55 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-gold-gradient flex items-center justify-center mb-2 animate-[float_3s_ease-in-out_infinite]">
                    <MapPin size={16} className="text-navy-950" />
                  </div>
                  <p className="text-white font-display font-semibold text-sm">R&N Legal</p>
                  <p className="text-white/50 font-body text-xs mt-1">Suite 401, 2 Queen Street</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-2 text-gold-400/70 hover:text-gold-300 font-body text-xs underline transition-colors">
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-8" data-animate="right" data-delay="1">
              <div className="mb-8">
                <p className="section-label text-gold-400/70 mb-4">Consultation Enquiry</p>
                <h2 className="font-display font-light text-white leading-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                  Tell Us About
                  <br />
                  <em style={{
                    background: 'linear-gradient(105deg, #c4911a, #dba828, #f1da93)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic'
                  }}>Your Matter</em>
                </h2>
                <div className="w-14 h-px mt-5" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
                <p className="text-white/40 font-body text-sm leading-relaxed mt-5 max-w-md">
                  Complete the form and we'll be in touch within 1 business day. All information is strictly confidential.
                </p>
              </div>

              {/* Form wrapper */}
              <div className="border border-white/10 p-8 lg:p-10 relative">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, #a37214, #dba828, transparent)' }} />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email disclaimer */}
      <div className="bg-navy-900 border-t border-white/8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/25 font-body text-xs leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-white/35">Email security notice:</strong> Email is not always secure. For time-critical or sensitive matters, please call us. Do not send original documents unless requested. Contacting us does not create a lawyer–client relationship.
          </p>
        </div>
      </div>
    </>
  )
}
