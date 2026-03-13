import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import Link from "next/link";

export const metadata = {
  title: "Patient Outcomes — Earlens Providers",
  description: "Achieve transformative results for patients with Earlens. Clinically proven benefits across bandwidth, sound quality, and safety.",
};

const benefits = [
  {
    icon: Ico.wave(36),
    title: "Broad Spectrum Amplification Preferred",
    body: "Clinical research shows the Earlens Contact Hearing Solution achieves functional audibility through 10 kHz, while conventional acoustic amplification maxes out around 5 kHz. Patient preference data is positive across multiple listening scenarios — noise, music, and group conversations — compared to previous hearing aids.",
    studies: ["Struck and Prusick, 2017", "McElveen et al., 2017", "Arbogast et al., 2018"],
  },
  {
    icon: Ico.music(36),
    title: "Unparalleled Streaming Sound Quality",
    body: "Using the MUSHRA industry standard for sound quality evaluation, Earlens demonstrated superior streamed audio quality for speech and music versus open-fit MFi-capable acoustic hearing aids.",
    studies: ["Eskridge et al., AAA 2019"],
  },
  {
    icon: Ico.shield(36),
    title: "Clinical Safety",
    body: "Initial 2013 research by Fay et al. demonstrated safety and feasibility. Subsequent studies confirmed hearing stability post-lens wear. Earlens continues monitoring device safety.",
    studies: ["Fay et al., 2013", "Gantz et al., 2016"],
  },
];

const providerTestimonials = [
  {
    quote: "My patients have been transformed by the Earlens device. Earlens is totally different...offer[ing] something that truly will benefit your patients in ways not available anywhere else.",
    name: "Mark Widick, MD, FACS",
    title: "Neurotologist",
  },
  {
    quote: "The Earlens system has provided me with a level of hearing that is extremely natural...I'm hearing things I haven't heard in thirty years.",
    name: "Scott Gold",
    title: "Otologist and Earlens Wearer",
  },
];

const stats = [
  { icon: Ico.wave(32), val: "8:1", text: "Patients prefer the Earlens extended bandwidth" },
  { icon: Ico.ear(32), val: "82%", text: "Spent less listening effort with Earlens compared to their acoustic hearing aid" },
  { icon: Ico.star(32), val: "98%", text: "Rated Earlens sound quality superior to their existing HAs" },
];

export default function PatientOutcomesPage() {
  return (
    <>
      <PageHero
        gradient
        label="Provider — Why Earlens"
        title="Patient Outcomes"
        subtitle="Achieve transformative results for patients with Earlens"
      />

      {/* Stats bar */}
      <section style={{ padding: "72px 0", background: C.white }}>
        <div className="wrap">
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.light, borderRadius: 20, padding: "32px 28px", border: `1px solid ${C.grayLight}`, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ color: C.teal }}>{s.icon}</div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: C.teal, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ color: C.textLight, fontSize: 15, lineHeight: 1.6 }}>{s.text}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clinically Proven Benefits */}
      <section style={{ padding: "100px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Evidence-Based</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Clinically Proven Benefits
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "40px 48px", border: `1px solid ${C.grayLight}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "start" }}>
                  <div style={{ color: C.teal, marginTop: 4 }}>{b.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 12, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{b.body}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {b.studies.map((s, j) => (
                        <span key={j} style={{ background: C.teal + "15", color: C.teal, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Testimonials */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>From the Field</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Hear From Providers
              </h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {providerTestimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ background: C.light, borderRadius: 20, padding: "36px 32px", border: `1px solid ${C.grayLight}`, position: "relative" }}>
                  <div style={{ position: "absolute", top: 28, left: 32 }}>{Ico.quote}</div>
                  <p style={{ color: C.text, fontSize: 16, lineHeight: 1.8, fontStyle: "italic", marginBottom: 24, paddingTop: 16 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{t.name}</div>
                  <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>{t.title}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section style={{ padding: "80px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 720, margin: "0 auto", background: "#fff", borderRadius: 24, padding: "48px 56px", border: `1px solid ${C.grayLight}`, textAlign: "center", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{Ico.quote}</div>
              <p style={{ color: C.text, fontSize: 20, lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>
                &ldquo;I am thrilled with Earlens. I am pleasantly surprised how easy it has been to adapt to them. I can now understand what people are saying, especially women. Also, music is much richer.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>Coy B.</div>
              <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>Earlens Patient</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 100%)` }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              A Revolutionary Approach to Hearing Care
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
              Earlens overcomes sound quality limitations through direct drive technology, addressing mild-to-severe hearing loss and differentiating your practice.
            </p>
            <Link href="/become-a-provider" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.teal, color: "#fff", padding: "16px 36px",
              borderRadius: 6, fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}>
              Become a Provider {Ico.arrow}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
