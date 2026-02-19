'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function PremiumEffects() {

  const pathname = usePathname()

  useEffect(() => {

    /* ============================================================
       SCROLL ANIMATION FIX FOR NEXTJS NAVIGATION
    ============================================================ */

    let observer: IntersectionObserver | null = null

    const initAnimations = () => {

      document.documentElement.classList.add('js-ready')

      observer = new IntersectionObserver(
        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add('in-view')

              observer?.unobserve(entry.target)

            }

          })

        },
        {
          threshold: 0.08,
          rootMargin: '120px 0px -40px 0px'
        }
      )

      document
        .querySelectorAll('[data-animate]')
        .forEach(el => observer?.observe(el))
    }


    /* IMPORTANT: delay until DOM fully rendered */
    const timeoutId =
      setTimeout(initAnimations, 50)



    /* ============================================================
       PARALLAX
    ============================================================ */

    let ticking = false

    const updateParallax = () => {

      document
        .querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach(el => {

          const speed =
            parseFloat(el.dataset.parallax || '0.3')

          el.style.transform =
            `translate3d(0, ${window.scrollY * speed}px, 0)`
        })

      ticking = false
    }

    const handleScroll = () => {

      if (!ticking) {

        requestAnimationFrame(updateParallax)

        ticking = true
      }
    }

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )



    /* ============================================================
       CLEANUP
    ============================================================ */

    return () => {

      // document.removeEventListener(
      //   'mousemove',
      //   moveCursor
      // )

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      // cancelAnimationFrame(rafId)

      clearTimeout(timeoutId)

      observer?.disconnect()

    }

  }, [pathname]) // KEY FIX: runs on route change


  return null
}

