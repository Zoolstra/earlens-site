"use client";
import Link from "next/link";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function PatientCTA() {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${C.blue} 0%, ${C.teal} 100%)`,
      padding: "80px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
        {[160, 280, 400].map((r) => (
          <div key={r} style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: r, height: r, borderRadius: "50%",
            border: "1px solid #fff",
          }} />
        ))}
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 800, color: "#fff",
              marginBottom: 14, lineHeight: 1.2,
            }}>
              Ready to Hear What You&apos;ve Been Missing?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 32 }}>
              Find an Earlens provider near you and take the first step toward the best hearing of your life.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" style={{
                background: "#fff", color: C.blue,
                padding: "13px 30px", borderRadius: 6,
                fontSize: 14, fontWeight: 700,
                textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
              }}>
                Contact Us {Ico.arrow}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
