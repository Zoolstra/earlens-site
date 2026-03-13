import "./globals.css";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { SiteAuthGuard } from "@/components/SiteAuthGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Earlens — The Best Hearing Requires a Lens",
  description: "Earlens is the only hearing aid designed to mimic the natural hearing process, delivering the broadest audible bandwidth for superior sound quality and speech understanding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AuthProvider>
          <SiteAuthGuard>
            <Nav />
            {children}
            <Footer />
          </SiteAuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
