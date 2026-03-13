import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { C, NAV_TOTAL } from "@/constants/colors";
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
    body: "Studies confirm the Earlens Contact Hearing Solution delivers functional audibility of speech through 10 kHz, while conventional acoustic amplification is limited to approximately 5 kHz. Preference data shows positive sound quality ratings for broad spectrum amplification across multiple listening categories including noise listening, music, and group conversations.",
    studies: ["Struck and Prusick, 2017", "McElveen et al., COSM 2017", "Arbogast et al., 2018"],
  },
  {
    icon: Ico.music(36),
    title: "Unparalleled Streaming Sound Quality",
    body: "Using the MUSHRA industry standard for sound quality evaluation, Earlens demonstrated superior streamed audio quality for speech and music compared to open-fit MFi-capable acoustic hearing aids in subjects with normal and impaired hearing.",
    studies: ["Eskridge et al., AAA 2019"],
  },
  {
    icon: Ico.shield(36),
    title: "Clinical Safety",
    body: "Fay et al. (2013) published initial Earlens clinical results demonstrating safety, technical feasibility, and patient improvement of direct-drive technology. Gantz et al. (2016) demonstrated hearing stability was maintained after lens wear. Earlens continues monitoring device safety.",
    studies: ["Fay et al., 2013", "Gantz et al., 2016"],
  },
];

const providerTestimonials = [
  {
    quote: "My patients have been transformed by the Earlens device...offer something that truly will benefit your patients in ways that are not available anywhere else.",
    name: "Mark Widick, MD, FACS",
    title: "Neurotologist",
  },
  {
    quote: "The Earlens system has provided me with a level of hearing that is extremely natural...I'm hearing things that I haven't heard in thirty years.",
    name: "Scott Gold",
    title: "Otologist and Earlens Wearer",
  },
];

const stats = [
  { icon: Ico.wave(32), val: "8:1", text: "Patients prefer the Earlens extended bandwidth" },
  { icon: Ico.ear(32), val: "82%", text: "Spent less listening effort with Earlens compared to their acoustic hearing aid" },
  { icon: Ico.star(32), val: "98%", text: "Rated Earlens sound quality superior to their existing hearing aids" },
];

const references = [
  "McElveen J, et al. Overcoming High-Frequency Limitations of Air Conduction Hearing Devices Using a Light-Driven Contact Hearing Aid. COSM, 2017.",
  "Struck CJ, Prusick L. Comparison of real-world bandwidth in hearing aids vs Earlens Light-driven Hearing Aid system. Hearing Review. 2017;24(3):24-29.",
  "Arbogast TL, et al. Achieved Gain and Subjective Outcomes for a Wide-Bandwidth Contact Hearing Aid Fitted Using CAM2. Ear Hear. 2019;40:741-756.",
  "Levy SC, et al. Extended high-frequency bandwidth improves speech reception in the presence of spatially separated masking speech. Ear Hear. 2015;36:e214-e224.",
  "Street L, et al. Extended High Frequency Amplification through 10 kHz Improves Speech Understanding. American Auditory Society, 2017.",
  "Eskridge-Mitchell E, et al. Sound Quality Comparison of Streamed Audio Through MFi-Compatible Acoustic Aids and a Contact Hearing Aid. AAA 2019.",
  "Fay JP, et al. Preliminary evaluation of a light-based contact hearing device for the hearing impaired. Otol Neurotol. 2013;34:912-921.",
  "Gantz BJ, et al. Light-driven contact hearing aid for broad-spectrum amplification: Safety and effectiveness pivotal study. Otol Neurotol. 2017;38(3):352-359.",
];

export default function PatientOutcomesPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 50%, ${C.teal} 100%)`, padding: "72px 0", position: "relative", overflow: "hidden" }}>
        <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ color: C.tealLight, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Provider — Patient Outcomes
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
              Patient Outcomes
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.7 }}>
              Achieve transformative results for patients with Earlens
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/patient_outcomes/shutterstock_243416983.jpg"
              alt="Patient outcomes"
              width={520}
              height={360}
              style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "72px 0", background: C.white }}>
        <div className="wrap">
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.light, borderRadius: 16, padding: "32px 28px", border: `1px solid ${C.grayLight}`, display: "flex", flexDirection: "column", gap: 14 }}>
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
      <section style={{ padding: "80px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Evidence-Based</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Clinically Proven Benefits
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 16, padding: "36px 44px", border: `1px solid ${C.grayLight}` }}>
                  {i === 0 ? (
                    <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }}>
                        <div style={{ color: C.teal, marginTop: 4 }}>{b.icon}</div>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 10, lineHeight: 1.3 }}>{b.title}</h3>
                          <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{b.body}</p>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {b.studies.map((s, j) => (
                              <span key={j} style={{ background: C.teal + "15", color: C.teal, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <img src="/images/patient_outcomes/image001.webp" alt="Broad spectrum amplification chart" style={{ width: 260, height: "auto", borderRadius: 12, flexShrink: 0 }} />
                    </div>
                  ) : i === 1 ? (
                    <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }}>
                        <div style={{ color: C.teal, marginTop: 4 }}>{b.icon}</div>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 10, lineHeight: 1.3 }}>{b.title}</h3>
                          <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{b.body}</p>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {b.studies.map((s, j) => (
                              <span key={j} style={{ background: C.teal + "15", color: C.teal, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <img src="/images/patient_outcomes/hearing_aid_types.webp" alt="Hearing aid types comparison" style={{ width: 260, height: "auto", borderRadius: 12, flexShrink: 0 }} />
                    </div>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }}>
                      <div style={{ color: C.teal, marginTop: 4 }}>{b.icon}</div>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 10, lineHeight: 1.3 }}>{b.title}</h3>
                        <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{b.body}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {b.studies.map((s, j) => (
                            <span key={j} style={{ background: C.teal + "15", color: C.teal, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Testimonials */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
              <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>From the Field</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Hear From Providers
              </h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {providerTestimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ background: C.light, borderRadius: 16, padding: "32px 28px", border: `1px solid ${C.grayLight}`, position: "relative" }}>
                  <div style={{ position: "absolute", top: 24, left: 28 }}>{Ico.quote}</div>
                  <p style={{ color: C.text, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20, paddingTop: 14 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{t.name}</div>
                  <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>{t.title}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section style={{ padding: "72px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 680, margin: "0 auto", background: "#fff", borderRadius: 20, padding: "40px 52px", border: `1px solid ${C.grayLight}`, textAlign: "center", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{Ico.quote}</div>
              <p style={{ color: C.text, fontSize: 18, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>
                &ldquo;I am thrilled with Earlens. It is a life changer for me.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>Coy B.</div>
              <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>Earlens Patient</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* References */}
      <section style={{ padding: "64px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>References</div>
              <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {references.map((r, i) => (
                  <li key={i} style={{ color: C.textLight, fontSize: 13, lineHeight: 1.7 }}>{r}</li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 100%)` }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
              A Revolutionary Approach to Hearing Care
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}>
              Earlens addresses technology performance barriers through direct drive technology, overcoming sound quality limitations of conventional hearing aids and differentiating your practice.
            </p>
            <Link href="/become-a-provider" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.teal, color: "#fff", padding: "13px 30px",
              borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none",
            }}>
              Become a Provider {Ico.arrow}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
