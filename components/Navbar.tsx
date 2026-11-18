'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper to-[#A67C1E] flex items-center justify-center shadow-lg shadow-copper/20 group-hover:scale-105 transition-transform">
            <span className="text-black font-extrabold text-xl tracking-tighter">IDM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-white">IDM COMPANIES</span>
            <span className="text-[10px] tracking-widest text-copper/80 uppercase font-medium">Real Estate Development</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white/80">
          <a href="#portfolio" className="hover:text-copper transition-colors">Portfolio</a>
          <a href="#model" className="hover:text-copper transition-colors">Integrated Model</a>
          <a href="#floorplans" className="hover:text-copper transition-colors">Residences</a>
          <a href="#regions" className="hover:text-copper transition-colors">Locations</a>
          <a href="#culture" className="hover:text-copper transition-colors">IDM Cares</a>
          <a href="#contact" className="hover:text-copper transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://liveidm.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-copper/40 text-copper hover:bg-copper hover:text-black transition-all shadow-sm"
          >
            Live IDM Portal
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-copper text-black hover:bg-[#c29e2e] transition-all shadow-md shadow-copper/20 hover:scale-105"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-copper transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              Portfolio
            </a>
            <a
              href="#model"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              Integrated Model
            </a>
            <a
              href="#floorplans"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              Residences & Floor Plans
            </a>
            <a
              href="#regions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              Regional Markets
            </a>
            <a
              href="#culture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              IDM Cares
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-copper"
            >
              Contact Us
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://liveidm.com"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-copper/50 text-copper"
              >
                Resident Portal (Live IDM)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-copper text-black font-bold"
              >
                Partner With Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
