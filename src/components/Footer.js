"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { C } from "@/constants/colors";

const patientCols = [
  { title: "For Patients", links: [
    { label: "Why Earlens", href: "/#why" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Patient Stories", href: "/#stories" },
    { label: "Find a Provider", href: "/#find-provider" },
    { label: "FAQ", href: "/#faq" },
    { label: "Instructions for Use", href: "/instructions-for-use" },
  ]},
  { title: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ]},
];

const providerCols = [
  { title: "For Providers", links: [
    { label: "Why Earlens", href: "/provider#why" },
    { label: "Research", href: "/provider#research" },
    { label: "Training", href: "/provider#training" },
    { label: "Orders", href: "/provider#orders" },
    { label: "Portal", href: "/provider#portal" },
  ]},
  { title: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ]},
];

export function Footer() {
  const pathname = usePathname();
  const page = pathname === "/provider" ? "provider" : "patient";
  const cols = page === "patient" ? patientCols : providerCols;

  return (
    <footer style={{ background: C.blue, color: "#fff" }}>
      <div className="wrap">

        {/* Main footer grid */}
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: 64, padding: "64px 0 48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand column */}
          <div>
            <Image
              src="/images/Logo-Earlens-r-Mar19_white_white.png"
              alt="Earlens"
              width={140}
              height={36}
              style={{ objectFit: "contain", height: 36, width: "auto", marginBottom: 20 }}
            />
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.8, maxWidth: 260, margin: 0 }}>
              The only hearing aid designed to mimic the natural hearing process.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, padding: "20px 0" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            &copy;2025 Earlens Corp. &nbsp;·&nbsp; FDA-cleared medical device. Individual results may vary.
          </span>
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { label: "Terms and Conditions", href: "/terms-and-conditions" },
              { label: "Patents and Trademarks", href: "/patents-and-trademarks" },
              { label: "Cookie & Privacy Policy", href: "/privacy-policy" },
            ].map((l, i) => (
              <span key={l.label} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 12px" }}>|</span>}
                <Link href={l.href} style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, textDecoration: "none" }}>
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
