import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Instagram,
  Facebook,
  Music,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

function TikTokIcon({ size = 16, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.886V3h-3.356v13.312a2.592 2.592 0 1 1-2.592-2.592c.181 0 .357.019.527.054V10.41a5.936 5.936 0 0 0-.527-.025 5.948 5.948 0 1 0 5.948 5.948V9.743a8.122 8.122 0 0 0 4.77 1.564V7.951a4.79 4.79 0 0 1-1-.265z"/>
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/40 font-body relative overflow-hidden">
      {/* Top gold line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(219,168,40,0.4), transparent)",
        }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(196,145,26,0.04), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 font-display font-light text-white/[0.015]"
          style={{ fontSize: "18rem", lineHeight: 1 }}
        >
          R&N
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/rn-legal-logo-transparent.png"
                alt="R&N Legal Logo"
                width={180}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              {siteConfig.footer.tagline}
            </p>
            <p className="text-white/45 text-xs mt-4">{siteConfig.abn}</p>

            <div className="mt-6">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold-300 transition-colors"
                >
                  <Instagram size={16} />
                </Link>

                <Link
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold-300 transition-colors"
                >
                  <Facebook size={16} />
                </Link>

                <Link
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold-300 transition-colors"
                >
                  <TikTokIcon className="text-white/50 hover:text-gold-300 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white/65 font-body font-semibold text-xs tracking-[0.18em] uppercase mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-300/80 text-sm transition-colors duration-300 group"
                  >
                    <span className="w-1 h-px bg-current opacity-40 group-hover:w-3 transition-all duration-300" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More areas + site links */}
          <div>
            <h4 className="text-white/65 font-body font-semibold text-xs tracking-[0.18em] uppercase mb-5">
              More Services
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.slice(5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-300/80 text-sm transition-colors duration-300 group"
                  >
                    <span className="w-1 h-px bg-current opacity-40 group-hover:w-3 transition-all duration-300" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-white/8">
                <Link
                  href="/about"
                  className="text-white/60 hover:text-gold-300/80 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-white/60 hover:text-gold-300/80 text-sm transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/65 font-body font-semibold text-xs tracking-[0.18em] uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                // { icon: Phone, content: (
                //   <div>
                {
                  icon: Phone,
                  content: (
                    <div>
                      {/* Phone 1 */}
                      <Link
                        href={`tel:${siteConfig.contact.phone1}`}
                        className="block text-white/80 hover:text-gold-300/80 text-sm transition-colors"
                      >
                        {siteConfig.contact.phone1}
                      </Link>
                      <Link
                        href={`https://wa.me/${siteConfig.contact.whatsapp1}?text=Hi, I would like to book a consultation`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-green-400/80 hover:text-green-300 text-xs transition-colors"
                      >
                        WhatsApp
                      </Link>

                      {/* Phone 2 */}
                      <Link
                        href={`tel:${siteConfig.contact.phone2}`}
                        className="block text-white/80 hover:text-gold-300/60 text-sm transition-colors mt-2"
                      >
                        {siteConfig.contact.phone2}
                      </Link>
                      <Link
                        href={`https://wa.me/${siteConfig.contact.whatsapp2}?text=Hi, I would like to book a consultation`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-green-400/80 hover:text-green-300 text-xs transition-colors"
                      >
                        WhatsApp
                      </Link>
                    </div>
                    // )},                  </div>
                  ),
                },
                {
                  icon: Mail,
                  content: (
                    <Link
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white/80 hover:text-gold-300/80 text-sm transition-colors"
                    >
                      {siteConfig.contact.email}
                    </Link>
                  ),
                },
                {
                  icon: MapPin,
                  content: (
                    <p className="text-white/60 text-xs leading-relaxed">
                      {siteConfig.contact.fullAddress}
                    </p>
                  ),
                },
                {
                  icon: Clock,
                  content: (
                    <p className="text-white/60 text-xs leading-relaxed">
                      {siteConfig.contact.hours}
                    </p>
                  ),
                },
              ].map(({ icon: Icon, content }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon
                    size={13}
                    className="text-gold-400/50 mt-0.5 shrink-0"
                  />
                  {content}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/contact" className="btn-gold !py-3 !px-5 !text-xs">
                Book Consultation
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/8 py-6">
          <p className="text-white/55 text-xs leading-relaxed mb-4 max-w-4xl">
Liability limited by a scheme approved under Professional Standards Legislation. Information on this website is general in nature and does not constitute legal advice.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/55">
            <p>© {year} R&N Legal. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {siteConfig.footer.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-gold-400/60 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
