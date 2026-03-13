"use client";
import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";
import { C } from "@/constants/colors";

export default function SchedulePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <PageHero
        gradient
        label="Get Started"
        title="Schedule a Virtual Consultation"
        subtitle="Use the calendar below to choose a convenient time to speak to a hearing specialist or call (855) 205-0373, so we can customize a solution for you."
      />

      <section style={{ padding: "60px 0 100px", background: C.white }}>
        <div className="wrap" style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: C.textLight, fontSize: 15, lineHeight: 1.8, marginBottom: 48, textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            We reserve an hour of time so we can answer any questions you have and learn about your hearing goals, but we will customize our virtual consultation to meet your needs.
          </p>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/elhc-ham/personalized-virtual-consultation-gads"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </section>
    </>
  );
}
