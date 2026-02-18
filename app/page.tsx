import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactCTA from "@/components/ui/ContactCTA";

export const metadata: Metadata = {
  title: "R&N Legal | Boutique Legal Practice Melbourne",
  description:
    "R&N Legal is a Melbourne boutique practice providing clear, practical legal advice across family law, FVIO, migration, conveyancing, litigation and more. Book a consultation today.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    url: siteConfig.url,
    title: "R&N Legal | Boutique Legal Practice Melbourne",
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSnapshot />
      <AboutPreview />
      <ProcessSection />
      <ContactCTA dark />
    </>
  );
}
