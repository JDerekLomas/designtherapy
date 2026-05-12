"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Approach", href: "/approach" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex items-start justify-between px-[4vw] py-[2.1vw]">
        {/* Logo — left aligned, large like original (170px) */}
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

        {/* Desktop Nav — right aligned, vertically centered in header */}
        <nav className="hidden md:flex items-center gap-6 pt-[2vw]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1rem] tracking-[0.05em] text-[#1a1a1a] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1a1a1a] mt-4"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l16 16M6 22L22 6" />
            ) : (
              <path d="M3 7h22M3 14h22M3 21h22" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white border-t border-[#e8e8e8]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1rem] tracking-[0.02em] text-[#1a1a1a] py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
