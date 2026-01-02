import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

// Playfair Display for the Hero H1 - Elegant, tall, and curvy
const playfair = Playfair_Display({
  variable: "--font-serif-hero",
  subsets: ["latin"],
  display: "swap",
});

// Cormorant Garamond for other headings
const cormorant = Cormorant_Garamond({
  variable: "--font-serif-thin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Plus Jakarta Sans for UI/Body text
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pollocks School | Best CBSE School in Visakhapatnam",
  description: "Established in 1966, Pollocks School provides quality CBSE education from Pre-Nursery to 10th Standard in Visakhapatnam. Nurturing bright, confident, and well-balanced individuals.",
  keywords: "Pollocks School, CBSE School, Visakhapatnam, Vizag, Best School, Education, Pre-Nursery, 10th Standard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased bg-white text-pollocks-black`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
