// import Link from "next/link";
// import { siteConfig, navLinks, practiceAreas } from "@/lib/config";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer
//       style={{
//         background: "var(--ink)",
//         color: "rgba(255,255,255,0.5)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }} />

//       <div className="container" style={{ paddingTop: "clamp(56px,8vw,96px)", paddingBottom: "clamp(48px,6vw,72px)" }}>
//         <div className="footer-grid" style={{ display: "grid", gap: "clamp(32px,5vw,72px)" }}>

//           {/* Brand */}
//           <div>
//             <div style={{ marginBottom: "28px" }}>
//               <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--white)", display: "block", lineHeight: 1, marginBottom: "8px" }}>
//                 R<span style={{ color: "var(--gold)" }}>&</span>N{" "}
//                 <em style={{ fontStyle: "italic", fontWeight: 300 }}>Legal</em>
//               </span>
//               <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
//                 Boutique Practice · Melbourne
//               </span>
//             </div>
//             <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: "280px", marginBottom: "28px" }}>
//               Clear advice. Strong preparation. Focused outcomes. Practising in Victoria since {siteConfig.practicingSince}.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//               <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)" }}>{siteConfig.address}, {siteConfig.suburb}</span>
//               <a href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`} className="footer-link">{siteConfig.phone1}</a>
//               <a href={`mailto:${siteConfig.email}`} className="footer-link footer-link--gold">{siteConfig.email}</a>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <p className="label label--light" style={{ marginBottom: "20px" }}>Navigation</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//               {[...navLinks, { label: "Disclaimer & Privacy", href: "/disclaimer" }].map((link) => (
//                 <Link key={link.href} href={link.href} className="footer-nav-link">
//                   <span className="footer-nav-rule" />
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Practice areas */}
//           <div>
//             <p className="label label--light" style={{ marginBottom: "20px" }}>Practice Areas</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//               {practiceAreas.slice(0, 6).map((area) => (
//                 <Link key={area.id} href={`/services#${area.id}`} className="footer-area-link">
//                   <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--gold)", opacity: 0.7, minWidth: "14px" }}>{area.numeral}</span>
//                   {area.short}
//                 </Link>
//               ))}
//               <Link href="/services" className="footer-all-link">All Services →</Link>
//             </div>
//           </div>
//         </div>

//         <div style={{ marginTop: "clamp(40px,6vw,72px)", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
//           <p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.22)", maxWidth: "600px", lineHeight: 1.7, margin: 0 }}>
//             © {year} R&amp;N Legal. All rights reserved. The information on this website is general in nature and does not constitute legal advice. A lawyer–client relationship is only formed when confirmed in writing.
//           </p>
//           <Link href="/disclaimer" className="footer-disclaimer-link">Disclaimer &amp; Privacy</Link>
//         </div>
//       </div>

//       <style>{`
//         .footer-grid { grid-template-columns: 1.6fr 1fr 1.2fr; }
//         @media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
//         @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr; } }
//         .footer-link { font-size: 0.82rem; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; display: block; }
//         .footer-link:hover { color: var(--white); }
//         .footer-link--gold { color: rgba(201,168,76,0.75) !important; }
//         .footer-link--gold:hover { color: var(--gold-bright) !important; }
//         .footer-nav-link { font-family: var(--font-body); font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 8px; }
//         .footer-nav-link:hover { color: var(--white); }
//         .footer-nav-rule { width: 12px; height: 1px; background: var(--gold); display: inline-block; flex-shrink: 0; opacity: 0.6; }
//         .footer-area-link { font-family: var(--font-body); font-size: 0.82rem; font-weight: 300; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 8px; }
//         .footer-area-link:hover { color: var(--gold); }
//         .footer-all-link { font-family: var(--font-body); font-size: 0.75rem; font-weight: 500; color: var(--gold); text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; opacity: 0.8; transition: opacity 0.2s; display: block; }
//         .footer-all-link:hover { opacity: 1; }
//         .footer-disclaimer-link { font-size: 0.73rem; color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s; }
//         .footer-disclaimer-link:hover { color: rgba(255,255,255,0.6); }
//       `}</style>
//     </footer>
//   );
// }


import Link from "next/link";
import { siteConfig, navLinks, practiceAreas } from "@/lib/config";
import s from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      {/* Gold gradient rule along the top */}
      <div className={s.topRule} />

      <div className={s.inner}>
        <div className={s.grid}>

          {/* ── Brand column ───────────────────────────────────── */}
          <div className={s.brand}>
            <div>
              <span className={s.brandName}>
                R<span className={s.brandNameAmpersand}>&</span>N{" "}
                <em style={{ fontStyle: "italic", fontWeight: 300 }}>Legal</em>
              </span>
              <span className={s.brandTagline}>
                Boutique Practice · Melbourne
              </span>
            </div>

            <p className={s.brandDesc}>
              Clear advice. Strong preparation. Focused outcomes.
              Practising in Victoria since {siteConfig.practicingSince}.
            </p>

            <div className={s.contactBlock}>
              <span className={s.address}>
                {siteConfig.address}, {siteConfig.suburb}
              </span>
              <a
                href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
                className={s.contactLink}
              >
                {siteConfig.phone1}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`${s.contactLink} ${s.contactLinkGold}`}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* ── Navigation column ──────────────────────────────── */}
          <div>
            {/* .label .label--light from globals.css */}
            <p className={`label label--light ${s.colTitle}`}>Navigation</p>

            <nav aria-label="Footer navigation" className={s.navList}>
              {[...navLinks, { label: "Disclaimer & Privacy", href: "/disclaimer" }].map(
                (link) => (
                  <Link key={link.href} href={link.href} className={s.navLink}>
                    <span className={s.navRule} aria-hidden="true" />
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* ── Practice areas column ──────────────────────────── */}
          <div>
            <p className={`label label--light ${s.colTitle}`}>Practice Areas</p>

            <div className={s.areaList}>
              {practiceAreas.slice(0, 6).map((area) => (
                <Link
                  key={area.id}
                  href={`/services#${area.id}`}
                  className={s.areaLink}
                >
                  <span className={s.areaNumeral} aria-hidden="true">
                    {area.numeral}
                  </span>
                  {area.short}
                </Link>
              ))}

              <Link href="/services" className={s.allServicesLink}>
                All Services →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div className={s.bottomBar}>
          <p className={s.copyright}>
            © {year} R&amp;N Legal. All rights reserved. The information on
            this website is general in nature and does not constitute legal
            advice. A lawyer–client relationship is only formed when confirmed
            in writing.
          </p>
          <Link href="/disclaimer" className={s.disclaimerLink}>
            Disclaimer &amp; Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}