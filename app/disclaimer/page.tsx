// import type { Metadata } from 'next'
// import { AlertCircle, ShieldCheck, Lock, Eye } from 'lucide-react'
// import { PageHero } from '@/components/ui/PageHero'
// import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Legal Disclaimer & Privacy Policy',
//   description: 'Website disclaimer, no lawyer-client relationship notice, and privacy policy for R&N Legal.',
// }

// const sections = [
//   {
//     id: 'disclaimer', icon: AlertCircle, title: 'Website Disclaimer',
//     content: [
//       {
//         h: 'General Information Only',
//         t: 'The information contained on this website is general information only and does not constitute legal advice. You should obtain advice specific to your circumstances before acting on any information.',
//       },
//     ],
//   },
//   {
//     id: 'relationship', icon: ShieldCheck, title: 'No Lawyer–Client Relationship',
//     content: [
//       {
//         h: 'When a Relationship Is Formed',
//         t: 'Contacting R&N Legal via this website, email or telephone does not create a lawyer–client relationship unless confirmed in writing.',
//       },
//     ],
//   },
//   {
//     id: 'confidentiality', icon: Lock, title: 'Confidentiality & Email',
//     content: [
//       {
//         h: 'Email Communication',
//         t: 'Email communication may not always be secure. Do not send urgent or highly confidential information through online forms.',
//       },
//     ],
//   },
//   {
//     id: 'privacy', icon: Eye, title: 'Privacy Policy',
//     content: [
//       {
//         h: 'Collection & Use of Personal Information',
//         t: 'Personal information is collected only for the purpose of responding to enquiries, providing legal services and complying with professional obligations. Reasonable steps are taken to protect personal information.',
//       },
//     ],
//   },
// ]

// export default function DisclaimerPage() {
//   return (
//     <>
//       <PageHero
//         label="Legal Notice"
//         title="Disclaimer &"
//         italic="Privacy Policy"
//         description="Important information about the nature of content on this website, our professional obligations and how we handle your personal information."
//         imageUrl="/images/disclaimer-hero.jpg"
//       />

//       {/* Quick nav */}
//       <nav className="hidden lg:block sticky top-27 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex gap-0 overflow-x-auto scrollbar-none">
//             {sections.map((s) => (
//               <Link key={s.id} href={`#${s.id}`}
//                 className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
//                 {s.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>


//       {/* Content */}
//       <div className="bg-navy-950">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-20">
//           {sections.map(({ id, icon: Icon, title, content }) => (
//             <section key={id} id={id} className="scroll-mt-36" data-animate>
//               {/* Section header */}
//               <div className="flex items-center gap-5 mb-8">
//                 <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0"
//                   style={{ background: 'rgba(196,145,26,0.06)' }}>
//                   <Icon size={20} className="text-gold-400/70" />
//                 </div>
//                 <div>
//                   <h2 className="font-display font-semibold text-white text-2xl lg:text-3xl">{title}</h2>
//                   <div className="w-10 h-px mt-2" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
//                 </div>
//               </div>

//               {/* Sub-sections */}
//               <div className="border-l border-white/8 pl-8 ml-5 space-y-7">
//                 {content.map(({ h, t }) => (
//                   <div key={h} className="group">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors shrink-0 -ml-[36px]" />
//                       <h3 className="font-display font-semibold text-white/80 text-lg">{h}</h3>
//                     </div>
//                     <p className="text-white/40 font-body text-sm leading-relaxed pl-0">{t}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

import type { Metadata } from 'next'
import {
  AlertCircle, ShieldCheck, Lock, Eye,
  Scale, DollarSign, Globe, MapPin, XCircle
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Disclaimer & Privacy Policy',
  description: 'Website disclaimer, no solicitor-client relationship notice, privacy policy and website terms for R&N Legal.',
}

