import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SlideIn from "@/components/ui/animations/SlideIn";
import ScrollReveal from "@/components/ui/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Vidhi Mantra Legal Consultants",
  description: "Learn about Vidhi Mantra Legal Consultants, a premier law partnership firm providing expert legal services across various sectors in Punjab and Haryana.",
  openGraph: {
    title: "About Vidhi Mantra Legal Consultants",
    description: "A premier law partnership firm with expertise in litigation, corporate advisory, and dispute resolution.",
    type: "website",
    url: "https://vidhimantralegal.com/about",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhi Mantra Legal Consultants",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Vidhi Mantra office building"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SlideIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Our Firm</h1>
          </SlideIn>
          <SlideIn direction="up" delay={0.1}>
            <p className="text-xl md:text-2xl max-w-3xl">
              Vidhi Mantra Legal Consultants is a premier law partnership firm providing expert legal services across various sectors in Punjab and Haryana.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* Overview Section */}
      <ScrollReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story & Mission
                </h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Founded by experienced legal professionals with a vision to provide accessible, effective legal services, Vidhi Mantra Legal Consultants has grown into a respected name in the legal community of Punjab and Haryana.
                  </p>
                  <p>
                    Our mission is to deliver high-quality legal solutions that address our clients' specific needs while maintaining the highest standards of professional ethics and integrity. We believe in building long-term relationships with our clients based on trust, transparency, and reliable service.
                  </p>
                  <p>
                    Through our extensive network of legal professionals across Punjab and Haryana, we ensure that our clients receive localized, efficient, and reliable legal services regardless of their location within these states.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/images/about-story.jpg"
                  alt="Vidhi Mantra team meeting"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our practice and define our approach to legal services.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="slideUp" delay={0.1} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards in our practice, providing honest advice and transparent communication at all times.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              </AnimatedSection>

              </div>
              </div>
              </section>
              </main>
  )
}

export default AboutPage