import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputWidget from "@/components/InputWidget";

export const metadata: Metadata = {
  title: "Design Therapy",
  description: "New methods for building mental health. Psychotherapy and coaching in Amsterdam by Julika Lomas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="announcement-bar">
          <a href="/events">4-Week Parenting Group &mdash; Starting March 3, 2026</a>
        </div>
        <Header />
        {children}
        <Footer />
        <InputWidget allowedHosts={["localhost", "vercel.app"]} />
      </body>
    </html>
  );
}
