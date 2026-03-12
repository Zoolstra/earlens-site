"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/constants/colors";
import { EarlensLogo } from "./EarlensLogo";

const patientCols = [
  { title: "For Patients", links: [
    { label: "Why Earlens", href: "/#why" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Patient Stories", href: "/#stories" },
    { label: "Find a Provider", href: "/#find-provider" },
    { label: "FAQ", href: "/#faq" },
  ]},
  { title: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ]},
  { title: "Legal", links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Compliance", href: "/compliance" },
    { label: "Accessibility", href: "/accessibility" },
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
  { title: "Legal", links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Compliance", href: "/compliance" },
    { label: "Accessibility", href: "/accessibility" },
  ]},
];

export function Footer() {
  const pathname = usePathname();
  const page = pathname === "/provider" ? "provider" : "patient";
  const cols = page === "patient" ? patientCols : providerCols;

  return (
    <footer style={{ background: C.blue, color: "#fff", paddingTop: 64, paddingBottom: 0 }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <div style={{ marginBottom: 16 }}>
              <EarlensLogo height={30} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              The only hearing aid designed to mimic the natural hearing process.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 10, textDecoration: "none", transition: "color 0.2s" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", color: "rgba(255,255,255,0.35)", fontSize: 12, flexWrap: "wrap", gap: 8 }}>
          <span>&copy; 2026 Earlens Corporation. All rights reserved.</span>
          <span>FDA-cleared medical device. Individual results may vary.</span>
        </div>
      </div>
    </footer>
  );
}
