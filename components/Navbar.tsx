'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import { SERVICES_LIST } from '@/data/services';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home', isExact: true },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', isDropdown: true },
    { href: '/pricing', label: 'Pricing' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/industries', label: 'Industries' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const checkIsActive = (item: typeof navItems[0]) => {
    if (item.isExact) return pathname === '/';
    if (item.isDropdown) return pathname.startsWith('/services');
    if (item.href === '/blog') return pathname.startsWith('/blog');
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pagebg/90 backdrop-blur-xl py-3 border-b border-bordercolor/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : 'bg-pagebg/75 backdrop-blur-md py-4 sm:py-5 border-b border-bordercolor/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group" aria-label="IDM Smart Tech Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primarypurple via-royalblue to-softpink flex items-center justify-center shadow-md shadow-primarypurple/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-heading font-extrabold text-base tracking-tighter">IDM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-heading font-extrabold tracking-tight text-textprimary">
              IDM SMART TECH
            </span>
            <span className="text-[10px] tracking-wider text-textsecondary uppercase font-medium">
              Creative Marketing & Technology • Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Glossy Pill-Shaped Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(16,28,50,0.06),0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-bordercolor/70 relative"
        >
          {navItems.map((item) => {
            const isActive = checkIsActive(item);

            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    aria-expanded={servicesDropdownOpen}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 flex items-center gap-1.5 group outline-none ${
                      isActive ? 'text-white' : 'text-textsecondary hover:text-textprimary'
                    }`}
                  >
                    {/* Active Sliding Glossy Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="glossyNavIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan shadow-[0_2px_10px_rgba(105,87,245,0.32),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Inactive Hover Shine */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-full bg-sectionsoft/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}

                    <span className="relative z-10 font-medium">Services</span>
                    <span
                      className={`relative z-10 text-[9px] transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown Menu Panel */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-[0_12px_36px_rgba(16,28,50,0.12),inset_0_1px_1px_rgba(255,255,255,1)] grid grid-cols-2 gap-2 z-50 ring-1 ring-bordercolor/80"
                      >
                        <div className="col-span-2 pb-2 mb-1 border-b border-bordercolor/70 flex items-center justify-between text-[11px] font-bold text-textsecondary uppercase tracking-wider">
                          <span>Our Capabilities</span>
                          <Link
                            href="/services"
                            className="text-primarypurple hover:underline lowercase font-normal"
                          >
                            view all services &rarr;
                          </Link>
                        </div>
                        {SERVICES_LIST.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="p-2.5 rounded-xl hover:bg-sectionsoft/70 transition-all duration-200 flex items-start space-x-2.5 group hover:translate-x-0.5"
                          >
                            <span className="text-lg p-1.5 rounded-lg bg-pagebg group-hover:bg-white border border-bordercolor/60 shrink-0 transition-colors">
                              {svc.icon}
                            </span>
                            <div>
                              <p className="text-xs font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors">
                                {svc.shortTitle}
                              </p>
                              <p className="text-[10px] text-textsecondary line-clamp-1">
                                {svc.category}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 group outline-none ${
                  isActive ? 'text-white' : 'text-textsecondary hover:text-textprimary'
                }`}
              >
                {/* Active Sliding Glossy Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="glossyNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan shadow-[0_2px_10px_rgba(105,87,245,0.32),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Inactive Hover Shine */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full bg-sectionsoft/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}

                <span className="relative z-10 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide border border-bordercolor bg-white text-textprimary hover:border-primarypurple hover:text-primarypurple transition-all flex items-center gap-1.5 shadow-2xs"
            aria-label="Call IDM Smart Tech"
          >
            <span aria-hidden="true">📞</span> {COMPANY_INFO.phone}
          </a>
          <Link
            href="/contact"
            className="btn-aurora-primary py-2 px-4 text-xs font-heading"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-white border border-bordercolor text-textprimary hover:text-primarypurple transition-colors shadow-2xs"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed inset-0 top-[65px] bg-white/95 backdrop-blur-2xl z-40 p-6 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase font-bold text-textsecondary tracking-widest">
                Navigation
              </p>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = checkIsActive(item);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base font-heading font-bold py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm'
                          : 'text-textprimary hover:bg-pagebg hover:translate-x-1'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-xs font-normal">Active</span>}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-bordercolor">
                <p className="text-xs uppercase font-bold text-textsecondary tracking-widest mb-3">
                  Core Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES_LIST.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="p-2.5 rounded-xl bg-pagebg border border-bordercolor text-xs font-semibold text-textprimary hover:border-primarypurple hover:bg-white transition-all duration-200"
                    >
                      <span className="mr-1">{svc.icon}</span> {svc.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-bordercolor space-y-3 mt-6">
              <Link
                href="/contact"
                className="w-full btn-aurora-primary py-3 block text-center"
              >
                Get Your Growth Strategy
              </Link>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to schedule a marketing consultation.')}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center bg-brandmint/10 text-brandmint border border-brandmint/30 hover:bg-brandmint hover:text-white transition-all duration-200"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
