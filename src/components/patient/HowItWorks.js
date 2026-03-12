"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Schedule a Consultation", desc: "Find an Earlens provider near you and schedule a comprehensive hearing evaluation.", icon: Ico.users(), color: C.teal },
    { num: "02", title: "Get Your Custom Fit", desc: "Your audiologist takes a precise impression to create a Lens uniquely shaped to your ear.", icon: Ico.ear(), color: "#6366F1" },
    { num: "03", title: "Lens Placement", desc: "In a quick, non-surgical office visit, your audiologist places the Lens on your eardrum.", icon: Ico.shield(), color: C.gold },
    { num: "04", title: "Hear the Difference", desc: "Your processor is programmed to your hearing profile. You'll hear sounds you've missed for years.", icon: Ico.heart(), color: C.green },
  ];
  return (
    <section id="how-it-works" style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Your Journey</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>How It Works</h2>
            <p style={{ color: C.textLight, fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
              From first visit to first &ldquo;wow&rdquo; moment &mdash; here&apos;s what to expect.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
          <div style={{ position: "absolute", top: 52, left: "12.5%", right: "12.5%", height: 2, background: `linear-gradient(90deg, ${C.teal}, ${C.blue})`, zIndex: 0 }} />
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ background: C.white, borderRadius: 20, padding: "32px 24px", textAlign: "center", border: `1px solid ${C.grayLight}`, position: "relative", zIndex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#fff", fontSize: 22, fontWeight: 800, border: "4px solid #fff", boxShadow: `0 0 0 2px ${s.color}` }}>
                  {s.num}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ color: s.color }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{s.title}</div>
                </div>
                <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
