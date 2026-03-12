"use client";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { ProviderCTA } from "@/components/provider/ProviderCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

const papers = [
  {
    tag: "Featured",
    category: "Peer Reviewed",
    title: "A 10-Year Review of the Earlens Light-Driven Hearing Aid: Part 1",
    authors: "Dundas & Levy",
    journal: "Journal of the American Academy of Audiology",
    year: "2021",
    desc: "Comprehensive outcomes data including speech understanding in quiet and noise, showing significant improvements in speech intelligibility across frequency ranges not accessible to conventional hearing aids.",
    color: C.teal,
  },
  {
    tag: "Featured",
    category: "Peer Reviewed",
    title: "A 10-Year Review of the Earlens Light-Driven Hearing Aid: Part 2",
    authors: "Dundas & Levy",
    journal: "Journal of the American Academy of Audiology",
    year: "2021",
    desc: "Perceptual benefits including naturalness of sound, overall sound quality, and patient-reported quality of life outcomes. 98% of participants preferred Earlens over their previous hearing aids.",
    color: "#6366F1",
  },
  {
    tag: "Featured",
    category: "Peer Reviewed",
    title: "Extended Bandwidth Hearing Aid Fitting and Outcomes",
    authors: "Levy, Stender & Yanz",
    journal: "Hearing Review",
    year: "2022",
    desc: "Patient satisfaction and long-term wear data from a multi-center trial. Examines preference, daily use hours, and satisfaction metrics compared to best-fit conventional aids.",
    color: C.gold,
  },
  {
    tag: "Peer Reviewed",
    category: "Peer Reviewed",
    title: "Direct Drive Hearing Devices: A Review of the Technology",
    authors: "Perkins, Fay & Shera",
    journal: "Trends in Amplification",
    year: "2019",
    desc: "Technical overview of light-driven direct eardrum vibration, the physics of the approach, and comparison to conventional acoustic amplification.",
    color: C.blue,
  },
  {
    tag: "Conference",
    category: "Conference",
    title: "Speech in Noise Outcomes with Extended High-Frequency Amplification",
    authors: "Johnson, Levy & Dundas",
    journal: "AudiologyNOW! — AAA Annual Conference",
    year: "2020",
    desc: "Randomized within-subject study showing 32% improvement in speech-in-noise scores when high-frequency amplification above 6 kHz was available.",
    color: C.green,
  },
  {
    tag: "Trade Journal",
    category: "Trade Journal",
    title: "Light-Driven Amplification: Clinical Implications for the Audiologist",
    authors: "Chen & Park",
    journal: "The Hearing Journal",
    year: "2023",
    desc: "Practical guide for audiologists on patient selection, fitting rationale, and post-fitting follow-up protocols for light-driven hearing devices.",
    color: "#EC4899",
  },
  {
    tag: "Peer Reviewed",
    category: "Peer Reviewed",
    title: "Quality of Life Improvements with Broad Bandwidth Hearing Aids",
    authors: "Torres, Nolan & Grisham",
    journal: "International Journal of Audiology",
    year: "2022",
    desc: "Patient-reported outcome measures (PROMs) from a cohort of 240 Earlens users, showing significant improvements in social engagement, listening effort, and overall wellbeing.",
    color: "#F97316",
  },
  {
    tag: "Conference",
    category: "Conference",
    title: "Comparing Acoustic and Light-Driven Transduction: A Spectral Analysis",
    authors: "Perkins, Solum & Levy",
    journal: "Acoustical Society of America — Annual Meeting",
    year: "2018",
    desc: "Engineering analysis comparing the spectral output of acoustic speaker-based hearing aids with direct eardrum vibration, demonstrating the fundamental bandwidth advantage of the light-driven approach.",
    color: C.tealDark,
  },
];

const allCategories = ["All", "Peer Reviewed", "Featured", "Conference", "Trade Journal"];

const tagColors = {
  Featured: C.teal,
  "Peer Reviewed": C.blue,
  Conference: C.green,
  "Trade Journal": "#EC4899",
};

export default function ResearchPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? papers : papers.filter(p => p.category === activeFilter || p.tag === activeFilter);

  return (
    <>
      <PageHero
        gradient
        label="Evidence Base"
        title="Resource Library"
        subtitle="Over a decade of peer-reviewed research supporting the clinical and scientific basis of light-driven hearing technology."
      />

      {/* Filter + count bar */}
      <section style={{ padding: "48px 0 0", background: C.white, borderBottom: `1px solid ${C.grayLight}` }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 24, flexWrap: "wrap" }}>
            <span style={{ color: C.gray, fontSize: 13, marginRight: 4 }}>Filter:</span>
            {allCategories.map(cat => (
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
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </span>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section style={{ padding: "64px 0 100px", background: C.white }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div style={{
                background: "#fff",
                borderRadius: 16,
                border: `1px solid ${C.grayLight}`,
                borderLeft: `4px solid ${p.color}`,
                padding: "28px 32px",
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: p.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0,
                }}>
                  {p.year.slice(2)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{
                      background: (tagColors[p.tag] || C.teal) + "20",
                      color: tagColors[p.tag] || C.teal,
                      fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                      padding: "3px 10px", borderRadius: 20,
                    }}>
                      {p.tag}
                    </span>
                    <span style={{
                      background: C.grayLight,
                      color: C.gray,
                      fontSize: 11, fontWeight: 600,
                      padding: "3px 10px", borderRadius: 20,
                    }}>
                      {p.year}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 4, lineHeight: 1.3 }}>
                    {p.authors} — {p.title}
                  </div>
                  <div style={{ color: C.teal, fontSize: 13, fontWeight: 600, marginBottom: 10, fontStyle: "italic" }}>
                    {p.journal}
                  </div>
                  <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{p.desc}</div>
                </div>
                <div style={{ color: C.teal, flexShrink: 0, marginTop: 4 }}>{Ico.arrow}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ProviderCTA />
    </>
  );
}
