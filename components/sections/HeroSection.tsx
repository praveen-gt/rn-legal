import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy-950">
      {/* Hero image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.jpg"
          alt="Melbourne legal practice"
          className="w-full h-full object-cover object-center animate-kenburns"
          style={{ animationFillMode: 'forwards' }}
        />
        {/* Multi-layer overlay for depth */}
        {/* <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(6,13,26,0.88) 0%, rgba(6,13,26,0.55) 50%, rgba(6,13,26,0.75) 100%)'
        }} /> */}
        {/* <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(6,13,26,1) 0%, rgba(6,13,26,0.0) 50%)'
        }} /> */}
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
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}>
              Clear Legal
            </h1>
            <h1 className="font-display font-light leading-[1.02]"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
                background: 'linear-gradient(105deg, #c4911a 0%, #dba828 35%, #f1da93 55%, #dba828 70%, #a37214 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              <em>Guidance.</em>
            </h1>
            <h1 className="font-display font-light text-white/70 leading-[1.02]"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}>
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
          <p className="text-white/50 font-body text-xl leading-relaxed"
            style={{ animation: 'reveal-up 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
            {/* R&N Legal provides clear, practical legal advice and representation across family law, migration, property and dispute matters. */}

            R&N Legal is a boutique practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters. We focus on straightforward guidance, strong preparation, and client‑focused outcomes.
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

      </div>
    </section>
  )
}


// import Link from 'next/link'
// import { ArrowRight, Phone } from 'lucide-react'
// import { siteConfig } from '@/lib/config'
// import Image from 'next/image'

// export function HeroSection() {
//   return (
//     // <section className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">

//     //   {/* ── Full-bleed photo ── */}
//     //   <Image
//     //     src="/images/banner_image.jpg"
//     //     alt="Melbourne legal practice"
//     //     className="absolute inset-0 w-full h-full object-cover object-top"
//     //     width={1600}
//     //     height={900}
//     //   />

//     //   {/* ── Overlay ── */}
//     //   <div
//     //     className="absolute inset-0"
//     //     style={{
//     //       background: 'linear-gradient(135deg, rgba(10,20,40,0.72) 0%, rgba(10,20,40,0.50) 60%, rgba(10,20,40,0.62) 100%)',
//     //     }}
//     //   />

//     //   {/* ── Content ── */}
//     //   <div className="relative z-10 w-full lg:ml-[7vw] lg:w-auto">
//     //     <div
//     //       className="relative px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 w-full lg:max-w-[540px]"
//     //       style={{
//     //         background: 'rgba(255,255,255,0.78)',
//     //         backdropFilter: 'blur(24px)',
//     //         WebkitBackdropFilter: 'blur(24px)',
//     //         borderTop: '2.5px solid #c4911a',
//     //         boxShadow: '0 12px 60px rgba(0,0,0,0.15)',
//     //       }}
//     //     >
//     //       {/* Eyebrow */}
//     //       <p
//     //         className="uppercase mb-5"
//     //         style={{
//     //           fontFamily: '"DM Sans", sans-serif',
//     //           fontSize: '0.68rem',
//     //           letterSpacing: '0.28em',
//     //           color: '#c4911a',
//     //           fontWeight: 500,
//     //         }}
//     //       >
//     //         Boutique Law Practice · Melbourne, VIC
//     //       </p>

//     //       {/* Headline */}
//     //       <h1
//     //         className="leading-[1.05] mb-3"
//     //         style={{
//     //           fontFamily: '"Cormorant Garamond", Georgia, serif',
//     //           fontWeight: 300,
//     //           fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
//     //           color: '#0f1c2e',
//     //           letterSpacing: '-0.01em',
//     //         }}
//     //       >
//     //         Clear Legal{' '}
//     //         <em
//     //           style={{
//     //             fontStyle: 'italic',
//     //             background: 'linear-gradient(100deg, #b07f18 0%, #dba828 50%, #c4911a 100%)',
//     //             WebkitBackgroundClip: 'text',
//     //             WebkitTextFillColor: 'transparent',
//     //             backgroundClip: 'text',
//     //           }}
//     //         >
//     //           Guidance.
//     //         </em>
//     //         <br />
//     //         <span style={{ color: '#6b7280' }}>Real Outcomes.</span>
//     //       </h1>

