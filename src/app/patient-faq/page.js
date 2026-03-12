"use client";
import { useState } from "react";
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
        q: "How is Earlens different from a regular hearing aid?",
        a: "Traditional hearing aids amplify sound through a tiny speaker inside the ear canal. No matter how sophisticated the electronics, the sound still has to travel through air to reach your eardrum — which limits the range of frequencies it can deliver. Earlens takes a completely different approach: we place a tiny custom Lens directly on your eardrum and use light energy to vibrate it, just like natural sound does. The result is a frequency range up to 10 kHz — far beyond the 6 kHz ceiling of conventional aids.",
      },
      {
        q: "What is the Lens, exactly?",
        a: "The Lens is a tiny, custom-manufactured component that your audiologist places directly on your eardrum. It's made of a biocompatible material and is so light you can't feel it. It contains a tiny actuator that responds to the light signal from the processor, vibrating the eardrum directly to produce sound.",
      },
      {
        q: "What does the processor do?",
        a: "The processor is the behind-the-ear component. It contains a microphone, the processing electronics, the light source, and the rechargeable battery. It captures sound from your environment, processes it according to your hearing prescription, and converts it to a light signal that travels down through the ear tip to activate the Lens.",
      },
      {
        q: "Is Earlens FDA-cleared?",
        a: "Yes. Earlens is an FDA-cleared medical device. It has been evaluated in extensive clinical trials and has been prescribed to thousands of patients across the United States.",
      },
      {
        q: "Does Earlens have Bluetooth?",
        a: "Yes. Earlens is a Made for iPhone device, meaning it can stream audio directly from your iPhone, iPad, or Apple Watch without a separate streaming accessory. You can stream phone calls, music, podcasts, and other audio directly.",
      },
      {
        q: "Is it rechargeable?",
        a: "Yes. The behind-the-ear processor is fully rechargeable. Place it in the charging case overnight and it will be ready for a full day of use the next morning. No more tiny batteries.",
      },
    ],
  },
  {
    title: "What It's Like to Wear",
    color: "#6366F1",
    items: [
      {
        q: "Does it hurt to have the Lens placed?",
        a: "No. The Lens is placed non-surgically by your audiologist in a routine office visit. Your audiologist uses a special instrument to position the Lens on your eardrum. The procedure is quick and the vast majority of patients report no discomfort during or after placement.",
      },
      {
        q: "Can I feel the Lens on my eardrum?",
        a: "Most patients report that once placed, they cannot feel the Lens at all. The eardrum has very few sensory nerve fibers for touch, so the presence of the Lens is typically imperceptible.",
      },
      {
        q: "Will Earlens be visible when I'm wearing it?",
        a: "The Lens on your eardrum is completely invisible — even to most otoscopes. The behind-the-ear processor is similar in size and appearance to a standard behind-the-ear hearing aid. Your audiologist can work with you to match the processor color to your skin or hair.",
      },
      {
        q: "What activities can I do with Earlens?",
        a: "Earlens is designed for everyday life. Patients exercise, travel, and go about their normal routines with Earlens in place. You should avoid submerging the processor in water (the ear tip and Lens are water-resistant to a degree), and you'll remove the processor for sleeping and showering.",
      },
      {
        q: "How long will it take to get used to Earlens?",
        a: "Most patients adapt to Earlens within a few weeks. Because it delivers a broader frequency range than you may have heard in years, some patients initially notice sounds they had forgotten — like the high-frequency crinkle of paper or leaves in the wind. These typically become natural very quickly. Your audiologist will fine-tune your fit over follow-up appointments.",
      },
    ],
  },
  {
    title: "Pricing & Insurance",
    color: C.gold,
    items: [
      {
        q: "How much does Earlens cost?",
        a: "The cost of Earlens varies depending on your provider and your hearing profile. Earlens is priced comparably to other premium hearing aids, typically in the range of premium devices. Your provider will give you a detailed quote during your consultation.",
      },
      {
        q: "Is Earlens covered by insurance?",
        a: "Coverage varies by insurance plan. Some commercial insurance plans, including certain Medicare Advantage plans, provide coverage for hearing aids. Your Earlens provider's patient care team will contact your insurance company on your behalf to verify your benefits before you make any decisions.",
      },
      {
        q: "Are there financing options?",
        a: "Yes. Earlens works with providers to offer financing options that can help spread the cost over time. Ask your provider about financing during your consultation.",
      },
    ],
  },
  {
    title: "Maintenance & Care",
    color: C.green,
    items: [
      {
        q: "How often does the Lens need to be replaced?",
        a: "The Lens is designed to remain on your eardrum indefinitely, though it is removed and replaced during routine hearing checks, typically every six to twelve months. Your audiologist will monitor the Lens during follow-up visits.",
      },
      {
        q: "How do I clean the Earlens system?",
        a: "The ear tip should be cleaned regularly with the tools your audiologist provides. The processor can be wiped clean with a dry or slightly damp cloth. Your audiologist will walk you through the cleaning routine at your fitting appointment.",
      },
      {
        q: "What if the Lens falls out?",
        a: "Earlens are designed to remain securely in place during normal activities. In the rare event that a Lens comes out, simply contact your Earlens provider for a replacement placement appointment. Lens replacement is a routine procedure.",
      },
      {
        q: "What is the warranty on Earlens?",
        a: "The Earlens processor comes with a standard warranty covering manufacturing defects. Your provider will explain the full warranty terms at your fitting. Loss and damage coverage is also available.",
      },
      {
        q: "What happens if I need a repair?",
        a: "Your Earlens provider is your first contact for any service needs. Earlens maintains a service program to ensure that patients can get their devices repaired or replaced promptly. Most repairs can be handled through your local provider.",
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
                <button style={{
                  background: C.teal, color: "#fff",
                  padding: "10px 20px", borderRadius: 8,
                  fontSize: 13, fontWeight: 700, border: "none",
                  cursor: "pointer", width: "100%",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                }}>
                  Contact Us {Ico.arrow}
                </button>
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
