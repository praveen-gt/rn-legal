import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TrafficSpotlightSection } from '@/components/sections/TrafficSpotlightSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { JurisdictionSection } from '@/components/sections/JurisdictionSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <TrafficSpotlightSection />
      <AboutSection />
      <JurisdictionSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}