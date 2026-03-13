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
  { label: "Schedule Virtual Consultation", href: "/schedule-virtual-consultation" },
];

const providerLinks = [
  { label: "Why Earlens", href: "/provider#why", primary: true },
  { label: "Research", href: "/provider/research" },
  { label: "FAQ", href: "/provider#faq" },
  { label: "Provider Training", href: "/provider#training" },
  { label: "Orders", href: "/provider#orders" },
  { label: "Product Registration", href: "/provider#registration" },
  { label: "Portal", href: "/provider#portal" },
];

export function Nav() {
  const pathname = usePathname();
  const page = pathname === "/provider" || pathname.startsWith("/provider/") || pathname === "/become-a-provider" ? "provider" : "patient";
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = page === "patient" ? patientLinks : providerLinks;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.3s" }}>
      {/* Top bar */}
      <div style={{ background: C.blue, height: NAV_TOP, display: "flex", alignItems: "stretch", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", padding: "0 32px",
            color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
            background: page === "patient" ? C.teal : "rgba(255,255,255,0.08)",
            transition: "background 0.3s", textDecoration: "none",
            borderRight: "1px solid rgba(255,255,255,0.12)",
          }}>
            PATIENT
          </Link>
          <Link href="/provider" style={{
            display: "flex", alignItems: "center", padding: "0 32px",
            color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
            background: page === "provider" ? C.teal : "rgba(255,255,255,0.08)",
            transition: "background 0.3s", textDecoration: "none",
            borderRight: "1px solid rgba(255,255,255,0.12)",
          }}>
            PROVIDER
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 36, fontSize: 12, letterSpacing: 1 }}>
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
          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>

          <nav className="nav-desktop-links">
            {links.map((l, i) => {
              const hrefPath = l.href.split("#")[0];
              const isActive = l.href === "/"
                ? pathname === "/"
                : l.href.includes("#")
                  ? (l.primary === true && pathname === hrefPath)
                  : pathname === hrefPath;
              if (l.drop) {
                const isDropActive = l.drop.some(d => pathname.startsWith(d.href));
                return (
                  <div key={i} style={{ position: "relative" }}
                    onMouseEnter={() => setOpenDrop(i)}
                    onMouseLeave={() => setOpenDrop(null)}
                  >
                    <Link href={l.href} className="nav-link" style={{
                      display: "flex", alignItems: "center", gap: 4, padding: "8px 16px",
                      color: isDropActive ? C.teal : C.grayDark,
                      fontSize: 15, fontWeight: isDropActive ? 700 : 500, whiteSpace: "nowrap",
                      transition: "color 0.2s", textDecoration: "none",
                      borderBottom: isDropActive ? `2px solid ${C.teal}` : "2px solid transparent",
                    }}>
                      {l.label} {Ico.chevDown}
                    </Link>
                    {openDrop === i && (
                      <div style={{
                        position: "absolute", top: "100%", left: 0,
                        background: "#fff", borderRadius: 8, minWidth: 200,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                        border: `1px solid ${C.grayLight}`,
                        zIndex: 200, overflow: "hidden",
                      }}>
                        {l.drop.map((d, j) => (
                          <Link key={j} href={d.href} style={{
                            display: "block", padding: "12px 20px",
                            fontSize: 14, fontWeight: pathname === d.href ? 700 : 500,
                            color: pathname === d.href ? C.teal : C.grayDark,
                            textDecoration: "none",
                            background: pathname === d.href ? C.light : "transparent",
                            borderBottom: j < l.drop.length - 1 ? `1px solid ${C.grayLight}` : "none",
                          }}
                            className="nav-link"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={i} href={l.href} className="nav-link" style={{
                  display: "flex", alignItems: "center", gap: 4, padding: "8px 16px",
                  color: isActive ? C.teal : C.grayDark,
                  fontSize: 15, fontWeight: isActive ? 700 : 500, whiteSpace: "nowrap",
                  transition: "color 0.2s", textDecoration: "none",
                  borderBottom: isActive ? `2px solid ${C.teal}` : "2px solid transparent",
                }}>
                  {l.label}
                </Link>
              );
            })}
            {page === "provider" && (
              <Link href="/become-a-provider" style={{
                background: C.teal, color: "#fff", padding: "9px 20px", borderRadius: 4,
                fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
                whiteSpace: "nowrap", textDecoration: "none", marginLeft: 8,
              }}>
                Become a Provider
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-mobile-drawer">
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer", padding: 8 }}
            aria-label="Close menu"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={C.grayDark} strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="nav-mobile-drawer-inner">
            {/* Section tabs */}
            <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
              <Link href="/" style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: 6, background: page === "patient" ? C.teal : C.light, color: page === "patient" ? "#fff" : C.grayDark, fontWeight: 700, fontSize: 13, letterSpacing: 1, textDecoration: "none", textTransform: "uppercase" }}>Patient</Link>
              <Link href="/provider" style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: 6, background: page === "provider" ? C.teal : C.light, color: page === "provider" ? "#fff" : C.grayDark, fontWeight: 700, fontSize: 13, letterSpacing: 1, textDecoration: "none", textTransform: "uppercase" }}>Provider</Link>
            </div>
            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {links.map((l, i) => (
                <div key={i}>
                  <Link href={l.href} style={{ display: "block", padding: "16px 0", fontSize: 17, fontWeight: 600, color: C.text, textDecoration: "none", borderBottom: `1px solid ${C.grayLight}` }}>
                    {l.label}
                  </Link>
                  {l.drop && (
                    <div style={{ paddingLeft: 16 }}>
                      {l.drop.map((d, j) => (
                        <Link key={j} href={d.href} style={{ display: "block", padding: "12px 0", fontSize: 15, color: C.textLight, textDecoration: "none", borderBottom: `1px solid ${C.grayLight}` }}>
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/about" style={{ display: "block", padding: "16px 0", fontSize: 17, fontWeight: 600, color: C.text, textDecoration: "none", borderBottom: `1px solid ${C.grayLight}` }}>About</Link>
              <Link href="/contact-us" style={{ display: "block", padding: "16px 0", fontSize: 17, fontWeight: 600, color: C.text, textDecoration: "none", borderBottom: `1px solid ${C.grayLight}` }}>Contact Us</Link>
            </div>
            {page === "provider" && (
              <Link href="/become-a-provider" style={{ display: "block", marginTop: 24, textAlign: "center", background: C.teal, color: "#fff", padding: "16px", borderRadius: 6, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                Become a Provider
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
