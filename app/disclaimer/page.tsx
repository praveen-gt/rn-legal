import type { Metadata } from 'next'
import { AlertCircle, ShieldCheck, Lock, Eye } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Legal Disclaimer & Privacy Policy',
  description: 'Website disclaimer, no lawyer-client relationship notice, and privacy policy for R&N Legal.',
}

const sections = [
  {
    id: 'disclaimer', icon: AlertCircle, title: 'Website Disclaimer',
    content: [
      { h: 'General Information Only', t: 'The information on this website is general in nature and is not intended to constitute legal advice. You should not act (or refrain from acting) based on any information on this website without obtaining specific legal advice tailored to your circumstances from a qualified legal practitioner.' },
      { h: 'No Guarantee of Outcomes', t: 'R&N Legal provides legal information and advice tailored to your circumstances. Outcomes are not guaranteed and depend on facts, evidence and the approach taken by the court, tribunal or decision-maker. Any general description of legal processes or outcomes should not be taken as a prediction or guarantee in relation to your matter.' },
      { h: 'Jurisdiction', t: 'The information on this website relates primarily to the law in Victoria, Australia. If you are located outside Victoria or your matter involves law in another jurisdiction, seek advice from a practitioner qualified in that jurisdiction.' },
      { h: 'Currency of Information', t: 'The law changes regularly. While we endeavour to keep information current and accurate, we make no warranty that information is up to date at any given time. Always consult a qualified legal practitioner for advice on your specific situation.' },
    ],
  },
  {
    id: 'relationship', icon: ShieldCheck, title: 'No Lawyer–Client Relationship',
    content: [
      { h: 'When a Relationship Is Formed', t: 'Contacting us through this website or by email does not create a lawyer–client relationship. A relationship is formed only when we confirm our engagement in writing — for example, by issuing a costs disclosure or engagement letter signed by both parties.' },
      { h: 'Before Engagement', t: 'Until a formal engagement is confirmed in writing, R&N Legal has no obligation to maintain confidentiality in relation to any information you share, and no duty of care to advise you. Please do not send sensitive or confidential information prior to a formal engagement being established.' },
    ],
  },
  {
    id: 'confidentiality', icon: Lock, title: 'Confidentiality & Email',
    content: [
      { h: 'Email Communication', t: 'Email is not always a secure method of communication. If your matter is time-critical or highly sensitive, please call us. Do not send original documents unless specifically requested.' },
      { h: 'Client Confidentiality', t: 'Once a formal lawyer–client relationship is established, all communications between you and R&N Legal are subject to professional obligations of confidentiality.' },
      { h: 'Professional Obligations', t: 'R&N Legal operates in accordance with the Legal Profession Uniform Law (Victoria) and applicable professional conduct rules. All services are provided subject to these obligations.' },
    ],
  },
  {
    id: 'privacy', icon: Eye, title: 'Privacy Policy',
    content: [
      { h: 'Collection of Personal Information', t: `We may collect personal information you provide through forms, email, phone or other contact methods for the purpose of responding to your enquiry, providing legal services and complying with professional obligations. This may include your name, contact details, and information about your legal matter.` },
      { h: 'Use of Personal Information', t: 'Personal information collected by R&N Legal will be used only for the purpose for which it was collected — primarily to respond to your enquiry and provide legal services. We will not sell, disclose or share your personal information with third parties except where required by law or with your consent.' },
      { h: 'Australian Privacy Law', t: `R&N Legal handles personal information in accordance with the Privacy Act 1988 (Cth) and applicable Australian privacy legislation. For concerns about how we handle your personal information, contact us at ${siteConfig.contact.email}.` },
      { h: 'Retention of Records', t: 'We retain client and matter records for the period required under applicable professional rules and legislation. Former clients may request access to their file, subject to applicable legal requirements.' },
      { h: 'Cookies & Analytics', t: 'This website may use cookies and de-identified usage analytics to improve website performance and user experience. Where analytics tools are used, information collected is aggregated and de-identified. You can disable cookies in your browser settings.' },
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
        imageUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80&auto=format&fit=crop"
      />

      {/* Meta bar */}
      <div className="bg-navy-900 border-b border-white/8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-xs font-body text-white/30">
            {[
              { l: 'Applies to', v: 'rnlegal.com.au' },
              { l: 'Jurisdiction', v: 'Victoria, Australia' },
              { l: 'Governing Law', v: 'LPUL (Victoria) 2015' },
              { l: 'Privacy Act', v: 'Privacy Act 1988 (Cth)' },
            ].map(({ l, v }) => (
              <span key={l}><span className="text-white/20">{l}: </span><strong className="text-white/50">{v}</strong></span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <nav className="sticky top-[88px] z-30 bg-navy-950/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="shrink-0 px-4 py-3.5 font-body text-xs font-medium tracking-wide text-white/35 hover:text-gold-300/80 border-b-2 border-transparent hover:border-gold-400/40 transition-all duration-300 whitespace-nowrap">
                {s.title}
              </a>
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

          {/* Regulatory panel */}
          <section className="relative overflow-hidden" data-animate>
            <div className="border border-white/10 p-8 lg:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, #a37214, #dba828, transparent)' }} />
              <h2 className="font-display font-semibold text-white text-2xl mb-4">
                Regulated Legal Practice
              </h2>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-3">
                R&N Legal is a law practice operating in Victoria, Australia. All legal services are provided in accordance with the Legal Profession Uniform Law (Victoria) 2015 and applicable professional conduct rules. Our practitioners hold current practising certificates issued under applicable Victorian legislation.
              </p>
              <p className="text-white/40 font-body text-sm leading-relaxed">
                If you have a complaint about our services, you may contact the Legal Services Commissioner (Victoria) at <strong className="text-white/60">lsc.vic.gov.au</strong>. We are committed to resolving concerns promptly and professionally.
              </p>
              <div className="mt-7 pt-6 border-t border-white/8 text-white/20 text-xs font-body">
                {siteConfig.abn} · {siteConfig.contact.fullAddress}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
