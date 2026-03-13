"use client";
import Image from "next/image";
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
              <Image
                src="/images/Earlens_Audible-Bandwidth_Comparison_BLUE.jpg"
                alt="Earlens audible bandwidth comparison chart"
                width={700}
                height={420}
                style={{ width: "100%", height: "auto", borderRadius: 12, display: "block" }}
              />
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
