// components/sections/JurisdictionSection.tsx

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const courts = [
  {
    num: '01',
    court: 'Magistrates\' Court of Victoria',
    matters: [
      'Family violence intervention orders',
      'Responding to police or private applications',
      'Traffic offences and licence matters',
      'Civil disputes up to $100,000',
      'Committal proceedings',
    ],
    // note: 'The most common forum for urgent and day-to-day legal matters in Victoria.',
    accent: true, // gold treatment — most relevant to Traffic (featured service)
  },
  {
    num: '02',
    court: 'Federal Circuit and Family Court of Australia',
    matters: [
      'Divorce applications',
      'Parenting orders and consent orders',
      'Interim parenting applications',
      'Property settlement (federal jurisdiction)',
    ],
    // note: 'Handles all federal family law matters including parenting and divorce.',
    accent: false,
  },
  {
    num: '03',
    court: 'Victorian Civil and Administrative Tribunal (VCAT)',
    matters: [
      'Consumer disputes and refund claims',
      'Residential tenancy matters',
      'Civil claims (Civil Claims List)',
      'Domestic building disputes',
    ],
    // note: 'A cost-effective tribunal pathway for consumer and civil claims in Victoria.',
    accent: false,
  }
  // {
  //   num: '04',
  //   court: 'Administrative Review Tribunal (ART)',
  //   matters: [
  //     'Migration and visa merits review',
  //     'Visa refusal and cancellation review',
  //     'Review of departmental decisions',
  //   ],
  //   note: 'The primary federal review body for immigration and visa decisions.',
  //   accent: false,
  // },
]

export function JurisdictionSection() {
  return (
    <section className="py-24 lg:py-36 bg-navy-950 relative overflow-hidden">
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 60%, rgba(196,145,26,0.07), transparent 55%)',
        }}
      />
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(196,145,26,0.3), transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end" data-animate>
          <div>
            <div className="section-label text-gold-400/70 mb-5">Jurisdiction &amp; Forums</div>
            <h2
              className="font-display font-light text-white leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Where Your Matter
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  background:
                    'linear-gradient(105deg, #b07f18 0%, #dba828 50%, #c4911a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                May Be Heard
              </em>
            </h2>
            <div
              className="w-10 h-px mt-7"
              style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }}
            />
          </div>
          <div data-animate data-delay="2">
            <p className="font-body text-white/45 leading-[1.85] text-[0.975rem] max-w-md">
              Legal matters in Victoria are heard across different courts and tribunals depending on
              the nature of the dispute, the jurisdiction involved and the relief sought. Understanding
              the correct forum is an essential part of sound legal strategy.
            </p>
          </div>
        </div>

        {/* Court cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {courts.map((c, i) => (
            <div
              key={c.num}
              className={`relative group p-8 lg:p-10 transition-colors duration-500 overflow-hidden ${
                c.accent
                  ? 'bg-navy-900 hover:bg-navy-800'
                  : 'bg-navy-950 hover:bg-navy-900'
              }`}
              data-animate
              data-delay={String(i + 1)}
            >
              {/* Accent: extra gold glow for Magistrates' Court (Traffic featured) */}
              {c.accent && (
                <>
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, #c4911a80, #dba828aa, #c4911a80)',
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at 80% 20%, rgba(196,145,26,0.08), transparent 60%)',
                    }}
                  />
                  {/* Featured pill */}
                  <div className="absolute top-6 right-6">
                    <span
                      className="inline-flex items-center px-2.5 py-1 text-[9px] font-bold tracking-[0.14em] uppercase leading-none"
                      style={{
                        background:
                          'linear-gradient(105deg, #b07f18 0%, #dba828 55%, #c4911a 100%)',
                        color: '#0a1628',
                        clipPath:
                          'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
                      }}
                    >
                      Primary Forum
                    </span>
                  </div>
                </>
              )}

              {/* Number */}
              <span
                className={`font-display font-light text-5xl leading-none select-none block mb-6 transition-colors duration-500 ${
                  c.accent
                    ? 'text-gold-400/20 group-hover:text-gold-400/30'
                    : 'text-white/8 group-hover:text-white/12'
                }`}
              >
                {c.num}
              </span>

              {/* Court name */}
              <h3
                className={`font-display font-semibold leading-tight mb-5 transition-colors duration-500 ${
                  c.accent ? 'text-white' : 'text-white/85 group-hover:text-white'
                }`}
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
              >
                {c.court}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-px mb-5"
                style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }}
              />

              {/* Matters list */}
              <ul className="space-y-2.5 mb-6">
                {c.matters.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <div
                      className={`w-1 h-1 rounded-full shrink-0 mt-[7px] ${
                        c.accent ? 'bg-gold-400/70' : 'bg-gold-400/40'
                      }`}
                    />
                    <span
                      className={`font-body text-sm leading-relaxed transition-colors duration-500 ${
                        c.accent
                          ? 'text-white/70 group-hover:text-white/80'
                          : 'text-white/45 group-hover:text-white/60'
                      }`}
                    >
                      {m}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {/* <p
                className={`font-body text-xs leading-relaxed border-t pt-4 transition-colors duration-500 ${
                  c.accent
                    ? 'text-gold-400/50 border-gold-400/15'
                    : 'text-white/25 border-white/8 group-hover:text-white/35'
                }`}
              >
                {c.note}
              </p> */}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-gold-400/10 px-7 py-5"
          data-animate
        >
          <p className="font-body text-white/35 text-sm leading-relaxed max-w-2xl">
            <span className="text-gold-400/60 font-medium">Please note —</span> The appropriate
            forum depends on the specific facts of your matter. Some cases may involve multiple
            jurisdictions or require transfer between courts. We assess the correct pathway as part
            of our initial advice.
          </p>
          <Link
            href="/contact"
            className="shrink-0 group inline-flex items-center gap-2 text-xs font-medium tracking-wide transition-all duration-300"
            style={{ color: '#dba828' }}
          >
            Discuss your matter
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}