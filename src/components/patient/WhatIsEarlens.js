"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";
import { ProductImage } from "@/components/ProductImage";

export function WhatIsEarlens() {
  return (
    <section id="why" style={{ padding: "80px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <div style={{ color: C.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
              The Technology
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              What Is Earlens?
            </h2>
            <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7, marginTop: 14 }}>
              Unlike traditional hearing aids that push sound through a tiny speaker, Earlens places a custom Lens directly on your eardrum &mdash; vibrating it naturally, just like real sound does.
            </p>
          </div>
        </FadeIn>

        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }}>
          {[
            { title: "The Processor", desc: "A sleek, rechargeable behind-the-ear device that captures sound and converts it to light energy.", img: "device", accent: C.teal },
            { title: "The Lens", desc: "A tiny, custom-fit lens placed on your eardrum by your audiologist. So light, you can't feel it.", img: "lens", accent: C.blue, featured: true },
            { title: "The Tip", desc: "A comfortable ear tip that channels light from the processor to activate the Lens on your eardrum.", img: "hand", accent: C.green },
          ].map((part, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ border: `1px solid ${C.grayLight}`, borderRadius: 16, overflow: "hidden", background: "#fff" }}>
                <ProductImage variant={part.img} />
                <div style={{ padding: 20 }}>
                  <div style={{ width: 32, height: 3, borderRadius: 2, background: part.accent, marginBottom: 10 }} />
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 6 }}>{part.title}</div>
                  <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.6 }}>{part.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mob-stack" style={{ background: C.blueLight, borderRadius: 16, padding: "36px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: C.blue, marginBottom: 12 }}>Why a Lens on Your Eardrum?</h3>
              <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                Your eardrum is incredibly sensitive &mdash; it can detect vibrations smaller than the width of an atom. By vibrating it directly, Earlens delivers a frequency range 16 times wider.
              </p>
              <div style={{ display: "flex", gap: 28 }}>
                {[{ v: "10kHz", l: "usable amplification" }, { v: "Non-surgical", l: "placement" }, { v: "Invisible", l: "when worn" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 19, fontWeight: 800, color: C.blue }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: C.textLight }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img src="/images/MC_Earlens_FullResSmall rubber_layers_NoBG_NoShadow.png" alt="Earlens layers" style={{ width: 170, height: "auto", display: "block" }} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
