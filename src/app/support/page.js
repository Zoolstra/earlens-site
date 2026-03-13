"use client";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

const docs = [
  {
    tag: "Getting Started",
    category: "Getting Started",
    title: "Consumer Brochure",
    desc: "An overview of the Earlens system — how it works, who it's for, and what to expect.",
    color: C.teal,
    pdf: "/images/pdfs/consumer_brochure.pdf",
    },
  {
    tag: "Getting Started",
    category: "Getting Started",
    title: "Journey to Better Hearing",
    desc: "A step-by-step guide walking you through your path from consultation to fitting and beyond.",
    color: C.teal,
    pdf: "/images/pdfs/journey_to_better_health.pdf",
  },
  {
    tag: "Getting Started",
    category: "Getting Started",
    title: "Contact Hearing Solution",
    desc: "Learn about the Earlens contact hearing solution and what sets it apart from conventional hearing aids.",
    color: C.teal,
    pdf: "/images/pdfs/contact_hearing_solution.pdf",
  },
  {
    tag: "Getting Started",
    category: "Getting Started",
    title: "Contact Hearing Solution — Photonic",
    desc: "Technical overview of the light-driven photonic hearing technology at the heart of Earlens.",
    color: C.teal,
    pdf: "/images/pdfs/contact_hearing_solution_photonic.pdf",
  },
  {
    tag: "iPhone & Connectivity",
    category: "iPhone & Connectivity",
    title: "iPhone Setup Guide",
    desc: "Step-by-step instructions for pairing your Earlens processor with your iPhone.",
    color: "#6366F1",
    pdf: "/images/pdfs/iphone_guide.pdf",
  },
  {
    tag: "iPhone & Connectivity",
    category: "iPhone & Connectivity",
    title: "iPhone Troubleshooting — iOS 13",
    desc: "Solutions to common connectivity and audio streaming issues on iOS 13.",
    color: "#6366F1",
    pdf: "/images/pdfs/iphone_troubleshooting_ios13.pdf",
  },
  {
    tag: "iPhone & Connectivity",
    category: "iPhone & Connectivity",
    title: "iPhone Troubleshooting — iOS 12",
    desc: "Solutions to common connectivity and audio streaming issues on iOS 12.",
    color: "#6366F1",
    pdf: "/images/pdfs/iphone_troubleshooting_ios12.pdf",
  },
  {
    tag: "Resources",
    category: "Resources",
    title: "FAQ Booklet",
    desc: "Answers to the most common questions about wearing, caring for, and getting the most from your Earlens.",
    color: C.gold,
    pdf: "/images/pdfs/FAQ_booklet.pdf",
  },
  {
    tag: "Resources",
    category: "Resources",
    title: "Hearing Loss Informatics",
    desc: "Educational resource on the nature of hearing loss, audiograms, and how amplification helps.",
    color: C.gold,
    pdf: "/images/pdfs/hearing_loss_informatics.pdf",
  },
  {
    tag: "Resources",
    category: "Resources",
    title: "Premium Service Program",
    desc: "Details on Earlens' premium service and warranty program, including coverage and how to make a claim.",
    color: C.gold,
    pdf: "/images/pdfs/Premium Service Program.pdf",
  },
];

const allCategories = ["All", "Getting Started", "iPhone & Connectivity", "Resources"];

const tagColors = {
  "Getting Started": C.teal,
  "iPhone & Connectivity": "#6366F1",
  Resources: C.gold,
};

export default function SupportPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? docs : docs.filter((d) => d.category === activeFilter);

  return (
    <>
      <PageHero
        gradient
        label="Patient Support"
        title="Support & Resources"
        subtitle="Everything you need to get the most from your Earlens — guides, troubleshooting, and reference materials."
      />

      {/* Filter bar */}
      <section style={{ padding: "48px 0 0", background: C.white, borderBottom: `1px solid ${C.grayLight}` }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 24, flexWrap: "wrap" }}>
            <span style={{ color: C.gray, fontSize: 13, marginRight: 4 }}>Filter:</span>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: `1px solid ${activeFilter === cat ? C.teal : C.grayLight}`,
                  background: activeFilter === cat ? C.teal : "#fff",
                  color: activeFilter === cat ? "#fff" : C.grayDark,
                  fontSize: 13, fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
            <span style={{ marginLeft: "auto", color: C.gray, fontSize: 13 }}>
              {filtered.length} {filtered.length === 1 ? "document" : "documents"}
            </span>
          </div>
        </div>
      </section>

      {/* Document list */}
      <section style={{ padding: "64px 0 100px", background: C.white }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.map((d, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a href={d.pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: `1px solid ${C.grayLight}`,
                  borderLeft: `4px solid ${d.color}`,
                  padding: "28px 32px",
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{
                        background: (tagColors[d.tag] || C.teal) + "20",
                        color: tagColors[d.tag] || C.teal,
                        fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                        padding: "3px 10px", borderRadius: 20,
                      }}>
                        {d.tag}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 6, lineHeight: 1.3 }}>
                      {d.title}
                    </div>
                    <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{d.desc}</div>
                  </div>
                  <div style={{ color: C.teal, flexShrink: 0, marginTop: 4 }}>{Ico.arrow}</div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <PatientCTA />
    </>
  );
}
