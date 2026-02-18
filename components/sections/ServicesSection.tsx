import Link from 'next/link'
import {
  Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag, ArrowRight
} from 'lucide-react'
import { siteConfig } from '@/lib/config'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag,
}



export function ServicesSection() {
  return (
    <section className="py-24 lg:py-36 bg-cream-50 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right top, rgba(196,145,26,0.04), transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div data-animate>
            <div className="section-label mb-5">Practice Areas</div>
            <h2 className="font-display font-light text-navy-950"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.05 }}>
              How We Can
              <br />
              <em className="text-gold-gradient" style={{
                background: 'linear-gradient(105deg, #a37214, #dba828, #a37214)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>Help You</em>
            </h2>
          </div>
          <div data-animate data-delay="2" className="lg:text-right">
            <p className="text-navy-900/50 font-body leading-relaxed max-w-sm lg:ml-auto">
              R&N Legal provides advice, document preparation, negotiation and representation across these areas.
              If unsure which applies — contact us.
            </p>
            <Link href="/services"
              className="inline-flex items-center gap-2 mt-5 font-body text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors group">
              View All Services
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Services grid — editorial layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-100/50">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Scale
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative bg-cream-50 p-8 hover:bg-navy-950 transition-colors duration-500 overflow-hidden"
                data-animate
                data-delay={String(Math.min((i % 3) + 1, 3))}
              >
                {/* Hover image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0" style={{ background: '#132247' }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 border border-navy-200 group-hover:border-gold-400/30 flex items-center justify-center transition-colors duration-500">
                      <Icon size={20} className="text-navy-400 group-hover:text-gold-400 transition-colors duration-500" />
                    </div>
                    <span className="font-display font-light text-navy-900/15 group-hover:text-gold-400/20 text-5xl leading-none transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-xl lg:text-2xl leading-snug mb-3 transition-colors duration-500">
                    {service.shortTitle}
                  </h3>
                  <p className="font-body text-navy-600/60 group-hover:text-white/50 text-md leading-relaxed line-clamp-2 transition-colors duration-500">
                    {service.description.split('.')[0]}.
                  </p>

                  {/* Arrow reveal */}
                  <div className="flex items-center gap-2 mt-6 font-body text-xs font-semibold tracking-widest uppercase text-gold-500 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>

                {/* Bottom gold border reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg, #a37214, #dba828)' }} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

