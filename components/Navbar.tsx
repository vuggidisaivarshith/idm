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
          ? 'bg-darkbg/90 backdrop-blur-lg border-b border-white/10 py-3.5 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <span className="text-white font-extrabold text-base tracking-tighter">IDM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              IDM SMART TECH
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">AI</span>
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">Digital Agency • Hyderabad</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#gmb" className="hover:text-cyan-400 transition-colors">GMB & Local SEO</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Growth Packages</a>
          <a href="#tech" className="hover:text-cyan-400 transition-colors">Tech & Apps</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="tel:+918519837818"
            className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/15 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-1.5"
          >
            <span>📞</span> +91 85198 37818
          </a>
          <a
            href="https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20would%20like%20to%20discuss%20services%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/20 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan-400 transition-colors"
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
        <div className="lg:hidden bg-darkbg/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Services
            </a>
            <a
              href="#gmb"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Google Business Profile & SEO
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Growth Packages (from ₹4,999)
            </a>
            <a
              href="#tech"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Web, Apps & AI Tech
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              About Agency
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Contact Office
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:+918519837818"
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cyan-500/40 text-cyan-400"
              >
                Call: +91 85198 37818
              </a>
              <a
                href="https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20need%20a%20free%20consultation."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500 text-black hover:bg-emerald-400"
              >
                Instant WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