//     //       {/* Gold rule */}
//     //       <div
//     //         className="mb-5"
//     //         style={{
//     //           width: 44,
//     //           height: 1.5,
//     //           background: 'linear-gradient(90deg, #c4911a, #dba828)',
//     //         }}
//     //       />

//     //       {/* Description */}
//     //       <p
//     //         className="leading-relaxed mb-8"
//     //         style={{
//     //           fontFamily: '"DM Sans", sans-serif',
//     //           fontSize: '0.97rem',
//     //           color: '#4b5563',
//     //           maxWidth: 390,
//     //         }}
//     //       >
//     //         Practical advice and strong representation across family law,
//     //         migration, property and dispute matters — with you every step.
//     //       </p>

//     //       {/* CTAs */}
//     //       <div className="flex flex-col sm:flex-row gap-3">
//     //         <Link
//     //           href="/contact"
//     //           className="inline-flex items-center justify-center gap-2 transition-opacity duration-200 hover:opacity-90"
//     //           style={{
//     //             fontFamily: '"DM Sans", sans-serif',
//     //             background: 'linear-gradient(105deg, #c4911a, #dba828)',
//     //             color: '#fff',
//     //             padding: '13px 28px',
//     //             fontSize: '0.70rem',
//     //             letterSpacing: '0.14em',
//     //             fontWeight: 500,
//     //             textTransform: 'uppercase',
//     //           }}
//     //         >
//     //           Book a Consultation
//     //           <ArrowRight size={13} />
//     //         </Link>

//     //         <a
//     //           href={`tel:${siteConfig.contact.phone1}`}
//     //           className="inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-slate-100"
//     //           style={{
//     //             fontFamily: '"DM Sans", sans-serif',
//     //             border: '1.5px solid #0f1c2e',
//     //             color: '#0f1c2e',
//     //             padding: '13px 28px',
//     //             fontSize: '0.70rem',
//     //             letterSpacing: '0.14em',
//     //             fontWeight: 500,
//     //             textTransform: 'uppercase',
//     //           }}
//     //         >
//     //           <Phone size={12} />
//     //           {siteConfig.contact.phone1}
//     //         </a>
//     //       </div>

//     //       {/* Corner accent */}
//     //       <div
//     //         className="absolute bottom-0 right-0 w-8 h-8"
//     //         style={{
//     //           borderRight: '1.5px solid rgba(196,145,26,0.4)',
//     //           borderBottom: '1.5px solid rgba(196,145,26,0.4)',
//     //         }}
//     //       />
//     //     </div>
//     //   </div>

//     // </section>

//     <section className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
  
//   {/* Left — Editorial */}
//   <div className="flex items-center bg-[#f8f7f5] px-8 sm:px-16">
//     <div className="max-w-xl">

//       <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#b38b2e] mb-6">
//         Boutique Law Practice · Melbourne
//       </p>

//       <h1 className="font-display font-light text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.05] text-slate-900">
//         Clear legal advice.
//         <br />
//         <span className="text-slate-500">Measured. Strategic. Practical.</span>
//       </h1>

//       <div className="w-12 h-px bg-[#c4911a] my-8" />

//       <p className="text-slate-600 text-[0.95rem] leading-relaxed max-w-md">
//         A Melbourne-based boutique practice focused on family, migration,
//         property and dispute matters — with clarity at every stage.
//       </p>

//       <div className="flex gap-4 mt-10">
//         <Link href="/contact" className="btn-gold-minimal">
//           Book Consultation
//         </Link>
//         <a href={`tel:${siteConfig.contact.phone1}`} className="btn-outline-minimal">
//           {siteConfig.contact.phone1}
//         </a>
//       </div>

//     </div>
//   </div>

//   {/* Right — Image */}
//   <div className="relative">
//     <Image
//       src="/images/hero-banner.jpg"
//       alt="Melbourne legal practice"
//       fill
//       className="object-cover grayscale-[20%]"
//       priority
//     />
//   </div>

// </section>

//   )
// }

