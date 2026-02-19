import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy-950">
      {/* Hero image with Ken Burns */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-banner.jpg"
          width={1200}
          height={800}
          alt="Melbourne legal practice"
          className="w-full h-full object-cover object-center animate-kenburns"
          style={{ animationFillMode: 'forwards' }}
        />
      </div>

      {/* Vertical lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex">
          {/* Left vertical rule */}
          <div className="hidden lg:block absolute left-16 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(219,168,40,0.12) 20%, rgba(219,168,40,0.12) 80%, transparent)' }} />
          {/* Right vertical rule */}
          <div className="hidden lg:block absolute right-16 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(219,168,40,0.12) 20%, rgba(219,168,40,0.12) 80%, transparent)' }} />
        </div>
      </div>

      {/* Floating badge — top right */}
      <div className="absolute top-32 right-6 sm:right-12 lg:right-24 hidden md:flex flex-col items-end gap-2"
        style={{ animation: 'reveal-right 1s 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>
        <div className="border border-gold-400/25 bg-navy-950/60 backdrop-blur-sm px-4 py-3">
          <p className="font-body text-2xs tracking-[0.22em] text-gold-400/60 uppercase">Est. Practice</p>
          <p className="font-display text-white/80 text-2xl font-light leading-none mt-1">2013</p>
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-gold-400/30 to-transparent self-end" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          {/* <div className="section-label text-gold-400/70 mb-8"
            style={{ animation: 'reveal-up 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}>
            Boutique Law Practice · Melbourne, Victoria
          </div> */}

          {/* Headline — editorial split */}
          <div style={{ animation: 'reveal-up 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both' }}>
            <h1 className="font-display font-light text-white leading-[1.02]"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}>
              Structured Legal
            </h1>
            <h1 className="font-display font-light leading-[1.02]"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
                background: 'linear-gradient(105deg, #c4911a 0%, #dba828 35%, #f1da93 55%, #dba828 70%, #a37214 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              <em>Advice.</em>
            </h1>
            <h1 className="font-display font-light text-white/70 leading-[1.02]"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}>
              Disciplined Representation.
            </h1>
          </div>

          {/* Gold rule */}
          <div className="w-16 h-px mt-8 mb-8"
            style={{
              animation: 'line-expand 1s 0.5s cubic-bezier(0.16,1,0.3,1) both',
              background: 'linear-gradient(90deg, #c4911a, #dba828)',
              transformOrigin: 'left',
            }} />

          {/* Description */}
          <p className="text-white/50 font-body text-xl leading-relaxed"
            style={{ animation: 'reveal-up 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
            {/* R&N Legal provides clear, practical legal advice and representation across family law, migration, property and dispute matters. */}

            R&N Legal provides professional legal advice and representation across litigation, family law, migration and property-related matters. We prioritise preparation, procedural compliance and clear communication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10"
            style={{ animation: 'reveal-up 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>
            <Link href="/contact" className="btn-gold">
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link href={`tel:${siteConfig.contact.phone1}`} className="btn-outline">
              <Phone size={15} />
              {siteConfig.contact.phone2}
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
