// 'use client'

// import { useState, useEffect } from 'react'
// import { Scale, X, ArrowRight } from 'lucide-react'
// import { siteConfig } from '@/lib/config'

// export function DisclaimerPopup() {
//   const [visible, setVisible] = useState(false)
//   const [leaving, setLeaving] = useState(false)

//   useEffect(() => {
//     const accepted = sessionStorage.getItem('rn_disclaimer_v2')
//     if (!accepted) {
//       const t = setTimeout(() => setVisible(true), 1000)
//       return () => clearTimeout(t)
//     }
//   }, [])

//   const accept = () => {
//     sessionStorage.setItem('rn_disclaimer_v2', '1')
//     setLeaving(true)
//     setTimeout(() => setVisible(false), 500)
//   }

//   const decline = () => { window.location.href = 'https://www.google.com' }

//   if (!visible) return null

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6"
//       style={{ background: 'rgba(6,13,26,0.75)', backdropFilter: 'blur(8px)' }}
//     >
//       <div
//         className="w-full sm:max-w-lg relative overflow-hidden"
//         style={{
//           animation: leaving
//             ? 'disclaimer-out 0.5s cubic-bezier(0.16,1,0.3,1) forwards'
//             : 'disclaimer-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
//         }}
//       >
//         {/* Gold top border */}
//         <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #a37214, #dba828, #f1da93, #dba828, #a37214)' }} />

//         <div className="bg-navy-950 border-x border-b border-white/10">
//           {/* Header */}
//           <div className="px-7 pt-7 pb-5 border-b border-white/8">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 flex items-center justify-center shrink-0"
//                 style={{ background: 'rgba(196,145,26,0.12)', border: '1px solid rgba(196,145,26,0.25)' }}>
//                 <Scale size={22} className="text-gold-400" />
//               </div>
//               <div>
//                 <h2 className="font-display text-white text-xl font-semibold leading-snug">
//                   Important Legal Notice
//                 </h2>
//                 <p className="text-white/35 font-body text-xs tracking-widest uppercase mt-0.5">
//                   Please read before continuing
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Body */}
//           <div className="px-7 py-6">
//             <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
//               {siteConfig.disclaimer.popupText}
//             </p>

//             <div className="space-y-2.5 mb-7">
//               {[
//                 'Website content is general information only — not legal advice',
//                 'Contacting us does not create a lawyer–client relationship',
//                 'For urgent safety matters, contact emergency services (000) first',
//                 'Outcomes depend on individual facts and circumstances',
//               ].map((item) => (
//                 <div key={item} className="flex items-start gap-3">
//                   <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
//                   <p className="text-white/45 font-body text-xs leading-relaxed">{item}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <button onClick={accept} className="btn-gold flex-1 justify-center">
//                 I Understand & Accept
//                 <ArrowRight size={14} />
//               </button>
//               <button onClick={decline}
//                 className="flex-1 justify-center px-6 py-3.5 border border-white/15 text-white/40 hover:text-white/70 hover:border-white/30 font-body text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center gap-2">
//                 Leave Site
//               </button>
//             </div>

//             <p className="text-white/50 font-body text-[10px] text-center mt-4 leading-relaxed">
//               By accepting, you acknowledge this disclaimer. R&N Legal · {siteConfig.abn}
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes disclaimer-in {
//           from { opacity: 0; transform: translateY(40px) scale(0.97); }
//           to { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         @keyframes disclaimer-out {
//           from { opacity: 1; transform: translateY(0) scale(1); }
//           to { opacity: 0; transform: translateY(20px) scale(0.97); }
//         }
//       `}</style>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { Scale, ArrowRight, ShieldAlert } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function DisclaimerPopup() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const accepted = sessionStorage.getItem('rn_disclaimer_v2')
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    sessionStorage.setItem('rn_disclaimer_v2', '1')
    setLeaving(true)
    setTimeout(() => setVisible(false), 500)
  }

  const decline = () => { window.location.href = 'https://www.google.com' }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(4,10,20,0.85)', backdropFilter: 'blur(10px)' }}
    >
      <div
        className="w-full sm:max-w-xl relative overflow-hidden"
        style={{
          animation: leaving
            ? 'disclaimer-out 0.45s cubic-bezier(0.16,1,0.3,1) forwards'
            : 'disclaimer-in 0.55s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Gold accent bar */}
        <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent, #a37214 20%, #dba828 50%, #a37214 80%, transparent)' }} />

        <div className="bg-navy-950 border-x border-b border-white/10 shadow-2xl">

          {/* Header */}
          <div className="px-8 pt-8 pb-6">
            <div className="flex items-start gap-5">
              <div
                className="w-11 h-11 flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'rgba(196,145,26,0.1)', border: '1px solid rgba(196,145,26,0.2)' }}
              >
                <Scale size={20} className="text-gold-400" />
              </div>
              <div>
                <p className="text-gold-400/70 font-body text-[10px] tracking-[0.2em] uppercase font-medium mb-1.5">
                  Before You Continue
                </p>
                <h2 className="font-display text-white text-xl font-semibold leading-snug">
                  Important Legal Notice
                </h2>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8 h-px bg-white/8" />

          {/* Body */}
          <div className="px-8 py-6">

            {/* Lead text — clearly readable */}
            <p className="text-white/75 font-body text-sm leading-[1.8] mb-6">
              {siteConfig.disclaimer.popupText}
            </p>

            {/* Key points */}
            <div className="space-y-0 mb-7 border border-white/8 divide-y divide-white/[0.06]"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              {[
                { icon: '—', text: 'Website content is general information only — not legal advice' },
                { icon: '—', text: 'Contacting us does not create a lawyer–client relationship' },
                { icon: '—', text: 'For urgent safety matters, contact emergency services (000) first' },
                { icon: '—', text: 'Outcomes depend on individual facts and circumstances' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 px-5 py-3.5">
                  <span className="text-gold-400/50 font-body text-xs mt-px select-none shrink-0">—</span>
                  <p className="text-white/80 font-body text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={accept}
                className="btn-gold flex-1 justify-center group"
              >
                I Understand & Accept
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={decline}
                className="flex-1 justify-center px-6 py-3.5 border border-white/12 text-white/35 hover:text-white/60 hover:border-white/25 font-body text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 flex items-center gap-2"
              >
                Leave Site
              </button>
            </div>

            {/* Footer note */}
            <p className="text-white/50 font-body text-[10px] text-center mt-5 leading-relaxed tracking-wide">
              By accepting, you acknowledge this disclaimer.
              <span className="mx-1.5 text-white/50">·</span>
              R&N Legal
              <span className="mx-1.5 text-white/50">·</span>
              {siteConfig.abn}
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes disclaimer-in {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes disclaimer-out {
          from { opacity: 1; transform: translateY(0)    scale(1);    }
          to   { opacity: 0; transform: translateY(16px) scale(0.98); }
        }
      `}</style>
    </div>
  )
}