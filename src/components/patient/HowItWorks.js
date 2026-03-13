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
    <section id="how-it-works" style={{ padding: "80px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Your Journey</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>How It Works</h2>
            <p style={{ color: C.textLight, fontSize: 16, marginTop: 14, lineHeight: 1.6 }}>
              From first visit to first &ldquo;wow&rdquo; moment &mdash; here&apos;s what to expect.
            </p>
          </div>
        </FadeIn>
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ background: C.white, borderRadius: 16, padding: "28px 20px", textAlign: "center", border: `1px solid ${C.grayLight}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 10 }}>
                  <div style={{ color: s.color }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{s.title}</div>
                </div>
                <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
