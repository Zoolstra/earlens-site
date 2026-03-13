import { C } from "@/constants/colors";
import { FadeIn } from "@/components/FadeIn";
import { WistiaVideo } from "@/components/WistiaVideo";

export function ProviderTestimonialVideos() {
  return (
    <section style={{ padding: "100px 0", background: C.light }}>
      <div className="wrap">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Testimonials</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.2 }}>
              Hear from Doctors and Patients
            </h2>
          </div>
        </FadeIn>
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <FadeIn delay={0.05}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
              <WistiaVideo id="07603q26xq" height={340} />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
              <WistiaVideo id="j6gags3if8" height={340} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
