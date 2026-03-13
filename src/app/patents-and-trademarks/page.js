import { PageHero } from "@/components/PageHero";
import { C } from "@/constants/colors";

export const metadata = {
  title: "Patents and Trademarks — Earlens",
};

const inductivePatents = [
  "8,858,419","9,154,891","9,749,758","9,930,458","9,949,039",
  "10,237,663","10,284,964","10,306,381","10,492,010","10,511,913",
  "10,516,946","10,609,492","10,743,110","10,779,094","10,798,498",
];

const lightDrivenPatents = [
  "8,396,239","8,696,541","8,715,152","8,858,419","9,049,528",
  "9,154,891","9,392,377","9,591,409","9,749,758","9,961,494",
  "10,492,010","10,511,913","10,516,946","10,516,949","10,531,206",
  "10,609,492","10,743,110","10,779,094","10,798,498",
];

export default function PatentsPage() {
  return (
    <>
      <PageHero label="Legal" title="Intellectual Property" />
      <section style={{ padding: "80px 0 100px", background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: C.textLight, fontSize: 16, lineHeight: 1.9 }}>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 16 }}>Patents</h2>
            <p>Earlens Inductive Contact Hearing Solution may be covered by one or more of the following US Patents:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20, marginBottom: 48 }}>
              {inductivePatents.map(p => (
                <span key={p} style={{ background: C.light, border: `1px solid ${C.grayLight}`, borderRadius: 8, padding: "6px 14px", fontSize: 14, color: C.text, fontWeight: 600 }}>{p}</span>
              ))}
            </div>

            <p>Earlens Light-Driven Hearing Aid may be covered by one or more of the following US patents:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20, marginBottom: 48 }}>
              {lightDrivenPatents.map(p => (
                <span key={p} style={{ background: C.light, border: `1px solid ${C.grayLight}`, borderRadius: 8, padding: "6px 14px", fontSize: 14, color: C.text, fontWeight: 600 }}>{p}</span>
              ))}
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 16 }}>Trademarks</h2>
            <p>The marks <strong>Earlens®</strong>, <strong>Photon®</strong>, <strong>Hear the Light®</strong> and the <strong>Earlens Logo</strong> are registered intellectual property of Earlens Corporation. All are the property of Earlens Corporation unless otherwise indicated and may not be used without prior written authorization from the company or respective owners.</p>
          </div>
        </div>
      </section>
    </>
  );
}
