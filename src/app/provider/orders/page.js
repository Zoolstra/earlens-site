"use client";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { ProviderCTA } from "@/components/provider/ProviderCTA";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

const docs = [
  {
    tag: "Warranty",
    category: "Warranty",
    title: "Extended Warranty",
    desc: "Order form for the Earlens extended warranty program.",
    color: C.teal,
    pdf: "/images/orders/extended warranty.pdf",
  },
  {
    tag: "Products",
    category: "Products",
    title: "Inductive Custom Product",
    desc: "Order form for inductive custom hearing products.",
    color: "#6366F1",
    pdf: "/images/orders/inductiove custom product.pdf",
  },
  {
    tag: "Products",
    category: "Products",
    title: "Inductive Replacement Parts",
    desc: "Order form for inductive replacement parts.",
    color: "#6366F1",
    pdf: "/images/orders/inductive replacement parts.pdf",
  },
  {
    tag: "Returns",
    category: "Returns",
    title: "Return for Credit",
    desc: "Form for returning products for credit.",
    color: C.gold,
    pdf: "/images/orders/return for credit.pdf",
  },
  {
    tag: "Supplies",
    category: "Supplies",
    title: "Supplies",
    desc: "Order form for Earlens supplies and consumables.",
    color: C.green,
    pdf: "/images/orders/supplies.pdf",
  },
];

const allCategories = ["All", "Warranty", "Products", "Returns", "Supplies"];

const tagColors = {
  Warranty: C.teal,
  Products: "#6366F1",
  Returns: C.gold,
  Supplies: C.green,
};

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? docs : docs.filter((d) => d.category === activeFilter);

  return (
    <>
      <PageHero
        gradient
        label="Provider"
        title="Orders"
        subtitle="Download order forms and related documents for the Earlens system."
      />

      {/* Filter bar */}
      <section style={{ padding: "48px 0 0", background: C.white, borderBottom: `1px solid ${C.grayLight}` }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 24, flexWrap: "wrap" }}>
            <span style={{ color: C.gray, fontSize: 13, marginRight: 4 }}>Filter:</span>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: `1px solid ${activeFilter === cat ? C.teal : C.grayLight}`,
                  background: activeFilter === cat ? C.teal : "#fff",
                  color: activeFilter === cat ? "#fff" : C.grayDark,
                  fontSize: 13, fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
            <span style={{ marginLeft: "auto", color: C.gray, fontSize: 13 }}>
              {filtered.length} {filtered.length === 1 ? "document" : "documents"}
            </span>
          </div>
        </div>
      </section>

      {/* Document list */}
      <section style={{ padding: "64px 0 100px", background: C.white }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0", color: C.gray, fontSize: 15 }}>
              Documents coming soon.
            </div>
          ) : (
            filtered.map((d, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <a href={d.pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff",
                    borderRadius: 16,
                    border: `1px solid ${C.grayLight}`,
                    borderLeft: `4px solid ${d.color}`,
                    padding: "28px 32px",
                    display: "flex",
                    gap: 28,
                    alignItems: "flex-start",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                        <span style={{
                          background: (tagColors[d.tag] || C.teal) + "20",
                          color: tagColors[d.tag] || C.teal,
                          fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                          padding: "3px 10px", borderRadius: 20,
                        }}>
                          {d.tag}
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 6, lineHeight: 1.3 }}>
                        {d.title}
                      </div>
                      <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{d.desc}</div>
                    </div>
                    <div style={{ color: C.teal, flexShrink: 0, marginTop: 4 }}>{Ico.arrow}</div>
                  </div>
                </a>
              </FadeIn>
            ))
          )}
        </div>
      </section>

      <ProviderCTA />
    </>
  );
}
