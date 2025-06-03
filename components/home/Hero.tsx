'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    // <div className="relative bg-primary-500 text-white pt-60 pb-24 flex items-center overflow-hidden">
    //   {/* Background image with overlay */}
    //   <div className="absolute inset-0 z-0">
    //     <Image
    //       src="/images/hero-background.jpg"
    //       alt="Law firm office"
    //       fill
    //       priority
    //       className="object-cover"
    //     />
    //     <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
    //   </div>

<div
      className="relative pt-40 pb-20 sm:pt-48 sm:pb-24 md:pt-56 md:pb-32 lg:pt-64 lg:pb-40 overflow-hidden text-[var(--foreground)] bg-[var(--background)]"
    >
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[image:var(--background-hero-pattern)] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
  </div>

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-[var(--foreground)]"
          >
            Excellence in Legal Services at Punjab & Haryana High Court
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Premier law partnership firm specializing in litigation, corporate advisory, and dispute resolution across Punjab and Haryana.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* <Link href="/contact" className="bg-secondary hover:bg-secondary-600 text-primary font-bold py-3 px-6 rounded-md transition-all duration-300 text-center">
              Schedule Consultation
            </Link> */}
             <Link
              href="/contact"
              className="bg-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-600)] text-[var(--color-primary-DEFAULT)] font-bold py-3 px-6 rounded-md text-center transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link href="/practice-areas" className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-6 rounded-md transition-all duration-300 text-center">
              Our Practice Areas
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}