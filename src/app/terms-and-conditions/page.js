import { PageHero } from "@/components/PageHero";
import { C } from "@/constants/colors";

export const metadata = {
  title: "Terms and Conditions — Earlens",
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms and Conditions" />
      <section style={{ padding: "80px 0 100px", background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: C.textLight, fontSize: 16, lineHeight: 1.9 }}>

            <p>These Terms of Use govern website access and are subject to revision at Earlens&apos; discretion.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Acceptable Use</h2>
            <p>This website permits personal, non-commercial access only, including temporary caching and single-copy downloads for personal use.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Prohibited Activities</h2>
            <ul style={{ paddingLeft: 24 }}>
              {[
                "Violating applicable laws",
                "Using automated access tools",
                "Introducing malware",
                "Attempting unauthorized access or denial-of-service attacks",
                "Interfering with website operations",
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: 10 }}>{item}</li>
              ))}
            </ul>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Intellectual Property Protection</h2>
            <p>The site&apos;s contents, features and functionality are protected by U.S. and international copyright, trademark and other intellectual property rights laws.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Medical Disclaimer</h2>
            <p>The information presented on this Website is not intended to be medical advice and should not be relied upon as such.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Liability Limitations</h2>
            <p>Earlens disclaims all warranties and limits liability for damages arising from website use.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Governing Law</h2>
            <p>All matters relating to the Website shall be governed by and construed in accordance with the internal laws of the State of California.</p>

            <div style={{ marginTop: 64, padding: "32px", background: C.light, borderRadius: 16, fontSize: 14 }}>
              <strong style={{ color: C.text }}>Questions?</strong><br />
              Earlens Corporation<br />
              4045-A Campbell Avenue, Menlo Park, CA 94025<br />
              Phone: (650) 366-9000<br />
              Email: CustomerCare@earlens.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
