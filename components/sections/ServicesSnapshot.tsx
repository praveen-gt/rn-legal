import Link from "next/link";
import { practiceAreas } from "@/lib/config";

export default function ServicesSnapshot() {
  return (
    <section
      style={{
        background: "var(--ivory)",
        paddingTop: "clamp(72px, 10vw, 120px)",
        paddingBottom: "clamp(72px, 10vw, 120px)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            marginBottom: "clamp(48px, 7vw, 80px)",
            gap: "24px",
          }}
          className="services-header"
        >
          <div>
            <span className="label" style={{ marginBottom: "14px" }}>Practice Areas</span>
            <div className="rule" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                maxWidth: "480px",
                color: "var(--ink)",
              }}
            >
              How we can
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>help you</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="btn btn--outline-dark"
            style={{ whiteSpace: "nowrap" }}
          >
            All Services
          </Link>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
          }}
          className="services-grid"
        >
          {practiceAreas.map((area, i) => (
            <Link
              key={area.id}
              href={`/services#${area.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s var(--ease-out)",
                background: "var(--ivory)",
              }}
              className="service-tile"
            >
              {/* Hover fill */}
              <div
                className="tile-fill"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--navy)",
                  transform: "translateY(101%)",
                  transition: "transform 0.45s var(--ease-out)",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Number */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "clamp(20px, 3vw, 32px)",
                  }}
                >
                  <span
                    className="index-num"
                    style={{ transition: "color 0.3s" }}
                  >
                    {area.numeral}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      color: "rgba(201,168,76,0.3)",
                      transition: "color 0.3s",
                    }}
                  >
                    {area.icon}
                  </span>
                </div>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
                    fontWeight: 500,
                    color: "var(--ink)",
                    lineHeight: 1.25,
                    marginBottom: "12px",
                    transition: "color 0.3s",
                  }}
                >
                  {area.title}
                </h3>
                {/* Desc */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.83rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    margin: 0,
                    transition: "color 0.3s",
                  }}
                >
                  {area.description}
                </p>
                {/* Arrow */}
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    transition: "gap 0.3s, color 0.3s",
                  }}
                  className="tile-arrow"
                >
                  <span>Enquire</span>
                  <span>→</span>
                </div>
              </div>

              <style>{`
                .service-tile:hover .tile-fill { transform: translateY(0) !important; }
                .service-tile:hover h3 { color: var(--white) !important; }
                .service-tile:hover p { color: rgba(255,255,255,0.55) !important; }
                .service-tile:hover .index-num { color: var(--gold) !important; }
                .service-tile:hover .tile-arrow { gap: 14px !important; }
              `}</style>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .services-grid { grid-template-columns: 1fr !important; } .services-header { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
