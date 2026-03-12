import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export const metadata = {
  title: "Work With Us — Careers at Earlens",
  description: "Join the team building the future of hearing technology. Earlens is hiring engineers, audiologists, sales professionals, and more.",
};

const reasons = [
  {
    icon: Ico.heart(28),
    title: "Meaningful Mission",
    desc: "Every product we ship improves someone's quality of life. You'll see the direct impact of your work in patient stories every week.",
    color: C.teal,
  },
  {
    icon: Ico.shield(28),
    title: "Pioneering Technology",
    desc: "Work on the only light-driven hearing device in the world. Novel engineering challenges. Unexplored science. First-in-class everything.",
    color: "#6366F1",
  },
  {
    icon: Ico.users(28),
    title: "Exceptional People",
    desc: "Audiologists, engineers, designers, and clinicians who are deeply committed to excellence and driven by patient outcomes.",
    color: C.blue,
  },
];

const perks = [
  {
    category: "Health & Wellness",
    color: C.teal,
    items: [
      "Comprehensive medical, dental, and vision",
      "Mental health support",
      "Flexible PTO policy",
      "Wellness stipend",
    ],
  },
  {
    category: "Growth & Learning",
    color: "#6366F1",
    items: [
      "Annual learning & development budget",
      "Conference attendance",
      "Internal mentorship program",
      "Career pathing support",
    ],
  },
  {
    category: "Life & Family",
    color: C.blue,
    items: [
      "Parental leave for all parents",
      "Hybrid work options",
      "Home office stipend",
      "401(k) with company match",
    ],
  },
];

const openings = [
  { dept: "Engineering", title: "Senior Software Engineer — Embedded Systems", loc: "Mountain View, CA", type: "Full-time" },
  { dept: "Clinical", title: "Clinical Affairs Manager", loc: "Remote (US)", type: "Full-time" },
  { dept: "Sales", title: "Territory Sales Manager — Pacific Northwest", loc: "Seattle, WA", type: "Full-time" },
  { dept: "Engineering", title: "Signal Processing Engineer", loc: "Mountain View, CA", type: "Full-time" },
  { dept: "Marketing", title: "Digital Marketing Manager", loc: "Remote (US)", type: "Full-time" },
  { dept: "Clinical", title: "Audiologist — Provider Training Specialist", loc: "Mountain View, CA", type: "Full-time" },
];

const deptColors = {
  Engineering: C.teal,
  Clinical: "#6366F1",
  Sales: C.green,
  Marketing: C.gold,
};

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        gradient
        label="Careers"
        title="Work With Us"
        subtitle="Join a small, focused team working on technology that genuinely changes people's lives. We're looking for people who care about craft and outcomes."
      />

      {/* Why join */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Why Earlens</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Why Join Our Team
              </h2>
              <p style={{ color: C.textLight, fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
                We&apos;re a focused team working on a genuinely novel problem in a field where the stakes are personal.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {reasons.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: C.light,
                  borderRadius: 20,
                  padding: "40px 32px",
                  border: `1px solid ${C.grayLight}`,
                }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: r.color + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: r.color, marginBottom: 24,
                  }}>
                    {r.icon}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: C.text, marginBottom: 12 }}>{r.title}</div>
                  <div style={{ color: C.textLight, fontSize: 15, lineHeight: 1.7 }}>{r.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Earlens / perks */}
      <section style={{ padding: "100px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Benefits</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Life at Earlens
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {perks.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: `1px solid ${C.grayLight}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ height: 6, background: p.color }} />
                  <div style={{ padding: "32px 28px" }}>
                    <div style={{ fontWeight: 700, fontSize: 17, color: C.text, marginBottom: 20 }}>{p.category}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {p.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <div style={{ color: p.color, flexShrink: 0, marginTop: 1 }}>{Ico.checkSmall}</div>
                          <span style={{ color: C.textLight, fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Open Roles</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                Current Openings
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {openings.map((job, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "24px 32px",
                  border: `1px solid ${C.grayLight}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{
                    background: (deptColors[job.dept] || C.teal) + "15",
                    color: deptColors[job.dept] || C.teal,
                    fontSize: 11, fontWeight: 700,
                    padding: "4px 12px", borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}>
                    {job.dept}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: C.text }}>{job.title}</div>
                    <div style={{ color: C.gray, fontSize: 13, marginTop: 2 }}>{job.loc} · {job.type}</div>
                  </div>
                  <div style={{ color: C.teal }}>{Ico.arrow}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div style={{
              marginTop: 40,
              background: C.tealSoft,
              borderRadius: 20,
              padding: "32px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 17, color: C.text, marginBottom: 4 }}>Don&apos;t see your role?</div>
                <div style={{ color: C.textLight, fontSize: 14 }}>We&apos;re always interested in exceptional people. Send us your resume.</div>
              </div>
              <button style={{
                background: C.teal, color: "#fff",
                padding: "12px 28px", borderRadius: 8,
                fontSize: 14, fontWeight: 700, border: "none",
                cursor: "pointer", whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                Get In Touch {Ico.arrow}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <PatientCTA />
    </>
  );
}
