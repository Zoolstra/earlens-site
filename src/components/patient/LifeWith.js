"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function LifeWith() {
  const moments = [
    { title: "Conversations at Dinner", desc: "Follow every voice at the table, even in a noisy restaurant.", icon: Ico.users() },
    { title: "Music Like You Remember", desc: "Hear the full richness of your favorite songs — every instrument.", icon: Ico.music() },
    { title: "Nature's Soundtrack", desc: "Birdsong, rustling leaves, rainfall. The subtle sounds of life.", icon: Ico.wave() },
    { title: "Grandchildren's Whispers", desc: "Catch every giggle, every secret, every tiny voice.", icon: Ico.heart() },
  ];
  return (
    <section style={{ padding: "100px 0", background: C.warm }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Life With Earlens</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              Moments You&apos;ll Hear Again
            </h2>
          </div>
        </FadeIn>
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {moments.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: C.white, borderRadius: 20, padding: "36px 40px", border: `1px solid ${C.warmBorder}`, display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: C.tealLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.teal, flexShrink: 0 }}>
                  {m.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: C.text, marginBottom: 8 }}>{m.title}</div>
                  <div style={{ color: C.textLight, fontSize: 15, lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
