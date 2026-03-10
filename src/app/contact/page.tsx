"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Schedule a free virtual consultation, request more information, or simply reach out.
            Our team is here to help you on your journey to better hearing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Information
              </h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and an Earlens specialist will contact you
                within one business day.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-[#61a229] rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Thanks, {form.firstName}!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will be in touch within one
                    business day. We look forward to helping you hear better.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How Can We Help? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent bg-white"
                    >
                      <option value="">Select a reason...</option>
                      <option value="consultation">Schedule a Virtual Consultation</option>
                      <option value="info">Request More Information</option>
                      <option value="provider">Find a Provider Near Me</option>
                      <option value="support">Patient Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#204CE5] focus:border-transparent resize-none"
                      placeholder="Tell us a bit about your hearing needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#61a229] text-white py-3 rounded-lg font-semibold hover:bg-[#4e8420] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Schedule a Consultation?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "100% Free",
                      desc: "Your virtual consultation is completely free with no obligation.",
                      icon: "✓",
                    },
                    {
                      title: "Talk to a Specialist",
                      desc: "Speak directly with an Earlens-trained hearing specialist who can answer your questions.",
                      icon: "👤",
                    },
                    {
                      title: "Personalized Assessment",
                      desc: "Get a preliminary assessment of whether Earlens could help your specific hearing needs.",
                      icon: "📋",
                    },
                    {
                      title: "Next Steps",
                      desc: "We'll connect you with a certified Earlens audiologist in your area.",
                      icon: "📍",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#204CE5] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-[#204CE5] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3 text-blue-200 text-sm">
                  <p>
                    <span className="text-white font-medium">Email: </span>
                    info@earlens.com
                  </p>
                  <p>
                    <span className="text-white font-medium">Phone: </span>
                    1-800-EARLENS
                  </p>
                  <p>
                    <span className="text-white font-medium">Hours: </span>
                    Monday – Friday, 8am – 6pm PT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
