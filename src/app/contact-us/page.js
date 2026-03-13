"use client";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", rating: "", timeline: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const infoCards = [
    {
      icon: Ico.map(28),
      title: "Headquarters",
      lines: ["1165 O'Brien Drive", "Menlo Park, CA 94025", "(650) 366-9000"],
      action: { label: "View Directions", href: "https://maps.google.com/?q=1165+O'Brien+Drive,+Menlo+Park,+CA+94025" },
      color: "#6366F1",
    },
    {
      icon: Ico.users(28),
      title: "Info for Patients",
      lines: ["(844) 234-LENS (5367)", "CustomerCare@earlens.com"],
      action: { label: "Find a Provider", href: "/#find-provider" },
      color: C.teal,
    },
    {
      icon: Ico.shield(28),
      title: "Info for Providers",
      lines: ["(844) 234-LENS (5367)", "CustomerCare@earlens.com"],
      action: { label: "Login", href: "/provider" },
      color: C.blue,
    },
  ];

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        subtitle="Need to speak to someone? Reach out here."
      />

      {/* Info cards */}
      <section style={{ padding: "80px 0 0", background: C.white }}>
        <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {infoCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background: C.white,
                borderRadius: 20,
                padding: "36px 32px",
                border: `1px solid ${C.grayLight}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: card.color + "15",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: card.color, marginBottom: 20,
                }}>
                  {card.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: 17, color: C.text, marginBottom: 16 }}>{card.title}</div>
                {card.lines.map((l, j) => (
                  <div key={j} style={{ color: C.textLight, fontSize: 14, lineHeight: 1.8 }}>{l}</div>
                ))}
                <a
                  href={card.action.href}
                  style={{
                    marginTop: 24, display: "inline-flex", alignItems: "center", gap: 6,
                    background: card.color, color: "#fff",
                    padding: "10px 20px", borderRadius: 6,
                    fontSize: 13, fontWeight: 700, textDecoration: "none",
                  }}
                >
                  {card.action.label} {Ico.arrow}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section style={{ padding: "80px 0 100px", background: C.white }}>
        <div className="wrap" style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              background: C.light,
              borderRadius: 24,
              padding: "56px 64px",
              border: `1px solid ${C.grayLight}`,
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ color: C.green, marginBottom: 16 }}>{Ico.check(48)}</div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: C.textLight, fontSize: 16 }}>
                    Thank you for reaching out. A member of our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 8 }}>Send a Message</h3>
                  <p style={{ color: C.textLight, fontSize: 15, marginBottom: 32 }}>Fill out the form below and we&apos;ll be in touch.</p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                    {/* Hearing rating */}
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 10 }}>
                        How would you rate your hearing? <span style={{ color: C.textLight, fontWeight: 400 }}>(1 = very poor, 10 = excellent)</span>
                      </label>
                      <div style={{ display: "flex", gap: 8 }}>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setForm({ ...form, rating: n })}
                            style={{
                              flex: 1, padding: "10px 0", borderRadius: 8, border: `1px solid ${form.rating === n ? C.teal : C.grayLight}`,
                              background: form.rating === n ? C.teal : "#fff",
                              color: form.rating === n ? "#fff" : C.grayDark,
                              fontSize: 14, fontWeight: 600, cursor: "pointer",
                            }}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 10 }}>
                        What&apos;s your timeline for getting help with your hearing?
                      </label>
                      <div style={{ display: "flex", gap: 12 }}>
                        {["As soon as possible", "1 month", "+3 months"].map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, timeline: t })}
                            style={{
                              flex: 1, padding: "12px 0", borderRadius: 8,
                              border: `1px solid ${form.timeline === t ? C.teal : C.grayLight}`,
                              background: form.timeline === t ? C.teal : "#fff",
                              color: form.timeline === t ? "#fff" : C.grayDark,
                              fontSize: 13, fontWeight: 600, cursor: "pointer",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>First Name</label>
                        <input
                          required type="text" placeholder="Jane"
                          value={form.firstName}
                          onChange={e => setForm({ ...form, firstName: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Last Name</label>
                        <input
                          required type="text" placeholder="Smith"
                          value={form.lastName}
                          onChange={e => setForm({ ...form, lastName: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Phone</label>
                        <input
                          type="tel" placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Email</label>
                        <input
                          required type="email" placeholder="jane@example.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{
                        background: C.teal, color: "#fff",
                        padding: "16px 36px", borderRadius: 8,
                        fontSize: 15, fontWeight: 700,
                        border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: 8,
                        alignSelf: "flex-start",
                      }}
                    >
                      Send Message {Ico.arrow}
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
