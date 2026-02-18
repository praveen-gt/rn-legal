const steps = [
  { num: "01", title: "Initial Consultation", desc: "We understand your situation, urgency and the key facts. You leave knowing your realistic options." },
  { num: "02", title: "Strategy & Advice", desc: "We explain options, risks and likely pathways clearly — in plain English, not legalese." },
  { num: "03", title: "Preparation", desc: "Affidavits, submissions, evidence — every document built to the required standard." },
  { num: "04", title: "Resolution", desc: "We negotiate, represent and advocate to achieve the best available outcome for your matter." },
];

export default function ProcessSection() {
  return (
    <section
      style={{
        background: "var(--cream)",
        paddingTop: "clamp(72px, 10vw, 120px)",
        paddingBottom: "clamp(72px, 10vw, 120px)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Large process word */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(10,12,18,0.04)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.04em",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        Process
      </div>

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 80px)" }}>
          <span className="label" style={{ marginBottom: "14px" }}>How We Work</span>
          <div className="rule rule--center" />
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
            Four steps to{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>resolution</em>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid var(--border)",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "clamp(28px, 4vw, 48px) clamp(20px, 2.5vw, 32px)",
                borderRight: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                position: "relative",
              }}
            >
              {/* Gold top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: i === 0 ? "100%" : "0%",
                  height: "2px",
                  background: "var(--gold)",
                  transition: "width 0.6s var(--ease-out)",
                }}
                className="step-line"
              />

              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  fontWeight: 300,
                  color: "rgba(10,12,18,0.07)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "20px",
                  letterSpacing: "-0.03em",
                }}
              >
                {step.num}
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "clamp(40px, 6vw, 64px)" }}>
          <a href="/contact" className="btn btn--gold">
            Start with a Consultation
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .steps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr !important; } }
        .steps-grid > div:hover .step-line { width: 100% !important; }
      `}</style>
    </section>
  );
}
