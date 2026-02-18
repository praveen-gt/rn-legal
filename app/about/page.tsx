import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/ui/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "About R&N Legal — Director Rajat Kanti Roy has practised law in Victoria since 2013. Learn about our approach, values and commitment to accessible professional legal services.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: `About — R&N Legal`,
    description: "Boutique Melbourne legal practice led by Rajat Kanti Roy. Over a decade of experience in litigation, family law, immigration and property.",
  },
};

const values = [
  { title: "Integrity & Confidentiality", desc: "Every matter handled with complete professional discretion from day one to resolution." },
  { title: "Practical, Outcome-Focused Advice", desc: "We focus on what's achievable and the most effective pathway to get there — not billing hours." },
  { title: "Respectful, Culturally Aware Service", desc: "We assist individuals from diverse cultural backgrounds with genuine sensitivity and care." },
  { title: "Professional Standards & Compliance", desc: "Maintaining the highest professional standards required of Victorian legal practitioners." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Accessible."
        titleItalic="Professional. Precise."
        subtitle="R&N Legal is committed to professional legal services delivered with clarity, careful preparation, and standards expected of the best practitioners."
      />

      {/* Director section */}
      <section
        style={{
          background: "var(--ivory)",
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(72px, 10vw, 120px)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "clamp(48px, 8vw, 96px)",
              alignItems: "start",
            }}
            className="bio-grid"
          >
            {/* Portrait placeholder / monogram */}
            <div>
              <div
                style={{
                  aspectRatio: "4/5",
                  background: "linear-gradient(150deg, var(--navy-mid) 0%, var(--navy) 50%, var(--ink) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "0",
                }}
              >
                {/* Background pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle at 30% 70%, rgba(201,168,76,0.1) 0%, transparent 50%)",
                }} />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(80px, 15vw, 140px)",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    fontStyle: "italic",
                    userSelect: "none",
                    position: "absolute",
                  }}
                >
                  RKR
                </span>
                <div style={{ position: "relative", textAlign: "center", padding: "40px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      border: "1px solid rgba(201,168,76,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", fontWeight: 300 }}>⚖</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500, color: "var(--white)", marginBottom: "6px" }}>
                    {siteConfig.director}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.8 }}>
                    {siteConfig.directorTitle}
                  </div>
                </div>
                {/* Bottom rule */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)",
                }} />
              </div>

              {/* Credentials */}
              <div style={{ marginTop: "0", padding: "24px 28px", background: "var(--navy)", display: "flex", gap: "24px" }}>
                {[
                  { label: "Practising", val: "Since 2013" },
                  { label: "Jurisdiction", val: "Victoria" },
                ].map((c) => (
                  <div key={c.label}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", marginBottom: "4px" }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 500, color: "var(--white)" }}>
                      {c.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div>
              <span className="label" style={{ marginBottom: "14px" }}>Director & Principal</span>
              <div className="rule" />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  marginBottom: "28px",
                  lineHeight: 1.1,
                }}
              >
                {siteConfig.director}
              </h2>

              {[
                `Rajat Kanti Roy is the Director of R&N Legal and has practised law in Victoria since 2013. He brings more than a decade of experience advising and representing clients across a broad range of legal matters, with a particular emphasis on litigation and dispute resolution.`,
                `Rajat has extensive experience in civil litigation including contractual disputes, property disputes, consumer law matters, traffic and regulatory offences, and proceedings before Victorian courts and tribunals. He is regularly involved in the preparation of pleadings, affidavits, evidentiary material and submissions, and adopts a disciplined, detail-driven approach to litigation strategy.`,
                `In addition to litigation, Rajat advises clients in family law matters including family violence intervention orders, divorce and parenting proceedings, as well as conveyancing, property law and immigration-related matters involving tribunal and court pathways.`,
                `Rajat maintains strong engagement within the local Victorian community and regularly assists individuals and families from diverse cultural backgrounds. This community-focused perspective informs the values and service standards of R&N Legal.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: i === 0 ? "1.05rem" : "0.95rem",
                    fontWeight: i === 0 ? 400 : 300,
                    color: i === 0 ? "var(--ink-soft)" : "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: "18px",
                  }}
                >
                  {para}
                </p>
              ))}

              <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="/contact" className="btn btn--gold">Book a Consultation</a>
                <a href="/services" className="btn btn--outline-dark">View Services</a>
              </div>
            </div>
          </div>
        </div>

        <style>{`@media (max-width: 800px) { .bio-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Approach section */}
      <section
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--border)",
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(72px, 10vw, 120px)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "640px", marginBottom: "clamp(48px, 7vw, 72px)" }}>
            <span className="label" style={{ marginBottom: "14px" }}>Our Approach</span>
            <div className="rule" />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              How we approach
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>every matter</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 48px)" }} className="approach-grid">
            {[
              {
                num: "01",
                title: "Straight Talk",
                desc: "We explain what the law allows, the realistic risks, and the practical next steps — without jargon or false reassurance. Our clients make informed decisions."
              },
              {
                num: "02",
                title: "Preparation Matters",
                desc: "We prioritise evidence, chronology, and strategic positioning. Getting the groundwork right is fundamental to achieving the best available outcome."
              },
              {
                num: "03",
                title: "Client-First Communication",
                desc: "Prompt updates and clear expectations. You'll always know where your matter stands and what comes next — no chasing, no surprises."
              },
              {
                num: "04",
                title: "Cross-Practice Support",
                desc: "Family, migration, property and disputes all under one roof. When matters intersect, we can address each dimension without a referral merry-go-round."
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  padding: "clamp(28px, 3vw, 40px)",
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "100%",
                    background: "linear-gradient(180deg, var(--gold) 0%, transparent 100%)",
                    opacity: 0.6,
                  }}
                />
                <span style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  fontSize: "0.72rem",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "16px",
                  opacity: 0.8,
                }}>
                  {item.num}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: "12px",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .approach-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Values section */}
      <section
        style={{
          background: "var(--navy)",
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(72px, 10vw, 120px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 90% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 72px)" }}>
            <span className="label label--light" style={{ marginBottom: "14px" }}>What We Stand For</span>
            <div className="rule rule--center rule--light" />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--white)" }}>
              Our <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>values</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }} className="values-grid">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: "var(--navy)",
                  padding: "clamp(28px, 3.5vw, 44px) clamp(20px, 2.5vw, 32px)",
                  borderTop: "2px solid transparent",
                  transition: "border-color 0.3s",
                  position: "relative",
                }}
                className="value-card"
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: "rgba(201,168,76,0.15)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}>
                  {["⊹", "◎", "✦", "◈"][i]}
                </div>
                <h4 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--white)",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}>
                  {v.title}
                </h4>
                <p style={{
                  fontSize: "0.84rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {v.desc}
                </p>
                <style>{`.value-card:hover { border-top-color: var(--gold) !important; }`}</style>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .values-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <ContactCTA />
    </>
  );
}
