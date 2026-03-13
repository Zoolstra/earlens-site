"use client";
import { useState } from "react";
import Link from "next/link";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function PatientFAQ() {
  const [open, setOpen] = useState(null);
  const items = [
    { q: "How is Earlens different from regular hearing aids?", a: "Traditional hearing aids use a tiny speaker. Earlens places a custom Lens directly on your eardrum that vibrates it naturally — delivering a much wider range of frequencies." },
    { q: "Does it hurt to have the Lens placed?", a: "Not at all. The Lens is placed non-surgically by your audiologist in a quick office visit." },
    { q: "How long does the battery last?", a: "The rechargeable processor provides a full day of hearing on a single charge." },
    { q: "Is Earlens covered by insurance?", a: "Coverage varies by plan. Your Earlens provider's team will help verify your benefits." },
    { q: "Who is a good candidate?", a: "Earlens is designed for adults with mild to severe sensorineural hearing loss." },
    { q: "How long does the whole process take?", a: "From first consultation to activation typically takes a few weeks." },
  ];
  return (
    <section id="faq" style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 20 }}>
                Your Questions,<br />Answered
              </h2>
              <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.teal, color: "#fff", padding: "12px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                Contact Us {Ico.arrow}
              </Link>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((item, i) => (
              <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ background: open === i ? C.tealSoft : C.light, borderRadius: 16, padding: "22px 28px", cursor: "pointer", border: `1px solid ${open === i ? C.teal + "40" : C.grayLight}`, transition: "all 0.3s" }}>
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
