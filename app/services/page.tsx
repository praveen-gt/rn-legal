// import type { Metadata } from 'next'
// import Link from 'next/link'
// import {
//   Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag, ArrowRight, Phone
// } from 'lucide-react'
// import { PageHero } from '@/components/ui/PageHero'
// import { CTASection } from '@/components/sections/CTASection'
// import { siteConfig } from '@/lib/config'

// export const metadata: Metadata = {
//   title: 'Services',
//   description: 'R&N Legal provides advice, document preparation, negotiation and representation across family violence, family law, wills, conveyancing, immigration, litigation and more.',
// }

// const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
//   Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag,
// }

// const serviceImages: Record<string, string> = {
//   'family-violence': 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=900&q=85&auto=format&fit=crop',
//   'family-law': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop',
//   'wills-estates': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=85&auto=format&fit=crop',
//   'conveyancing-property': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&auto=format&fit=crop',
//   'immigration-law': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85&auto=format&fit=crop',
//   'litigation-disputes': 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=900&q=85&auto=format&fit=crop',
//   'disciplinary-regulatory': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop',
//   'traffic-offences': 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=900&q=85&auto=format&fit=crop',
//   'consumer-law': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85&auto=format&fit=crop',
// }

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHero
//         label="Practice Areas"
//         title="Legal Services"
//         italic="For Every Matter"
//         description="Advice, document preparation, negotiation and representation across a full range of practice areas. If unsure which applies — contact us for guidance."
//         imageUrl="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1600&q=85&auto=format&fit=crop"
//       />

//       {/* Sticky quick-nav */}
//       <nav className="sticky top-28 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex gap-0 overflow-x-auto scrollbar-none">
//             {siteConfig.services.map((svc) => (
//               <a key={svc.slug} href={`#${svc.slug}`}
//                 className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/35 hover:text-gold-300/80 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
//                 {svc.shortTitle}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Intro value props */}
//       <section className="py-14 bg-cream-50 border-b border-navy-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-200/40">
//             {[
//               { n: '01', t: 'Clear Scope', b: 'We discuss scope upfront so you know what is included.' },
//               { n: '02', t: 'Transparent Fees', b: 'Paid consultations and scoped arrangements based on complexity.' },
//               { n: '03', t: 'Honest Assessment', b: 'Realistic advice on prospects, risks and the cost of resolution.' },
//             ].map(({ n, t, b }) => (
//               <div key={n} className="bg-cream-50 px-8 py-7 group hover:bg-navy-950 transition-colors duration-400">
//                 <p className="font-display font-light text-navy-900/15 group-hover:text-white/[0.06] text-4xl leading-none mb-4 transition-colors duration-400">{n}</p>
//                 <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-lg mb-2 transition-colors duration-400">{t}</h3>
//                 <p className="font-body text-navy-600/55 group-hover:text-white/40 text-sm leading-relaxed transition-colors duration-400">{b}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Individual service sections */}
//       {siteConfig.services.map((svc, i) => {
//         const Icon = iconMap[svc.icon] || Scale
//         const img = serviceImages[svc.slug]
//         const isEven = i % 2 === 0

//         return (
//           <section key={svc.slug} id={svc.slug}
//             className={`py-20 lg:py-28 scroll-mt-36 ${isEven ? 'bg-cream-50' : 'bg-cream-100'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}`}>
//                 {/* Content */}
//                 <div data-animate={isEven ? undefined : 'right'}>
//                   {/* Service number */}
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center"
//                       style={{ background: 'rgba(196,145,26,0.06)' }}>
//                       <Icon size={20} className="text-gold-500/70" />
//                     </div>
//                     <span className="font-display font-light text-navy-900/20 text-3xl leading-none">
//                       {String(i + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   <h2 className="font-display font-semibold text-navy-950 leading-tight mb-3"
//                     style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
//                     {svc.title}
//                   </h2>
//                   <div className="w-12 h-px mb-6" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

//                   <p className="text-navy-600/65 font-body leading-relaxed text-lg mb-8">
//                     {svc.description}
//                   </p>

