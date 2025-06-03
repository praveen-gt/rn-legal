import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: {
    default: 'Vidhi Mantra Legal Consultants | High Court Chandigarh',
    template: '%s | Vidhi Mantra Legal Consultants',
  },
  description: 'Premier law partnership firm specializing in litigation, corporate advisory, and dispute resolution in Punjab and Haryana High Court.',
  keywords: ['law firm', 'legal consultants', 'high court', 'chandigarh', 'punjab', 'haryana', 'litigation', 'corporate law', 'banking law'],
  authors: [{ name: 'Vidhi Mantra Legal Consultants' }],
  creator: 'Vidhi Mantra Legal Consultants',
  publisher: 'Vidhi Mantra Legal Consultants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vidhimantra.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vidhi Mantra Legal Consultants | High Court Chandigarh',
    description: 'Premier law partnership firm specializing in litigation, corporate advisory, and dispute resolution.',
    url: 'https://vidhimantra.com',
    siteName: 'Vidhi Mantra Legal Consultants',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidhi Mantra Legal Consultants | High Court Chandigarh',
    description: 'Premier law partnership firm specializing in litigation, corporate advisory, and dispute resolution.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#112F41',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}