import type { Metadata } from "next";
import { Abril_Fatface, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ['300', '400', '500', '600', '700'],
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril-fatface",
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

export const metadata: Metadata = {
  title: "360° Institute For Development",
  description: "Shaping Future Leaders Through Quality Education",
  icons: {
    icon: "/logos/360-main-logo_mid.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${abrilFatface.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
