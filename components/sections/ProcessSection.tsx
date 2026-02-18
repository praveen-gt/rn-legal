import { siteConfig } from '@/lib/config'

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-36 bg-cream-100 relative overflow-hidden">
      {/* Large background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-light text-navy-900/[0.025]"
          style={{ fontSize: 'clamp(16rem, 40vw, 40rem)', lineHeight: 1 }}>
          4
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div data-animate>
            <div className="section-label mb-5">Our Approach</div>
            <h2 className="font-display font-light text-navy-950"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.05 }}>
              How We Work
            </h2>
          </div>
          <p className="text-navy-600/50 font-body text-sm leading-relaxed max-w-xs" data-animate data-delay="2">
            A structured, four-step approach — from initial consultation through to resolution.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200/40">
          {siteConfig.process.map((step, i) => (
            <div
              key={step.step}
              className="bg-cream-100 relative group hover:bg-navy-950 transition-colors duration-500 p-8 lg:p-10 overflow-hidden"
              data-animate
              data-delay={String(i + 1)}
            >
              {/* Step number — large decorative */}
              <div className="absolute -top-4 -right-2 font-display font-light text-navy-900/[0.06] group-hover:text-white/[0.04] transition-colors duration-500 select-none pointer-events-none"
                style={{ fontSize: '8rem', lineHeight: 1 }}>
                {step.step}
              </div>

              {/* Top accent */}
              <div className="w-8 h-px mb-8 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

              <div className="relative z-10">
                {/* Step label */}
                <p className="font-body text-2xs tracking-[0.22em] uppercase text-gold-500/60 group-hover:text-gold-400/70 mb-3 transition-colors duration-500">
                  Step {step.step}
                </p>

                <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-2xl leading-tight mb-4 transition-colors duration-500">
                  {step.title}
                </h3>

                <p className="font-body text-navy-600/55 group-hover:text-white/45 text-sm leading-relaxed transition-colors duration-500">
                  {step.description}
                </p>
              </div>

              {/* Bottom connector arrow (except last) */}
              {i < siteConfig.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px -translate-y-1/2 w-px h-8 bg-gold-400/20 z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
