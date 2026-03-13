import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import Link from "next/link";

export const metadata = {
  title: "Practice Growth — Earlens Providers",
  description: "Differentiated technology and a unique care model set your practice apart. Grow your practice with Earlens.",
};

const providerBenefits = [
  "Onsite clinical training support",
  "Staff coaching on presentation skills and call handling",
  "Business reviews",
  "Co-op marketing support",
  "Front office assessments",
  "Lead generation collateral & digital content",
];

const growthPoints = [
  "Direct drive technology overcomes sound quality limitations of conventional hearing aids",
  "The unique partnership model between an ENT and AuD offers a higher standard of hearing health care with additional opportunities for diagnosis and referral",
];

const opportunities = [
  "Satisfy more patients with mild-severe hearing loss",
  "Differentiate themselves within the local market",
  "Drive new patients in the door through a compelling new type of hearing solution",
];

export default function PracticeGrowthPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/bigstock-Doctor-And-Patient-Shaking-Han-225885820.jpg"
          alt="Doctor and patient"
          width={1600}
          height={1067}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,59,113,0.55) 0%, rgba(0,97,138,0.45) 50%, rgba(0,151,169,0.4) 100%)" }} />
        <div className="wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "48px", zIndex: 1 }}>
          <div style={{ color: C.tealLight, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Provider — Practice Growth
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16, maxWidth: 700 }}>
            Practice Growth
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.7, maxWidth: 580 }}>
            Differentiated technology and a unique care model set your practice apart.
          </p>
        </div>
      </section>

      {/* Differentiate in your market */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div className="wrap">
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Your Advantage</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 20 }}>
                  Differentiate in Your Market
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    One of the biggest benefits of incorporating Earlens into your product offering is a unique opportunity to differentiate yourself within your local market.
                  </p>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    Since Earlens is the first and only nonsurgical direct drive hearing solution, it presents a compelling reason for patients to visit (or re-visit) your practice. This marketing advantage, together with the multidisciplinary care approach that combines the expertise of an ENT physician and audiologist, creates a new opportunity to sustain your competitive advantage and grow your business.
                  </p>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    Earlens wants to ensure successful outcomes for both your patients and your practice. Our provider benefits program is intended to help you capture the patient satisfaction and practice growth benefits that Earlens can deliver.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Image
                src="/images/iStock-638121240.jpg"
                alt="Provider and patient"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Provider Testimonial - Neil Sperling */}
      <section style={{ padding: "72px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div style={{ marginBottom: 12 }}>{Ico.quote}</div>
              <p style={{ color: C.text, fontSize: 18, lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>
                &ldquo;I thought adding Earlens to my practice was an outstanding way to expand what we do, which is always to try and provide excellence of care and better hearing. The Earlens system really fits that bill. Earlens provides an opportunity to differentiate my practice because we&apos;re able to provide a hearing system that is better than any hearing aid and also will help solve a problem that many patients can&apos;t solve with other hearing devices.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>Neil Sperling, MD, FACS</div>
              <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>Otologist, New York City</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meeting a growing public mandate */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div className="wrap">
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            {/* Image placeholder */}
            <FadeIn>
              <Image
                src="/images/iStock-587802854.jpg"
                alt="Hearing healthcare"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Public Health</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 20 }}>
                  Meeting a Growing Public Mandate
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    Hearing loss represents a major public health concern. Not only is it the third most common health problem in the United States, but it incurs significant costs — both to the individual, as well as society.
                  </p>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    The benefits of treating hearing loss are manifold. Hearing loss is associated with a range of health conditions, including depression, falls and heart attack. A recent Lancet Commissions review identified hearing loss as the top potentially modifiable risk factor for preventing dementia among people aged 45–65.
                  </p>
                  <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                    From a societal perspective, untreated hearing loss is associated with more hospitalizations, increased risk of 30-day hospital readmission, and longer hospital stays. Yet only 16% of patients who would benefit from amplification have used a hearing aid.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Provider Benefits */}
      <section style={{ padding: "80px 0", background: C.blueLight }}>
        <div className="wrap">
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Provider Program</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 24 }}>
                  A Revolutionary Approach to Hearing Care
                </h2>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                  Earlens addresses barriers in technology performance through its new approach to treating hearing loss:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {growthPoints.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ color: C.teal, flexShrink: 0, marginTop: 2 }}>{Ico.checkSmall}</div>
                      <span style={{ color: C.textLight, fontSize: 14, lineHeight: 1.7 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  Earlens therefore creates an exciting opportunity for practices to:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {opportunities.map((o, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ color: C.teal, flexShrink: 0, marginTop: 2 }}>{Ico.checkSmall}</div>
                      <span style={{ color: C.textLight, fontSize: 14, lineHeight: 1.7 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: "#fff", borderRadius: 16, padding: "32px 36px", border: `1px solid ${C.grayLight}` }}>
                <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Benefits Include</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {providerBenefits.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", paddingBottom: 14, borderBottom: i < providerBenefits.length - 1 ? `1px solid ${C.grayLight}` : "none" }}>
                      <div style={{ color: C.teal, flexShrink: 0 }}>{Ico.checkSmall}</div>
                      <span style={{ color: C.text, fontSize: 14, fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Audiologist Testimonial - Patti Ramos */}
      <section style={{ padding: "72px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 680, margin: "0 auto", background: C.light, borderRadius: 20, padding: "40px 52px", border: `1px solid ${C.grayLight}`, textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{Ico.quote}</div>
              <p style={{ color: C.text, fontSize: 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>
                &ldquo;Patient interest in Earlens has been extremely high. I think that people that have an experience with hearing loss are always looking for ways to improve how they&apos;re hearing. So the fact that Earlens brings something very different into the portfolio really simplifies the marketing process.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>Patti Ramos, AuD</div>
              <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>Audiology Director</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 100%)` }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
              Ready to Grow Your Practice?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 500, margin: "0 auto 32px" }}>
              Join the Earlens provider network and differentiate your practice with breakthrough hearing technology.
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
