"use client";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { C } from "@/constants/colors";

export default function ProviderLoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) router.push("/provider/orders");
  }, [user, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/provider/orders");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.light, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/">
            <Image
              src="/images/Logo-Earlens-r-Mar19_cmyk_cmyk.jpg"
              alt="Earlens"
              width={160}
              height={44}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Card */}
        <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${C.grayLight}`, padding: "48px 44px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.teal, textTransform: "uppercase", marginBottom: 8 }}>Provider Portal</div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: C.text, lineHeight: 1.2, margin: 0 }}>Sign in to your account</h1>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={e => e.target.style.borderColor = C.teal}
                onBlur={e => e.target.style.borderColor = C.grayLight}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={e => e.target.style.borderColor = C.teal}
                onBlur={e => e.target.style.borderColor = C.grayLight}
              />
            </div>

            {error && (
              <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "12px 16px", color: "#DC2626", fontSize: 14 }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ background: loading ? C.gray : C.teal, color: "#fff", padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 700, border: "none", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.2s", marginTop: 4 }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/provider" style={{ color: C.textLight, fontSize: 14, textDecoration: "none" }}>
            ← Back to Provider Page
          </Link>
        </div>
      </div>
    </div>
  );
}