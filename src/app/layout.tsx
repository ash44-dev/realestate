import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./theme.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estate & — Modern Real Estate",
  description:
    "Discover exceptional homes and investment properties curated for discerning buyers. Estate & connects you with the finest real estate across the country.",
  keywords: ["real estate", "luxury homes", "property listings", "buy home"],
  openGraph: {
    title: "Estate & — Modern Real Estate",
    description: "Find a place you'll love to call home.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
