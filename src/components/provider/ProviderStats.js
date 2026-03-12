"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function ProviderStats() {
  return (
    <section id="why" style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Clinical Results</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>More Restored Sound</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
          <FadeIn>
            <div style={{ background: C.light, borderRadius: 24, padding: 32 }}>
              <div style={{ display: "flex", gap: 24, marginBottom: 16, fontSize: 12, fontWeight: 700 }}>
                <span style={{ color: C.gray }}>TRADITIONAL</span>
                <span style={{ color: C.teal }}>EARLENS</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 120 }}>
                {Array.from({ length: 80 }, (_, i) => {
                  const h = i > 28 ? 14 + Math.sin(i * 0.45) * 32 + Math.cos(i * 0.8) * 12 : 4 + Math.sin(i * 0.3) * 6;
                  return <div key={i} style={{ flex: 1, height: `${Math.max(4, h)}px`, borderRadius: 2, background: i > 28 ? `linear-gradient(180deg, ${C.teal}, #00BCD4)` : C.grayLight, opacity: i > 28 ? 0.9 : 0.5 }} />;
                })}
              </div>
              <div style={{ color: C.gray, fontSize: 12, marginTop: 12, textAlign: "center" }}>Earlens sound bandwidth comparison</div>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { icon: Ico.wave(), val: "16x", text: "wider frequency range than traditional hearing aids" },
              { icon: Ico.sound(), val: "2.5x", text: "more complete sound reproduction across the full spectrum" },
              { icon: Ico.check(), val: "32%", text: "improvement in speech understanding in noisy environments" },
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", background: C.light, borderRadius: 16, padding: "20px 24px" }}>
                  <div style={{ color: C.teal, flexShrink: 0 }}>{m.icon}</div>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: C.teal, lineHeight: 1 }}>{m.val}</div>
                    <div style={{ color: C.textLight, fontSize: 14, marginTop: 4, lineHeight: 1.5 }}>{m.text}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
