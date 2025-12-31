"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] h-[72px] px-[104px] py-[16px]">
      <div className="flex items-center justify-between h-[40px]">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-[24px] leading-[32px] text-[#1e293b]"
          >
            Aulax
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center pl-[32px]">
            <Link
              href="#"
              className="px-[12px] py-[8px] text-[14px] font-medium leading-[20px] text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="ml-[8px] px-[12px] py-[8px] text-[14px] font-medium leading-[20px] text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              About
            </Link>
            <Link
              href="#why-aulax"
              className="ml-[8px] px-[12px] py-[8px] text-[14px] font-medium leading-[20px] text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Why Aulax?
            </Link>
            <Link
              href="#partner"
              className="ml-[8px] px-[12px] py-[8px] text-[14px] font-medium leading-[20px] text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="#partners"
              className="ml-[8px] px-[12px] py-[8px] text-[14px] font-medium leading-[20px] text-[#374151] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            >
              Our Partners
            </Link>
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="#download"
          className="hidden lg:block bg-[#006a4e] text-white px-[24px] py-[10px] rounded-full text-[14px] font-medium leading-[20px] hover:bg-[#005a42] transition-colors"
        >
          Download Aulax
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-[8px] text-[#374151] hover:bg-[rgba(0,0,0,0.05)] rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white shadow-lg border-t border-[#e5e7eb]">
          <nav className="flex flex-col p-[24px]">
            <Link
              href="#"
              className="py-[12px] text-[16px] font-medium text-[#374151] hover:text-[#006a4e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="py-[12px] text-[16px] font-medium text-[#374151] hover:text-[#006a4e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#why-aulax"
              className="py-[12px] text-[16px] font-medium text-[#374151] hover:text-[#006a4e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Aulax?
            </Link>
            <Link
              href="#partner"
              className="py-[12px] text-[16px] font-medium text-[#374151] hover:text-[#006a4e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Partner
            </Link>
            <Link
              href="#partners"
              className="py-[12px] text-[16px] font-medium text-[#374151] hover:text-[#006a4e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Partners
            </Link>
            <Link
              href="#download"
              className="mt-[16px] bg-[#006a4e] text-white px-[24px] py-[12px] rounded-full text-[16px] font-medium text-center hover:bg-[#005a42] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Aulax
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
