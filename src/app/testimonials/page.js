import { client, urlFor } from "@/sanity/client";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { PatientCTA } from "@/components/patient/PatientCTA";
import { WistiaVideo } from "@/components/WistiaVideo";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export const metadata = {
  title: "Earlens Testimonials — Hear From Real Patients",
  description: "Real stories from real Earlens patients. Discover how Earlens has transformed lives through better hearing.",
};

const stories = [
  {
    name: "Casey M.",
    age: 58,
    loc: "Denver, CO",
    since: "Patient since 2021",
    text: "I've tried four different hearing aids over twenty years. Nothing came close to Earlens. The first time I put it on and heard my wife's laugh the way I remembered it — I had to sit down. It was overwhelming in the best possible way.",
    detail: "Mild-to-moderate sensorineural hearing loss",
    wistia: "2da5t4o4w4",
  },
  {
    name: "Genie R.",
    age: 71,
    loc: "Phoenix, AZ",
    since: "Patient since 2022",
    text: "I'm a retired music teacher. Hearing loss took something precious from me — I couldn't enjoy the music I'd spent my whole life with. Earlens gave it back. I can hear the overtones again. The full chord. It's extraordinary.",
    detail: "Moderate sensorineural hearing loss",
    wistia: "ol5dhc1kkc",
  },
  {
    name: "Dante P.",
    age: 64,
    loc: "Chicago, IL",
    since: "Patient since 2020",
    text: "Board meetings used to exhaust me. Straining to hear every word, missing half the conversation. With Earlens I just... listen. I stopped working so hard to hear and started actually participating again.",
    detail: "Moderate-to-severe sensorineural hearing loss",
    wistia: "vre5zaszb5",
  },
  {
    name: "Margaret T.",
    age: 72,
    loc: "Portland, OR",
    since: "Patient since 2021",
    text: "I was at my granddaughter's recital and could hear every note of her violin. I hadn't heard those high notes in over a decade. I cried the whole way through — happy tears.",
    detail: "Moderate sensorineural hearing loss",
  },
  {
    name: "David R.",
    age: 68,
    loc: "Austin, TX",
    since: "Patient since 2020",
    text: "I'm a retired jazz musician. When I first put on Earlens, I heard harmonics I'd been missing for years. The richness came back. My audiologist said she'd never seen anyone react quite like that.",
    detail: "Mild-to-moderate sensorineural hearing loss",
    wistia: "4wprjgnocf",
  },
  {
    name: "Susan K.",
    age: 65,
    loc: "San Diego, CA",
    since: "Patient since 2022",
    text: "My husband and I can have a conversation at our favorite restaurant again. No more shouting. No more asking people to repeat themselves. Just talking, the way it used to be.",
    detail: "Moderate sensorineural hearing loss",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Chen, Au.D.",
    title: "Audiologist, Pacific Hearing Care",
    text: "In 15 years of practice, Earlens has produced the most consistently positive patient outcomes I've seen. The combination of extended bandwidth and direct vibration is genuinely different technology.",
  },
  {
    name: "Dr. Michael Torres, Au.D.",
    title: "Director, Advanced Hearing Solutions",
    text: "Patients come to me after failing with traditional hearing aids. With Earlens, I can offer them something that actually works for high-frequency loss — results that weren't possible before.",
  },
  {
    name: "Dr. Lisa Park, Au.D.",
    title: "Hearing Specialist, Clear Sound Clinic",
    text: "The speech-in-noise improvement is what impresses patients most. They come back weeks later and say things like 'I went to a dinner party and followed every conversation.' That's the goal.",
  },
];

export default async function TestimonialsPage() {
  const [sanityTestimonials, sanityAudiologists] = await Promise.all([
    client.fetch(`*[_type == "testimonial"] | order(order asc)`),
    client.fetch(`*[_type == "audiologist"] | order(order asc)`),
  ]);
  return (
    <>
      <PageHero
        gradient
        label="Patient Stories"
        title="Hear From Real Patients"
        subtitle="These are real people who chose Earlens. Their words, their moments, their lives changed."
      />

      {/* Patient cards */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {(sanityTestimonials.length > 0 ? sanityTestimonials : stories).map((s, i) => {
              const photoUrl = s.photo?.asset ? urlFor(s.photo).width(600).height(360).fit("crop").url() : null;
              return (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  background: C.white,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: `1px solid ${C.grayLight}`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  {s.wistia ? (
                    <div style={{ overflow: "hidden" }}>
                      <WistiaVideo id={s.wistia} height={200} />
                    </div>
                  ) : (
                    <div style={{
                      height: 180,
                      background: `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden",
                    }}>
                      {photoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={photoUrl} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 26, fontWeight: 700 }}>
                          {s.name[0]}
                        </div>
                      )}
                    </div>
                  )}
                  <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: 16 }}>{Ico.quote}</div>
                    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                      {[1,2,3,4,5].map(n => <span key={n}>{Ico.starFill()}</span>)}
                    </div>
                    <p style={{
                      color: C.text, fontSize: 15, lineHeight: 1.7,
                      fontStyle: "italic", flex: 1, marginBottom: 24,
                    }}>
                      &ldquo;{s.text}&rdquo;
                    </p>
                    <div style={{ borderTop: `1px solid ${C.grayLight}`, paddingTop: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: "50%",
                          background: C.teal,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#fff", fontWeight: 700, fontSize: 16,
                        }}>
                          {s.name[0]}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{s.name}</div>
                          <div style={{ color: C.gray, fontSize: 12 }}>Age {s.age} · {s.loc}</div>
                          <div style={{ color: C.teal, fontSize: 11, fontWeight: 600, marginTop: 2 }}>{s.since}</div>
                        </div>
                      </div>
                      <div style={{
                        marginTop: 14, background: C.tealSoft,
                        borderRadius: 8, padding: "8px 12px",
                        color: C.tealDark, fontSize: 12,
                      }}>
                        {s.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audiologist voices */}
      <section style={{ padding: "100px 0", background: C.light }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Providers Speak
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
                What Audiologists Say
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {(sanityAudiologists.length > 0 ? sanityAudiologists : doctors).map((d, i) => {
              const photoUrl = d.photo?.asset ? urlFor(d.photo).width(96).height(96).fit("crop").url() : null;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{
                    background: C.white,
                    borderRadius: 20,
                    padding: "36px 32px",
                    border: `1px solid ${C.grayLight}`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  }}>
                    <div style={{ marginBottom: 12 }}>{Ico.quote}</div>
                    <p style={{ color: C.text, fontSize: 15, lineHeight: 1.7, fontStyle: "italic", marginBottom: 28 }}>
                      &ldquo;{d.text}&rdquo;
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      {photoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={photoUrl} alt={d.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14 }}>
                          {d.name.split(" ").slice(1, 3).map(n => n[0]).join("")}
                        </div>
                      )}
                      <div>
                        <div style={{ fontWeight: 700, color: C.text, fontSize: 14 }}>{d.name}</div>
                        <div style={{ color: C.gray, fontSize: 12 }}>{d.title}</div>
                      </div>
                    </div>
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
