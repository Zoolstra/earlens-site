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
    <section style={{ padding: "80px 0", background: C.warm }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Life With Earlens</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              Moments You&apos;ll Hear Again
            </h2>
          </div>
        </FadeIn>
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {moments.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: C.white, borderRadius: 16, padding: "28px 32px", border: `1px solid ${C.warmBorder}`, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.tealLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.teal, flexShrink: 0 }}>
                  {m.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 6 }}>{m.title}</div>
                  <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
