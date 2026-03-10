"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#001AB3] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-6">
            <span className="font-semibold">For Patients</span>
            <span className="opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
              For Providers
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link
              href="/contact"
              className="hover:underline font-semibold"
            >
              Request Info
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#204CE5] tracking-tight">
              ear<span className="text-[#61a229]">lens</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-[#204CE5] transition-colors">
              Home
            </Link>
            <Link href="/benefits" className="hover:text-[#204CE5] transition-colors">
              Benefits
            </Link>
            <Link href="/testimonials" className="hover:text-[#204CE5] transition-colors">
              Testimonials
            </Link>
            <Link href="/faq" className="hover:text-[#204CE5] transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-[#204CE5] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#204CE5] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#61a229] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#4e8420] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">Home</Link>
            <Link href="/benefits" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">Benefits</Link>
            <Link href="/testimonials" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">Testimonials</Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">FAQ</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#204CE5]">Contact</Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#61a229] text-white px-4 py-2 rounded text-center font-semibold hover:bg-[#4e8420] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
