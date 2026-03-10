import Link from "next/link";

const milestones = [
  {
    year: "2010",
    event: "Earlens founded with a mission to revolutionize hearing technology.",
  },
  {
    year: "2015",
    event: "First clinical trials demonstrating 2.5x broader frequency range than traditional aids.",
  },
  {
    year: "2017",
    event: "FDA clearance received for the Earlens Light-Driven Hearing Aid System.",
  },
  {
    year: "2019",
    event: "Launched Made for iPhone Bluetooth streaming capability.",
  },
  {
    year: "2021",
    event: "Rechargeable system introduced, eliminating the need for disposable batteries.",
  },
  {
    year: "2024",
    event: "Over 10,000 patients experiencing life-changing hearing with Earlens.",
  },
];

const values = [
  {
    title: "Innovation",
    desc: "We pursue breakthrough technologies that solve problems others accept as limitations.",
    icon: "💡",
  },
  {
    title: "Patient-Centered",
    desc: "Every decision we make starts with the question: how does this improve life for our patients?",
    icon: "❤️",
  },
  {
    title: "Clinical Excellence",
    desc: "Our technology is rigorously tested and clinically validated. We don't ship promises — we ship proven results.",
    icon: "🔬",
  },
  {
    title: "Accessibility",
    desc: "We believe everyone deserves the best possible hearing. We work to make Earlens accessible to as many patients as possible.",
    icon: "🌍",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Believe Everyone Deserves to Hear Fully
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Earlens was founded on the belief that hearing technology had hit a ceiling
              — and that ceiling was too low. We set out to break it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#61a229] font-semibold text-sm uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Transforming How the World Hears
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Earlens Corporation is a medical device company focused on advancing hearing
                healthcare through innovation. Our flagship product — the Earlens Light-Driven
                Hearing Aid — is the world&apos;s first and only hearing device to use light to
                directly drive the eardrum, bypassing the limitations of acoustic speaker technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We partner with the world&apos;s top audiologists and ENT physicians to bring
                this technology to patients who deserve more from their hearing aids. Our work
                is driven by the stories of patients whose lives have been transformed — people
                who heard music fully for the first time in decades, or finally understood every
                word their grandchildren said.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That&apos;s not just our mission. That&apos;s our reason for being.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "10,000+", label: "Patients Helped" },
                  { value: "500+", label: "Certified Audiologists" },
                  { value: "2.5x", label: "Broader Frequency Range" },
                  { value: "98%", label: "Patient Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-[#204CE5] mb-1">{s.value}</div>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 w-3 h-3 rounded-full bg-[#204CE5] border-2 border-white shadow mt-1 md:left-1/2 md:-translate-x-1.5" />
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <span className="text-[#61a229] font-bold text-lg">{m.year}</span>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
            Recognized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["TIME", "CBS", "Forbes", "NBC", "Edison Awards"].map((logo) => (
              <span
                key={logo}
                className="text-gray-400 text-xl font-bold tracking-wider hover:text-gray-600 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Earlens Family
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Thousands of patients have already discovered what it means to truly hear.
            Schedule a free consultation and take the first step.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61a229] text-white px-10 py-4 rounded font-semibold hover:bg-[#4e8420] transition-colors"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
