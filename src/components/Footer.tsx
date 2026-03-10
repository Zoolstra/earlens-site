import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001AB3] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              ear<span className="text-[#61a229]">lens</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              The world&apos;s first and only hearing solution to directly vibrate
              the eardrum, delivering a more complete sound than any other
              hearing aid.
            </p>
          </div>

          {/* Patients */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-blue-200">
              Patients
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/benefits" className="hover:text-white text-blue-300 transition-colors">Benefits</Link></li>
              <li><Link href="/testimonials" className="hover:text-white text-blue-300 transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-white text-blue-300 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white text-blue-300 transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-blue-200">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white text-blue-300 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white text-blue-300 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-blue-200">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white text-blue-300 transition-colors">Clinical Research</a></li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Facebook" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Earlens Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Patents</a>
            <a href="#" className="hover:text-white transition-colors">Instructions for Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
