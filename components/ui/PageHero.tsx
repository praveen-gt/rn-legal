import type { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  children?: ReactNode;
  slim?: boolean;
}

export default function PageHero({ label, title, titleItalic, subtitle, children, slim }: PageHeroProps) {
  return (
    <section
      style={{
        background: "var(--ink)",
        paddingTop: slim ? "clamp(100px, 14vw, 152px)" : "clamp(110px, 16vw, 172px)",
        paddingBottom: slim ? "clamp(48px, 6vw, 72px)" : "clamp(64px, 9vw, 108px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background details */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 80% 50%, #142150 0%, transparent 60%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 20%, rgba(201,168,76,0.3) 80%, transparent)",
        }} />
        {/* Decorative large letter */}
        <div style={{
          position: "absolute",
          top: "50%",
          right: "-2%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(140px, 22vw, 300px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.05)",
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}>
          {label?.split(" ")[0] || "RN"}
        </div>
      </div>

      <div className="container" style={{ position: "relative" }}>
        {label && (
          <span className="label label--light" style={{ marginBottom: "14px" }}>{label}</span>
        )}
        <div className="rule rule--light" />
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "var(--white)",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            lineHeight: 1.05,
            maxWidth: "700px",
            marginBottom: subtitle ? "20px" : 0,
          }}
        >
          {title}
          {titleItalic && (
            <>
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>
                {titleItalic}
              </em>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "580px",
              lineHeight: 1.75,
              marginTop: "16px",
            }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