const sections = [
  {
    id: 'disclaimer', icon: AlertCircle, title: 'Website Disclaimer',
    content: [
      {
        h: 'General Information Only',
        t: 'The information on this website is provided for general informational purposes only. It is not legal advice and is not a substitute for advice tailored to your specific circumstances. Legal outcomes depend on the facts of each matter, the available evidence, the applicable law, procedural requirements and the forum in which the matter is dealt with.',
      },
      {
        h: 'No Substitute for Legal Advice',
        t: 'You should not act, refrain from acting, or make legal decisions based solely on material published on this website. Specific legal advice should be obtained for your circumstances before any legal step is taken.',
      },
    ],
  },
  {
    id: 'relationship', icon: ShieldCheck, title: 'No Solicitor–Client Relationship',
    content: [
      {
        h: 'When a Relationship Is Formed',
        t: 'Accessing this website, contacting our office, sending an email, submitting an online enquiry or booking a consultation does not by itself create a solicitor–client relationship. A solicitor–client relationship is formed only when we confirm in writing that we have agreed to act for you.',
      },
      {
        h: 'Right to Decline',
        t: 'We may decline to act where there is a conflict of interest, the matter falls outside our scope, or for other professional reasons.',
      },
    ],
  },
  {
    id: 'outcome', icon: Scale, title: 'No Guarantee of Outcome',
    content: [
      {
        h: 'General Context Only',
        t: 'Any discussion of past matters, areas of practice or possible legal pathways is intended to provide general context only. It should not be understood as a representation or guarantee that the same, or any particular, outcome can be achieved in another matter.',
      },
      {
        h: 'Each Matter Is Unique',
        t: 'Each matter turns on its own facts, the available evidence, the applicable law and the way in which the case is prepared and presented.',
      },
    ],
  },
  {
    id: 'costs', icon: DollarSign, title: 'Costs and Engagement',
    content: [
      {
        h: 'Fee Structures',
        t: 'Legal costs and fee structures are discussed after an initial assessment of your matter. Nothing on this website constitutes a binding costs agreement, fixed fee offer or quotation unless expressly stated in a written engagement document issued by our office.',
      },
      {
        h: 'Engagement Terms',
        t: 'If we are retained, costs disclosure and engagement terms will be provided in accordance with applicable professional obligations and the circumstances of the matter.',
      },
    ],
  },
  {
    id: 'confidentiality', icon: Lock, title: 'Confidentiality and Electronic Communications',
    content: [
      {
        h: 'Email Communication',
        t: 'Information sent through a website form or by ordinary email may not always be secure. Do not send highly sensitive, urgent or time-critical information through the website alone unless we have asked you to do so.',
      },
      {
        h: 'Urgent Matters',
        t: 'If your matter is urgent, you should contact our office directly by telephone. While we take reasonable care in our communications, electronic transmission carries inherent risks.',
      },
    ],
  },
  {
    id: 'privacy', icon: Eye, title: 'Privacy',
    content: [
      {
        h: 'Collection & Use of Personal Information',
        t: 'We may collect personal information that you choose to provide to us, including your name, contact details, documents and details about your legal enquiry. We use that information to assess enquiries, conduct conflict checks, communicate with you, provide legal services where engaged, comply with professional and legal obligations, and maintain administrative records.',
      },
      {
        h: 'Disclosure',
        t: 'We may disclose personal information where authorised by you, where reasonably required in the course of providing legal services, or where disclosure is required or permitted by law. If we do not accept your matter, we may still retain limited information for conflict-checking, compliance and administrative purposes.',
      },
    ],
  },
  {
    id: 'links', icon: Globe, title: 'Third-Party Links',
    content: [
      {
        h: 'External Websites',
        t: 'This website may contain links to third-party websites for convenience or reference. R&N Legal is not responsible for the content, availability, accuracy or privacy practices of those external websites.',
      },
    ],
  },
  {
    id: 'jurisdiction', icon: MapPin, title: 'Jurisdiction',
    content: [
      {
        h: 'Victoria, Australia',
        t: 'This website is intended primarily for clients seeking legal services in Victoria, Australia, although some matters handled by our office may involve federal law and federal courts or tribunals. Any reference to courts, tribunals or procedure should be understood in that context unless otherwise stated.',
      },
    ],
  },
  {
    id: 'liability', icon: XCircle, title: 'Limitation of Liability',
    content: [
      {
        h: 'Exclusion of Liability',
        t: 'To the fullest extent permitted by law, R&N Legal excludes liability for loss or damage arising from reliance on material published on this website. Nothing on this website excludes any rights or remedies that cannot lawfully be excluded.',
      },
      {
        h: 'Professional Standards',
        t: 'Liability limited by a scheme approved under Professional Standards Legislation.',
      },
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        label="Legal Notice"
        title="Disclaimer,"
        italic="Privacy & Website Terms"
        description="Important information about the nature of content on this website, our professional obligations and how we handle your personal information."
        imageUrl="/images/disclaimer-hero.jpg"
      />

      {/* Quick nav */}
      <nav className="hidden lg:block sticky top-27 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {sections.map((s) => (
              <Link key={s.id} href={`#${s.id}`}
                className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
                {s.title}
              </Link>
            ))}
            <Link href="#contact"
              className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-20">
          {sections.map(({ id, icon: Icon, title, content }) => (
            <section key={id} id={id} className="scroll-mt-36" data-animate>
              {/* Section header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(196,145,26,0.06)' }}>
                  <Icon size={20} className="text-gold-400/70" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-white text-2xl lg:text-3xl">{title}</h2>
                  <div className="w-10 h-px mt-2" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
                </div>
              </div>

              {/* Sub-sections */}
              <div className="border-l border-white/8 pl-8 ml-5 space-y-7">
                {content.map(({ h, t }) => (
                  <div key={h} className="group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors shrink-0 -ml-[36px]" />
                      <h3 className="font-display font-semibold text-white/80 text-lg">{h}</h3>
                    </div>
                    <p className="text-white/40 font-body text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Contact section */}
          <section id="contact" className="scroll-mt-36" data-animate>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0"
                style={{ background: 'rgba(196,145,26,0.06)' }}>
                <MapPin size={20} className="text-gold-400/70" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-white text-2xl lg:text-3xl">Contact</h2>
                <div className="w-10 h-px mt-2" style={{ background: 'linear-gradient(90deg, #c4911a, #dba828)' }} />
              </div>
            </div>
            <div className="border-l border-white/8 pl-8 ml-5">
              <p className="text-white/40 font-body text-sm leading-relaxed mb-1">
                If you have questions about this website, our engagement process, or the handling of personal information, please contact:
              </p>
              <div className="mt-5 space-y-1 text-white/60 font-body text-sm">
                <p className="font-semibold text-white/80">R&N Legal</p>
                <p>Suite 401–402, Level 4, 2 Queen Street</p>
                <p>Melbourne VIC 3000</p>
                <p>
                  <a href="mailto:info@rnlegal.com.au" className="text-gold-400/70 hover:text-gold-300 transition-colors">
                    info@rnlegal.com.au
                  </a>
                </p>
                <p>
                  <a href="tel:0430593124" className="text-gold-400/70 hover:text-gold-300 transition-colors">
                    0430 593 124
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}