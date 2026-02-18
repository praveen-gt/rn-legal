import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { Cormorant_Garamond, Cormorant, Jost } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "R&N Legal | Boutique Legal Practice Melbourne",
    template: "%s — R&N Legal",
  },
  description: siteConfig.description,
  keywords: [
    "Melbourne lawyer", "boutique law firm Melbourne", "family law Melbourne",
    "intervention order lawyer Victoria", "FVIO lawyer", "immigration lawyer Melbourne",
    "conveyancing Melbourne", "civil litigation Melbourne", "R&N Legal", "Rajat Kanti Roy",
    "wills estates Melbourne", "traffic offence lawyer Victoria",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "R&N Legal | Boutique Legal Practice Melbourne",
    description: siteConfig.description,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "R&N Legal | Boutique Legal Practice Melbourne",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteConfig.url },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.phone1,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address,
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU",
  },
  "openingHours": "Mo-Fr 10:00-17:00",
  "areaServed": "Victoria, Australia",
  "priceRange": "$$",
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-accent",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${cormorantGaramond.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
