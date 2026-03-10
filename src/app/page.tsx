import Link from "next/link";

const stats = [
  { value: "2.5x", label: "The audible bandwidth of traditional hearing aids" },
  { value: "98%", label: "Of study participants preferred Earlens sound quality" },
  { value: "82%", label: "Reported less listening effort than traditional aids" },
  { value: "88%", label: "Of users report improved quality of life" },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Rich Sound Quality",
    desc: "Experience music and voices with full, natural richness — like you remember.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 9.5a2.5 2.5 0 010 5m-3.536-6.036a5 5 0 000 7.072M3 12h1m16 0h1M12 3v1m0 16v1" />
      </svg>
    ),
    title: "Clear Speech",
    desc: "Understand every word in noisy environments and challenging listening situations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Natural Listening",
    desc: "Direct-to-eardrum technology mimics how sound naturally reaches your eardrum.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Bluetooth Streaming",
    desc: "Made for iPhone. Stream music, calls, and media directly to your Earlens.",
  },
];

const lifeBenefits = [
  {
    category: "Health",
    borderColor: "border-[#204CE5]",
    bgColor: "bg-blue-50",
    accentColor: "text-[#204CE5]",
    text: "Untreated hearing loss is the top modifiable dementia risk factor. Earlens helps keep you engaged and cognitively active.",
  },
  {
    category: "Work",
    borderColor: "border-[#61a229]",
    bgColor: "bg-green-50",
    accentColor: "text-[#61a229]",
    text: "Stay sharp in meetings and presentations. Hear colleagues clearly whether in-person or on calls.",
  },
  {
    category: "Social",
    borderColor: "border-[#204CE5]",
    bgColor: "bg-blue-50",
    accentColor: "text-[#204CE5]",
    text: "Reconnect with family and friends. Participate fully in conversations at dinners, events, and gatherings.",
  },
  {
    category: "Music",
    borderColor: "border-[#61a229]",
    bgColor: "bg-green-50",
    accentColor: "text-[#61a229]",
    text: "Rediscover the joy of music. Earlens broader frequency range lets you hear the full richness of every song.",
  },
];

const testimonials = [
  {
    name: "Genie",
    quote:
      "After getting my brand new Earlens, I immediately turned the radio on to my favorite music and I just sat there, and tears, I mean literally, tears just came down.",
  },
  {
    name: "Dante",
    quote:
      "From the first moment I got them, I was hooked on Earlens. There was no way I was going to go try something else. This is the way to go. They're worth every penny.",
  },
  {
    name: "Casey",
    quote:
      "Now I know that when I walk into any situation I'll be able to hear what's going on.",
  },
];

const mediaLogos = ["TIME", "CBS", "Forbes", "NBC", "Edison Awards"];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001AB3] via-[#204CE5] to-[#3a6ff0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-white"
              style={{
                top: `${15 + i * 14}%`,
                left: "-10%",
                right: "-10%",
                transform: `rotate(${-8 + i * 2}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Expect More.<br />
              Hear More.<br />
              <span className="text-[#61a229]">With Earlens.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
              Earlens delivers what traditional hearing aids can&apos;t. Hear with
              confidence &amp; clarity to rediscover favorite sounds and embrace
              every conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/testimonials"
                className="bg-white text-[#204CE5] px-8 py-3 rounded font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Watch Testimonials
              </Link>
              <Link
                href="/contact"
                className="bg-[#61a229] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#4e8420] transition-colors"
              >
                Schedule Virtual Consultation
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.536 8.464a5 5 0 010 7.072M12 9.5a2.5 2.5 0 010 5m-3.536-6.036a5 5 0 000 7.072M3 12h1m16 0h1M12 3v1m0 16v1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#204CE5] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="text-3xl md:text-4xl font-bold text-[#61a229]">{s.value}</div>
              <div className="text-blue-200 text-xs mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Earlens Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Unlike traditional hearing aids that push amplified sound into the ear canal,
            Earlens uses a revolutionary light-based system to directly vibrate your eardrum
            delivering unmatched sound quality across a broader frequency range.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { step: "1", title: "Hear", desc: "Sound is captured by a behind-the-ear processor and converted to light signals." },
              { step: "2", title: "Convert", desc: "A tiny, custom-fit lens rests on the eardrum and receives the light signals." },
              { step: "3", title: "Experience", desc: "The lens vibrates the eardrum directly, producing rich, clear, natural sound." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#204CE5] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sound That Changes Everything
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three words sum up the Earlens experience: Rich. Clear. Natural.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col gap-4"
              >
                <div className="text-[#204CE5]">{b.icon}</div>
                <h3 className="font-bold text-gray-900">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/benefits"
              className="inline-block bg-[#204CE5] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#001AB3] transition-colors"
            >
              See All Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* Life benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Better Hearing. Better Life.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hearing loss affects every part of your life. Earlens helps you reclaim it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {lifeBenefits.map((lb) => (
              <div
                key={lb.category}
                className={`rounded-xl p-8 border-l-4 ${lb.borderColor} ${lb.bgColor}`}
              >
                <h3 className={`text-xl font-bold mb-3 ${lb.accentColor}`}>
                  {lb.category}
                </h3>
                <p className="text-gray-600">{lb.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-20 bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real People. Real Stories.
            </h2>
            <p className="text-blue-200">
              Don&apos;t take our word for it — hear from Earlens users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <svg className="w-8 h-8 text-[#61a229] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-white">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-block bg-[#61a229] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#4e8420] transition-colors"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Media logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {mediaLogos.map((logo) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Hear More?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Schedule a free virtual consultation with an Earlens-certified audiologist
            and discover what you&apos;ve been missing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61a229] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[#4e8420] transition-colors"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
