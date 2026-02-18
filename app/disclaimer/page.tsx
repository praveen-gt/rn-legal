import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer & Privacy",
  description: "Website disclaimer and privacy policy for R&N Legal. General information, lawyer-client relationships, email confidentiality and personal information handling.",
  alternates: { canonical: `${siteConfig.url}/disclaimer` },
  robots: { index: false, follow: false },
};

const sections = [
  {
    num: "01",
    title: "Website Disclaimer",
    content: [
      "The information on this website is general in nature and is not intended to constitute legal advice. You should not act (or refrain from acting) based on any information on this website without obtaining legal advice tailored to your circumstances.",
      "While we take reasonable care in preparing website content, we do not warrant that the information is complete, current or free from errors. Outcomes in legal matters depend on the specific facts, evidence, and the approach taken by the relevant court, tribunal or decision-maker.",
    ],
  },
  {
    num: "02",
    title: "No Lawyer–Client Relationship",
    content: [
      "Contacting us through this website or by email does not create a lawyer–client relationship. A lawyer–client relationship is formed only when we confirm our engagement in writing (for example, by issuing and receiving an accepted costs agreement/retainer).",
      "Until such confirmation is provided, any information you share with us should not be regarded as privileged or confidential in the legal sense.",
    ],
  },
  {
    num: "03",
    title: "Confidentiality and Email",
    content: [
      "Email is not always secure. If your matter is time-critical or highly sensitive, please call us directly.",
      "Do not send original documents unless requested. Transmission of information via email does not establish a lawyer–client relationship and may not be treated as confidential unless and until a retainer is confirmed.",
    ],
  },
  {
    num: "04",
    title: "Privacy",
    content: [
      "We may collect personal information that you provide through forms, email, phone or other contact methods for the purpose of responding to your enquiry, providing legal services, and complying with professional obligations.",
      "We take reasonable steps to protect personal information from misuse, loss, unauthorised access or disclosure. Personal information will not be shared with third parties except where required by law, necessary to provide legal services, or with your consent.",
      `You may request access to personal information we hold about you, and you may request corrections if needed. To make such a request, please contact us at ${siteConfig.email}.`,
    ],
  },
  {
    num: "05",
    title: "Cookies and Analytics",
    content: [
      "This website may use analytics tools to collect de-identified usage information. This information is used solely to improve website performance and user experience. We do not use tracking cookies for advertising purposes.",
      "You may disable cookies in your browser settings, though this may affect the functionality of the website.",
    ],
  },
  {
    num: "06",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, R&N Legal excludes all liability for any loss or damage (including indirect or consequential loss) arising from reliance on information contained on this website.",
      "If any limitation is unenforceable, our liability is limited to resupply of the relevant information.",
    ],
  },
  {
    num: "07",
    title: "Changes to This Policy",
    content: [
      "We may update this disclaimer and privacy policy from time to time. The current version will always be available on this page. Continued use of this website constitutes acceptance of any changes.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Disclaimer &"
        titleItalic="Privacy Policy"
        subtitle="Please read these terms before using this website or contacting R&N Legal."
        slim
      />

      <section style={{ background: "var(--ivory)", paddingTop: "clamp(64px, 9vw, 104px)", paddingBottom: "clamp(64px, 9vw, 104px)" }}>
        <div className="container--narrow">
          {/* Metadata */}
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 4vw, 48px)",
              marginBottom: "clamp(48px, 7vw, 72px)",
              paddingBottom: "clamp(24px, 3vw, 32px)",
              borderBottom: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Applies to", val: siteConfig.url },
              { label: "Last reviewed", val: "2025" },
              { label: "Jurisdiction", val: "Victoria, Australia" },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px", fontFamily: "var(--font-body)" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--muted)", fontFamily: "var(--font-body)" }}>
                  {m.val}
                </div>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {sections.map((section, i) => (
              <div
                key={section.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "clamp(24px, 4vw, 48px)",
                  padding: "clamp(36px, 5vw, 56px) 0",
                  borderBottom: i < sections.length - 1 ? "1px solid var(--border)" : "none",
                }}
                className="disclaimer-entry"
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "var(--gold)",
                    opacity: 0.7,
                    paddingTop: "6px",
                    minWidth: "24px",
                  }}
                >
                  {section.num}
                </span>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      fontWeight: 400,
                      color: "var(--ink)",
                      marginBottom: "16px",
                    }}
                  >
                    {section.title}
                  </h2>
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 300,
                        color: "var(--muted)",
                        lineHeight: 1.85,
                        marginBottom: j < section.content.length - 1 ? "14px" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Privacy contact */}
          <div
            style={{
              marginTop: "clamp(48px, 7vw, 72px)",
              padding: "clamp(28px, 4vw, 44px)",
              background: "var(--navy)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }} />
            <span className="label label--light" style={{ marginBottom: "10px" }}>Privacy Enquiries</span>
            <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "520px", marginBottom: "20px" }}>
              For privacy-related enquiries, access requests or corrections to personal information we hold about you, please contact us directly.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href={`mailto:${siteConfig.email}`} className="btn btn--ghost-gold" style={{ padding: "12px 24px" }}>
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone1.replace(/\s/g, "")}`} className="btn btn--outline" style={{ padding: "12px 24px" }}>
                {siteConfig.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
