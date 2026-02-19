
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'R&N Legal — a Melbourne-based boutique practice providing structured and professional legal services. Learn about our team.',
}

const values = [
  { num: '01', title: 'Integrity & Confidentiality', body: 'Every matter is handled with discretion and to the highest ethical standards under the Legal Profession Uniform Law (Victoria).' },
  { num: '02', title: 'Practical, Outcome-Focused', body: 'We give realistic assessments — not what you want to hear, but what you need to know to make well-informed decisions.' },
  { num: '03', title: 'Respectful & Culturally Aware', body: 'We work with clients from diverse backgrounds and understand that context and culture matter in every matter we handle.' },
  { num: '04', title: 'Professional Standards', body: 'All services delivered in compliance with applicable professional conduct rules and the obligations of our practising certificates.' },
]

const approach = [
  { label: 'Straight Talk', body: 'We explain what the law allows, the realistic risks, and the practical next steps — in plain English, no jargon.' },
  { label: 'Preparation Matters', body: 'We prioritise evidence, chronology and strategic positioning. A well-prepared matter is a better-positioned matter.' },
  { label: 'Client-First Communication', body: 'Prompt updates and clear expectations at every stage. You should always know where your matter stands.' },
]

const team = [
  {
    initials: 'RKR',
    name: 'Rajat Kanti Roy',
    role: 'Director',
    admitted: '2013 · Victoria',
    experience: '10+ Years',
    jurisdiction: 'Victorian Courts & Tribunals',
    // languages: 'English · Bengali',
    bio: [
      'Rajat Kanti Roy has practised law in Victoria since 2013 and brings extensive experience in litigation, dispute resolution and court-based proceedings.',
      'His experience includes civil litigation, contractual disputes, property disputes, regulatory and traffic matters, as well as family law proceedings including intervention orders and parenting matters.',
      'Rajat adopts a methodical and detail-driven approach to legal strategy, ensuring procedural compliance and careful evidentiary preparation in all matters.',
    ],
  },
  {
    initials: 'AN',
    name: 'Amit Narwal',
    role: 'Solicitor',
    admitted: 'Supreme Court of Victoria',
    experience: 'Family, Migration & Litigation',
    jurisdiction: 'Victorian Courts & Tribunals',
    // languages: 'English',
    bio: [
      'Amit Narwal is a practising solicitor admitted to the Supreme Court of Victoria. He provides structured legal advice across family law, migration law, litigation support and regulatory matters.',
      'Amit assists clients with intervention order proceedings, parenting matters, visa and tribunal pathways, civil disputes and related advisory work.',
      'He is committed to delivering practical advice and maintaining professional standards in every client interaction.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About R&N Legal"
        title="A Practice Built on"
        italic="Clarity & Care"
        description="A Melbourne-based boutique practice providing structured and professional legal services across litigation, family law, migration and property matters."
        imageUrl="/images/about-hero.jpg"
      />

      {/* ── Mission ── */}
      <section className="py-24 lg:py-36 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left — stats */}
            <div className="lg:col-span-3 lg:sticky lg:top-32" data-animate>
              <div className="section-label mb-4">Our Mission</div>
              {/* <div className="w-12 h-px mb-10" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} /> */}
              <div className="border-t border-navy-200/40">
                {[
                  { value: '10+',    label: 'Years of practice' },
                  { value: '2013',   label: 'Established in Victoria' },
                  { value: '9+',     label: 'Areas of law' },
                  { value: '1-on-1', label: 'Direct solicitor access' },
                ].map(({ value, label }) => (
                  <div key={label} className="py-5 border-b border-navy-200/40">
                    <div
                      className="font-display font-light leading-none mb-1"
                      style={{
                        fontSize: '2rem',
                        background: 'linear-gradient(105deg, #a37214, #dba828)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {value}
                    </div>
                    <div className="font-body text-navy-600/50" style={{ fontSize: '0.72rem', letterSpacing: '0.06em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-8">
                <span className="block rounded-full shrink-0" style={{ width: 5, height: 5, background: '#c4911a', opacity: 0.5 }} />
                <span className="font-body text-navy-600/40" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Melbourne, Victoria
                </span>
              </div>
            </div>

            {/* Right — mission copy */}
            <div className="lg:col-span-9">
              <h2
                className="font-display font-light text-navy-950 leading-[1.06] mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                data-animate data-delay="1"
              >
                Structured Legal Services.
                <em
                  className="font-light"
                  style={{
                    background: 'linear-gradient(105deg, #a37214, #dba828)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontStyle: 'italic',
                  }}
                >
                  {' '}Disciplined Representation.
                </em>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-animate data-delay="2">
                <p className="text-navy-600/65 font-body leading-relaxed">
                  R&amp;N Legal is a Melbourne-based boutique practice providing structured and professional legal services across a range of practice areas. We focus on careful preparation, strategic advice and disciplined representation.
                </p>
                <p className="text-navy-600/65 font-body leading-relaxed">
                  We prioritise preparation, procedural compliance and clear communication — ensuring every client understands where they stand and how best to proceed with confidence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(196,145,26,0.06), transparent 65%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate>
              <div className="section-label text-gold-400/70 mb-6">Our Approach</div>
              <h2 className="font-display font-light text-white leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Three Principles
                <br />
                That Guide Every Matter
              </h2>
              <div className="w-12 h-px mt-6 mb-8" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
              {approach.map((item, i) => (
                <div key={item.label} className="border-t border-white/8 py-5 first:border-t-0 group hover:border-gold-400/20 transition-colors duration-300" data-animate data-delay={String(i + 1)}>
                  <div className="flex items-start gap-5">
                    <span className="text-white/40 font-display font-light text-3xl leading-none group-hover:text-gold-400/20 transition-colors duration-300 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white text-xl mb-2">{item.label}</h3>
                      <p className="text-white/40 font-body text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative" data-animate="right" data-delay="2">
              <div className="aspect-[4/5] overflow-hidden">
              <Image 
                src="/images/director-placeholder.jpg"
                alt="Professional solicitor"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                width={400}
                height={500}
              />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 50%, rgba(6,13,26,0.5))' }} />
              </div>
              <div className="absolute bottom-8 left-0 right-0 px-6">
                <div className="bg-navy-950/90 backdrop-blur-sm border border-gold-400/20 p-6">
                  <p className="font-display font-light text-white/80 text-lg italic leading-snug mb-3">
                    "Clear advice, careful preparation and honest communication make the biggest difference."
                  </p>
                  <p className="text-gold-400/60 font-body text-xs tracking-widest uppercase">
                    — Rajat Kanti Roy, Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team / Leadership ── */}
      <section className="py-24 lg:py-36 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-16" data-animate>
            <div className="section-label mb-4">Leadership</div>
            {/* <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} /> */}
          </div>

          {/* Two solicitors */}
          <div className="space-y-20">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
                data-animate
                data-delay={String(idx + 1)}
              >
                {/* Profile card — left */}
                <div className="lg:col-span-4">
                  <h2
                    className="font-display font-light text-navy-950 leading-tight mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
                  >
                    {member.role === 'Director' ? (
                      <>Director &amp;<br /><em style={{ background: 'linear-gradient(105deg, #a37214, #dba828)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Principal Solicitor</em></>
                    ) : (
                      <em style={{ background: 'linear-gradient(105deg, #a37214, #dba828)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Solicitor</em>
                    )}
                  </h2>
                  <div className="bg-navy-950 p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #a37214, #dba828, #f1da93, #a37214)' }} />
                    <div className="w-14 h-14 flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #a37214, #dba828)' }}>
                      <span className="font-display font-semibold text-navy-950 text-lg">{member.initials}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white text-2xl mb-1">{member.name}</h3>
                    <p className="text-gold-400/60 font-body text-xs tracking-widest uppercase mb-5">{member.role}</p>
                    <div className="space-y-2 border-t border-white/8 pt-4">
                      {[
                        { l: 'Admitted',     v: member.admitted },
                        { l: 'Experience',   v: member.experience },
                        { l: 'Jurisdiction', v: member.jurisdiction },
                        // { l: 'Languages',    v: member.languages },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-xs font-body">
                          <span className="text-white/50">{l}</span>
                          <span className="text-white/70 font-medium text-right max-w-[55%]">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio — right */}
                <div className="lg:col-span-8 space-y-5">
                  {member.bio.map((para, i) => (
                    <p key={i} className="text-navy-600/65 font-body leading-relaxed text-lg border-l-2 border-transparent hover:border-gold-400/30 pl-5 hover:pl-6 transition-all duration-300">
                      {para}
                    </p>
                  ))}
                  {idx === team.length - 1 && (
                    <div className="pt-4">
                      <Link href="/contact" className="btn-gold">
                        Book a Consultation
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <div className="section-label justify-center mb-5">Our Values</div>
            <h2 className="font-display font-light text-navy-950" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-200/40">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="bg-cream-100 p-10 group hover:bg-navy-950 transition-colors duration-500 relative overflow-hidden"
                data-animate data-delay={String((i % 2) + 1)}
              >
                <div
                  className="absolute -bottom-4 -right-2 font-display font-light select-none pointer-events-none text-navy-900/[0.04] group-hover:text-white/[0.03] transition-colors duration-500"
                  style={{ fontSize: '9rem', lineHeight: 1 }}
                >
                  {v.num}
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-px mb-6" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
                  <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-2xl leading-tight mb-3 transition-colors duration-500">{v.title}</h3>
                  <p className="text-navy-600/55 group-hover:text-white/45 font-body text-sm leading-relaxed transition-colors duration-500">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}