import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedServices from '@/components/home/FeaturedServices'
import PartnersHighlight from '@/components/home/PartnersHighlight'
import Testimonials from '@/components/home/Testimonials'
// import ContactSection from '@/components/home/ContactSection'
import ScrollReveal from '@/components/ui/animations/ScrollReveal'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { testimonials } from '@/lib/data/testimonials'

export const metadata: Metadata = {
  title: 'Expert Legal Services in High Court Chandigarh | Vidhi Mantra Legal Consultants',
  description: 'Premier law firm providing expert legal services in Punjab and Haryana High Court with specialization in litigation, corporate advisory, and dispute resolution.',
}

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* <ScrollReveal>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--background)] mb-4">
                Trusted Legal Expertise Since 2013
              </h2>
              <p className="text-gray-700 text-lg">
                Vidhi Mantra Legal Consultants is a premier law partnership firm specializing in providing legal services across various sectors with an emphasis on litigation, corporate advisory, and dispute resolution.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal> */}

      <ScrollReveal>
  <section className="py-16 sm:py-20 md:py-24 bg-[var(--background)] text-[var(--foreground)]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Trusted Legal Expertise Since 2013
        </h2>
        <p className="text-lg text-gray-50 dark:text-gray-300">
          Vidhi Mantra Legal Consultants is a premier law partnership firm specializing in providing legal services across various sectors with an emphasis on litigation, corporate advisory, and dispute resolution.
        </p>
      </div>
    </div>
  </section>
</ScrollReveal>

      
      <ScrollReveal>
        <FeaturedServices />
      </ScrollReveal>
      
      <ScrollReveal>
        <PartnersHighlight />
      </ScrollReveal>
      
      {/* <ScrollReveal> */}
        <Testimonials />
      {/* </ScrollReveal> */}
      
      {/* <ScrollReveal>
        <ContactSection />
      </ScrollReveal> */}
    </>
  )
}