"use client";

import { useState } from "react";

interface ContactFormProps {
  practiceAreas: string[];
}

export default function ContactForm({ practiceAreas }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", preferredTime: "", practiceArea: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "clamp(48px, 7vw, 80px)",
          background: "var(--white)",
          border: "1px solid var(--border)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gold accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
        <div
          style={{
            width: "56px",
            height: "56px",
            border: "1px solid var(--gold)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>✓</span>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, color: "var(--ink)", marginBottom: "12px" }}>
          Enquiry Received
        </h3>
        <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75, maxWidth: "380px", margin: "0 auto" }}>
          Thank you for contacting R&amp;N Legal. We will review your enquiry and respond within 1 business day. For urgent matters, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
        padding: "clamp(32px, 5vw, 56px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }} />

      <div style={{ marginBottom: "clamp(28px, 4vw, 40px)" }}>
        <span className="label" style={{ marginBottom: "10px" }}>Consultation Intake</span>
        <div className="rule" style={{ margin: "10px 0 0" }} />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, color: "var(--ink)", marginTop: "16px" }}>
          Book a Consultation
        </h2>
        <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--muted)", marginTop: "8px" }}>
          Complete the form below. All enquiries are treated confidentially.
        </p>
      </div>

      <form onSubmit={submit} noValidate>
        {/* Row 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 4vw, 36px)", marginBottom: "clamp(20px, 4vw, 32px)" }} className="form-row">
          <Field label="Full Name" required>
            <input
              name="name" type="text" required
              value={form.name} onChange={set}
              placeholder="Your full name"
              className="input"
            />
          </Field>
          <Field label="Mobile Number" required>
            <input
              name="phone" type="tel" required
              value={form.phone} onChange={set}
              placeholder="04xx xxx xxx"
              className="input"
            />
          </Field>
        </div>

        {/* Row 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 4vw, 36px)", marginBottom: "clamp(20px, 4vw, 32px)" }} className="form-row">
          <Field label="Email Address" required>
            <input
              name="email" type="email" required
              value={form.email} onChange={set}
              placeholder="you@example.com"
              className="input"
            />
          </Field>
          <Field label="Preferred Contact Time">
            <input
              name="preferredTime" type="text"
              value={form.preferredTime} onChange={set}
              placeholder="e.g. Mornings, after 3pm"
              className="input"
            />
          </Field>
        </div>

        {/* Practice area */}
        <div style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
          <Field label="Practice Area">
            <select
              name="practiceArea"
              value={form.practiceArea} onChange={set}
              className="input"
              style={{ cursor: "pointer" }}
            >
              <option value="">— Select a practice area —</option>
              {practiceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
              <option value="Unsure">I&apos;m not sure</option>
            </select>
          </Field>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "clamp(28px, 4vw, 40px)" }}>
          <Field label="Brief Description" required>
            <textarea
              name="description" required rows={5}
              value={form.description} onChange={set}
              placeholder="Briefly describe your matter and note any urgent dates or deadlines..."
              className="input"
              style={{ resize: "vertical", lineHeight: 1.65 }}
            />
          </Field>
          <p style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--muted-light)", marginTop: "8px", letterSpacing: "0.03em" }}>
            Please do not attach sensitive documents here. We will request these if needed.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn--gold"
          style={{ width: "100%", justifyContent: "center", opacity: submitting ? 0.65 : 1 }}
        >
          {submitting ? "Submitting…" : "Submit Enquiry"}
        </button>

        <p style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--muted-light)", marginTop: "14px", textAlign: "center", lineHeight: 1.6 }}>
          Submitting this form does not create a lawyer–client relationship.{" "}
          <a href="/disclaimer" style={{ color: "var(--gold)" }}>See our Disclaimer</a>.
        </p>
      </form>

      <style>{`
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="input-wrap">
      <label className="input-label">
        {label}{required && <span style={{ color: "var(--gold)", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}
