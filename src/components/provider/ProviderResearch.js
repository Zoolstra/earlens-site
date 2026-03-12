"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function ProviderResearch() {
  const papers = [
    { tag: "Featured", title: "A 10-Year Review of the Earlens System Part 1", desc: "Speech understanding data and how increasing bandwidth improves outcomes.", yr: "2021", color: C.teal },
    { tag: "Featured", title: "A 10-Year Review of the Earlens System Part 2", desc: "Perceptual benefits to naturalness and overall sound quality.", yr: "2021", color: "#6366F1" },
    { tag: "Clinical", title: "Extended Bandwidth Hearing Aid Outcomes", desc: "Patient preference and satisfaction data for extended bandwidth amplification.", yr: "2022", color: C.gold },
  ];
  return (
    <section id="research" style={{ padding: "100px 0", background: C.light }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Research</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 16 }}>See The Proof</h2>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
                Backed by over a decade of peer-reviewed research.
              </p>
              <button style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: C.teal, padding: "12px 0", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}>
                View All Research {Ico.arrow}
              </button>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {papers.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", border: `1px solid ${C.grayLight}`, display: "flex", gap: 24, alignItems: "center", cursor: "pointer", transition: "box-shadow 0.2s" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>
                    {p.yr.slice(2)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "inline-block", background: p.color + "20", color: p.color, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, padding: "3px 10px", borderRadius: 20, marginBottom: 6 }}>{p.tag}</div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: C.text, marginBottom: 4 }}>
                      Dundas &amp; Levy ({p.yr}) &mdash; {p.title}
                    </div>
                    <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                  <div style={{ color: C.teal, flexShrink: 0 }}>{Ico.arrow}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
