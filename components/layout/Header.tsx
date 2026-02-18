// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { navLinks, siteConfig } from "@/lib/config";
// import Image from "next/image";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   useEffect(() => { setOpen(false); }, [pathname]);

//   // Lock scroll when mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   return (
//     <>
//       <header
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 200,
//           transition: "background 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.4s, box-shadow 0.4s",
//           background: scrolled
//             ? "rgba(10,12,18,0.97)"
//             : "rgba(10,12,18,0.15)",
//           backdropFilter: "blur(16px)",
//           WebkitBackdropFilter: "blur(16px)",
//           boxShadow: scrolled ? "0 1px 0 rgba(201,168,76,0.2)" : "none",
//         }}
//       >
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: scrolled ? "64px" : "76px",
//             transition: "height 0.4s var(--ease-out)",
//           }}
//         >
//           {/* Logo */}
//           <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "1px" }}>
//           {/* <Image src="/images/rn-logo-transparent.png" alt="R&N Legal Logo" width={90} height={90} style={{ display: "block" }} /> */}
//           <Image
//   src="/images/rn-logo-transparent.png"
//   alt="R&N Legal Logo"
//   height={scrolled ? 44 : 56}
//   width={90} // just a safe upper bound
//   style={{
//     height: "100%",
//     width: "auto",
//     objectFit: "contain",
//     transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",
//   }}
//   priority
// />
//           </Link>

//           {/* Desktop nav */}
//           <nav aria-label="Main navigation" className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`nav-link${pathname === link.href ? " active" : ""}`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <a
//               href="/contact"
//               className="btn btn--gold"
//               style={{ padding: "11px 26px", fontSize: "0.72rem", marginLeft: "8px" }}
//             >
//               Book Consultation
//             </a>
//           </nav>

//           {/* Mobile hamburger */}
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             className="mobile-toggle"
//             style={{
//               background: "none",
//               border: "1px solid rgba(255,255,255,0.2)",
//               padding: "9px 11px",
//               cursor: "pointer",
//               display: "none",
//               flexDirection: "column",
//               gap: "5px",
//               alignItems: "flex-end",
//               transition: "border-color 0.25s",
//             }}
//           >
//             <span
//               style={{
//                 display: "block",
//                 width: "22px",
//                 height: "1px",
//                 background: "var(--white)",
//                 transition: "transform 0.3s, opacity 0.3s, width 0.3s",
//                 transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
//               }}
//             />
//             <span
//               style={{
//                 display: "block",
//                 width: open ? "22px" : "14px",
//                 height: "1px",
//                 background: "var(--white)",
//                 opacity: open ? 0 : 1,
//                 transition: "transform 0.3s, opacity 0.3s, width 0.3s",
//               }}
//             />
//             <span
//               style={{
//                 display: "block",
//                 width: "22px",
//                 height: "1px",
//                 background: "var(--white)",
//                 transition: "transform 0.3s, opacity 0.3s",
//                 transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
//               }}
//             />
//           </button>
//         </div>
//       </header>

