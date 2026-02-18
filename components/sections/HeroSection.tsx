import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "clamp(60px, 10vw, 100px)",
        background: "var(--ink)",
        overflow: "hidden",
      }}
    >
      {/* Layered background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Deep gradient mesh */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, #142150 0%, transparent 60%)," +
              "radial-gradient(ellipse 50% 70% at 10% 80%, #0d1631 0%, transparent 55%)," +
              "linear-gradient(175deg, #0a0c12 0%, #0d1631 40%, #0a0c12 100%)",
          }}
        />
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        {/* Vertical rule accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "1px",
            background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.12) 30%, rgba(201,168,76,0.12) 70%, transparent 100%)",
          }}
        />
        {/* Horizontal rule */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "62%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.08) 20%, rgba(201,168,76,0.08) 80%, transparent 100%)",
          }}
        />
        {/* Large numeral watermark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-2%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(200px, 30vw, 400px)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,168,76,0.06)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.04em",
          }}
        >
          Law
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(24px, 4vw, 40px)",
          right: "clamp(20px, 5vw, 72px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "fadeIn 1.5s 1.2s both",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-body)",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, rgba(201,168,76,0.4) 0%, transparent 100%)",
            animation: "fadeUp 1s 1.4s both",
          }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", width: "100%" }}>
        <div style={{ maxWidth: "740px" }}>
          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "clamp(28px, 4vw, 44px)",
              animation: "fadeUp 0.8s 0.1s both",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "var(--gold)", opacity: 0.7 }} />
            <span className="label label--light">
              Boutique Legal Practice · Melbourne, Victoria
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              marginBottom: "clamp(28px, 4vw, 44px)",
              animation: "fadeUp 0.9s 0.22s both",
            }}
          >
            Clear advice.
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--gold)",
              }}
            >
              Focused
            </em>{" "}
            outcomes.
          </h1>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginBottom: "clamp(36px, 5vw, 52px)",
              animation: "fadeUp 0.9s 0.36s both",
            }}
          >
            R&amp;N Legal assists individuals, families and businesses with legal matters that require precision, discretion and a thorough understanding of legal process.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              animation: "fadeUp 0.9s 0.48s both",
            }}
          >
            <a href="/contact" className="btn btn--gold">
              Book a Consultation
            </a>
            <a
              href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`}
              className="btn btn--outline"
            >
              {siteConfig.phone1}
            </a>
          </div>

          {/* Trust line */}
          <div
            style={{
              marginTop: "clamp(32px, 5vw, 56px)",
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flexWrap: "wrap",
              animation: "fadeUp 0.9s 0.6s both",
            }}
          >
            {["10+ Years Experience", "Victorian Courts & Tribunals", "Culturally Aware Practice"].map((item, i) => (
              <span
                key={item}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {i > 0 && (
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--gold)", opacity: 0.5, flexShrink: 0 }} />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
