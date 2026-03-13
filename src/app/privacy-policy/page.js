import { PageHero } from "@/components/PageHero";
import { C } from "@/constants/colors";

export const metadata = {
  title: "Cookie & Privacy Policy — Earlens",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero label="Legal" title="Earlens Website Privacy Policy" />
      <section style={{ padding: "80px 0 100px", background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: C.textLight, fontSize: 16, lineHeight: 1.9 }}>

            <p><strong style={{ color: C.text }}>Your privacy on the Internet is of the utmost importance to us.</strong> At Earlens, the company aims to create satisfying and safe online experiences. The policy discloses information gathering and usage practices.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Information Earlens Gathers and Tracks</h2>
            <p>The company collects three information types:</p>
            <ol style={{ paddingLeft: 24, marginTop: 16 }}>
              <li style={{ marginBottom: 12 }}><strong>Voluntary submissions</strong> — Names, phone numbers, email addresses, state, and zip codes provided through optional forms to respond to requests and notify customers of updates.</li>
              <li style={{ marginBottom: 12 }}><strong>Automatic collection</strong> — Usage details, IP addresses, and tracking technologies including cookies and web beacons used to understand site performance and user interests.</li>
              <li style={{ marginBottom: 12 }}><strong>Caller Information</strong> — Phone numbers, caller ID names, city, call duration, and call content from the "Find a Provider" page dedicated phone numbers.</li>
            </ol>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Policy Amendment</h2>
            <p>Earlens reserves the right to amend this Privacy Policy at any time with or without prior notice.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Use of Personal Information</h2>
            <p>The organization protects information security and honors user choices. Information sharing occurs with third-party contractors assisting business operations and may be shared with healthcare providers contacted through listed phone numbers. The company complies with law enforcement requests when legally required.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Accessing and Correcting Your Information</h2>
            <p>Users may contact Earlens to view, edit, or delete personal information or report inaccuracies.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>California Privacy Rights</h2>
            <p>California residents may request information about third-party personal information disclosures for direct marketing. The website does not support "Do Not Track" signals.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Users Outside of the US</h2>
            <p>Information may be stored and processed internationally in countries with different data protection standards than user locations.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Children</h2>
            <p>Earlens will never knowingly request personally identifiable information from anyone under the age of 13 without requesting parental consent, consistent with COPPA.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Cookies and Automatic Data Collection Technologies</h2>
            <p>The website uses cookies, pixel tags, and web beacons to collect visiting details, location data, IP addresses, operating systems, and browser types. Users may refuse cookies through browser settings.</p>
            <p style={{ marginTop: 16 }}><strong>Social networking integration</strong> — The site uses Facebook, Twitter, and Google+ plugins. Social platform privacy policies apply to shared information.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Healthcare Disclaimer</h2>
            <p>The information presented on the Website is not intended to be medical advice and should not be relied upon as such.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Links to Other Websites and Services</h2>
            <p>The site contains links to non-Earlens controlled sites with separate privacy policies. Earlens holds no responsibility for linked website content.</p>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginTop: 48, marginBottom: 16 }}>Security</h2>
            <p>Earlens operates secure data networks protected by industry standard firewall and password protection systems. However, internet transmission security cannot be fully guaranteed.</p>

            <div style={{ marginTop: 64, padding: "32px", background: C.light, borderRadius: 16, fontSize: 14 }}>
              <strong style={{ color: C.text }}>Contact:</strong><br />
              Earlens Corporation<br />
              4045-A Campbell Avenue, Menlo Park, CA 94025<br />
              Phone: +1-650-366-9000<br />
              Email: CustomerCare@earlens.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
