"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "About Earlens",
    questions: [
      {
        q: "What is Earlens?",
        a: "Earlens is a revolutionary hearing solution that directly vibrates the eardrum using light technology. Unlike conventional hearing aids that push amplified sound acoustically through the ear canal, Earlens uses a tiny custom-fit lens placed on the eardrum that receives light signals from a behind-the-ear processor, producing vibrations that mimic natural hearing.",
      },
      {
        q: "How is Earlens different from traditional hearing aids?",
        a: "Traditional hearing aids use a small speaker to push amplified sound waves into the ear canal. Earlens bypasses this limitation by directly vibrating the eardrum — the same way sound naturally causes the eardrum to vibrate. This results in 2.5x the audible bandwidth, no acoustic feedback, and a more natural listening experience.",
      },
      {
        q: "Is Earlens FDA-cleared?",
        a: "Yes. Earlens is FDA-cleared as a safe and effective hearing solution for adults with mild to severe sensorineural hearing loss.",
      },
    ],
  },
  {
    category: "Candidacy & Getting Started",
    questions: [
      {
        q: "Who is a good candidate for Earlens?",
        a: "Earlens is designed for adults with mild to severe sensorineural hearing loss. The best way to determine if you're a candidate is to schedule a consultation with an Earlens-certified audiologist. They'll evaluate your hearing profile, ear anatomy, and lifestyle needs to determine if Earlens is right for you.",
      },
      {
        q: "How do I get started with Earlens?",
        a: "Start by scheduling a free virtual consultation through our website. You'll speak with an Earlens specialist who can answer your questions and refer you to a certified provider near you. If you're a good candidate, your audiologist will take a custom impression of your ear canal to create a precisely fitted Earlens lens.",
      },
      {
        q: "Is there an adjustment period?",
        a: "Like all hearing devices, there is typically a short adjustment period as your brain re-learns how to process richer sound. Most users adapt within a few weeks and report that the sound feels natural and comfortable.",
      },
    ],
  },
  {
    category: "Technology & Features",
    questions: [
      {
        q: "Does Earlens work with iPhone?",
        a: "Yes! Earlens is Made for iPhone and supports Bluetooth streaming. You can stream music, phone calls, podcasts, and more directly to your Earlens. You can also adjust volume and settings using your iPhone or Apple Watch.",
      },
      {
        q: "Does Earlens need batteries?",
        a: "No. Earlens uses a rechargeable system. Simply charge your device overnight and enjoy a full day of hearing. No more fumbling with tiny hearing aid batteries.",
      },
      {
        q: "Will my Earlens whistle or feedback?",
        a: "No. Acoustic feedback (the whistling sound common with traditional hearing aids) is eliminated with Earlens because the technology directly vibrates the eardrum rather than relying on an acoustic speaker in the ear canal.",
      },
      {
        q: "Can I wear Earlens while exercising?",
        a: "Earlens is designed for everyday wear. Consult with your audiologist about specific activities. The device is worn behind the ear, and the lens is inside the ear canal, making it suitable for most daily activities.",
      },
    ],
  },
  {
    category: "Cost & Insurance",
    questions: [
      {
        q: "Is Earlens covered by insurance?",
        a: "Coverage varies by insurance plan. Some plans cover hearing aids fully or partially. Our team can help you understand your insurance benefits and explore financing options. Many patients find that the superior hearing outcome makes Earlens well worth the investment.",
      },
      {
        q: "Are there financing options available?",
        a: "Yes. Earlens offers financing options to make the technology accessible. Ask about financing plans during your consultation.",
      },
      {
        q: "Is there a trial period?",
        a: "Ask your Earlens-certified audiologist about trial options. Many providers offer a trial period so you can experience the difference for yourself before committing.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full text-left flex items-start justify-between py-4 gap-4 hover:text-[#204CE5] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-800 text-sm md:text-base">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""} text-[#204CE5]`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-gray-500 text-sm leading-relaxed pr-8">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001AB3] to-[#204CE5] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have questions about Earlens? Find answers to the most common questions
            about our technology, the fitting process, and what to expect.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-xl font-bold text-[#204CE5] mb-6 pb-2 border-b-2 border-[#204CE5]/20">
                {section.category}
              </h2>
              <div>
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Our team is here to help. Schedule a free virtual consultation and get all
            your questions answered by an Earlens specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61a229] text-white px-8 py-3 rounded font-semibold hover:bg-[#4e8420] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#204CE5] border-2 border-[#204CE5] px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
