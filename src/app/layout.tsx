import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karolina Andrzejak | Wróżka Poznań - Doradztwo Duchowe",
  description: "Twoja przyszłość zapisana w gwiazdach, odczytana w Poznaniu. Karolina Andrzejak – Profesjonalne doradztwo duchowe i wgląd w przeznaczenie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black-matte text-gray-200 selection:bg-purple-luxury selection:text-gold relative`}
      >
        {children}
      </body>
    </html>
  );
}
