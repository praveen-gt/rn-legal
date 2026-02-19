import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag, ArrowRight, Phone
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services',
  description: 'R&N Legal provides legal advice, document preparation and representation across family violence, family law, litigation, immigration, property and more.',
}

const mainServices = [
  {
    slug: 'family-violence',
    icon: Shield,
    num: '01',
    title: 'Family Violence — Intervention Orders',
    shortTitle: 'Intervention Orders',
    description:
      'We assist applicants and respondents in intervention order proceedings, from the initial application through to contested hearings. Every matter is approached with careful risk assessment and thorough evidence preparation.',
    points: [
      'Applications, responses and variations',
      'Contested hearings',
      'Risk assessment and evidence preparation',
    ],
    image: '/images/services/family-violence-image.jpg',
  },
  {
    slug: 'family-law',
    icon: Users,
    num: '02',
    title: 'Family Law — Divorce and Parenting',
    shortTitle: 'Family Law',
    description:
      'We guide clients through divorce applications and parenting arrangements with clarity and care, ensuring all court documentation is accurately prepared and filed in accordance with applicable procedural requirements.',
    points: [
      'Divorce applications',
      'Parenting arrangements and parenting orders',
      'Affidavits and court documentation',
    ],
    image: '/images/services/family-law.jpg',
  },
  {
    slug: 'litigation-disputes',
    icon: Scale,
    num: '03',
    title: 'Litigation and Civil Disputes',
    shortTitle: 'Litigation',
    description:
      'R&N Legal represents clients in civil disputes across Victorian courts and tribunals. We prioritise strategic preparation, clear pleadings and disciplined representation focused on resolution.',
    points: [
      'Contract disputes',
      'Debt recovery',
      'Court pleadings and submissions',
    ],
    image: '/images/services/litigation-dispute.jpg',
  },
  {
    slug: 'immigration-law',
    icon: Globe,
    num: '04',
    title: 'Immigration — Tribunal and Court Pathways',
    shortTitle: 'Immigration',
    description:
      'We provide structured advice on visa strategy and merits review, assisting clients to understand their options and navigate the Administrative Review Tribunal and court pathways where applicable.',
    points: [
      'Visa strategy and preparation',
      'Merits review matters',
      'Court pathway guidance where applicable',
    ],
    image: '/images/services/immigration.jpg',
  },
  {
    slug: 'conveyancing-property',
    icon: Home,
    num: '05',
    title: 'Property Law and Conveyancing',
    shortTitle: 'Property',
    description:
      'From contract review through to settlement, we assist buyers, sellers and landlords with property transactions and disputes, including caveat matters requiring prompt legal action.',
    points: [
      'Contract review',
      'Settlement support',
      'Property disputes and caveats',
    ],
    image: '/images/services/property-law.jpg',
  }
]

