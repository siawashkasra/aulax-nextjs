"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Hamburger menu icon
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);

// Close icon
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 001.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] h-[72px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[104px] py-4">
      <div className="flex items-center justify-between h-10 max-w-[1280px] mx-auto">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl leading-8 text-[#1e293b]"
          >
            Aulax
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center pl-8">
            <Link
              href="#"
              className="px-3 py-2 text-sm font-medium leading-5 text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="ml-2 px-3 py-2 text-sm font-medium leading-5 text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              About
            </Link>
            <Link
              href="#why-aulax"
              className="ml-2 px-3 py-2 text-sm font-medium leading-5 text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Why Aulax?
            </Link>
            <Link
              href="#partner"
              className="ml-2 px-3 py-2 text-sm font-medium leading-5 text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="#partners"
              className="ml-2 px-3 py-2 text-sm font-medium leading-5 text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Our Partners
            </Link>
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="#download"
          className="hidden lg:block bg-[#006a4e] text-white px-6 py-2.5 rounded-full text-sm font-medium leading-5 hover:bg-[#005a42] transition-colors"
        >
          Download Aulax
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#374151] hover:bg-[rgba(0,0,0,0.05)] rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg border-t border-[#e5e7eb] z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 max-h-[calc(100vh-72px)] overflow-y-auto">
          <Link
            href="#"
            className="py-3 text-base font-medium text-[#374151] hover:text-[#006a4e] transition-colors min-h-[44px] flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="py-3 text-base font-medium text-[#374151] hover:text-[#006a4e] transition-colors min-h-[44px] flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#why-aulax"
            className="py-3 text-base font-medium text-[#374151] hover:text-[#006a4e] transition-colors min-h-[44px] flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Aulax?
          </Link>
          <Link
            href="#partner"
            className="py-3 text-base font-medium text-[#374151] hover:text-[#006a4e] transition-colors min-h-[44px] flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Partner
          </Link>
          <Link
            href="#partners"
            className="py-3 text-base font-medium text-[#374151] hover:text-[#006a4e] transition-colors min-h-[44px] flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Partners
          </Link>
          <Link
            href="#download"
            className="mt-4 bg-[#006a4e] text-white px-6 py-3 rounded-full text-base font-medium text-center hover:bg-[#005a42] transition-colors min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Aulax
          </Link>
        </nav>
      </div>
    </header>
  );
}
