import type { Metadata } from 'next'
import { AlertCircle, ShieldCheck, Lock, Eye } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Disclaimer & Privacy Policy',
  description: 'Website disclaimer, no lawyer-client relationship notice, and privacy policy for R&N Legal.',
}

const sections = [
  {
    id: 'disclaimer', icon: AlertCircle, title: 'Website Disclaimer',
    content: [
      {
        h: 'General Information Only',
        t: 'The information contained on this website is general information only and does not constitute legal advice. You should obtain advice specific to your circumstances before acting on any information.',
      },
    ],
  },
  {
    id: 'relationship', icon: ShieldCheck, title: 'No Lawyer–Client Relationship',
    content: [
      {
        h: 'When a Relationship Is Formed',
        t: 'Contacting R&N Legal via this website, email or telephone does not create a lawyer–client relationship unless confirmed in writing.',
      },
    ],
  },
  {
    id: 'confidentiality', icon: Lock, title: 'Confidentiality & Email',
    content: [
      {
        h: 'Email Communication',
        t: 'Email communication may not always be secure. Do not send urgent or highly confidential information through online forms.',
      },
    ],
  },
  {
    id: 'privacy', icon: Eye, title: 'Privacy Policy',
    content: [
      {
        h: 'Collection & Use of Personal Information',
        t: 'Personal information is collected only for the purpose of responding to enquiries, providing legal services and complying with professional obligations. Reasonable steps are taken to protect personal information.',
      },
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        label="Legal Notice"
        title="Disclaimer &"
        italic="Privacy Policy"
        description="Important information about the nature of content on this website, our professional obligations and how we handle your personal information."
        imageUrl="/images/disclaimer-hero.jpg"
      />

      {/* Quick nav */}
      <nav className="sticky top-27 z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {sections.map((s) => (
              <Link key={s.id} href={`#${s.id}`}
                className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/45 hover:text-gold-300/90 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
                {s.title}
              </Link>
            ))}
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
                    <p className="text-white/40 font-body text-sm leading-relaxed pl-0">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
