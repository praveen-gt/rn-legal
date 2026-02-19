import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Split background */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-navy-950" />
      <div className="absolute inset-y-0 right-0 w-0 lg:w-1/2 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[70vh]">
          {/* Left: dark panel with content */}
          <div className="relative z-10 py-12 lg:py-0 lg:pr-16 flex flex-col justify-center">
            <div data-animate>
              <div className="section-label text-gold-400/70 mb-6">About R&N Legal</div>
              <h2 className="font-display font-light text-white leading-[1.06]"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}>
                A Practice Built
                <br />
                on{' '}
                <em style={{
                  background: 'linear-gradient(105deg, #c4911a, #dba828, #f1da93, #c4911a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'normal',
                }}>
                  Clarity &amp; Care
                </em>
              </h2>

              <div className="w-14 h-px mt-7 mb-7"
                style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

              <p className="text-white/50 font-body leading-relaxed mb-4">
                R&N Legal is committed to providing professional, accessible and carefully structured legal services to individuals, families and businesses across Victoria.
              </p>
              <p className="text-white/50 font-body leading-relaxed mb-8">
                Director Rajat Kanti Roy has practised law in Victoria since 2013 — bringing over a decade of experience across civil litigation, family law, conveyancing and immigration.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Plain-English advice — realistic, not reassuring',
                  'Precise preparation and strategic positioning',
                  'Community-focused, culturally aware service',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gold-400/60 mt-0.5 shrink-0" />
                    <span className="text-white/45 font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-outline">
                Meet the Director
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: image + stat cards */}
          <div className="relative lg:pl-16 flex flex-col justify-center" data-animate="right" data-delay="2">
            {/* Main image */}
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[580px]">
              <Image src={'/images/law-practice-image.jpg'} width={800} height={600} alt="Law office" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(6,13,26,0.25), transparent)' }} />

              {/* Floating stat card - bottom left */}
              <div className="absolute bottom-6 left-6 bg-navy-950/90 backdrop-blur-sm border border-gold-400/20 p-5">
                <div className="flex items-end gap-2">
                  <span className="font-display font-light text-gold-300 text-4xl leading-none">10+</span>
                  <span className="text-white/40 font-body text-xs mb-1">Years in<br />Practice</span>
                </div>
              </div>

              {/* Floating tag - top right */}
              {/* <div className="absolute top-6 right-6 bg-gold-gradient px-3 py-1.5">
                <span className="font-body font-semibold text-navy-950 text-xs tracking-widest uppercase">
                  VIC · 2013
                </span>
              </div> */}
            </div>

            {/* Stats row below image on mobile / beside on lg */}
            <div className="grid grid-cols-3 gap-px bg-navy-200/30 mt-px">
              {[
                { val: '9', label: 'Practice Areas' },
                { val: '1 BD', label: 'Response Time' },
                { val: 'VIC', label: 'Court Admission' },
              ].map((stat) => (
                <div key={stat.label} className="bg-cream-50 lg:bg-cream-100/70 px-4 py-4 text-center">
                  <p className="font-display font-light text-navy-900 text-2xl">{stat.val}</p>
                  <p className="font-body text-navy-500/60 text-xs mt-0.5 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
