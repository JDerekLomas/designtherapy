import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["normal"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designtherapy.vercel.app"),
  title: {
    default: "Design Therapy",
    template: "%s -- Design Therapy",
  },
  description:
    "Psychotherapy and Coaching using promising new methods. Design Therapy is for individuals, couples, and small human systems seeking fresh perspectives on life design.",
  openGraph: {
    title: "Design Therapy",
    description: "New methods for building mental health",
    url: "https://www.designtherapy.org",
    siteName: "Design Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-display">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
