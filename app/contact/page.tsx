import type { Metadata } from "next";
import { siteConfig, practiceAreas } from "@/lib/config";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a consultation with R&N Legal. Call ${siteConfig.phone1} or email ${siteConfig.email}. Suite 401, Level 4, 2 Queen Street, Melbourne VIC 3000.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: "Contact — R&N Legal",
    description: `Get in touch with R&N Legal – Melbourne boutique legal practice. ${siteConfig.phone1}`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        titleItalic="We respond within one business day."
        subtitle="For appointments and enquiries, use the details or form below. If your matter is urgent and involves immediate safety risks, seek emergency assistance first."
        slim
      />

      <section style={{ background: "var(--ivory)", paddingTop: "clamp(64px, 9vw, 108px)", paddingBottom: "clamp(64px, 9vw, 108px)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "clamp(48px, 8vw, 96px)",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: info */}
            <div>
              <span className="label" style={{ marginBottom: "14px" }}>Direct Contact</span>
              <div className="rule" />

              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
                {[
                  {
                    icon: "◎",
                    title: "Phone",
                    lines: [
                      { text: siteConfig.phone1, href: `tel:${siteConfig.phone1.replace(/\s/g, "")}`, primary: true },
                      { text: siteConfig.phone2, href: `tel:${siteConfig.phone2.replace(/\s/g, "")}`, primary: false },
                    ],
                  },
                  {
                    icon: "◈",
                    title: "Email",
                    lines: [
                      { text: siteConfig.email, href: `mailto:${siteConfig.email}`, primary: true },
                    ],
                  },
                  {
                    icon: "◇",
                    title: "Office",
                    lines: [
                      { text: siteConfig.address, href: null, primary: true },
                      { text: siteConfig.suburb, href: null, primary: false },
                    ],
                  },
                  {
                    icon: "⊹",
                    title: "Hours",
                    lines: [
                      { text: siteConfig.hours, href: null, primary: true },
                      { text: "Response within 1 business day", href: null, primary: false },
                    ],
                  },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "var(--navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--gold)" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "5px" }}>
                        {item.title}
                      </div>
                      {item.lines.map((line) =>
                        line.href ? (
                          <a
                            key={line.text}
                            className={`contact-link ${line.primary ? "primary" : "secondary"}`}
  href={line.href}
                          >
                            {line.text}
                          </a>
                        ) : (
                          <span
                            key={line.text}
                            style={{
                              display: "block",
                              fontSize: line.primary ? "1rem" : "0.88rem",
                              fontWeight: line.primary ? 400 : 300,
                              color: line.primary ? "var(--ink)" : "var(--muted)",
                              lineHeight: 1.5,
                            }}
                          >
                            {line.text}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency notice */}
              <div
                style={{
                  padding: "20px 22px",
                  background: "#fef7f0",
                  border: "1px solid rgba(200,80,40,0.15)",
                  borderLeft: "3px solid rgba(200,80,40,0.5)",
                }}
              >
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c05028", marginBottom: "8px" }}>
                  ⚠ Urgent Safety Issues
                </div>
                <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "#7a3820", lineHeight: 1.7, margin: 0 }}>
                  If you are in immediate danger, call <strong>000</strong> (Police/Emergency) or <strong>1800 015 188</strong> (Safe Steps) immediately. Do not wait.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm practiceAreas={practiceAreas.map((a) => a.title)} />
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
