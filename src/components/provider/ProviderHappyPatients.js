import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";
import { FadeIn } from "@/components/FadeIn";

const stats = [
  {
    icon: Ico.wave(32),
    val: "8:1",
    text: "Patients prefer the Earlens extended bandwidth",
  },
  {
    icon: Ico.ear(32),
    val: "82%",
    text: "Spent less listening effort with Earlens compared to their acoustic hearing aid",
  },
  {
    icon: Ico.star(32),
    val: "98%",
    text: "Rated Earlens sound quality superior to their existing HAs",
  },
];

export function ProviderHappyPatients() {
  return (
    <section style={{ padding: "100px 0", background: C.white }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Patient Outcomes</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              More Happy Patients
            </h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ background: C.light, borderRadius: 20, padding: "36px 28px", border: `1px solid ${C.grayLight}`, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ color: C.teal }}>{s.icon}</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: C.teal, lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: C.textLight, fontSize: 15, lineHeight: 1.6 }}>{s.text}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
