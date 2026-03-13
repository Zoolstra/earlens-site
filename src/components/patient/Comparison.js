"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function Comparison() {
  const rows = [
    { feature: "Frequency Range", trad: "Up to 6 kHz", earlens: "Up to 10 kHz" },
    { feature: "How Sound Is Delivered", trad: "Tiny speaker in ear canal", earlens: "Lens vibrates eardrum directly" },
    { feature: "Sound Completeness", trad: "Baseline", earlens: "2.5x more complete" },
    { feature: "Speech in Noise", trad: "Standard", earlens: "32% improvement" },
    { feature: "Sound Quality", trad: "Varies", earlens: "98% rate as superior" },
    { feature: "Feedback / Whistling", trad: "Common", earlens: "Virtually eliminated" },
    { feature: "Open Ear Canal", trad: "Often blocked", earlens: "Yes — natural ventilation" },
  ];
  return (
    <section id="compare" style={{ padding: "100px 0", background: C.light }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Compare</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              Earlens vs. Traditional Hearing Aids
            </h2>
            <p style={{ color: C.textLight, fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
              See why Earlens delivers a hearing experience no conventional hearing aid can match.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 40px rgba(0,0,0,0.08)", border: `1px solid ${C.grayLight}` }}>
            <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: C.blue, padding: "16px 32px" }}>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>FEATURE</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>TRADITIONAL</div>
              <div style={{ color: C.tealLight, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>EARLENS</div>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", padding: "18px 32px", borderBottom: i < rows.length - 1 ? `1px solid ${C.grayLight}` : "none", background: i % 2 === 0 ? C.white : C.light }}>
                <div style={{ fontWeight: 600, color: C.text, fontSize: 14 }}>{r.feature}</div>
                <div style={{ color: C.gray, fontSize: 14 }}>{r.trad}</div>
                <div style={{ color: C.teal, fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  {Ico.checkSmall} {r.earlens}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
