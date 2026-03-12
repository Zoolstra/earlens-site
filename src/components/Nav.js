"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { C, NAV_TOP, NAV_MAIN } from "@/constants/colors";
import { Ico } from "@/constants/icons";

const patientLinks = [
  { label: "Home", href: "/" },
  { label: "Benefits", href: "/benefits" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/patient-faq" },
];

const providerLinks = [
  { label: "Why Earlens", href: "/provider#why", drop: true },
  { label: "Research", href: "/provider#research" },
  { label: "FAQ", href: "/provider#faq" },
  { label: "Provider Training", href: "/provider#training" },
  { label: "Orders", href: "/provider#orders" },
  { label: "Product Registration", href: "/provider#registration" },
  { label: "Portal", href: "/provider#portal" },
];

export function Nav() {
  const pathname = usePathname();
  const page = pathname === "/provider" ? "provider" : "patient";
  const [scrolled, setScrolled] = useState(false);
  const links = page === "patient" ? patientLinks : providerLinks;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.3s" }}>
      {/* Top bar */}
      <div style={{ background: C.blue, height: NAV_TOP, display: "flex", alignItems: "stretch", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", padding: "0 24px",
            color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1,
            background: page === "patient" ? C.teal : "transparent",
            transition: "background 0.3s", textDecoration: "none",
          }}>
            PATIENT
          </Link>
          <Link href="/provider" style={{
            display: "flex", alignItems: "center", padding: "0 24px",
            color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1,
            background: page === "provider" ? C.teal : "transparent",
            transition: "background 0.3s", textDecoration: "none",
          }}>
            PROVIDER
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 32, fontSize: 11, letterSpacing: 0.5 }}>
          <Link href="/about" style={{ color: pathname === "/about" ? "#fff" : "rgba(255,255,255,0.7)", fontWeight: pathname === "/about" ? 700 : 400, textDecoration: "none", borderBottom: pathname === "/about" ? "1px solid #fff" : "1px solid transparent", paddingBottom: 1 }} className="nav-link">ABOUT</Link>
          <Link href="/contact-us" style={{ color: pathname === "/contact-us" ? "#fff" : "rgba(255,255,255,0.7)", fontWeight: pathname === "/contact-us" ? 700 : 400, textDecoration: "none", borderBottom: pathname === "/contact-us" ? "1px solid #fff" : "1px solid transparent", paddingBottom: 1 }} className="nav-link">CONTACT US</Link>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ background: "#fff", height: NAV_MAIN, borderBottom: `1px solid ${C.grayLight}` }}>
        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/Logo-Earlens-r-Mar19_cmyk_cmyk.jpg"
              alt="Earlens"
              width={180}
              height={48}
              style={{ objectFit: "contain", height: 48, width: "auto" }}
              priority
            />
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map((l, i) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link key={i} href={l.href} className="nav-link" style={{
                  display: "flex", alignItems: "center", gap: 4, padding: "8px 16px",
                  color: isActive ? C.teal : C.grayDark,
                  fontSize: 15, fontWeight: isActive ? 700 : 500, whiteSpace: "nowrap",
                  transition: "color 0.2s", textDecoration: "none",
                  borderBottom: isActive ? `2px solid ${C.teal}` : "2px solid transparent",
                }}>
                  {l.label} {l.drop && Ico.chevDown}
                </Link>
              );
            })}
            <Link href={page === "patient" ? "/#find-provider" : "/provider#become"} style={{
              background: C.teal, color: "#fff", padding: "9px 20px", borderRadius: 4,
              fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
              whiteSpace: "nowrap", textDecoration: "none", marginLeft: 8,
            }}>
              {page === "patient" ? "Find a Provider" : "Become a Provider"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
