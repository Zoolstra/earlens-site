import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import Link from "next/link";

export const metadata = {
  title: "Unique Technology — Earlens Providers",
  description: "The Earlens fitting range accommodates a wide variety of sensorineural hearing losses. A new option for mild-severe hearing loss.",
};

const features = [
  "Noise reduction technology",
  "Automatic adaptive directional microphones",
  "Feedback cancellation",
  "5 custom programs",
  "20 channels",
];

const components = [
  {
    title: "Earlens System",
    body: "Each Earlens solution comes with a rechargeable Processor, custom Ear Tip and custom Lens. The Processor has directional microphones to automatically adjust to challenging listening environments, unparalleled streaming sound quality through the MFi capability, 5 customizable programs and is available in 3 colors. The Ear Tip, made of a flexible Biopor material, sends sound information that signals the Lens to vibrate the eardrum.",
    icon: Ico.ear(32),
    color: C.teal,
  },
  {
    title: "Travel Charger and Case",
    body: "Easy, wireless recharging eliminates the need to change tiny batteries.",
    icon: Ico.wave(32),
    color: "#6366F1",
  },
  {
    title: "Fitting Software",
    body: "A built-in layer of verification optimizes the first-fit recommendation. The feedback manager, acclimatization programs and automatic streaming presets streamline the fitting process. Customize up to 4 programs for different listening situations.",
    icon: Ico.shield(32),
    color: C.gold,
  },
];

export default function UniqueTechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 50%, ${C.teal} 100%)`, padding: "72px 0", position: "relative", overflow: "hidden" }}>
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: C.tealLight, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Provider — Unique Technology
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16, maxWidth: 700 }}>
            A New Option for Mild-Severe Hearing Loss
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.7, maxWidth: 580 }}>
            The Earlens fitting range accommodates a wide variety of sensorineural hearing losses.
          </p>
        </div>
      </section>

      {/* Custom Designed and Built */}
      <section style={{ padding: "80px 0", background: C.blueLight }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>The System</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Custom Designed and Built
              </h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <FadeIn>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                  The Earlens Solution consists of 3 main parts: The Processor, Ear Tip and Lens. The Processor captures sound and converts it into a signal containing audio data and power, which is passed from the Ear Tip to the Lens.
                </p>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                  Both the Ear Tip and Lens are entirely custom designed for each patient&apos;s ear anatomy and assembled at Earlens headquarters in the heart of Silicon Valley.
                </p>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                  An ENT physician places the finished Lens onto the eardrum, while the audiologist fits and programs the Processor using our proprietary software, much like fitting a conventional hearing aid.
                </p>
                <div style={{ background: C.light, borderRadius: 16, padding: "24px 28px", border: `1px solid ${C.grayLight}` }}>
                  <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Benefits Include</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ color: C.teal, flexShrink: 0 }}>{Ico.checkSmall}</div>
                        <span style={{ color: C.text, fontSize: 14, fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src="/images/Earlens_3D_Render_New.png"
                  alt="Earlens 3D render"
                  width={480}
                  height={360}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Audiologist Testimonial */}
      <section style={{ padding: "72px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 680, margin: "0 auto", background: "#fff", borderRadius: 20, padding: "40px 52px", border: `1px solid ${C.grayLight}`, textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{Ico.quote}</div>
              <p style={{ color: C.text, fontSize: 18, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>
                &ldquo;As an audiologist, what most excites me about Earlens is the patient reaction compared to traditional amplification, how much better they perceive sound.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>Marc D&apos;Aprile, Sc.D</div>
              <div style={{ color: C.teal, fontSize: 13, marginTop: 2 }}>Audiologist, New York City</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A Complete Hearing Solution */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Everything Included</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                A Complete Hearing Solution
              </h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {components.map((c, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 6 }}>{c.title}</div>
                    <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.7 }}>{c.body}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <Image
                src="/images/MC_Earlens_Clear_Tip_900x600.png"
                alt="Earlens clear tip"
                width={450}
                height={300}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Transformative Results */}
      <section style={{ padding: "80px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
              <Image
                src="/images/IS_Grandfather_BumperCars_Grandchild_AmusementPark_1142642299.jpeg"
                alt="Grandfather and grandchild at amusement park"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
              />
              <div>
                <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Clinical Evidence</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 20 }}>
                  Transformative Results
                </h2>
                <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8 }}>
                  An extended bandwidth means nothing if it doesn&apos;t translate into real patient benefits. While acoustic hearing aids have trouble delivering meaningful audibility in the higher and lower frequencies, Earlens has shown benefits outside of a 2cc coupler setting.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Provider Testimonial */}
      <section style={{ padding: "80px 0", background: `linear-gradient(135deg, ${C.blue} 0%, #0f3d6a 100%)` }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div style={{ marginBottom: 12 }}>{Ico.quote}</div>
              <p style={{ color: "#fff", fontSize: 19, lineHeight: 1.8, fontStyle: "italic", marginBottom: 28 }}>
                &ldquo;My patients have been transformed by the Earlens device. Prior to that, our hearing aids which we had tried to dispense and tell them that they were going to hear in noisy environments often fell short. With this device, the top comment that I got is &lsquo;If a hearing aid is a hotdog, this is filet mignon.&rsquo; This device is totally different than anything you&apos;ve been involved with before, and will offer you the ability to distinguish yourself from everybody else in the market, and offer something that truly will benefit your patients in ways that are not available anywhere else.&rdquo;
              </p>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>Mark Widick, MD, FACS</div>
              <div style={{ color: C.tealLight, fontSize: 13, marginTop: 2 }}>Neurotologist</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: C.text, marginBottom: 14 }}>
              Ready to Offer Your Patients the Best?
            </h2>
            <p style={{ color: C.textLight, fontSize: 16, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
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
