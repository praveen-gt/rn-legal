import { siteConfig } from "@/lib/config";

interface ContactCTAProps {
  dark?: boolean;
}

export default function ContactCTA({ dark = false }: ContactCTAProps) {
  return (
    <section
      style={{
        background: dark ? "var(--ink)" : "var(--ivory)",
        borderTop: dark ? "1px solid rgba(201,168,76,0.2)" : "1px solid var(--border)",
        paddingTop: "clamp(56px, 8vw, 96px)",
        paddingBottom: "clamp(56px, 8vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rule */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "1px",
          background: dark
            ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.08) 30%, rgba(201,168,76,0.08) 70%, transparent)"
            : "linear-gradient(90deg, transparent, rgba(10,12,18,0.04) 30%, rgba(10,12,18,0.04) 70%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ textAlign: "center", position: "relative" }}>
        <span className="label" style={{ color: dark ? "rgba(201,168,76,0.8)" : "var(--gold)", marginBottom: "14px" }}>
          Get in Touch
        </span>
        <div className="rule rule--center" />
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: dark ? "var(--white)" : "var(--ink)",
            marginBottom: "16px",
          }}
        >
          Ready to discuss
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>your matter?</em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            color: dark ? "rgba(255,255,255,0.5)" : "var(--muted)",
            maxWidth: "460px",
            margin: "0 auto 36px",
            lineHeight: 1.75,
          }}
        >
          Book an initial consultation or call us directly. We respond within one business day.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--gold">Book a Consultation</a>
          <a
            href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
            className={dark ? "btn btn--outline" : "btn btn--outline-dark"}
          >
            {siteConfig.phone1}
          </a>
        </div>
      </div>
    </section>
  );
}
