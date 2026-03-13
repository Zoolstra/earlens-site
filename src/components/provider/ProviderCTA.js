"use client";
import Link from "next/link";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

export function ProviderCTA() {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${C.blue} 0%, ${C.teal} 100%)`,
      padding: "100px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
        {[200, 350, 500].map((r) => (
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
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, color: "#fff",
              marginBottom: 16, lineHeight: 1.2,
            }}>
              Ready to Offer Your Patients the Best?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 40 }}>
              Join the Earlens provider network and differentiate your practice with breakthrough hearing technology.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/become-a-provider" style={{
                background: "#fff", color: C.blue,
                padding: "16px 36px", borderRadius: 6,
                fontSize: 15, fontWeight: 700, textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                Become a Provider {Ico.arrow}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
