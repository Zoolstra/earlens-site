import Link from "next/link";

const patientTestimonials = [
  {
    name: "Genie",
    location: "California",
    quote:
      "After getting my brand new Earlens, I immediately turned the radio on to my favorite music and I just sat there, and tears, I mean literally, tears just came down. The sound was so beautiful — I hadn't heard music like that in years.",
    highlight: "Tears of joy at first activation",
  },
  {
    name: "Dante",
    location: "Texas",
    quote:
      "From the first moment I got them, I was hooked on Earlens. There was no way I was going to go try something else. This is the way to go. They're worth every penny.",
    highlight: "Immediately preferred Earlens over all others",
  },
  {
    name: "Casey",
    location: "New York",
    quote:
      "Now I know that when I walk into any situation I'll be able to hear what's going on. It gives me confidence. Whether it's a meeting, a restaurant, or a family dinner — I can participate fully.",
    highlight: "Restored confidence in every situation",
  },
  {
    name: "Margaret",
    location: "Florida",
    quote:
      "I've tried three other hearing aids over the years. Nothing came close to Earlens. The difference in music quality alone made me emotional. It's like getting a part of myself back.",
    highlight: "Superior to all previous hearing aids",
  },
  {
    name: "Robert",
    location: "Colorado",
    quote:
      "My grandkids were amazed that I could finally hear them clearly on the phone. Earlens changed our relationship — I no longer have to ask them to repeat everything five times.",
    highlight: "Reconnected with family",
  },
  {
    name: "Linda",
    location: "Washington",
    quote:
      "As a music teacher, hearing loss was devastating to my career. Earlens gave me back the ability to appreciate the subtle notes and tones that make music beautiful. I'm back in the classroom and loving it.",
    highlight: "Career restored through better hearing",
  },
];

const doctorTestimonials = [
  {
    name: "Dr. Michelle Inserra",
    title: "Board-Certified ENT Physician",
    quote:
      "I've seen patients moved to tears the moment they first hear with Earlens. The emotional impact is profound. As a physician, there's nothing more rewarding than seeing that moment of reconnection with the world around them.",
  },
  {
    name: "Dr. Elizabeth Mitchell",
    title: "Doctor of Audiology",
    quote:
      "The science behind Earlens is what makes it truly special. Direct eardrum vibration means we're not fighting physics — we're working with it. My patients consistently report a more natural, effortless listening experience.",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real People. Real Stories.
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The world&apos;s first and only hearing solution to directly vibrate the eardrum,
            delivering a more complete sound than any other hearing aid.
            Hear from the people whose lives have been transformed.
          </p>
        </div>
      </section>

      {/* Patient testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Patient Testimonials
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Thousands of people have rediscovered the joy of hearing with Earlens.
            Here are just a few of their stories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patientTestimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col"
              >
                {/* Quote mark */}
                <svg className="w-8 h-8 text-[#204CE5] mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-xs mb-2">{t.location}</p>
                  <span className="inline-block bg-[#204CE5]/10 text-[#204CE5] text-xs px-3 py-1 rounded-full font-medium">
                    {t.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#204CE5] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-[#61a229] mb-2">98%</div>
              <p className="text-blue-200 text-sm">Of study participants preferred Earlens</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#61a229] mb-2">88%</div>
              <p className="text-blue-200 text-sm">Report improved quality of life</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#61a229] mb-2">82%</div>
              <p className="text-blue-200 text-sm">Experience less listening effort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            What Doctors Say
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Audiologists and ENT physicians across the country recommend Earlens for
            patients who want the best possible hearing outcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctorTestimonials.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
              >
                <svg className="w-8 h-8 text-[#61a229] mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{d.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900">{d.name}</p>
                  <p className="text-[#204CE5] text-sm">{d.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Story Could Be Next
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Take the first step toward better hearing. Schedule a free virtual consultation
            with an Earlens-certified audiologist today.
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
