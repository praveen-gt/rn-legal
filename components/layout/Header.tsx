'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/practice-areas', label: 'Practice Areas' },
    // { href: '/partners', label: 'Our Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative z-50">
            <div className="flex items-center">
              <Image
                src={`/images/Vidhi-Mantra${isScrolled ? '-Logo' : '-White-Logo'}.png`}
                width={200}
                height={100}
                alt='Vidhi Mantra Logo'
                className='h-10 w-auto transition-all duration-300'
              />
              {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">VM</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Vidhi Mantra
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-accent transition-colors duration-200
                ${pathname === link.href ? 'border-b-2 border-accent' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-600 text-primary font-bold py-2 px-4 rounded-md transition-all duration-300"
            >
              Free Consultation
            </Link> */}
            <Link href="/contact" className="btn-accent">
              Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-colors ${isMobileMenuOpen ? 'text-white' : isScrolled ? 'text-primary' : 'text-white'
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-primary z-40 lg:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.nav className="flex flex-col items-center space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={navItemVariants}
                      >
                        <Link
                          href={link.href}
                          className={`text-white text-xl font-medium hover:text-accent transition-colors duration-200
                          ${pathname === link.href ? 'border-b-2 border-accent' : ''}`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      custom={navLinks.length}
                      initial="hidden"
                      animate="visible"
                      variants={navItemVariants}
                    >

                      <Link
                        href="/contact"
                        className="bg-secondary hover:bg-secondary-600 text-primary font-bold py-2 px-6 rounded-md transition-all duration-300 text-xl"
                      >
                        Free Consultation
                      </Link>
                    </motion.div>
                  </motion.nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}