//                   {/* Points */}
//                   <div className="space-y-3 mb-8">
//                     {svc.points.map((pt) => (
//                       <div key={pt} className="flex items-start gap-3 group/pt">
//                         <div className="w-5 h-5 border border-gold-400/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:border-gold-400/50 transition-colors">
//                           <div className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
//                         </div>
//                         <p className="text-navy-700/60 font-body text-sm leading-relaxed">{pt}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <Link href="/contact" className="btn-gold">
//                       Enquire Now
//                       <ArrowRight size={14} />
//                     </Link>
//                     <a href={`tel:${siteConfig.contact.phone1}`} className="btn-navy">
//                       <Phone size={13} />
//                       {siteConfig.contact.phone1}
//                     </a>
//                   </div>
//                 </div>

//                 {/* Image */}
//                 <div className="relative overflow-hidden" data-animate={isEven ? 'right' : 'left'} data-delay="2">
//                   <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
//                     <img src={img} alt={svc.shortTitle}
//                       className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
//                     <div className="absolute inset-0"
//                       style={{ background: 'linear-gradient(to bottom right, rgba(6,13,26,0.1), rgba(6,13,26,0.3))' }} />
//                   </div>
//                   {/* Service label badge */}
//                   <div className="absolute top-5 left-5">
//                     <div className="bg-navy-950/80 backdrop-blur-sm border border-gold-400/20 px-3 py-1.5">
//                       <p className="text-gold-300/80 font-body text-xs tracking-widest uppercase">{svc.shortTitle}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )
//       })}

//       <CTASection />
//     </>
//   )
// }



// import type { Metadata } from 'next'
// import Link from 'next/link'
// import {
//   Shield, Users, FileText, Home, Globe, Scale, Briefcase, Car, ShoppingBag, ArrowRight, Phone
// } from 'lucide-react'
// import { PageHero } from '@/components/ui/PageHero'
// import { CTASection } from '@/components/sections/CTASection'
// import { siteConfig } from '@/lib/config'

// export const metadata: Metadata = {
//   title: 'Services',
//   description: 'R&N Legal provides legal advice, document preparation and representation across family violence, family law, litigation, immigration, property and more.',
// }

// // ─── Client-confirmed service content (Page 3 of final content doc) ───────────
// const mainServices = [
//   {
//     slug: 'family-violence',
//     icon: Shield,
//     num: '01',
//     title: 'Family Violence — Intervention Orders',
//     shortTitle: 'Intervention Orders',
//     description:
//       'We assist applicants and respondents in intervention order proceedings, from the initial application through to contested hearings. Every matter is approached with careful risk assessment and thorough evidence preparation.',
//     points: [
//       'Applications, responses and variations',
//       'Contested hearings',
//       'Risk assessment and evidence preparation',
//     ],
//     image: 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=900&q=85&auto=format&fit=crop',
//   },
//   {
//     slug: 'family-law',
//     icon: Users,
//     num: '02',
//     title: 'Family Law — Divorce and Parenting',
//     shortTitle: 'Family Law',
//     description:
//       'We guide clients through divorce applications and parenting arrangements with clarity and care, ensuring all court documentation is accurately prepared and filed in accordance with applicable procedural requirements.',
//     points: [
//       'Divorce applications',
//       'Parenting arrangements and parenting orders',
//       'Affidavits and court documentation',
//     ],
//     image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop',
//   },
//   {
//     slug: 'litigation-disputes',
//     icon: Scale,
//     num: '03',
//     title: 'Litigation and Civil Disputes',
//     shortTitle: 'Litigation',
//     description:
//       'R&N Legal represents clients in civil disputes across Victorian courts and tribunals. We prioritise strategic preparation, clear pleadings and disciplined representation focused on resolution.',
//     points: [
//       'Contract disputes',
//       'Debt recovery',
//       'Court pleadings and submissions',
//     ],
//     image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=900&q=85&auto=format&fit=crop',
//   },
//   {
//     slug: 'immigration-law',
//     icon: Globe,
//     num: '04',
//     title: 'Immigration — Tribunal and Court Pathways',
//     shortTitle: 'Immigration',
//     description:
//       'We provide structured advice on visa strategy and merits review, assisting clients to understand their options and navigate the Administrative Review Tribunal and court pathways where applicable.',
//     points: [
//       'Visa strategy and preparation',
//       'Merits review matters',
//       'Court pathway guidance where applicable',
//     ],
//     image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85&auto=format&fit=crop',
//   },
//   {
//     slug: 'conveyancing-property',
//     icon: Home,
//     num: '05',
//     title: 'Property Law and Conveyancing',
//     shortTitle: 'Property',
//     description:
//       'From contract review through to settlement, we assist buyers, sellers and landlords with property transactions and disputes, including caveat matters requiring prompt legal action.',
//     points: [
//       'Contract review',
//       'Settlement support',
//       'Property disputes and caveats',
//     ],
//     image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&auto=format&fit=crop',
//   },
// ]

