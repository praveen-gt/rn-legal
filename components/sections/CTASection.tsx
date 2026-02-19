import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/building-image.jpg"
          alt="Melbourne CBD"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(6,13,26,0.97) 0%, rgba(11,21,41,0.92) 60%, rgba(19,34,71,0.88) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div data-animate>
            <div className="section-label text-gold-400/70 mb-6">Get in Touch</div>
            <h2 className="font-display font-light text-white"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.05 }}>
              Discuss Your
              <br />
              <em style={{
                background: 'linear-gradient(105deg, #c4911a, #dba828, #f1da93, #c4911a)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'normal',
              }}>
                Matter Today
              </em>
            </h2>
            <div className="w-14 h-px mt-7 mb-7" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
            <p className="text-white/45 font-body leading-relaxed max-w-md">
              We offer paid consultations and scoped fee arrangements depending on urgency and complexity. Contact us for a clear estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact" className="btn-gold">
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
              <a href={`tel:${siteConfig.contact.phone1}`} className="btn-outline">
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>

          {/* Right: contact card */}
          <div data-animate data-delay="2">
            <div className="border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10">
              {/* Gold top accent */}
              <div className="h-[2px] w-full -mt-8 -mx-8 lg:-mx-10 mb-8 w-[calc(100%+64px)] lg:w-[calc(100%+80px)]"
                style={{ background: 'linear-gradient(90deg, transparent, #dba828, transparent)' }} />

              <p className="font-body text-2xs tracking-[0.22em] uppercase text-gold-400/60 mb-6">Contact Details</p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    content: (
                      <div className="space-y-0.5">
                        <a href={`tel:${siteConfig.contact.phone1}`}
                          className="block text-white font-body font-medium hover:text-gold-300 transition-colors">
                          {siteConfig.contact.phone1}
                        </a>
                        <a href={`tel:${siteConfig.contact.phone2}`}
                          className="block text-white/40 font-body text-sm hover:text-gold-300/70 transition-colors">
                          {siteConfig.contact.phone2}
                        </a>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    content: (
                      <a href={`mailto:${siteConfig.contact.email}`}
                        className="text-white font-body font-medium hover:text-gold-300 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    ),
                  },
                  {
                    icon: MapPin,
                    label: 'Office',
                    content: (
                      <p className="text-white/70 font-body text-sm leading-relaxed">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.suburb}
                      </p>
                    ),
                  },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4 pb-6 border-b border-white/8 last:border-0 last:pb-0">
                    <div className="w-9 h-9 border border-gold-400/20 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-gold-400/60" />
                    </div>
                    <div>
                      <p className="text-white/25 font-body text-2xs tracking-widest uppercase mb-1.5">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/8">
                <p className="text-white/25 font-body text-xs">
                  {siteConfig.contact.hours} · {siteConfig.contact.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
