"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "For Organizations", href: "/#for-organizations" },
  { label: "For Vendors", href: "/#for-vendors" },
  { label: "For Facilities", href: "/#for-facilities" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/zeneats-logo.png"
            alt="ZenEats"
            width={44}
            height={44}
            className="h-11 w-11 rounded-md"
          />
          <span className="text-accent font-bold text-2xl tracking-tight">
            ZenEats
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`text-sm font-normal transition-colors ${
                activeLink === link.label
                  ? "text-accent-light"
                  : "text-white hover:text-accent-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "\u00d7" : "+"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-sm px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMobileOpen(false);
              }}
              className={`block py-3 text-sm font-normal ${
                activeLink === link.label
                  ? "text-accent-light"
                  : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
