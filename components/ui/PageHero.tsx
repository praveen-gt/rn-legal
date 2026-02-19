import Image from "next/image"

interface PageHeroProps {
  label?: string
  title: string
  italic?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  accent?: string
}

export function PageHero({ label, title, italic, description, imageUrl, imageAlt, accent }: PageHeroProps) {
  const img = imageUrl || '/images/default-hero.jpg'
  return (
    <section className="relative min-h-[55vh] sm:min-h-[62vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src={img}
          alt={imageAlt || title}
          width={1200}
          height={800}
          className="w-full h-full object-cover object-center"
          data-parallax="0.2"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(6,13,26,0.45) 0%, rgba(6,13,26,0.75) 60%, rgba(6,13,26,0.96) 100%)' }} />
      </div>

      {/* Gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(219,168,40,0.3), transparent)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        {label && (
          <div className="section-label text-gold-400/80 mb-5" data-animate data-delay="1">
            {label}
          </div>
        )}
        <h1 className="font-display font-light text-white leading-[1.05]" data-animate data-delay="2"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
          {title}{' '}
          {italic && <em className="italic not-italic font-light text-gold-gradient bg-clip-text"
            style={{ background: 'linear-gradient(105deg, #dba828, #f1da93, #dba828)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {italic}
          </em>}
        </h1>
        {description && (
          <p className="mt-5 text-white/55 font-body text-lg max-w-2xl leading-relaxed" data-animate data-delay="3">
            {description}
          </p>
        )}
        {/* Bottom accent line */}
        <div className="mt-8 w-16 h-px bg-gold-gradient" data-animate="scale" data-delay="4" />
      </div>
    </section>
  )
}
