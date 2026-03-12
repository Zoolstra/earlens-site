"use client";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { C } from "@/constants/colors";
import { Ico } from "@/constants/icons";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "patient", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const infoCards = [
    {
      icon: Ico.users(28),
      title: "For Patients",
      lines: ["1-800-EARLENS (1-800-327-5367)", "Mon–Fri, 8am–6pm PT", "patients@earlens.com"],
      color: C.teal,
    },
    {
      icon: Ico.shield(28),
      title: "For Providers",
      lines: ["1-888-327-5367", "Mon–Fri, 8am–6pm PT", "providers@earlens.com"],
      color: C.blue,
    },
    {
      icon: Ico.map(28),
      title: "Headquarters",
      lines: ["2600 Marine Way, Suite 1200", "Mountain View, CA 94043", "info@earlens.com"],
      color: "#6366F1",
    },
  ];

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        subtitle="Whether you're a patient, audiologist, or partner — we're here to help."
      />

      {/* Info cards */}
      <section style={{ padding: "80px 0 0", background: C.white }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {infoCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background: C.white,
                borderRadius: 20,
                padding: "36px 32px",
                border: `1px solid ${C.grayLight}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: card.color + "15",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: card.color, margin: "0 auto 20px",
                }}>
                  {card.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: 17, color: C.text, marginBottom: 16 }}>{card.title}</div>
                {card.lines.map((l, j) => (
                  <div key={j} style={{ color: C.textLight, fontSize: 14, lineHeight: 1.8 }}>{l}</div>
                ))}
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
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 32 }}>Send a Message</h3>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none" }}
                        />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Phone (optional)</label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>I am a…</label>
                        <select
                          value={form.type}
                          onChange={e => setForm({ ...form, type: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none" }}
                        >
                          <option value="patient">Patient / Caregiver</option>
                          <option value="provider">Audiologist / Provider</option>
                          <option value="media">Media / Press</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.grayDark, marginBottom: 6 }}>Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.grayLight}`, fontSize: 15, background: "#fff", outline: "none", resize: "vertical", fontFamily: "inherit" }}
                      />
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
