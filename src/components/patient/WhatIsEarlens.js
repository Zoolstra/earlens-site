"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";
import { ProductImage } from "@/components/ProductImage";

export function WhatIsEarlens() {
  return (
    <section id="why" style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              The Technology
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              What Is Earlens?
            </h2>
            <p style={{ color: C.textLight, fontSize: 17, lineHeight: 1.7, marginTop: 16 }}>
              Unlike traditional hearing aids that push sound through a tiny speaker, Earlens places a custom Lens directly on your eardrum &mdash; vibrating it naturally, just like real sound does.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 64 }}>
          {[
            { title: "The Processor", desc: "A sleek, rechargeable behind-the-ear device that captures sound and converts it to light energy.", img: "device", accent: C.teal },
            { title: "The Lens", desc: "A tiny, custom-fit lens placed on your eardrum by your audiologist. So light, you can't feel it.", img: "lens", accent: C.blue, featured: true },
            { title: "The Tip", desc: "A comfortable ear tip that channels light from the processor to activate the Lens on your eardrum.", img: "hand", accent: C.green },
          ].map((part, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ border: part.featured ? `2px solid ${part.accent}` : `1px solid ${C.grayLight}`, borderRadius: 20, overflow: "hidden", background: "#fff", boxShadow: part.featured ? `0 8px 40px ${part.accent}20` : "none" }}>
                {part.featured && <div style={{ background: part.accent, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, textAlign: "center", padding: "6px 0" }}>KEY COMPONENT</div>}
                <ProductImage variant={part.img} />
                <div style={{ padding: 24 }}>
                  <div style={{ width: 40, height: 4, borderRadius: 2, background: part.accent, marginBottom: 12 }} />
                  <div style={{ fontWeight: 700, fontSize: 18, color: C.text, marginBottom: 8 }}>{part.title}</div>
                  <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{part.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div style={{ background: C.blueLight, borderRadius: 24, padding: "48px 56px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: C.blue, marginBottom: 16 }}>Why a Lens on Your Eardrum?</h3>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Your eardrum is incredibly sensitive &mdash; it can detect vibrations smaller than the width of an atom. By vibrating it directly, Earlens delivers a frequency range 16 times wider.
              </p>
              <div style={{ display: "flex", gap: 32 }}>
                {[{ v: "10kHz", l: "usable amplification" }, { v: "Non-surgical", l: "placement" }, { v: "Invisible", l: "when worn" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: C.blue }}>{s.v}</div>
                    <div style={{ fontSize: 13, color: C.textLight }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
              {Ico.ear(48)}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