// // Client doc groups these four under "Other Areas"
// const otherAreas = [
//   { icon: FileText, label: 'Wills & Estate Planning',      body: 'Preparation of basic wills and estate planning documentation.' },
//   { icon: Briefcase, label: 'Disciplinary & Regulatory',   body: 'Representation in professional disciplinary and regulatory proceedings.' },
//   { icon: Car,       label: 'Traffic Offences',             body: 'Defence and advice in traffic and regulatory offence matters.' },
//   { icon: ShoppingBag, label: 'Consumer Law',              body: 'Assistance with consumer law disputes and related claims.' },
// ]

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHero
//         label="Practice Areas"
//         title="Legal Services"
//         italic="For Every Matter"
//         description="Advice, document preparation, negotiation and representation across a full range of practice areas. If unsure which applies — contact us for guidance."
//         imageUrl="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1600&q=85&auto=format&fit=crop"
//       />

//       {/* ── Sticky quick-nav ── */}
//       <nav className="sticky top-28 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex gap-0 overflow-x-auto scrollbar-none">
//             {mainServices.map((svc) => (
//               <a
//                 key={svc.slug}
//                 href={`#${svc.slug}`}
//                 className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap"
//               >
//                 {svc.shortTitle}
//               </a>
//             ))}
//             <a
//               href="#other-areas"
//               className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap"
//             >
//               Other Areas
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* ── Intro value props ── */}
//       <section className="py-14 bg-cream-50 border-b border-navy-100/60">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-200/30">
//             {[
//               { n: '01', t: 'Clear Scope',         b: 'We discuss scope upfront so you know exactly what is included before we proceed.' },
//               { n: '02', t: 'Transparent Fees',    b: 'Fees are discussed following initial consultation and depend on complexity and scope.' },
//               { n: '03', t: 'Honest Assessment',   b: 'Realistic advice on prospects, risks and the likely cost of resolution — no false promises.' },
//             ].map(({ n, t, b }) => (
//               <div key={n} className="bg-cream-50 px-8 py-8 group hover:bg-navy-950 transition-colors duration-300">
//                 <p className="font-display font-light text-navy-900/12 group-hover:text-white/5 text-5xl leading-none mb-4 transition-colors duration-300">{n}</p>
//                 <h3 className="font-display font-semibold text-navy-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">{t}</h3>
//                 <p className="font-body text-navy-700/60 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">{b}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Main service sections ── */}
//       {mainServices.map((svc, i) => {
//         const Icon = svc.icon
//         const isEven = i % 2 === 0

