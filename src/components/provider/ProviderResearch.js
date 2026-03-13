"use client";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

const papers = [
  {
    tag: "10-Year Review", color: C.teal,
    title: "A 10-Year Review of the Earlens System Part 1",
    authors: "Dundas & Levy",
    desc: "Speech understanding data and bandwidth processing benefits.",
    pdf: "/images/provider_reasearch/Part-1-Dec-2021-compressed.pdf",
  },
  {
    tag: "10-Year Review", color: "#6366F1",
    title: "A 10-Year Review of the Earlens System Part 2",
    authors: "Dundas & Levy",
    desc: "Perceptual benefits regarding naturalness and sound quality.",
    pdf: "/images/provider_reasearch/Part-2-Jan-2022_compressed.pdf",
  },
  {
    tag: "10-Year Review", color: C.blue,
    title: "A 10-Year Review of the Earlens System Part 3",
    authors: "Dundas & Levy",
    desc: "Restoration of loudness via CAM2HF fitting algorithm and direct drive approach.",
    pdf: "/images/provider_reasearch/Part-1-Dec-2021-compressed.pdf",
  },
  {
    tag: "Case Study", color: C.gold,
    title: "Innovative Hearing Device for the Treatment of Mild to Severe Sensorineural Hearing Loss",
    authors: "Street",
    desc: "Case study on Earlens for mild to severe sensorineural hearing loss.",
    pdf: "/images/provider_reasearch/Earlens-Case-Study-2018.pdf",
  },
  {
    tag: "Trade Journal", color: C.teal,
    title: "Comparison of Real-world Bandwidth in Hearing Aids vs Earlens Light-driven Hearing Aid System",
    authors: "Struck & Prusick",
    desc: "Published in Hearing Review, March 2017.",
    pdf: "/images/provider_reasearch/Struck_Earlens0317HR.pdf",
  },
  {
    tag: "Trade Journal", color: "#6366F1",
    title: "The Earlens Light-Driven Hearing Aid: Top 10 Questions and Answers",
    authors: "Dundas & Levy",
    desc: "Published in Hearing Review, February 2018.",
    pdf: "/images/provider_reasearch/The-Earlens-Light-Driven-Hearing-Aid-Top-10-Questions-and-Answers.pdf",
  },
  {
    tag: "Conference", color: C.green,
    title: "Overcoming High-Frequency Limitations of Air Conduction Hearing Devices Using a Light-Driven Contact Hearing Aid",
    authors: "McElveen et al.",
    desc: "COSM 2017 presentation.",
    pdf: "/images/provider_reasearch/McELveen-COSM-2017.pdf",
  },
  {
    tag: "Conference", color: C.gold,
    title: "Sound Quality Comparison of Streamed Audio Through MFi-Compatible Acoustic Aids and a Contact Hearing Aid",
    authors: "Eskridge et al.",
    desc: "AAA 2019 presentation.",
    pdf: "/images/provider_reasearch/Eskridge-2019-AAA.pdf",
  },
  {
    tag: "Conference", color: C.teal,
    title: "The Magic of Direct Drive: What makes the sound quality of direct drive hearing aids so good?",
    authors: "Dundas",
    desc: "AAA 2019 presentation.",
    pdf: "/images/provider_reasearch/Dundas-AAA-2019.pdf",
  },
  {
    tag: "Peer-Reviewed", color: C.blue,
    title: "Temporal-Bone Measurements of the Maximum Equivalent Pressure Output and Maximum Stable Gain of a Light-Driven Hearing System",
    authors: "Puria et al.",
    desc: "2015 study on the mechanical stimulation of the umbo.",
    pdf: "/images/provider_reasearch/Puria-2015_EPO-MSG.pdf",
  },
  {
    tag: "Peer-Reviewed", color: "#6366F1",
    title: "The Earlens System: New Sound Transduction Methods",
    authors: "Perkins et al.",
    desc: "December 2009 foundational study.",
    pdf: "/images/provider_reasearch/Perkins2010MEMRO.pdf",
  },
  {
    tag: "Peer-Reviewed", color: C.gold,
    title: "Earlens Tympanic Contact Transducer: A New Method of Sound Transduction to the Human Ear",
    authors: "Perkins",
    desc: "Original 1996 study by Dr. Rodney Perkins.",
    pdf: "/images/provider_reasearch/Perkins1996EarLens.pdf",
  },
  {
    tag: "Peer-Reviewed", color: C.teal,
    title: "Extended High-Frequency Bandwidth Improves Speech Reception in the Presence of Spatially Separated Masking Speech",
    authors: "Levy et al.",
    desc: "2015 study on extended high-frequency bandwidth benefits.",
    pdf: "/images/provider_reasearch/2015-Levy-et-al-Extend-High-Frequency-Speech.pdf",
  },
  {
    tag: "Peer-Reviewed", color: C.green,
    title: "Attenuating the Ear Canal Feedback Pressure of a Laser-Driven Hearing Aid",
    authors: "Khaleghi & Puria",
    desc: "March 2017 study on feedback attenuation.",
    pdf: "/images/provider_reasearch/Khaleghi-2017_Attentuating-the-ear-canal-feedback-pressure....pdf",
  },
  {
    tag: "Peer-Reviewed", color: C.blue,
    title: "Light-Driven Contact Hearing Aid for Broad-Spectrum Amplification: Safety and Effectiveness Pivotal Study",
    authors: "Gantz et al.",
    desc: "2016 FDA pivotal study on safety and effectiveness.",
    pdf: "/images/provider_reasearch/Gantz_Light_Driven_Contact_Hearing_Aid_2016.pdf",
  },
];

export function ProviderResearch() {
  return (
    <section id="research" style={{ padding: "100px 0", background: C.light }}>
      <div className="wrap">
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", borderRadius: 16, padding: "22px 28px", border: `1px solid ${C.grayLight}`, display: "flex", gap: 20, alignItems: "center", transition: "box-shadow 0.2s", cursor: "pointer" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ background: p.color + "20", color: p.color, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, padding: "3px 10px", borderRadius: 20 }}>{p.tag}</span>
                      <span style={{ color: C.gray, fontSize: 12 }}>{p.authors}</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: C.text, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                  <div style={{ color: C.teal, flexShrink: 0 }}>{Ico.arrow}</div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
