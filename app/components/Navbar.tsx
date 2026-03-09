"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/timetable", label: "Timetable" },
  { href: "/partners", label: "Partners" },
  { href: "/promotions", label: "Promotions" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{ backgroundColor: "#1e1b2e" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="The Almost Adults Academy logo"
            width={44}
            height={44}
            className="flex-shrink-0"
          />
          <div className="hidden sm:block">
            <p
              className="text-white font-bold text-sm leading-tight"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              The Almost Adults Academy
            </p>
            <p className="text-xs" style={{ color: "#ffd166" }}>
              Small Humans, Big Plans
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200${!isActive ? " nav-link" : ""}`}
                style={{
                  backgroundColor: isActive ? "#ff6b35" : "transparent",
                  color: isActive ? "#ffffff" : "#d1d5db",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/enroll"
            className="ml-4 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
            style={{ backgroundColor: "#ff6b35" }}
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className="block h-0.5 bg-white transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
            />
            <span
              className="block h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-white transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ backgroundColor: "#1e1b2e" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: isActive ? "#ff6b35" : "rgba(255,255,255,0.05)",
                  color: isActive ? "#ffffff" : "#d1d5db",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/enroll"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ backgroundColor: "#ff6b35" }}
          >
            Enroll Now
          </Link>
        </nav>
      )}
    </header>
  );
}
