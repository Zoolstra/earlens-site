"use client";
import { C, NAV_TOTAL } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { ProductImage } from "@/components/ProductImage";

export function PatientHero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 50%, ${C.teal} 100%)`, minHeight: `calc(90vh - ${NAV_TOTAL}px)`, display: "flex", alignItems: "center", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 14px", marginBottom: 24 }}>
            <span style={{ color: C.tealLight, fontSize: 12, fontWeight: 600 }}>
              FDA-Cleared &middot; Clinically Proven
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
            Rediscover the Sounds You&apos;ve Been Missing
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
            Earlens uses a tiny lens on your eardrum to deliver the richest, most natural sound of any hearing aid &mdash; so you can hear conversations, music, and life with stunning clarity.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <button style={{ background: C.teal, color: "#fff", padding: "16px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Find a Provider {Ico.arrow}
            </button>
            <button style={{ background: "transparent", color: "#fff", padding: "16px 24px", borderRadius: 6, fontSize: 15, fontWeight: 600, border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              {Ico.play}
              See How It Works
            </button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <ProductImage variant="device" />
          <div style={{ position: "absolute", bottom: -20, left: -20, background: "rgba(0,151,169,0.9)", backdropFilter: "blur(10px)", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ color: "#fff" }}>{Ico.sound()}</div>
            <div>
              <div style={{ color: "#fff", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>16x</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>wider frequency range</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
