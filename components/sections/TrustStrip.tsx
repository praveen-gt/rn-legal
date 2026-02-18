const points = [
  { stat: "10+", label: "Years of Experience", sub: "Practising in Victoria since 2013" },
  { stat: "9", label: "Practice Areas", sub: "Family · Property · Migration · Disputes" },
  { stat: "1", label: "Business Day Response", sub: "Responsive, timely communication" },
  { stat: "100%", label: "Confidential", sub: "Integrity and discretion guaranteed" },
];

export default function TrustStrip() {
  return (
    <section
      style={{
        background: "var(--ink-soft)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}
          className="trust-grid"
        >
          {points.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "clamp(28px, 4vw, 44px) clamp(16px, 2.5vw, 28px)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.5,
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) { .trust-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 400px) { .trust-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
