// 'use client'

// import { useEffect } from 'react'

// export function PremiumEffects() {
//   useEffect(() => {
//     // ── Custom Cursor ──
//     const dot = document.getElementById('cursor-dot')
//     const ring = document.getElementById('cursor-ring')

//     let mouseX = -100, mouseY = -100
//     let ringX = -100, ringY = -100
//     let rafId: number

//     if (dot && ring) {
//       const moveCursor = (e: MouseEvent) => {
//         mouseX = e.clientX
//         mouseY = e.clientY
//       }

//       const animateCursor = () => {
//         ringX += (mouseX - ringX) * 0.12
//         ringY += (mouseY - ringY) * 0.12
//         dot.style.left = `${mouseX}px`
//         dot.style.top = `${mouseY}px`
//         ring.style.left = `${ringX}px`
//         ring.style.top = `${ringY}px`
//         rafId = requestAnimationFrame(animateCursor)
//       }

//       const addHover = () => document.body.classList.add('cursor-hover')
//       const removeHover = () => document.body.classList.remove('cursor-hover')
//       const addLink = () => document.body.classList.add('cursor-link')
//       const removeLink = () => document.body.classList.remove('cursor-link')

//       document.addEventListener('mousemove', moveCursor)
//       rafId = requestAnimationFrame(animateCursor)

//       const interactiveEls = document.querySelectorAll(
//         'a, button, [role="button"], input, select, textarea, label'
//       )
//       interactiveEls.forEach(el => {
//         el.addEventListener('mouseenter', addHover)
//         el.addEventListener('mouseleave', removeHover)
//       })

//       const linkEls = document.querySelectorAll('a')
//       linkEls.forEach(el => {
//         el.addEventListener('mouseenter', addLink)
//         el.addEventListener('mouseleave', removeLink)
//       })
//     }

//     // ── Scroll Animations ──
//     // Double rAF ensures the browser has fully painted before we:
//     // 1. Add .js-ready (hides [data-animate] elements via CSS)
//     // 2. Attach the IntersectionObserver (immediately re-shows visible ones)
//     // This eliminates the "invisible on first load, fixed by refresh" race condition.
//     let observer: IntersectionObserver

//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         // Step 1: mark JS as ready — CSS now hides [data-animate] elements
//         document.documentElement.classList.add('js-ready')

//         // Step 2: immediately observe all elements
//         // rootMargin '120px 0px -40px 0px' means elements near/above
//         // the fold are caught instantly and animated in on load
//         observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach(entry => {
//               if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view')
//                 observer.unobserve(entry.target)
//               }
//             })
//           },
//           { threshold: 0.08, rootMargin: '120px 0px -40px 0px' }
//         )

//         document.querySelectorAll('[data-animate]').forEach(el => {
//           observer.observe(el)
//         })
//       })
//     })

//     // ── Parallax ──
//     const handleParallax = () => {
//       document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
//         const speed = parseFloat(el.dataset.parallax || '0.3')
//         el.style.transform = `translateY(${window.scrollY * speed}px)`
//       })
//     }
//     window.addEventListener('scroll', handleParallax, { passive: true })

//     return () => {
//       cancelAnimationFrame(rafId)
//       window.removeEventListener('scroll', handleParallax)
//       observer?.disconnect()
//       document.documentElement.classList.remove('js-ready')
//     }
//   }, [])

//   return null
// }


'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function PremiumEffects() {

  const pathname = usePathname()

  useEffect(() => {

    /* ============================================================
       CUSTOM CURSOR
    ============================================================ */

    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100

    let rafId = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {

      if (dot && ring) {

        // ringX += (mouseX - ringX) * 0.12
        // ringY += (mouseY - ringY) * 0.12

                ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
        ring.style.left = `${ringX}px`
        ring.style.top = `${ringY}px`

        // dot.style.transform =
        //   `translate3d(${mouseX}px, ${mouseY}px, 0)`

        // ring.style.transform =
        //   `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      rafId = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', moveCursor)

    rafId = requestAnimationFrame(animateCursor)



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

      document.removeEventListener(
        'mousemove',
        moveCursor
      )

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      cancelAnimationFrame(rafId)

      clearTimeout(timeoutId)

      observer?.disconnect()

    }

  }, [pathname]) // KEY FIX: runs on route change


  return null
}

