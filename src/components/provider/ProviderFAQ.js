"use client";
import { useState } from "react";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function ProviderFAQ() {
  const [open, setOpen] = useState(null);
  const items = [
    { q: "How does Earlens differ from traditional hearing aids?", a: "Earlens uses a Lens on the eardrum to vibrate it directly, delivering up to 10 kHz of usable amplification." },
    { q: "What training is required to fit Earlens?", a: "Earlens provides comprehensive training including in-office Lens placement, processor programming, and ongoing clinical support." },
    { q: "What are the candidacy criteria?", a: "Earlens is indicated for adults with mild to severe sensorineural hearing loss." },
    { q: "How do I become an Earlens provider?", a: "Contact our provider development team to learn about partnership opportunities and training schedules." },
  ];
  return (
    <section id="faq" style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 20 }}>
                Provider<br />Questions
              </h2>
              <button style={{ display: "flex", alignItems: "center", gap: 8, background: C.teal, color: "#fff", padding: "12px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}>
                Contact Us {Ico.arrow}
              </button>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((item, i) => (
              <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ background: "#fff", borderRadius: 16, padding: "22px 28px", cursor: "pointer", border: `1px solid ${open === i ? C.teal + "40" : C.grayLight}`, transition: "all 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: C.text }}>{item.q}</span>
                  <span style={{ color: C.teal, transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }}>{Ico.chevDown}</span>
                </div>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  <div style={{ paddingTop: 16, color: C.textLight, fontSize: 14, lineHeight: 1.7 }}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
