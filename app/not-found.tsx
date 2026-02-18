import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <span className="font-display font-light text-white/[0.025]"
          style={{ fontSize: 'clamp(14rem, 35vw, 34rem)', lineHeight: 1 }}>404</span>
      </div>
      <div className="relative z-10 text-center">
        <div className="w-12 h-px mx-auto mb-8" style={{ background: 'linear-gradient(90deg, transparent, #dba828, transparent)' }} />
        <h1 className="font-display font-light text-white text-5xl sm:text-6xl mb-4">Page Not Found</h1>
        <p className="text-white/35 font-body mb-10 max-w-sm mx-auto leading-relaxed">
          The page you are looking for does not exist. It may have been moved or the URL may be incorrect.
        </p>
        <Link href="/" className="btn-gold">
          <ArrowLeft size={16} />
          Return Home
        </Link>
      </div>
    </div>
  )
}
