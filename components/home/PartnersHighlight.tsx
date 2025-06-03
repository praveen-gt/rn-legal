'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { partners } from '@/lib/data/partner'

export default function PartnersHighlight() {
  const [activePartner, setActivePartner] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Meet Our Partners
          </h2>
          <p className="text-[var(--foreground)] max-w-2xl mx-auto">
            Our team of experienced lawyers brings expertise and dedication to every case.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={partners[activePartner].imageSrc}
                  alt={partners[activePartner].name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--background)] mb-1">
                {partners[activePartner].name}
              </h3>
              <p className="text-[var(--background)] font-medium mb-4">
                {partners[activePartner].designation}
              </p>
              <p className="text-gray-700 mb-3">
                {partners[activePartner].bio}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {partners[activePartner].expertiseAreas.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-[var(--background)] text-[var(--foreground)] text-sm py-1 px-3 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link 
                href={`/partners/${partners[activePartner].slug}`} 
                className="text-[var(--background)] font-medium hover:underline flex items-center"
              >
                Full Profile
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div 
                  key={partner.id}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activePartner === index 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  onClick={() => setActivePartner(index)}
                >
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full mr-3">
                      <Image
                        src={partner.imageSrc}
                        alt={partner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className={`font-bold ${activePartner === index ? 'text-[var(--foreground)]' : 'text-[var(--background)]'}`}>
                        {partner.name}
                      </h4>
                      <p className={`text-sm ${activePartner === index ? 'text-gray-100' : 'text-gray-500'}`}>
                        {partner.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Team?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced partners with years of legal practice</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Specialized expertise across various practice areas</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extensive network across Punjab and Haryana</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven track record of successful case resolution</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}