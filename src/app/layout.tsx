import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Therapy | Transform Your Inner World",
  description: "Psychotherapy and coaching that designs your future. Work with fresh perspectives for individuals, couples, and systems. Amsterdam-based, globally connected.",
  keywords: ["therapy", "coaching", "couples therapy", "psychotherapy", "Amsterdam", "mental health", "design thinking"],
  authors: [{ name: "Julika Lomas" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Design Therapy | Transform Your Inner World",
    description: "Psychotherapy and coaching that designs your future.",
    type: "website",
    locale: "en_US",
    siteName: "Design Therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Therapy | Transform Your Inner World",
    description: "Psychotherapy and coaching that designs your future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable}`}>
      <body className="grain relative min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
