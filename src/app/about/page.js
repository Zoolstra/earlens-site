import { client, urlFor } from "@/sanity/client";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { C } from "@/constants/colors";

export const metadata = {
  title: "About Earlens — Our Mission & Story",
  description: "Earlens Corporation is on a mission to restore the joy of hearing through light-driven technology that mimics the natural hearing process.",
};

const stats = [
  { val: "2010", label: "Year Founded" },
  { val: "200+", label: "Employees" },
  { val: "180", label: "Patents Filed" },
  { val: "10+", label: "Years of Research" },
];

const media = [
  { name: "TIME", color: C.teal },
  { name: "CBS", color: C.blue },
  { name: "Forbes", color: "#1a1a1a" },
  { name: "NBC", color: "#0078CC" },
  { name: "Edison Awards", color: C.gold },
];

const team = [
  { name: "William Facteau", title: "Chief Executive Officer", bg: "#1a3a5c", photo: "/images/Bill_FACTEAU.jpeg.webp" },
  { name: "Rodney Perkins, M.D.", title: "Founder & Chairman", bg: "#0f3460" },
  { name: "Jeff Solum", title: "Chief Technology Officer", bg: "#003B71" },
  { name: "Catherine Nolan", title: "Chief Commercial Officer", bg: "#0a2a50" },
  { name: "Jim Kuzdrall", title: "VP of Finance", bg: "#1a2e4a" },
  { name: "Laura Grisham", title: "VP of Clinical Affairs", bg: "#0c3050" },
];

export default async function AboutPage() {
  const [sanityTeam, sanitySubsidiaries] = await Promise.all([
    client.fetch(`*[_type == "teamMember"] | order(order asc)`),
    client.fetch(`*[_type == "subsidiary"] | order(order asc)`),
  ]);
  return (
    <>
      <PageHero
        gradient
        title="Our Mission"
        subtitle="To transform the hearing experience so that people with hearing loss can enjoy life's experiences and moments without worrying about their hearing."
      />

      {/* Stats bar */}
      <section style={{ background: C.blue, padding: "40px 0" }}>
        <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ color: "#fff" }}>
                <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, color: C.tealLight }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: 0.5, textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 24 }}>
                Technology That Mimics Nature
              </h2>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Traditional hearing aids have a fundamental limitation: they push amplified sound through a tiny speaker inside the ear canal. No matter how advanced the digital processing, the sound still has to travel through air to reach the eardrum.
              </p>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Earlens takes a completely different approach. By placing a tiny Lens directly on the eardrum and vibrating it with light energy, we deliver sound the way your ear was designed to receive it — naturally, completely, and with a bandwidth that no conventional hearing aid can match.
              </p>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8 }}>
                Our goal is simple: give people back the full richness of sound they&apos;ve been missing, so they can reconnect with the conversations, music, and moments that matter most.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ background: C.light, borderRadius: 24, padding: 48 }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
                {[C.teal, C.blue, C.green].map((c, i) => (
                  <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <blockquote style={{ fontSize: 22, fontWeight: 700, color: C.text, lineHeight: 1.5, fontStyle: "italic", marginBottom: 24 }}>
                &ldquo;We set out to build a hearing aid that works the way the human ear was designed to work — not around its limitations, but with its capabilities.&rdquo;
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>RP</div>
                <div>
                  <div style={{ fontWeight: 700, color: C.text }}>Rodney Perkins, M.D.</div>
                  <div style={{ color: C.gray, fontSize: 13 }}>Founder & Chairman, Earlens</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* As seen in */}
      <section style={{ padding: "60px 0", background: C.light, borderTop: `1px solid ${C.grayLight}`, borderBottom: `1px solid ${C.grayLight}` }}>
        <div className="wrap">
          <div style={{ textAlign: "center", color: C.gray, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 32 }}>
            As Seen In
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {media.map((m, i) => (
              <div key={i} style={{ fontSize: 22, fontWeight: 900, color: m.color, letterSpacing: -0.5, opacity: 0.75 }}>{m.name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Leadership</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>Executive Team</h2>
            </div>
          </FadeIn>
          <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {(sanityTeam.length > 0 ? sanityTeam : team).map((p, i) => {
              const photoUrl = p.photo?.asset
                ? urlFor(p.photo).width(600).height(640).fit("crop").url()
                : p.photo || null;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ background: C.white, borderRadius: 20, overflow: "hidden", border: `1px solid ${C.grayLight}`, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                    <div style={{ height: 320, background: p.bg || C.blue, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                      {photoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={photoUrl} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                      ) : (
                        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 24, fontWeight: 700, border: "2px solid rgba(255,255,255,0.2)" }}>
                          {p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: 24 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 4 }}>{p.name}</div>
                      <div style={{ color: C.teal, fontSize: 13, fontWeight: 600 }}>{p.title}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section style={{ padding: "80px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Corporate Structure</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>Our Subsidiaries</h2>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
                Earlens Corporation operates several subsidiaries supporting our mission to address untreated hearing loss.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {(sanitySubsidiaries.length > 0 ? sanitySubsidiaries : [
              { name: "Virsono", logo: "/images/virsono_logo.png" },
              { name: "CMS", logo: "/images/cms.png" },
            ]).map((s, i) => {
              const logoUrl = s.logo?.asset
                ? urlFor(s.logo).width(400).url()
                : s.logo || null;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 20, padding: "16px 48px", textAlign: "center", minWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                    {logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logoUrl} alt={s.name} style={{ objectFit: "contain", width: "100%", height: 120, borderRadius: 8 }} />
                    ) : (
                      <div style={{ fontSize: 28, fontWeight: 900, color: C.blue, marginBottom: 12 }}>{s.name}</div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <PatientCTA />
    </>
  );
}
