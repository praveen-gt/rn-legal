import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        background: "var(--ink)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(20,33,80,0.5) 0%, transparent 70%)",
      }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(180px, 30vw, 400px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.06)",
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.04em",
          pointerEvents: "none",
        }}
      >
        404
      </div>
      <div style={{ position: "relative" }}>
        <span className="label label--light" style={{ marginBottom: "14px" }}>Error</span>
        <div className="rule rule--center rule--light" />
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--white)", marginBottom: "16px" }}>
          Page not found
        </h1>
        <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 36px", lineHeight: 1.75 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--gold">Return Home</Link>
          <Link href="/contact" className="btn btn--outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
