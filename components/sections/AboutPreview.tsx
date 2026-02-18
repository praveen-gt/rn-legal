import Link from "next/link";
import { siteConfig } from "@/lib/config";

const pillars = [
  { num: "01", title: "Straight Talk", desc: "We explain what the law allows, the realistic risks, and the practical next steps — no jargon." },
  { num: "02", title: "Meticulous Preparation", desc: "Evidence, chronology, strategic positioning. We build each matter from the ground up." },
  { num: "03", title: "Client-First Communication", desc: "Prompt updates and clear expectations. You always know exactly where your matter stands." },
];

export default function AboutPreview() {
  return (
    <section
      style={{
        background: "var(--navy)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,48,110,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="container"
        style={{
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(72px, 10vw, 120px)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 96px)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <span className="label label--light" style={{ marginBottom: "14px" }}>About R&N Legal</span>
            <div className="rule rule--light" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--white)",
                marginBottom: "24px",
              }}
            >
              Practising in Victoria
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>since {siteConfig.practicingSince}</em>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              {siteConfig.director} is the Director of R&amp;N Legal and has practised law in Victoria since 2013. He brings more than a decade of experience across litigation, family law, immigration and property — with a disciplined, detail-driven approach to every matter.
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
                marginBottom: "36px",
              }}
            >
              R&amp;N Legal maintains strong engagement within the Victorian community and regularly assists individuals and families from diverse cultural backgrounds.
            </p>
            <Link href="/about" className="btn btn--ghost-gold">
              Meet the Team
            </Link>
          </div>

          {/* Right: pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pillars.map((p, i) => (
              <div
                key={p.num}
                style={{
                  padding: "clamp(24px, 3vw, 36px) 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "24px",
                  alignItems: "start",
                  ...(i === pillars.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.08)" } : {}),
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                    fontSize: "0.75rem",
                    color: "var(--gold)",
                    opacity: 0.7,
                    paddingTop: "4px",
                    minWidth: "22px",
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: "var(--white)",
                      marginBottom: "8px",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
