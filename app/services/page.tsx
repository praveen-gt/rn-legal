import type { Metadata } from "next";
import { siteConfig, practiceAreas } from "@/lib/config";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/ui/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "R&N Legal provides legal advice and representation across family violence (FVIO), family law, wills & estates, conveyancing, immigration, litigation, traffic offences and consumer law in Melbourne.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    url: `${siteConfig.url}/services`,
    title: "Services — R&N Legal",
    description: "Nine practice areas. One Melbourne boutique practice.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Practice Areas"
        title="Our Services"
        titleItalic="Nine areas of focus."
        subtitle="We provide advice, document preparation, negotiation and representation across the following practice areas. If you are unsure which category applies, contact us and we will guide you."
      />

      {/* Intro strip */}
      <div
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
          paddingTop: "clamp(32px, 4vw, 48px)",
          paddingBottom: "clamp(32px, 4vw, 48px)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "clamp(24px, 5vw, 64px)",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--muted)", maxWidth: "580px", margin: 0, lineHeight: 1.75 }}>
              We offer paid consultations and scoped fee arrangements depending on urgency and complexity. Ask us for a clear estimate after the initial intake — we believe in transparent, predictable costs.
            </p>
            <a href="/contact" className="btn btn--gold" style={{ flexShrink: 0 }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Services list — editorial numbered entries */}
      <section style={{ background: "var(--ivory)", paddingBottom: "clamp(72px, 10vw, 120px)" }}>
        <div className="container">
          {practiceAreas.map((area, i) => (
            <div
              key={area.id}
              id={area.id}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(24px, 4vw, 56px)",
                padding: "clamp(40px, 5vw, 64px) 0",
                borderBottom: "1px solid var(--border)",
                scrollMarginTop: "84px",
                alignItems: "start",
              }}
              className="service-entry"
            >
              {/* Number + icon column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  paddingTop: "6px",
                  minWidth: "clamp(36px, 5vw, 56px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                    color: "var(--gold)",
                    lineHeight: 1,
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {area.numeral}
                </span>
                <div style={{ width: "1px", flex: 1, minHeight: "30px", background: "linear-gradient(180deg, rgba(201,168,76,0.25) 0%, transparent 100%)" }} />
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      fontWeight: 400,
                      color: "var(--ink)",
                      lineHeight: 1.15,
                    }}
                  >
                    {area.title}
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "28px",
                    maxWidth: "680px",
                  }}
                >
                  {area.description}
                </p>

                {/* Items */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "10px",
                    marginBottom: "28px",
                  }}
                >
                  {area.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "12px 16px",
                        background: "var(--white)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span style={{ color: "var(--gold)", flexShrink: 0, fontSize: "0.7rem", marginTop: "4px" }}>◆</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                    paddingBottom: "2px",
                    borderBottom: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Enquire about this area
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA dark />
    </>
  );
}
