// components/sections/TrafficSpotlightSection.tsx

import Link from 'next/link'
import { Car, ArrowRight, Phone, AlertTriangle } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const consequences = [
  { label: 'Licence suspension',   body: 'Demerit points, immediate suspensions and licence cancellations.' },
  { label: 'Employment impact',    body: 'Many roles require a valid licence. A conviction can affect your job.' },
  { label: 'Insurance exposure',   body: 'Traffic convictions can materially affect your premiums and cover.' },
  { label: 'Criminal record',      body: 'Some traffic charges carry criminal consequences, not just fines.' },
]

const weHandle = [
  'Traffic charges and infringements',
  'Plea preparation and penalty advice',
  "Magistrates' Court representation",
  'Licence-impacting matters',
  'Demerit point and suspension advice',
  'Related transport and road law issues',
]

export function TrafficSpotlightSection() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">

      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(196,145,26,0.5), rgba(219,168,40,0.7), rgba(196,145,26,0.5), transparent)',
        }}
      />
      {/* Bottom gold rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(196,145,26,0.3), rgba(219,168,40,0.5), rgba(196,145,26,0.3), transparent)',
        }}
      />
      {/* Radial glow — right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 90% 40%, rgba(196,145,26,0.10), transparent 55%)',
        }}
      />
      {/* Radial glow — left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 10% 60%, rgba(196,145,26,0.05), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14" data-animate>
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Angled badge */}
              <span
                className="inline-flex items-center px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] uppercase leading-none"
                style={{
                  background:
                    'linear-gradient(105deg, #b07f18 0%, #dba828 55%, #c4911a 100%)',
                  color: '#0a1628',
                  clipPath:
                    'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                }}
              >
                Featured Service
              </span>
              <div
                className="w-8 h-8 border border-gold-400/35 flex items-center justify-center"
                style={{ background: 'rgba(196,145,26,0.12)' }}
              >
                <Car size={14} className="text-gold-400" />
              </div>
            </div>

            <h2
              className="font-display font-light text-white leading-[1.06]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Traffic Offences
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
                Victoria
              </em>
            </h2>
            <div
              className="w-10 h-px mt-6"
              style={{
                background: 'linear-gradient(90deg, #c4911a, #dba828)',
                boxShadow: '0 0 8px rgba(219,168,40,0.35)',
              }}
            />
          </div>

          {/* Right — urgency callout */}
          <div
            className="lg:max-w-sm flex items-start gap-3 px-5 py-4"
            style={{ border: '1px solid rgba(196,145,26,0.20)', background: 'rgba(196,145,26,0.06)' }}
          >
            <AlertTriangle size={15} className="text-gold-400/70 shrink-0 mt-0.5" />
            <p className="font-body text-white/55 text-sm leading-relaxed">
              <span className="text-gold-400/80 font-medium">Time-sensitive —</span> Court dates and
              licence consequences can move quickly. Early advice shapes what outcomes remain open.
            </p>
          </div>
        </div>

        {/* ── Main content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-px bg-white/5">

          {/* Left — consequences + description */}
          <div className="bg-navy-950 p-8 lg:p-10">
            <p className="font-body text-white/55 leading-[1.85] text-[0.975rem] mb-8 max-w-prose">
              Traffic matters in Victoria can have consequences for licence status, employment,
              insurance, finances and, in some cases, criminal exposure. The right approach depends
              on the allegation, the available evidence, the client's history and what outcome is
              realistically open. These matters are often underestimated — we treat them with the
              seriousness they deserve.
            </p>

            {/* Consequence cards — 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {consequences.map(({ label, body }) => (
                <div
                  key={label}
                  className="bg-navy-950 px-6 py-5 group hover:bg-navy-900 transition-colors duration-300"
                >
                  <div
                    className="w-5 h-px mb-3"
                    style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }}
                  />
                  <p className="font-display font-semibold text-white/90 text-sm leading-snug mb-1.5">
                    {label}
                  </p>
                  <p className="font-body text-white/40 text-xs leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — we handle + CTA */}
          <div
            className="flex flex-col justify-between p-8 lg:p-10"
            style={{ background: 'rgba(196,145,26,0.05)', borderLeft: '1px solid rgba(196,145,26,0.12)' }}
          >
            <div>
              <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-gold-400/70 mb-5">
                We assist with
              </p>
              <ul className="space-y-3 mb-8">
                {weHandle.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 border border-gold-400/35 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1 h-1 rounded-full bg-gold-400/70" />
                    </div>
                    <span className="font-body text-white/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              {/* <Link
                href="/services#traffic-offences"
                className="btn-gold w-full justify-center"
              >
                Full Service Details <ArrowRight size={13} />
              </Link> */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-body text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300"
              >
                Make an Enquiry
              </Link>
              <Link
                href={`tel:${siteConfig.contact.phone1}`}
                className="flex items-center justify-center gap-2 font-body text-xs text-gold-400/60 hover:text-gold-400 transition-colors duration-300 pt-1"
              >
                <Phone size={11} /> {siteConfig.contact.phone1}
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom — court note ── */}
        <div
          className="mt-8 flex items-start gap-3 px-6 py-4 border border-white/6"
        >
          <div className="w-1 h-1 rounded-full bg-gold-400/40 shrink-0 mt-2" />
          <p className="font-body text-white/30 text-xs leading-relaxed">
            <span className="text-gold-400/55 font-medium">Forum —</span> Traffic offence matters in
            Victoria are generally heard in the{' '}
            <span className="text-white/45">Magistrates' Court of Victoria</span>. Consequences vary
            by charge, prior history and individual circumstances. Contact us for advice specific to
            your situation.
          </p>
        </div>

      </div>
    </section>
  )
}