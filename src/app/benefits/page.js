import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export const metadata = {
  title: "Earlens Benefits — A Revolution in Hearing Technology",
  description: "Discover the clinically proven benefits of Earlens: 2.5x wider bandwidth, custom fit, Bluetooth connectivity, zero feedback, and rechargeable convenience.",
};

const benefits = [
  {
    icon: Ico.wave(32),
    title: "2.5× Wider Frequency Range",
    subtitle: "Up to 10 kHz of usable amplification",
    desc: "Traditional hearing aids max out around 6 kHz. Earlens delivers amplification all the way up to 10 kHz — capturing the high-frequency sounds that make speech crisp and music rich: consonants, harmonics, the nuances that help your brain distinguish one voice from another.",
    color: C.teal,
    stat: "2.5×",
    statLabel: "more complete sound",
  },
  {
    icon: Ico.ear(32),
    title: "Custom-Fit Lens",
    subtitle: "Made precisely for your eardrum",
    desc: "Every Lens is custom-manufactured to the exact contours of your ear canal and eardrum. The result is a comfortable, invisible fit that stays securely in place — whether you're exercising, sleeping, or swimming.",
    color: "#6366F1",
    stat: "100%",
    statLabel: "custom to your ear",
  },
  {
    icon: Ico.sound(32),
    title: "Made for iPhone Bluetooth",
    subtitle: "Stream directly from your devices",
    desc: "Stream music, phone calls, and audio directly from your iPhone, iPad, or Apple Watch. No intermediate streaming device needed. The processor pairs directly for crystal-clear wireless audio, right to your ears.",
    color: C.blue,
    stat: "Direct",
    statLabel: "Bluetooth streaming",
  },
  {
    icon: Ico.shield(32),
    title: "No Feedback or Whistling",
    subtitle: "Virtually eliminated",
    desc: "Because the Lens vibrates the eardrum directly rather than pushing sound through a speaker, the feedback loop that causes whistling in conventional hearing aids is virtually eliminated. No more embarrassing squeals.",
    color: C.green,
    stat: "0",
    statLabel: "feedback issues",
  },
  {
    icon: Ico.check(32),
    title: "Fully Rechargeable",
    subtitle: "All-day hearing on one charge",
    desc: "The behind-the-ear processor is fully rechargeable. Place it in the charging case overnight and wake up to a full day of hearing. No more fumbling with tiny batteries. No more unexpected shutdowns.",
    color: C.gold,
    stat: "24hr",
    statLabel: "battery life",
  },
];

const hearingStats = [
  { val: "48M", label: "Americans have hearing loss" },
  { val: "10yrs", label: "Average wait before seeking treatment" },
  { val: "82%", label: "Report less listening effort with Earlens" },
  { val: "88%", label: "Improved quality of life" },
];

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        gradient
        label="Why Earlens"
        title="A Revolution in Hearing Technology"
        subtitle="Five reasons why Earlens delivers a hearing experience no conventional hearing aid can match."
      />

      {/* Benefits */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="mob-stack" style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: 64,
                alignItems: "center",
                direction: i % 2 === 0 ? "ltr" : "rtl",
              }}>
                <div style={{ direction: "ltr" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: 18,
                      background: b.color + "15",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: b.color,
                    }}>
                      {b.icon}
                    </div>
                    <div>
                      <div style={{ color: b.color, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{b.subtitle}</div>
                      <h3 style={{ fontSize: 24, fontWeight: 800, color: C.text }}>{b.title}</h3>
                    </div>
                  </div>
                  <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8 }}>{b.desc}</p>
                </div>
                <div style={{ direction: "ltr" }}>
                  <div style={{
                    background: b.color,
                    borderRadius: 24,
                    padding: "48px 40px",
                    textAlign: "center",
                    color: "#fff",
                  }}>
                    <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>{b.stat}</div>
                    <div style={{ fontSize: 16, opacity: 0.85 }}>{b.statLabel}</div>
                  </div>
                </div>
              </div>
              {i < benefits.length - 1 && (
                <div style={{ height: 1, background: C.grayLight, marginTop: 64 }} />
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Hearing loss stats */}
      <section style={{ padding: "80px 0", background: C.blue }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ color: C.tealLight, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                The Impact of Hearing Loss
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
                The Numbers Don&apos;t Lie
              </h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {hearingStats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  padding: "36px 24px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: C.tealLight, lineHeight: 1, marginBottom: 12 }}>{s.val}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PatientCTA />
    </>
  );
}
