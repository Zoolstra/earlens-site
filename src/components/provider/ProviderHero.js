"use client";
import Link from "next/link";
import { C, NAV_TOTAL } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export function ProviderHero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.blue} 0%, #0a2a50 100%)`, minHeight: `calc(80vh - ${NAV_TOTAL}px)`, display: "flex", alignItems: "center", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        {[200, 350, 500, 650].map(r => (
          <div key={r} style={{ position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)", width: r, height: r, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
        ))}
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 14px", marginBottom: 24 }}>
          <span style={{ color: C.tealLight, fontSize: 12, fontWeight: 600 }}>FDA-Cleared Hearing Technology</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
          The Best Hearing<br />Requires a Lens
        </h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 19, lineHeight: 1.7, marginBottom: 48, maxWidth: 560 }}>
          The only hearing aid designed to mimic the natural hearing process &mdash; delivering the broadest audible bandwidth for superior sound quality and speech understanding.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
          <Link href="/become-a-provider" style={{ background: C.teal, color: "#fff", padding: "16px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            Become a Provider {Ico.arrow}
          </Link>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[{ v: "10+", l: "Years of Research" }, { v: "50+", l: "Published Studies" }, { v: "98%", l: "Patient Satisfaction" }].map((b, i) => (
            <div key={i}>
              <div style={{ color: "#fff", fontSize: 36, fontWeight: 900, lineHeight: 1 }}>{b.v}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
