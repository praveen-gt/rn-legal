'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 40)
      setScrollProgress(Math.min((scrollY / docH) * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServices(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleServicesEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setServicesOpen(true)
  }

  const handleServicesLeave = () => {
    timerRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <>
      {/* ── Header ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-xl shadow-[0_1px_0_rgba(219,168,40,0.12),0_4px_40px_rgba(6,13,26,0.5)]'
            : 'bg-transparent'
        }`}
      >
        {/* Top strip — desktop only */}
        <div className={`hidden lg:block border-b transition-all duration-500 ${scrolled ? 'border-white/5' : 'border-white/10'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between py-2.5">
              <p className="text-white/60 font-body text-xs tracking-[0.2em] uppercase">
                Boutique Law Practice · Melbourne VIC
              </p>
              <div className="flex items-center gap-5">
                <a
                  href={`tel:${siteConfig.contact.phone1}`}
                  className="flex items-center gap-2 text-gold-300/70 hover:text-gold-300 transition-colors duration-300 font-body text-xs tracking-wide group"
                >
                  <div className="w-5 h-5 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400/60 transition-colors">
                    <Phone size={10} className="text-gold-400" />
                  </div>
                  {siteConfig.contact.phone1}
                </a>
                <span className="w-px h-3 bg-white/15" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-gold-300/70 transition-colors font-body text-xs tracking-wide"
                >
                  <Mail size={11} />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0">
              <Image
                src="/images/rn-legal-logo-transparent.png"
                alt="R&N Legal Logo"
                width={180}
                height={40}
                className="w-[140px] sm:w-[160px] lg:w-[180px] h-auto rounded-sm"
                priority
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-gold-400/60" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isActive(item.href) ? 'text-gold-300' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold-gradient transition-transform duration-300 origin-left ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                ref={dropdownRef}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                className="relative"
              >
                <button
                  className={`relative flex items-center gap-1.5 px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isActive('/services') ? 'text-gold-300' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold-gradient transition-transform duration-300 origin-left ${
                    isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] animate-slide-down"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="bg-navy-950/98 backdrop-blur-xl border border-white/10 shadow-[0_24px_80px_rgba(6,13,26,0.7)]">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-navy-950 border-l border-t border-white/10" />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <p className="section-label">Practice Areas</p>
                          <Link href="/services" className="text-xs font-body text-gold-400/70 hover:text-gold-300 tracking-wide flex items-center gap-1 transition-colors">
                            View All <ArrowRight size={12} />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {siteConfig.services.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services#${svc.slug}`}
                              className="group/item flex items-center gap-3 p-3 hover:bg-white/5 transition-colors duration-200 rounded-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover/item:bg-gold-400 transition-colors shrink-0" />
                              <div>
                                <p className="text-white/80 group-hover/item:text-white font-body text-sm font-medium transition-colors">
                                  {svc.shortTitle}
                                </p>
                                <p className="text-white/60 font-body text-xs leading-relaxed mt-0.5 line-clamp-1">
                                  {svc.points[0]}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                          <p className="text-white/60 font-body text-xs">Mon–Fri · 10am–5pm</p>
                          <a href={`tel:${siteConfig.contact.phone1}`} className="flex items-center gap-2 text-gold-400/80 hover:text-gold-300 font-body text-xs transition-colors">
                            <Phone size={11} /> {siteConfig.contact.phone1}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                  isActive('/contact') ? 'text-gold-300' : 'text-white/60 hover:text-white'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold-gradient transition-transform duration-300 origin-left ${
                  isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              <div className="ml-4">
                <Link href="/contact" className="btn-gold">
                  Book Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </nav>

            {/* Mobile hamburger — clean, no conflict */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-end justify-center w-10 h-10 gap-[5px] flex-shrink-0"
              aria-label="Open menu"
            >
              <span className="block w-6 h-[1.5px] bg-white rounded-full" />
              <span className="block w-4 h-[1.5px] bg-gold-400 rounded-full" />
              <span className="block w-6 h-[1.5px] bg-white rounded-full" />
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gold-gradient transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* ══════════════════════════════════════
          Full-Screen Mobile Menu Overlay
      ══════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden flex flex-col transition-all duration-500 ease-in-out ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(160deg, #060d1a 0%, #0a1628 55%, #0e1f36 100%)',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {/* Ambient glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute bottom-20 -left-10 w-64 h-64 rounded-full bg-gold-500/4 blur-3xl" />
        </div>

        {/* ── Top bar ── */}
        <div className="relative flex items-center justify-between px-5 h-16 border-b border-white/8 flex-shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex-shrink-0">
            <Image
              src="/images/rn-legal-logo-transparent.png"
              alt="R&N Legal Logo"
              width={140}
              height={32}
              className="h-auto rounded-sm"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-gold-300 transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="relative flex-1 overflow-y-auto overscroll-contain">
          <div className="px-5 pt-8 pb-4">

            {/* Section label */}
            {/* <p className="text-white/50 font-body text-[9px] tracking-[0.35em] uppercase mb-5 px-1">
              Menu
            </p> */}

            {/* Primary nav links */}
            <nav className="space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between w-full px-4 py-[14px] font-body font-semibold text-[15px] tracking-wide rounded-sm border-l-2 transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-gold-300 border-gold-400 bg-gold-400/6'
                      : 'text-white/65 border-transparent hover:text-white hover:border-gold-500/30 hover:bg-white/4'
                  }`}
                >
                  {item.label}
                  <ArrowRight size={15} className="opacity-35 flex-shrink-0" />
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className={`flex items-center justify-between w-full px-4 py-[14px] font-body font-semibold text-[15px] tracking-wide rounded-sm border-l-2 transition-all duration-200 ${
                    isActive('/services')
                      ? 'text-gold-300 border-gold-400 bg-gold-400/6'
                      : 'text-white/65 border-transparent hover:text-white hover:border-gold-500/30 hover:bg-white/4'
                  }`}
                >
                  Services
                  <ChevronDown
                    size={15}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      mobileServices ? 'rotate-180 text-gold-400' : 'opacity-35'
                    }`}
                  />
                </button>

                {/* Accordion body */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    mobileServices ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <div className="pt-1 pb-3">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-8 py-2.5 text-gold-400/60 hover:text-gold-300 font-body text-xs tracking-[0.2em] uppercase transition-colors"
                    >
                      <ArrowRight size={11} />
                      View All Services
                    </Link>
                    <div className="mt-1 space-y-0.5 px-4">
                      {siteConfig.services.map(svc => (
                        <Link
                          key={svc.slug}
                          href={`/services#${svc.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-white/45 hover:text-white/90 hover:bg-white/4 font-body text-sm tracking-wide transition-all duration-150 rounded-sm"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold-500/50 flex-shrink-0" />
                          {svc.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Divider */}
            <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Contact section */}
            <div>
              <p className="text-white/50 font-body text-[9px] tracking-[0.35em] uppercase mb-5 px-1">
                Get in Touch
              </p>

              <div className="space-y-1">
                <a
                  href={`tel:${siteConfig.contact.phone1}`}
                  className="flex items-center gap-4 px-4 py-[14px] rounded-sm hover:bg-white/4 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full border border-gold-500/25 flex items-center justify-center group-hover:border-gold-400/50 transition-colors flex-shrink-0">
                    <Phone size={13} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/25 font-body text-[9px] tracking-[0.25em] uppercase mb-0.5">Call us</p>
                    <p className="text-white/75 group-hover:text-gold-300 font-body text-[15px] font-medium transition-colors">
                      {siteConfig.contact.phone1}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 px-4 py-[14px] rounded-sm hover:bg-white/4 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full border border-gold-500/25 flex items-center justify-center group-hover:border-gold-400/50 transition-colors flex-shrink-0">
                    <Mail size={13} className="text-gold-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/25 font-body text-[9px] tracking-[0.25em] uppercase mb-0.5">Email us</p>
                    <p className="text-white/75 group-hover:text-gold-300 font-body text-[15px] font-medium transition-colors truncate">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 px-4 py-[14px]">
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/60">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/25 font-body text-[9px] tracking-[0.25em] uppercase mb-0.5">Hours</p>
                    <p className="text-white/40 font-body text-sm">Mon – Fri &nbsp;·&nbsp; 10:00 am – 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sticky bottom CTA ── */}
        <div className="relative px-5 py-5 border-t border-white/8 flex-shrink-0 bg-navy-950/60 backdrop-blur-sm">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-gold w-full justify-center py-4 text-[15px]"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </Link>
          <p className="text-white/40 font-body text-[9px] tracking-[0.25em] uppercase text-center mt-3">
            Boutique Law Practice · Melbourne VIC
          </p>
        </div>
      </div>
    </>
  )
}