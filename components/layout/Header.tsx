'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, ChevronDown, X, ArrowRight, Menu } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'

const navServices = siteConfig.services.slice(0, 6)

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

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

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
        {/* Top strip */}
        <div className={`border-b transition-all duration-500 ${scrolled ? 'border-white/5' : 'border-white/10'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2.5">
              <p className="hidden sm:block text-white/30 font-body text-2xs tracking-[0.2em] uppercase">
                Boutique Law Practice · Melbourne VIC
              </p>
              <div className="flex items-center gap-5 ml-auto">
                <a href={`tel:${siteConfig.contact.phone1}`}
                  className="flex items-center gap-2 text-gold-300/70 hover:text-gold-300 transition-colors duration-300 font-body text-xs tracking-wide group">
                  <div className="w-5 h-5 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400/60 transition-colors">
                    <Phone size={10} className="text-gold-400" />
                  </div>
                  {siteConfig.contact.phone1}
                </a>
                <span className="w-px h-3 bg-white/15" />
                <a href={`mailto:${siteConfig.contact.email}`}
                  className="hidden md:flex items-center gap-2 text-white/30 hover:text-gold-300/70 transition-colors font-body text-xs tracking-wide">
                  <Mail size={11} />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative">
                <Image src="/images/rn-legal-logo-transparent.png" alt="R&N Legal Logo" width={180} height={40} className="rounded-sm" />
                {/* Corner accent */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-gold-400/60" />
              </div>
              {/* <div className="hidden sm:block">
                <div className="font-display font-semibold text-white text-[22px] leading-none tracking-tight">
                  R&N Legal
                </div>
                <div className="text-[9px] font-body font-medium tracking-[0.28em] text-gold-500/70 uppercase mt-0.5">
                  Solicitors · Melbourne
                </div>
              </div> */}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-gold-300'
                      : 'text-white/60 hover:text-white'
                  }`}>
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
                <button className={`relative flex items-center gap-1.5 px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                  isActive('/services') ? 'text-gold-300' : 'text-white/60 hover:text-white'
                }`}>
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold-gradient transition-transform duration-300 origin-left ${
                    isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>

                {/* Mega dropdown */}
                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] animate-slide-down"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="bg-navy-950/98 backdrop-blur-xl border border-white/10 shadow-[0_24px_80px_rgba(6,13,26,0.7)]">
                      {/* Arrow */}
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
                            <Link key={svc.slug} href={`/services#${svc.slug}`}
                              className="group/item flex items-center gap-3 p-3 hover:bg-white/5 transition-colors duration-200 rounded-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover/item:bg-gold-400 transition-colors shrink-0" />
                              <div>
                                <p className="text-white/80 group-hover/item:text-white font-body text-sm font-medium transition-colors">
                                  {svc.shortTitle}
                                </p>
                                <p className="text-white/30 font-body text-xs leading-relaxed mt-0.5 line-clamp-1">
                                  {svc.points[0]}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                          <p className="text-white/30 font-body text-xs">Mon–Fri · 10am–5pm</p>
                          <a href={`tel:${siteConfig.contact.phone1}`}
                            className="flex items-center gap-2 text-gold-400/80 hover:text-gold-300 font-body text-xs transition-colors">
                            <Phone size={11} /> {siteConfig.contact.phone1}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact"
                className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 group ${
                  isActive('/contact') ? 'text-gold-300' : 'text-white/60 hover:text-white'
                }`}>
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

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-white transition-all duration-400 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-px bg-gold-400 transition-all duration-400 ${mobileOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-400 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gold-gradient transition-none"
          style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-600 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        {/* Drawer panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-navy-950 shadow-navy-lg flex flex-col transition-transform duration-500 cubic-bezier-expo ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #a37214, #dba828)' }}>
                <span className="font-display font-semibold text-navy-950 text-xs">R&N</span>
              </div>
              <span className="font-display text-white text-lg font-semibold">R&N Legal</span>
            </div>
            <button onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item, i) => (
                <Link key={item.href} href={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 font-body font-medium text-sm tracking-wide transition-all duration-300 border-l-2 ${
                    isActive(item.href)
                      ? 'text-gold-300 border-gold-400 bg-gold-400/5'
                      : 'text-white/60 border-transparent hover:text-white hover:border-gold-500/40 hover:bg-white/3'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {item.label}
                  <ArrowRight size={14} className="text-current opacity-40" />
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 font-body font-medium text-sm tracking-wide transition-all duration-300 border-l-2 ${
                    isActive('/services')
                      ? 'text-gold-300 border-gold-400 bg-gold-400/5'
                      : 'text-white/60 border-transparent hover:text-white hover:border-gold-500/40'
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServices ? 'rotate-180 text-gold-400' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${mobileServices ? 'max-h-[600px]' : 'max-h-0'}`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <div className="pl-4 py-2 space-y-0.5">
                    {siteConfig.services.map(svc => (
                      <Link key={svc.slug} href={`/services#${svc.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-white/40 hover:text-gold-300 font-body text-xs tracking-wide transition-colors">
                        <span className="w-1 h-1 rounded-full bg-gold-500/50 shrink-0" />
                        {svc.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
              <p className="text-white/20 font-body text-2xs tracking-[0.2em] uppercase px-1">Contact</p>
              <a href={`tel:${siteConfig.contact.phone1}`}
                className="flex items-center gap-3 text-white/60 hover:text-gold-300 font-body text-sm transition-colors px-1">
                <Phone size={14} className="text-gold-500/50" />
                {siteConfig.contact.phone1}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-gold-300 font-body text-sm transition-colors px-1">
                <Mail size={14} className="text-gold-500/50" />
                {siteConfig.contact.email}
              </a>
            </div>
          </nav>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-white/10">
            <Link href="/contact" className="btn-gold w-full justify-center">
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
            <p className="text-white/20 font-body text-2xs tracking-wide text-center mt-3">
              Mon–Fri · 10:00 am – 5:00 pm
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
