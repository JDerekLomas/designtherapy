"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Approach", href: "/approach" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-yellow-brand text-black text-center py-2 text-small tracking-[0.05em]">
        <Link href="/events/emotional-connection-couple-retreat" className="hover:underline">
          2-Day Emotional Connection Retreat Oct 31 &amp; Nov 1 2025
        </Link>
      </div>

      {/* Header */}
      <header className="bg-yellow-brand">
        <div className="container-site flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Design Therapy"
              width={170}
              height={170}
              priority
              className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[16px] font-light tracking-[0.05em] transition-opacity hover:opacity-70 ${
                  pathname === item.href ? "font-bold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden bg-yellow-brand border-t border-black/10 px-[4vw] py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-[16px] font-light tracking-[0.05em] ${
                  pathname === item.href ? "font-bold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
