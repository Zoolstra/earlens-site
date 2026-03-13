import { PageHero } from "@/components/PageHero";
import { C } from "@/constants/colors";

export const metadata = {
  title: "Instructions for Use — Earlens",
};

const patientDocs = [
  { label: "Patient Instructions for Use — Inductive System (PDF)", href: "https://earlens.com/ifu/" },
  { label: "Inductive System User Manual (PDF)", href: "https://earlens.com/ifu/" },
];

const providerDocs = [
  { label: "Hearing Professional IFU (PDF) Fidelity Fitting Software", href: "https://earlens.com/ifu/" },
  { label: "Hearing Professional IFU (PDF) ELF", href: "https://earlens.com/ifu/" },
  { label: "Physician IFU (PDF)", href: "https://earlens.com/ifu/" },
  { label: "Sitting Hybrid Impression IFU (PDF)", href: "https://earlens.com/ifu/" },
];

export default function InstructionsPage() {
  return (
    <>
      <PageHero label="Legal" title="Instructions for Use" />
      <section style={{ padding: "80px 0 100px", background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: C.textLight, fontSize: 16, lineHeight: 1.9 }}>

            <p>The audiometric fitting range for the Earlens Hearing Aid is shown in the figure available in the documents below.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 20 }}>Inductive System — Patient Information</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {patientDocs.map((doc, i) => (
                <a key={i} href={doc.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: C.light, border: `1px solid ${C.grayLight}`,
                  borderRadius: 12, padding: "18px 24px",
                  color: C.blue, fontWeight: 600, fontSize: 15, textDecoration: "none",
                }}>
                  <span style={{ fontSize: 20 }}>📄</span>
                  {doc.label}
                </a>
              ))}
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 20 }}>Hearing Healthcare Provider Information</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {providerDocs.map((doc, i) => (
                <a key={i} href={doc.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: C.light, border: `1px solid ${C.grayLight}`,
                  borderRadius: 12, padding: "18px 24px",
                  color: C.blue, fontWeight: 600, fontSize: 15, textDecoration: "none",
                }}>
                  <span style={{ fontSize: 20 }}>📄</span>
                  {doc.label}
                </a>
              ))}
            </div>

            <div style={{ marginTop: 64, padding: "32px", background: C.tealSoft, borderRadius: 16, fontSize: 15, border: `1px solid ${C.tealLight}` }}>
              <strong style={{ color: C.text }}>Need a hard copy?</strong><br />
              <span style={{ color: C.textLight }}>Please call the Earlens Concierge at <strong>844-234-5367</strong> to request a hard copy of the Instructions for Use.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
