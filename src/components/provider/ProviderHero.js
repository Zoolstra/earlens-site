"use client";
import Image from "next/image";
import Link from "next/link";
import { C, NAV_TOTAL } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export function ProviderHero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.blue} 0%, #0a2a50 100%)`, display: "flex", alignItems: "center", padding: "64px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative", zIndex: 1, width: "100%" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 14px", marginBottom: 20 }}>
            <span style={{ color: C.tealLight, fontSize: 12, fontWeight: 600 }}>FDA-Cleared Hearing Technology</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            The Best Hearing<br />Requires a Lens
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
            The only hearing aid designed to mimic the natural hearing process &mdash; delivering the broadest audible bandwidth for superior sound quality and speech understanding.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <Link href="/become-a-provider" style={{ background: C.teal, color: "#fff", padding: "13px 28px", borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              Become a Provider {Ico.arrow}
            </Link>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[{ v: "10+", l: "Years of Research" }, { v: "50+", l: "Published Studies" }, { v: "98%", l: "Patient Satisfaction" }].map((b, i) => (
              <div key={i}>
                <div style={{ color: "#fff", fontSize: 30, fontWeight: 900, lineHeight: 1 }}>{b.v}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 4 }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/images/iStock-673335866.jpg"
            alt="Provider with patient"
            width={700}
            height={500}
            style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
