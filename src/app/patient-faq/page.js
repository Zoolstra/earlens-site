"use client";
import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

const sections = [
  {
    title: "Technology Overview",
    color: C.teal,
    items: [
      {
        q: "How is Earlens different from conventional hearing aids?",
        a: "Earlens directly vibrates the eardrum instead of relying on speakers to amplify sound.",
      },
      {
        q: "Are there different programs for various listening situations?",
        a: "Yes, customized programs can be created for different environments.",
      },
      {
        q: "What size battery does the Earlens hearing solution use?",
        a: "The Processor has an internal rechargeable battery. Each night, you will simply dock the Processor in the included charger.",
      },
      {
        q: "Is there a battery in the Lens that sits on my eardrum?",
        a: "No, the Lens is powered by the energy emitted by the Ear Tip, and does not require a battery.",
      },
      {
        q: "Can I connect my Earlens to my smartphone?",
        a: "Currently, Earlens is compatible with the Apple iPhone. You can take calls and stream music.",
      },
      {
        q: "Is Earlens available outside of the United States?",
        a: "Earlens is currently only available within the United States.",
      },
    ],
  },
  {
    title: "What It's Like to Wear Earlens",
    color: "#6366F1",
    items: [
      {
        q: "What is it like to wear the Earlens contact hearing solution?",
        a: "Users report rich and natural sound; 3 out of 4 users reported improved hearing in noisy environments.",
      },
      {
        q: "Is the Lens permanent?",
        a: "No, the Lens can be removed at any time by an Earlens-trained Ear, Nose and Throat Physician.",
      },
      {
        q: "Can you feel the Lens in your ear?",
        a: "Most users feel initial slight sensation that goes away quickly.",
      },
      {
        q: "How does the Lens stay in place?",
        a: "The Lens rests on the eardrum, much like a contact lens conforms to the eye. Mineral oil application helps maintain placement.",
      },
      {
        q: "Can I remove and reinsert Earlens?",
        a: "The Processor can be removed by users, but only trained ENT physicians can insert/remove the Lens.",
      },
    ],
  },
  {
    title: "Pricing and Insurance",
    color: C.gold,
    items: [
      {
        q: "Does insurance cover Earlens?",
        a: "Most insurance plans do not cover hearing aids.",
      },
      {
        q: "Is there a trial period?",
        a: "Yes, please discuss the details of the trial period with your Earlens Provider.",
      },
      {
        q: "Is there a warranty?",
        a: "Earlens comes with a 3-year warranty. Within the warranty period, there is no charge for component replacement.",
      },
    ],
  },
  {
    title: "Maintenance and Care",
    color: C.green,
    items: [
      {
        q: "Can I shower or swim with Earlens on?",
        a: "After removing the Processor and Ear Tip, normal showering/swimming is possible.",
      },
      {
        q: "How often do I need to see my doctor or audiologist?",
        a: "After the initial fitting and fine-tuning of your devices, we suggest that you see your Earlens Hearing Professional once a year or as needed.",
      },
      {
        q: "Is earwax buildup a problem for the Earlens hearing solution?",
        a: "Generally not problematic; avoid cotton swabs. Mineral oil application helps move earwax naturally.",
      },
      {
        q: "If there is a problem with my Lens, can I use my old hearing aids as a backup?",
        a: "Possibly, depending on hearing aid style—consult with provider first.",
      },
      {
        q: "Where can I find the Instructions for Use?",
        a: "Call Earlens Concierge at 844-234-5367 or visit earlens.com/ifu/",
      },
    ],
  },
];

function AccordionSection({ section, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ? 0 : null);
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
        <h3 style={{ fontSize: 20, fontWeight: 800, color: C.text }}>{section.title}</h3>
        <div style={{ flex: 1, height: 1, background: C.grayLight }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {section.items.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              background: open === i ? C.tealSoft : C.white,
              borderRadius: 14,
              padding: "20px 24px",
              cursor: "pointer",
              border: `1px solid ${open === i ? section.color + "40" : C.grayLight}`,
              transition: "all 0.3s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <span style={{ fontWeight: 600, fontSize: 15, color: C.text }}>{item.q}</span>
              <span style={{
                color: section.color,
                transform: open === i ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s", flexShrink: 0,
              }}>
                {Ico.chevDown}
              </span>
            </div>
            <div style={{ maxHeight: open === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
              <div style={{ paddingTop: 16, color: C.textLight, fontSize: 14, lineHeight: 1.8 }}>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PatientFAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Earlens — from how it works to what it costs."
      />

      <section style={{ padding: "80px 0 100px", background: C.white }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, alignItems: "start" }}>
          {/* Sticky sidebar */}
          <FadeIn>
            <div style={{ position: "sticky", top: 120 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: C.gray, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Jump to Section</div>
              <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#faq-${i}`}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 14px", borderRadius: 10,
                      color: C.textLight, fontSize: 14, fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    className="nav-link"
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    {s.title}
                  </a>
                ))}
              </nav>

              <div style={{
                marginTop: 40, background: C.tealSoft,
                borderRadius: 16, padding: "24px 20px",
                border: `1px solid ${C.tealLight}`,
              }}>
                <div style={{ fontWeight: 700, color: C.text, marginBottom: 8, fontSize: 15 }}>Still have questions?</div>
                <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  Our patient care team is here to help.
                </div>
                <Link href="/contact-us" style={{
                  background: C.teal, color: "#fff",
                  padding: "10px 20px", borderRadius: 8,
                  fontSize: 13, fontWeight: 700,
                  width: "100%", textDecoration: "none",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                }}>
                  Contact Us {Ico.arrow}
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* FAQ content */}
          <div>
            {sections.map((section, i) => (
              <div key={i} id={`faq-${i}`}>
                <FadeIn delay={i * 0.05}>
                  <AccordionSection section={section} defaultOpen={i === 0} />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatientCTA />
    </>
  );
}
