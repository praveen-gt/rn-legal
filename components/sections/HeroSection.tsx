import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy-950">
      {/* Hero image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85&auto=format&fit=crop"
          alt="Melbourne legal practice"
          className="w-full h-full object-cover object-center animate-kenburns"
          style={{ animationFillMode: 'forwards' }}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(6,13,26,0.88) 0%, rgba(6,13,26,0.55) 50%, rgba(6,13,26,0.75) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(6,13,26,1) 0%, rgba(6,13,26,0.0) 50%)'
        }} />
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
          <div className="section-label text-gold-400/70 mb-8"
            style={{ animation: 'reveal-up 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}>
            Boutique Law Practice · Melbourne, Victoria
          </div>

          {/* Headline — editorial split */}
          <div style={{ animation: 'reveal-up 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both' }}>
            <h1 className="font-display font-light text-white leading-[1.02]"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 7.5rem)' }}>
              Clear Legal
            </h1>
            <h1 className="font-display font-light leading-[1.02]"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
                background: 'linear-gradient(105deg, #c4911a 0%, #dba828 35%, #f1da93 55%, #dba828 70%, #a37214 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              <em>Guidance.</em>
            </h1>
            <h1 className="font-display font-light text-white/70 leading-[1.02]"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 7.5rem)' }}>
              Real Outcomes.
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
          <p className="text-white/50 font-body text-xl leading-relaxed max-w-xl"
            style={{ animation: 'reveal-up 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
            R&N Legal provides clear, practical legal advice and representation across family law, migration, property and dispute matters.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10"
            style={{ animation: 'reveal-up 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>
            <Link href="/contact" className="btn-gold">
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.contact.phone1}`} className="btn-outline">
              <Phone size={15} />
              {siteConfig.contact.phone1}
            </a>
          </div>
        </div>

        {/* Bottom bar — stats + address */}
        {/* <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ animation: 'reveal-up 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}>
          <div className="flex items-center gap-8">
            {[
              { num: '10+', label: 'Years in Practice' },
              { num: '9', label: 'Practice Areas' },
              { num: 'VIC', label: 'Court Admission' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-light text-gold-300 text-3xl leading-none">{stat.num}</p>
                <p className="font-body text-white/30 text-xs tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/30 font-body text-xs">
            <MapPin size={12} className="text-gold-500/50" />
            {siteConfig.contact.address}, Melbourne VIC 3000
          </div>
        </div> */}
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        style={{ animation: 'fade-in 1s 1.2s both' }}>
        <span className="font-body text-2xs tracking-[0.25em] text-white/25 uppercase">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden bg-white/10">
          <div className="absolute inset-x-0 top-0 h-6 bg-gold-400/60 animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </div> */}
    </section>
  )
}