//         return (
//           <section
//             key={svc.slug}
//             id={svc.slug}
//             className={`py-20 lg:py-28 scroll-mt-36 ${isEven ? 'bg-white' : 'bg-cream-50'}`}
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}`}>

//                 {/* ── Content ── */}
//                 <div data-animate={isEven ? undefined : 'right'}>
//                   <div className="flex items-center gap-4 mb-8">
//                     <div
//                       className="w-11 h-11 border border-gold-400/25 flex items-center justify-center shrink-0"
//                       style={{ background: 'rgba(196,145,26,0.07)' }}
//                     >
//                       <Icon size={18} className="text-gold-500/80" />
//                     </div>
//                     <span className="font-display font-light text-navy-900/18 text-3xl leading-none select-none">
//                       {svc.num}
//                     </span>
//                   </div>

//                   <h2
//                     className="font-display font-semibold text-navy-950 leading-tight mb-4"
//                     style={{ fontSize: 'clamp(1.75rem, 3vw, 2.6rem)' }}
//                   >
//                     {svc.title}
//                   </h2>
//                   <div className="w-10 h-px mb-7" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />

//                   {/* ↑ Readability fix: bumped from navy-600/65 → navy-800/75 */}
//                   <p className="text-navy-800/75 font-body leading-[1.85] text-[1rem] mb-8 max-w-prose">
//                     {svc.description}
//                   </p>

//                   {/* Points */}
//                   <div className="space-y-3.5 mb-10">
//                     {svc.points.map((pt) => (
//                       <div key={pt} className="flex items-start gap-3.5 group/pt">
//                         <div className="w-5 h-5 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:border-gold-400/60 transition-colors duration-200">
//                           <div className="w-1.5 h-1.5 rounded-full bg-gold-500/70" />
//                         </div>
//                         {/* ↑ Readability fix: bumped from navy-700/60 → navy-800/80 */}
//                         <p className="text-navy-800/80 font-body text-[0.94rem] leading-relaxed">{pt}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <Link href="/contact" className="btn-gold">
//                       Enquire Now
//                       <ArrowRight size={14} />
//                     </Link>
//                     <a href={`tel:${siteConfig.contact.phone1}`} className="btn-navy">
//                       <Phone size={13} />
//                       {siteConfig.contact.phone1}
//                     </a>
//                   </div>
//                 </div>

//                 {/* ── Image ── */}
//                 <div className="relative overflow-hidden" data-animate={isEven ? 'right' : 'left'} data-delay="2">
//                   <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
//                     <img
//                       src={svc.image}
//                       alt={svc.shortTitle}
//                       className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
//                     />
//                     <div
//                       className="absolute inset-0"
//                       style={{ background: 'linear-gradient(to bottom right, rgba(6,13,26,0.08), rgba(6,13,26,0.28))' }}
//                     />
//                   </div>
//                   <div className="absolute top-5 left-5">
//                     <div className="bg-navy-950/80 backdrop-blur-sm border border-gold-400/20 px-3 py-1.5">
//                       <p className="text-gold-300/90 font-body text-xs tracking-widest uppercase">{svc.shortTitle}</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </section>
//         )
//       })}

//       {/* ── Other Areas (client doc groups these 4 together) ── */}
//       <section id="other-areas" className="py-20 lg:py-28 scroll-mt-36 bg-navy-950 relative overflow-hidden">
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(196,145,26,0.07), transparent 65%)' }}
//         />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <div className="mb-14" data-animate>
//             <div className="section-label text-gold-400/70 mb-4">Additional Practice Areas</div>
//             <h2
//               className="font-display font-light text-white leading-tight"
//               style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
//             >
//               Other Areas
//               <em
//                 className="font-light"
//                 style={{
//                   fontStyle: 'italic',
//                   background: 'linear-gradient(105deg, #b07f18 0%, #dba828 50%, #c4911a 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   marginLeft: '0.3em',
//                 }}
//               >
//                 We Cover
//               </em>
//             </h2>
//             <div className="w-10 h-px mt-6" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
//             {otherAreas.map(({ icon: Icon, label, body }, i) => (
//               <div
//                 key={label}
//                 className="bg-navy-950 px-8 py-8 group hover:bg-navy-900 transition-colors duration-300 border border-white/5 hover:border-gold-400/15"
//                 data-animate
//                 data-delay={String(i + 1)}
//               >
//                 <div
//                   className="w-10 h-10 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:border-gold-400/40 transition-colors duration-300"
//                   style={{ background: 'rgba(196,145,26,0.07)' }}
//                 >
//                   <Icon size={16} className="text-gold-400/70 group-hover:text-gold-400 transition-colors duration-300" />
//                 </div>
//                 <h3 className="font-display font-semibold text-white text-lg leading-tight mb-3">{label}</h3>
//                 {/* ↑ Readability fix: white/50 → white/65 */}
//                 <p className="font-body text-white/65 text-sm leading-relaxed">{body}</p>
//               </div>
//             ))}
//           </div>

//           {/* Fees note — from client doc */}
//           <div className="mt-10 flex items-start gap-4 border border-gold-400/15 px-7 py-5" data-animate>
//             <div className="w-1 h-1 rounded-full bg-gold-400/50 shrink-0 mt-2" />
//             <p className="font-body text-white/50 text-sm leading-relaxed">
//               <span className="text-gold-400/70 font-medium">Fees</span> — Fees are discussed following initial consultation and depend on the complexity and scope of the matter.
//             </p>
//           </div>

//         </div>
//       </section>

//       <CTASection />
//     </>
//   )
// }


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
  description: 'R&N Legal provides legal advice, document preparation and representation across family violence, family law, litigation, immigration, property and more.',
}

// ─── Each service has a unique SVG visual panel ───────────────────────────────
// These are bespoke CSS/SVG compositions — no stock photos needed.

function VisualFamilyViolence() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0d1e35 60%, #0a1628 100%)' }}>
      {/* Concentric arcs — protection/shield motif */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
        {[220, 170, 120, 70].map((r, i) => (
          <circle key={r} cx="250" cy="320" r={r}
            fill="none"
            stroke={`rgba(196,145,26,${0.06 + i * 0.04})`}
            strokeWidth="1"
          />
        ))}
        {/* Shield outline */}
        <path d="M250 120 L340 155 L340 255 Q340 320 250 360 Q160 320 160 255 L160 155 Z"
          fill="none"
          stroke="rgba(196,145,26,0.18)"
          strokeWidth="1.2"
        />
        <path d="M250 145 L320 173 L320 258 Q320 310 250 343 Q180 310 180 258 L180 173 Z"
          fill="rgba(196,145,26,0.04)"
          stroke="rgba(196,145,26,0.10)"
          strokeWidth="1"
        />
        {/* Centre dot */}
        <circle cx="250" cy="245" r="4" fill="rgba(219,168,40,0.6)" />
        <circle cx="250" cy="245" r="12" fill="none" stroke="rgba(219,168,40,0.2)" strokeWidth="1" />
        {/* Corner grid marks */}
        {[[60,60],[440,60],[60,540],[440,540]].map(([x,y],i) => (
          <g key={i}>
            <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="rgba(196,145,26,0.15)" strokeWidth="0.8"/>
            <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="rgba(196,145,26,0.15)" strokeWidth="0.8"/>
          </g>
        ))}
      </svg>
      <ServiceVisualLabel num="01" label="Intervention Orders" />
    </div>
  )
}

function VisualFamilyLaw() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0a1020 0%, #0e1e38 50%, #060d1a 100%)' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
        {/* Two interlocking circles — family/relationship motif */}
        <circle cx="200" cy="270" r="110" fill="none" stroke="rgba(196,145,26,0.12)" strokeWidth="1" />
        <circle cx="300" cy="270" r="110" fill="none" stroke="rgba(196,145,26,0.12)" strokeWidth="1" />
        {/* Intersection fill */}
        <clipPath id="c1"><circle cx="200" cy="270" r="110"/></clipPath>
        <circle cx="300" cy="270" r="110" fill="rgba(196,145,26,0.05)" clipPath="url(#c1)" />
        {/* Inner rings */}
        <circle cx="200" cy="270" r="75" fill="none" stroke="rgba(196,145,26,0.07)" strokeWidth="0.8" />
        <circle cx="300" cy="270" r="75" fill="none" stroke="rgba(196,145,26,0.07)" strokeWidth="0.8" />
        {/* Dots at centres */}
        <circle cx="200" cy="270" r="3.5" fill="rgba(219,168,40,0.5)" />
        <circle cx="300" cy="270" r="3.5" fill="rgba(219,168,40,0.5)" />
        {/* Connecting line */}
        <line x1="200" y1="270" x2="300" y2="270" stroke="rgba(219,168,40,0.15)" strokeWidth="0.8" strokeDasharray="4 4"/>
        {/* Outer decorative rule lines */}
        <line x1="60" y1="120" x2="440" y2="120" stroke="rgba(196,145,26,0.08)" strokeWidth="0.8"/>
        <line x1="60" y1="420" x2="440" y2="420" stroke="rgba(196,145,26,0.08)" strokeWidth="0.8"/>
      </svg>
      <ServiceVisualLabel num="02" label="Family Law" />
    </div>
  )
}

function VisualLitigation() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #07101f 0%, #0b1a2e 55%, #060d1a 100%)' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
        {/* Balance scales — litigation motif */}
        {/* Central vertical beam */}
        <line x1="250" y1="130" x2="250" y2="430" stroke="rgba(196,145,26,0.20)" strokeWidth="1.2"/>
        {/* Horizontal bar */}
        <line x1="120" y1="195" x2="380" y2="195" stroke="rgba(196,145,26,0.20)" strokeWidth="1.2"/>
        {/* Left pan strings */}
        <line x1="120" y1="195" x2="100" y2="290" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        <line x1="120" y1="195" x2="160" y2="290" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        {/* Right pan strings */}
        <line x1="380" y1="195" x2="360" y2="290" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        <line x1="380" y1="195" x2="400" y2="290" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        {/* Left pan */}
        <ellipse cx="130" cy="295" rx="42" ry="10" fill="none" stroke="rgba(196,145,26,0.18)" strokeWidth="1"/>
        <ellipse cx="130" cy="295" rx="42" ry="10" fill="rgba(196,145,26,0.04)"/>
        {/* Right pan */}
        <ellipse cx="370" cy="295" rx="42" ry="10" fill="none" stroke="rgba(196,145,26,0.18)" strokeWidth="1"/>
        <ellipse cx="370" cy="295" rx="42" ry="10" fill="rgba(196,145,26,0.04)"/>
        {/* Base */}
        <line x1="210" y1="430" x2="290" y2="430" stroke="rgba(196,145,26,0.15)" strokeWidth="1"/>
        {/* Pivot dot */}
        <circle cx="250" cy="195" r="5" fill="rgba(219,168,40,0.5)"/>
        {/* Bg grid */}
        {[160,220,280,340,400].map(y => (
          <line key={y} x1="60" y1={y} x2="440" y2={y} stroke="rgba(255,255,255,0.02)" strokeWidth="0.6"/>
        ))}
      </svg>
      <ServiceVisualLabel num="03" label="Litigation" />
    </div>
  )
}

function VisualImmigration() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #060f1e 0%, #0c1d35 60%, #060d1a 100%)' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
        {/* Globe/meridian motif */}
        <ellipse cx="250" cy="280" rx="150" ry="150" fill="none" stroke="rgba(196,145,26,0.14)" strokeWidth="1"/>
        {/* Meridians */}
        {[-100,-50,0,50,100].map((offset, i) => (
          <ellipse key={i} cx="250" cy="280" rx={Math.abs(offset) || 10} ry="150"
            fill="none" stroke="rgba(196,145,26,0.07)" strokeWidth="0.8"/>
        ))}
        {/* Parallels */}
        {[-90,-50,0,50,90].map((offset, i) => (
          <ellipse key={i} cx="250" cy={280 + offset}
            rx={Math.round(150 * Math.cos(offset * Math.PI / 180))}
            ry="18"
            fill="none" stroke="rgba(196,145,26,0.07)" strokeWidth="0.8"/>
        ))}
        {/* Compass rose */}
        <circle cx="250" cy="280" r="8" fill="none" stroke="rgba(219,168,40,0.30)" strokeWidth="1"/>
        <circle cx="250" cy="280" r="2.5" fill="rgba(219,168,40,0.6)"/>
        {['N','E','S','W'].map((d, i) => {
          const angle = i * 90 * Math.PI / 180
          const x = 250 + Math.sin(angle) * 22
          const y = 280 - Math.cos(angle) * 22
          return <circle key={d} cx={x} cy={y} r="1.5" fill="rgba(219,168,40,0.3)"/>
        })}
        {/* Outer ring */}
        <circle cx="250" cy="280" r="168" fill="none" stroke="rgba(196,145,26,0.06)" strokeWidth="0.8" strokeDasharray="6 6"/>
      </svg>
      <ServiceVisualLabel num="04" label="Immigration" />
    </div>
  )
}

function VisualProperty() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #070e1c 0%, #0d1c30 55%, #060d1a 100%)' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
        {/* Architectural floor plan motif */}
        {/* Outer boundary */}
        <rect x="100" y="150" width="300" height="260" fill="none" stroke="rgba(196,145,26,0.18)" strokeWidth="1.2"/>
        {/* Inner rooms */}
        <line x1="100" y1="280" x2="270" y2="280" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        <line x1="270" y1="150" x2="270" y2="410" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        <line x1="100" y1="340" x2="270" y2="340" stroke="rgba(196,145,26,0.08)" strokeWidth="0.8"/>
        {/* Door arcs */}
        <path d="M270 280 Q290 280 290 300" fill="none" stroke="rgba(219,168,40,0.15)" strokeWidth="0.8"/>
        <path d="M100 340 Q120 340 120 360" fill="none" stroke="rgba(219,168,40,0.15)" strokeWidth="0.8"/>
        {/* Room fill hints */}
        <rect x="101" y="151" width="168" height="128" fill="rgba(196,145,26,0.025)"/>
        <rect x="271" y="151" width="128" height="258" fill="rgba(196,145,26,0.03)"/>
        {/* Compass */}
        <circle cx="390" cy="470" r="22" fill="none" stroke="rgba(196,145,26,0.12)" strokeWidth="0.8"/>
        <line x1="390" y1="450" x2="390" y2="470" stroke="rgba(219,168,40,0.35)" strokeWidth="1"/>
        <circle cx="390" cy="470" r="2" fill="rgba(219,168,40,0.5)"/>
        {/* Scale bar */}
        <line x1="110" y1="460" x2="200" y2="460" stroke="rgba(196,145,26,0.20)" strokeWidth="1"/>
        <line x1="110" y1="455" x2="110" y2="465" stroke="rgba(196,145,26,0.20)" strokeWidth="1"/>
        <line x1="155" y1="455" x2="155" y2="465" stroke="rgba(196,145,26,0.20)" strokeWidth="1"/>
        <line x1="200" y1="455" x2="200" y2="465" stroke="rgba(196,145,26,0.20)" strokeWidth="1"/>
      </svg>
      <ServiceVisualLabel num="05" label="Property Law" />
    </div>
  )
}

// Shared label overlay used by each visual
function ServiceVisualLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="absolute bottom-7 left-7 z-10">
      <div style={{
        background: 'rgba(6,13,26,0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderLeft: '2px solid rgba(196,145,26,0.45)',
        padding: '10px 16px',
      }}>
        <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.52rem', letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(196,145,26,0.6)', marginBottom: 3 }}>
          Area {num}
        </p>
        <p style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontWeight: 300, fontSize: '1.05rem', color: 'rgba(255,255,255,0.80)', lineHeight: 1 }}>
          {label}
        </p>
      </div>
    </div>
  )
}

const visualPanels = [
  <VisualFamilyViolence key="fv" />,
  <VisualFamilyLaw key="fl" />,
  <VisualLitigation key="lit" />,
  <VisualImmigration key="imm" />,
  <VisualProperty key="prop" />,
]

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
  },
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
        imageUrl="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1600&q=85&auto=format&fit=crop"
      />

      {/* ── Sticky quick-nav ── */}
      <nav className="sticky top-28 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
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
                    {visualPanels[i]}
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