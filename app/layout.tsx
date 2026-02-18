// import type { Metadata } from 'next'
// import './globals.css'
// import { Header } from '@/components/layout/Header'
// import { Footer } from '@/components/layout/Footer'
// import { DisclaimerPopup } from '@/components/ui/DisclaimerPopup'
// import { PremiumEffects } from '@/components/ui/PremiumEffects'
// import { siteConfig } from '@/lib/config'

// export const metadata: Metadata = {
//   title: {
//     default: `${siteConfig.name} — ${siteConfig.tagline}`,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: ['lawyer Melbourne', 'family law Victoria', 'migration law', 'conveyancing Melbourne', 'FVIO lawyer', 'litigation Melbourne', 'R&N Legal', 'boutique law firm Melbourne'],
//   openGraph: {
//     title: siteConfig.name,
//     description: siteConfig.description,
//     url: siteConfig.url,
//     siteName: siteConfig.name,
//     locale: 'en_AU',
//     type: 'website',
//   },
//   robots: { index: true, follow: true },
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en-AU" className="scroll-smooth">
//       <body className="flex flex-col min-h-screen antialiased">
//         {/* Custom cursor elements */}
//         <div id="cursor-dot" className="no-print" aria-hidden="true" />
//         <div id="cursor-ring" className="no-print" aria-hidden="true" />
        
//         <PremiumEffects />
//         <DisclaimerPopup />
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }


import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DisclaimerPopup } from '@/components/ui/DisclaimerPopup'
import { PremiumEffects } from '@/components/ui/PremiumEffects'
import { siteConfig } from '@/lib/config'


export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['lawyer Melbourne', 'family law Victoria', 'migration law', 'conveyancing Melbourne', 'FVIO lawyer', 'litigation Melbourne', 'R&N Legal', 'boutique law firm Melbourne'],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="en-AU" className={`scroll-smooth ${cormorant.variable} ${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-body flex flex-col min-h-screen antialiased">
        {/* Custom cursor elements */}
        <div id="cursor-dot" className="no-print" aria-hidden="true" />
        <div id="cursor-ring" className="no-print" aria-hidden="true" />

        <PremiumEffects />
        <DisclaimerPopup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}