import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag, ArrowRight, Phone
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Services',
  description: 'R&N Legal provides advice, document preparation, negotiation and representation across family violence, family law, wills, conveyancing, immigration, litigation and more.',
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag,
}

const serviceImages: Record<string, string> = {
  'family-violence': 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=900&q=85&auto=format&fit=crop',
  'family-law': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop',
  'wills-estates': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=85&auto=format&fit=crop',
  'conveyancing-property': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&auto=format&fit=crop',
  'immigration-law': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85&auto=format&fit=crop',
  'litigation-disputes': 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=900&q=85&auto=format&fit=crop',
  'disciplinary-regulatory': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop',
  'traffic-offences': 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=900&q=85&auto=format&fit=crop',
  'consumer-law': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85&auto=format&fit=crop',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Practice Areas"
        title="Legal Services"
        italic="For Every Matter"
        description="Advice, document preparation, negotiation and representation across a full range of practice areas. If unsure which applies — contact us for guidance."
        imageUrl="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1600&q=85&auto=format&fit=crop"
      />

      {/* Sticky quick-nav */}
      <nav className="sticky top-28 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {siteConfig.services.map((svc) => (
              <a key={svc.slug} href={`#${svc.slug}`}
                className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/35 hover:text-gold-300/80 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
                {svc.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Intro value props */}
      <section className="py-14 bg-cream-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-200/40">
            {[
              { n: '01', t: 'Clear Scope', b: 'We discuss scope upfront so you know what is included.' },
              { n: '02', t: 'Transparent Fees', b: 'Paid consultations and scoped arrangements based on complexity.' },
              { n: '03', t: 'Honest Assessment', b: 'Realistic advice on prospects, risks and the cost of resolution.' },
            ].map(({ n, t, b }) => (
              <div key={n} className="bg-cream-50 px-8 py-7 group hover:bg-navy-950 transition-colors duration-400">
                <p className="font-display font-light text-navy-900/15 group-hover:text-white/[0.06] text-4xl leading-none mb-4 transition-colors duration-400">{n}</p>
                <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-lg mb-2 transition-colors duration-400">{t}</h3>
                <p className="font-body text-navy-600/55 group-hover:text-white/40 text-sm leading-relaxed transition-colors duration-400">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual service sections */}
      {siteConfig.services.map((svc, i) => {
        const Icon = iconMap[svc.icon] || Scale
        const img = serviceImages[svc.slug]
        const isEven = i % 2 === 0

        return (
          <section key={svc.slug} id={svc.slug}
            className={`py-20 lg:py-28 scroll-mt-36 ${isEven ? 'bg-cream-50' : 'bg-cream-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}`}>
                {/* Content */}
                <div data-animate={isEven ? undefined : 'right'}>
                  {/* Service number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center"
                      style={{ background: 'rgba(196,145,26,0.06)' }}>
                      <Icon size={20} className="text-gold-500/70" />
                    </div>
                    <span className="font-display font-light text-navy-900/20 text-3xl leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="font-display font-semibold text-navy-950 leading-tight mb-3"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
                    {svc.title}
                  </h2>
                  <div className="w-12 h-px mb-6" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

                  <p className="text-navy-600/65 font-body leading-relaxed text-lg mb-8">
                    {svc.description}
                  </p>

                  {/* Points */}
                  <div className="space-y-3 mb-8">
                    {svc.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3 group/pt">
                        <div className="w-5 h-5 border border-gold-400/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:border-gold-400/50 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
                        </div>
                        <p className="text-navy-700/60 font-body text-sm leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-gold">
                      Enquire Now
                      <ArrowRight size={14} />
                    </Link>
                    <a href={`tel:${siteConfig.contact.phone1}`} className="btn-navy">
                      <Phone size={13} />
                      {siteConfig.contact.phone1}
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden" data-animate={isEven ? 'right' : 'left'} data-delay="2">
                  <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
                    <img src={img} alt={svc.shortTitle}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom right, rgba(6,13,26,0.1), rgba(6,13,26,0.3))' }} />
                  </div>
                  {/* Service label badge */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-navy-950/80 backdrop-blur-sm border border-gold-400/20 px-3 py-1.5">
                      <p className="text-gold-300/80 font-body text-xs tracking-widest uppercase">{svc.shortTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </>
  )
}