//       {/* Mobile drawer */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 190,
//           pointerEvents: open ? "all" : "none",
//         }}
//       >
//         {/* Backdrop */}
//         <div
//           onClick={() => setOpen(false)}
//           style={{
//             position: "absolute",
//             inset: 0,
//             background: "rgba(10,12,18,0.6)",
//             opacity: open ? 1 : 0,
//             transition: "opacity 0.35s",
//             backdropFilter: "blur(4px)",
//             WebkitBackdropFilter: "blur(4px)",
//           }}
//         />
//         {/* Panel */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             bottom: 0,
//             width: "min(340px, 88vw)",
//             background: "var(--navy)",
//             transform: open ? "translateX(0)" : "translateX(100%)",
//             transition: "transform 0.45s var(--ease-out)",
//             display: "flex",
//             flexDirection: "column",
//             padding: "88px 36px 40px",
//             borderLeft: "1px solid rgba(201,168,76,0.15)",
//           }}
//         >
//           <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
//             {navLinks.map((link, i) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "2rem",
//                   fontWeight: 400,
//                   color: pathname === link.href ? "var(--gold)" : "var(--white)",
//                   textDecoration: "none",
//                   padding: "14px 0",
//                   borderBottom: "1px solid rgba(255,255,255,0.07)",
//                   transition: "color 0.25s",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   animation: open ? `fadeUp 0.5s ${0.05 * (i + 1)}s both` : "none",
//                 }}
//               >
//                 <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--gold)", opacity: 0.7 }}>
//                   0{i + 1}
//                 </span>
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div style={{ marginTop: "auto", paddingTop: "40px" }}>
//             <a
//               href="/contact"
//               className="btn btn--gold"
//               style={{ width: "100%", justifyContent: "center", marginBottom: "16px" }}
//             >
//               Book a Consultation
//             </a>
//             <a
//               href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "8px",
//                 fontFamily: "var(--font-body)",
//                 fontSize: "0.85rem",
//                 fontWeight: 400,
//                 color: "rgba(255,255,255,0.5)",
//                 letterSpacing: "0.04em",
//               }}
//             >
//               {siteConfig.phone1}
//             </a>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (min-width: 901px) { .mobile-toggle { display: none !important; } }
//         @media (max-width: 900px) { .desktop-nav { display: none !important; } .mobile-toggle { display: flex !important; } }
//       `}</style>
//     </>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { navLinks, siteConfig } from "@/lib/config";
// import Image from "next/image";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 200,
//           background: scrolled
//             ? "rgba(10,12,18,0.97)"
//             : "rgba(10,12,18,0.15)",
//           backdropFilter: "blur(16px)",
//           WebkitBackdropFilter: "blur(16px)",
//           boxShadow: scrolled ? "0 1px 0 rgba(201,168,76,0.2)" : "none",
//           transition:
//             "background 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s",
//         }}
//       >
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: scrolled ? "64px" : "76px",
//             transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",
//           }}
//         >
//           {/* LOGO */}
//           <Link
//             href="/"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               height: scrolled ? "44px" : "80px",
//               transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",

