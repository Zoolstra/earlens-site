import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Earlens — The Best Hearing Requires a Lens",
  description: "Earlens is the only hearing aid designed to mimic the natural hearing process, delivering the broadest audible bandwidth for superior sound quality and speech understanding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
