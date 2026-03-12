"use client";
import { useState } from "react";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function PatientStories() {
  const [idx, setIdx] = useState(0);
  const stories = [
    { text: "I was at my granddaughter's recital and could hear every note of her violin. I hadn't heard those high notes in over a decade.", name: "Margaret T.", age: 72, loc: "Portland, OR", years: "Patient since 2021" },
    { text: "I'm a retired jazz musician. When I first put on Earlens, I heard harmonics I'd been missing for years.", name: "David R.", age: 68, loc: "Austin, TX", years: "Patient since 2020" },
    { text: "My husband and I can have a conversation at our favorite restaurant again. No more shouting. Just talking.", name: "Susan K.", age: 65, loc: "San Diego, CA", years: "Patient since 2022" },
  ];
  const s = stories[idx];
  return (
    <section id="stories" style={{ padding: "100px 0", background: `linear-gradient(135deg, ${C.blue} 0%, #0f3d6a 100%)` }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ color: C.tealLight, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Patient Stories
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 24 }}>
                Real People,<br />Real Moments
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
                Every Earlens patient has a story.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {stories.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 44 : 12, height: 12, borderRadius: 6, border: "none", background: i === idx ? C.teal : C.grayLight, cursor: "pointer", transition: "all 0.3s" }} />
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: 24, padding: "48px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ marginBottom: 16 }}>{Ico.quote}</div>
              <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                {[1,2,3,4,5].map(n => <span key={n}>{Ico.starFill()}</span>)}
              </div>
              <p style={{ color: "#fff", fontSize: 20, lineHeight: 1.7, fontStyle: "italic", marginBottom: 32 }}>
                &ldquo;{s.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 20 }}>
                  {s.name[0]}
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{s.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                    Age {s.age} &middot; {s.loc} &middot; {s.years}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