//             }}
//           >
//             <Image
//               src="/images/rn-logo-transparent.png"
//               alt="R&N Legal Logo"
//               height={56}
//               width={180}
//               priority
//               style={{
//                 height: "100%",
//                 width: "auto",
//                 objectFit: "contain",
//                 transform: scrolled ? "scale(0.92)" : "scale(1)",
//                 transformOrigin: "left center",
//                 transition:
//                   "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
//               }}
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav
//             aria-label="Main navigation"
//             className="desktop-nav"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "36px",
//             }}
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`nav-link${
//                   pathname === link.href ? " active" : ""
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <a
//               href="/contact"
//               className="btn btn--gold"
//               style={{
//                 padding: "11px 26px",
//                 fontSize: "0.72rem",
//                 marginLeft: "8px",
//               }}
//             >
//               Book Consultation
//             </a>
//           </nav>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             className="mobile-toggle"
//             style={{
//               background: "none",
//               border: "1px solid rgba(255,255,255,0.2)",
//               padding: "9px 11px",
//               cursor: "pointer",
//               display: "none",
//               flexDirection: "column",
//               gap: "5px",
//               alignItems: "flex-end",
//             }}
//           >
//             <span
//               style={{
//                 display: "block",
//                 width: "22px",
//                 height: "1px",
//                 background: "var(--white)",
//                 transform: open
//                   ? "rotate(45deg) translate(4px, 4px)"
//                   : "none",
//                 transition: "transform 0.3s",
//               }}
//             />
//             <span
//               style={{
//                 display: "block",
//                 width: open ? "22px" : "14px",
//                 height: "1px",
//                 background: "var(--white)",
//                 opacity: open ? 0 : 1,
//                 transition: "opacity 0.3s, width 0.3s",
//               }}
//             />
//             <span
//               style={{
//                 display: "block",
//                 width: "22px",
//                 height: "1px",
//                 background: "var(--white)",
//                 transform: open
//                   ? "rotate(-45deg) translate(4px, -4px)"
//                   : "none",
//                 transition: "transform 0.3s",
//               }}
//             />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE DRAWER */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 190,
//           pointerEvents: open ? "all" : "none",
//         }}
//       >
//         {/* BACKDROP */}
//         <div
//           onClick={() => setOpen(false)}
//           style={{
//             position: "absolute",
//             inset: 0,
//             background: "rgba(10,12,18,0.6)",
//             opacity: open ? 1 : 0,
//             transition: "opacity 0.35s",
//             backdropFilter: "blur(4px)",
//           }}
//         />

//         {/* PANEL */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             bottom: 0,
//             width: "min(340px, 88vw)",
//             background: "var(--navy)",
//             transform: open ? "translateX(0)" : "translateX(100%)",
//             transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
//             display: "flex",
//             flexDirection: "column",
//             padding: "88px 36px 40px",
//             borderLeft: "1px solid rgba(201,168,76,0.15)",
//           }}
//         >
//           <nav style={{ display: "flex", flexDirection: "column" }}>
//             {navLinks.map((link, i) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "2rem",
//                   color:
//                     pathname === link.href
//                       ? "var(--gold)"
//                       : "var(--white)",
//                   textDecoration: "none",
//                   padding: "14px 0",
//                   borderBottom:
//                     "1px solid rgba(255,255,255,0.07)",
//                   animation: open
//                     ? `fadeUp 0.5s ${0.05 * (i + 1)}s both`
//                     : "none",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontFamily: "var(--font-accent)",
//                     fontSize: "0.85rem",
//                     color: "var(--gold)",
//                     opacity: 0.7,
//                     marginRight: "10px",
//                   }}
//                 >
//                   0{i + 1}
//                 </span>
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div style={{ marginTop: "auto" }}>
//             <a
//               href="/contact"
//               className="btn btn--gold"
//               style={{
//                 width: "100%",
//                 justifyContent: "center",
//                 marginBottom: "16px",
//               }}
//             >
//               Book a Consultation
//             </a>

//             <a
//               href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 fontSize: "0.85rem",
//                 color: "rgba(255,255,255,0.5)",
//               }}
//             >
//               {siteConfig.phone1}
//             </a>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (min-width: 901px) {
//           .mobile-toggle { display: none !important; }
//         }
//         @media (max-width: 900px) {
//           .desktop-nav { display: none !important; }
//           .mobile-toggle { display: flex !important; }
//         }
//       `}</style>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/config";
import s from "./Header.module.css";

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Header bar ───────────────────────────────────────────── */}
      <header className={`${s.header}${scrolled ? ` ${s.scrolled}` : ""}`}>
        <div className={s.inner}>

          {/* Logo — vertical lockup, height-driven sizing */}
          <Link href="/" className={s.logoLink} aria-label="R&N Legal – Home">
            <Image
              src="/images/rn-logo-transparent.png"
              alt="R&N Legal – Lawyers & Solicitors"
              width={90}   // aspect-ratio hint for Next.js (actual render controlled by CSS)
              height={110} // keeps the intrinsic ratio correct for layout shift prevention
              priority
              className={s.logoImg}
            />
          </Link>

          {/* Desktop nav — uses .nav-link from globals.css */}
          <nav aria-label="Main navigation" className={s.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* .btn + .btn--ghost-gold come from globals.css */}
            <a
              href="/contact"
              className="btn btn--ghost-gold"
              style={{ padding: "10px 22px", fontSize: "0.72rem" }}
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`${s.toggle}${open ? ` ${s.toggleOpen}` : ""}`}
          >
            <span className={`${s.bar} ${s.bar1}`} />
            <span className={`${s.bar} ${s.bar2}`} />
            <span className={`${s.bar} ${s.bar3}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ─────────────────────────────────── */}
      <div
        className={`${s.overlay}${open ? ` ${s.overlayVisible}` : ""}`}
        aria-hidden={!open}
      >
        <div className={s.backdrop} onClick={() => setOpen(false)} />

        <div className={s.drawer}>
          {/* Logo repeated inside drawer */}
          <div className={s.drawerLogo}>
            <Image
              src="/images/rn-logo-transparent.png"
              alt="R&N Legal"
              width={70}
              height={86}
              style={{ width: 70, height: "auto" }}
            />
          </div>

          <nav className={s.drawerNav}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${s.drawerLink}${pathname === link.href ? ` ${s.drawerLinkActive}` : ""}`}
                style={{ "--i": i } as React.CSSProperties}
              >
                {/* .numeral from globals.css */}
                <span className="numeral">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={s.drawerFooter}>
            <a
              href="/contact"
              className="btn btn--gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book a Consultation
            </a>
            <a
              href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
              className={s.drawerPhone}
            >
              {siteConfig.phone1}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}