const otherAreas = [
  { icon: FileText,    label: 'Wills & Estate Planning',   body: 'Preparation of basic wills and estate planning documentation.' },
  { icon: Briefcase,  label: 'Disciplinary & Regulatory', body: 'Representation in professional disciplinary and regulatory proceedings.' },
  { icon: Car,        label: 'Traffic Offences',           body: 'Defence and advice in traffic and regulatory offence matters.' },
  { icon: ShoppingBag, label: 'Consumer Law',             body: 'Assistance with consumer law disputes and related claims.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Practice Areas"
        title="Legal Services"
        italic="For Every Matter"
        description="Advice, document preparation, negotiation and representation across a full range of practice areas. If unsure which applies — contact us for guidance."
        imageUrl="/images/services-hero.jpg"
      />

      {/* ── Sticky quick-nav ── */}
      <nav className="sticky top-27 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {mainServices.map((svc) => (
              <a key={svc.slug} href={`#${svc.slug}`}
                className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
                {svc.shortTitle}
              </a>
            ))}
            <a href="#other-areas"
              className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
              Other Areas
            </a>
          </div>
        </div>
      </nav>

      {/* ── Intro value props ── */}
      <section className="py-14 bg-cream-50 border-b border-navy-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-200/30">
            {[
              { n: '01', t: 'Clear Scope',       b: 'We discuss scope upfront so you know exactly what is included before we proceed.' },
              { n: '02', t: 'Transparent Fees',  b: 'Fees are discussed following initial consultation and depend on complexity and scope.' },
              { n: '03', t: 'Honest Assessment', b: 'Realistic advice on prospects, risks and the likely cost of resolution — no false promises.' },
            ].map(({ n, t, b }) => (
              <div key={n} className="bg-cream-50 px-8 py-8 group hover:bg-navy-950 transition-colors duration-300">
                <p className="font-display font-light text-navy-900/12 group-hover:text-white/5 text-5xl leading-none mb-4 transition-colors duration-300">{n}</p>
                <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">{t}</h3>
                <p className="font-body text-navy-700/60 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main service sections ── */}
      {mainServices.map((svc, i) => {
        const Icon = svc.icon
        const isEven = i % 2 === 0

        return (
          <section key={svc.slug} id={svc.slug}
            className={`py-20 lg:py-28 scroll-mt-36 ${isEven ? 'bg-white' : 'bg-cream-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch ${!isEven ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}`}>

                {/* Content */}
                <div className="flex flex-col justify-center" data-animate={isEven ? undefined : 'right'}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 border border-gold-400/25 flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(196,145,26,0.07)' }}>
                      <Icon size={18} className="text-gold-500/80" />
                    </div>
                    <span className="font-display font-light text-navy-900/18 text-3xl leading-none select-none">
                      {svc.num}
                    </span>
                  </div>

                  <h2 className="font-display font-semibold text-navy-950 leading-tight mb-4"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.6rem)' }}>
                    {svc.title}
                  </h2>
                  <div className="w-10 h-px mb-7" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

                  <p className="text-navy-800/75 font-body leading-[1.85] text-[1rem] mb-8 max-w-prose">
                    {svc.description}
                  </p>

                  <div className="space-y-3.5 mb-10">
                    {svc.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3.5 group/pt">
                        <div className="w-5 h-5 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:border-gold-400/60 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500/70" />
                        </div>
                        <p className="text-navy-800/80 font-body text-[0.94rem] leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-gold">
                      Enquire Now <ArrowRight size={14} />
                    </Link>
                    <a href={`tel:${siteConfig.contact.phone1}`} className="btn-navy">
                      <Phone size={13} /> {siteConfig.contact.phone1}
                    </a>
                  </div>
                </div>

                {/* ── SVG Visual panel — replaces stock photo ── */}
                <div className="relative min-h-[380px] lg:min-h-0" data-animate={isEven ? 'right' : 'left'} data-delay="2">
                  {/* Thin gold border frame */}
                  <div className="absolute inset-0 border border-gold-400/10 pointer-events-none z-10" />
                  {/* Top-left corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none"
                    style={{ borderTop: '1.5px solid rgba(196,145,26,0.45)', borderLeft: '1.5px solid rgba(196,145,26,0.45)' }} />
                  {/* Bottom-right corner accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 z-10 pointer-events-none"
                    style={{ borderBottom: '1.5px solid rgba(196,145,26,0.45)', borderRight: '1.5px solid rgba(196,145,26,0.45)' }} />
                  {/* The visual itself — fills full height */}
                  <div className="absolute inset-0">
                    {/* {visualPanels[i]} */}
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      width={500} height={600}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>
        )
      })}

      {/* ── Other Areas ── */}
      <section id="other-areas" className="py-20 lg:py-28 scroll-mt-36 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(196,145,26,0.07), transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14" data-animate>
            <div className="section-label text-gold-400/70 mb-4">Additional Practice Areas</div>
            <h2 className="font-display font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Other Areas
              <em className="font-light" style={{
                fontStyle: 'italic',
                background: 'linear-gradient(105deg, #b07f18 0%, #dba828 50%, #c4911a 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                marginLeft: '0.3em',
              }}>We Cover</em>
            </h2>
            <div className="w-10 h-px mt-6" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {otherAreas.map(({ icon: Icon, label, body }, i) => (
              <div key={label}
                className="bg-navy-950 px-8 py-8 group hover:bg-navy-900 transition-colors duration-300 border border-white/5 hover:border-gold-400/15"
                data-animate data-delay={String(i + 1)}>
                <div className="w-10 h-10 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:border-gold-400/40 transition-colors duration-300"
                  style={{ background: 'rgba(196,145,26,0.07)' }}>
                  <Icon size={16} className="text-gold-400/70 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg leading-tight mb-3">{label}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 border border-gold-400/15 px-7 py-5" data-animate>
            <div className="w-1 h-1 rounded-full bg-gold-400/50 shrink-0 mt-2" />
            <p className="font-body text-white/50 text-sm leading-relaxed">
              <span className="text-gold-400/70 font-medium">Fees</span> — Fees are discussed following initial consultation and depend on the complexity and scope of the matter.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}