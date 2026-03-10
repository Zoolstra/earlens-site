import Link from "next/link";

const coreBenefits = [
  {
    title: "2.5X Broader Frequency Range",
    desc: "Earlens covers a dramatically wider range of sound frequencies than traditional hearing aids, giving you access to the full richness of speech and music. This means you hear the subtle nuances that make voices sound natural and music feel alive.",
    icon: "📡",
  },
  {
    title: "Custom Fit For Your Ears",
    desc: "Every Earlens is precisely crafted to fit your unique ear anatomy. An audiologist takes a detailed impression to ensure a perfect, comfortable fit — so your device stays securely in place and performs optimally for your specific hearing profile.",
    icon: "👂",
  },
  {
    title: "Stream to iPhone Using Bluetooth",
    desc: "Earlens is Made for iPhone, allowing you to stream music, phone calls, podcasts, and more directly to your hearing device. Adjust volume and settings right from your iPhone or Apple Watch.",
    icon: "📱",
  },
  {
    title: "No Acoustic Feedback",
    desc: "Traditional hearing aids can produce annoying squealing or whistling sounds. Earlens eliminates this problem entirely because it directly vibrates the eardrum rather than pushing amplified sound through the ear canal.",
    icon: "🔇",
  },
  {
    title: "Rechargeable — No Batteries Needed",
    desc: "Simply charge your Earlens overnight, just like your phone. Wake up to a full day of exceptional hearing with no fumbling with tiny batteries. The rechargeable design is convenient, eco-friendly, and cost-effective.",
    icon: "🔋",
  },
  {
    title: "Discreet and Comfortable",
    desc: "The Earlens processor sits behind the ear while the tiny lens is inside the ear canal — virtually invisible to others. The comfortable, custom fit means you can wear it all day without discomfort.",
    icon: "✨",
  },
];

const healthStats = [
  { value: "48M", label: "Americans experience some degree of hearing loss" },
  { value: "2x", label: "Men are nearly twice as likely as women to experience hearing loss" },
  { value: "1 in 5", label: "Eligible adults actually use hearing aids" },
  { value: "#1", label: "Hearing loss is the top modifiable dementia risk factor" },
];

export default function BenefitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Revolution in Hearing Technology and Care
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Earlens goes beyond what conventional hearing aids can offer. Discover
            the features and benefits that make Earlens the world&apos;s most advanced
            hearing solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61a229] text-white px-8 py-3 rounded font-semibold hover:bg-[#4e8420] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Earlens Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBenefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#61a229] font-semibold text-sm uppercase tracking-widest">
                Clinical Evidence
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Backed by Science, Proven by Results
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Earlens isn&apos;t just innovative technology — it&apos;s clinically proven. Multiple
                independent studies demonstrate that Earlens provides superior sound quality
                and hearing outcomes compared to traditional hearing aids.
              </p>
              <ul className="space-y-3">
                {[
                  "2.5x the audible bandwidth of traditional hearing aids",
                  "98% of study participants preferred Earlens sound quality",
                  "82% reported significantly less listening effort",
                  "88% of users report improved quality of life",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#61a229] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#204CE5] rounded-2xl p-8 text-white text-center">
              <div className="text-7xl font-bold text-[#61a229] mb-2">2.5x</div>
              <p className="text-xl font-semibold mb-4">The Audible Bandwidth</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Earlens delivers sound across a frequency range 2.5 times wider than
                conventional hearing aids — from the deepest bass to the highest treble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hearing Loss Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hearing Loss Is More Common Than You Think
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              If you or someone you love struggles with hearing, you&apos;re far from alone.
              The good news: effective help is available.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {healthStats.map((s) => (
              <div key={s.value} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-[#204CE5] mb-2">{s.value}</div>
                <p className="text-gray-500 text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Earlens vs. Traditional Hearing Aids
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center text-[#204CE5] font-bold">Earlens</th>
                  <th className="py-3 px-4 text-center text-gray-500 font-semibold">Traditional Hearing Aids</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Frequency Range", "2.5x broader", "Standard"],
                  ["Sound Delivery Method", "Direct eardrum vibration", "Acoustic speaker in canal"],
                  ["Acoustic Feedback (Whistling)", "None", "Common"],
                  ["iPhone Bluetooth Streaming", "Yes", "Varies"],
                  ["Custom Fit", "Precisely custom-molded", "Generic sizes"],
                  ["Battery", "Rechargeable", "Replaceable batteries"],
                  ["Listening Effort", "82% less effort reported", "Higher listening effort"],
                ].map(([feature, earlens, traditional]) => (
                  <tr key={feature} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-3 px-4 text-gray-700 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[#61a229] font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {earlens}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400">{traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Difference for Yourself
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Schedule a free virtual consultation and find out if Earlens is right for you.
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
