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
    { href: '/services', label: 'Services', isDropdown: true },
    { href: '/about', label: 'Why IDM' },
    { href: '/portfolio', label: 'Work' },
    { href: '/pricing', label: 'Packages' },
    { href: '/industries', label: 'Industries' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const checkIsActive = (item: typeof navItems[0]) => {
    if (item.isExact) return pathname === '/';
    if (item.isDropdown) return pathname.startsWith('/services');
    if (item.href === '/about') return pathname === '/about';
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  const whatsappNavUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to enquire about your digital marketing and technology services.'
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-slate-200 shadow-xs'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-6 px-6 md:px-10">
        {/* Brand Logo with Reference Diamond Mark */}
        <Link href="/" className="inline-flex items-center gap-3 group" aria-label="IDM Smart Tech Home">
          <div className="h-4 w-4 bg-[#0F172A] rotate-45 transition-transform duration-300 group-hover:scale-110 shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[19px] font-bold tracking-[-0.015em] text-[#0F172A]">
              IDM Smart Tech
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate-500 font-semibold -mt-0.5">
              Marketing &amp; Technology · Hyd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13.5px] font-medium text-[#1E293B]">
          {navItems.map((item) => {
            const isActive = checkIsActive(item);

            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    aria-expanded={servicesDropdownOpen}
                    className={`relative py-1.5 transition-colors duration-200 flex items-center gap-1.5 group outline-none font-medium ${
                      isActive ? 'text-[#0F172A] font-bold' : 'hover:text-[#0F172A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-[9px] transition-transform duration-200 text-slate-400 group-hover:text-[#0F172A] ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F172A]" />
                    )}
                  </button>

                  {/* Dropdown Menu Panel */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] p-4 bg-white/95 backdrop-blur-xl border-2 border-slate-200 shadow-lg grid grid-cols-2 gap-2 z-50"
                      >
                        <div className="col-span-2 pb-2 mb-1 border-b border-slate-200 flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-600 font-bold">
                            Enterprise Capabilities
                          </span>
                          <Link
                            href="/services"
                            className="font-mono text-[10px] tracking-wider text-[#365679] hover:underline uppercase font-bold"
                          >
                            All Services →
                          </Link>
                        </div>
                        {SERVICES_LIST.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="p-2.5 border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-150 flex items-start space-x-2.5 group"
                          >
                            <span className="text-base p-1.5 bg-slate-100 group-hover:bg-white border border-slate-200 shrink-0 transition-colors">
                              {svc.icon}
                            </span>
                            <div>
                              <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#365679] transition-colors">
                                {svc.shortTitle}
                              </p>
                              <p className="text-[10px] text-slate-500 line-clamp-1">
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
                className={`relative py-1.5 transition-colors duration-200 font-medium ${
                  isActive ? 'text-[#0F172A] font-bold' : 'hover:text-[#0F172A]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F172A]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Buttons (Reference Precision CTAs) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappNavUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 border-2 border-emerald-600 bg-emerald-50 px-3.5 py-2 font-mono text-[10.5px] tracking-[0.14em] uppercase text-emerald-950 font-bold hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
            aria-label="Direct WhatsApp to IDM"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            WHATSAPP
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0F172A] px-5 py-2.5 font-mono text-[10.5px] tracking-[0.14em] uppercase text-white font-bold hover:bg-[#1E293B] transition-colors shadow-xs"
          >
            START A PROJECT
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-white border-2 border-slate-300 text-[#0F172A] hover:bg-slate-50 transition-colors shadow-xs"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden fixed inset-0 top-[80px] bg-white z-40 p-6 overflow-y-auto flex flex-col justify-between border-t border-slate-200"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-5 bg-[#0F172A]" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 font-bold">
                  Navigation
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = checkIsActive(item);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-serif py-2.5 px-3 border-b border-slate-100 transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-[#0F172A] font-bold bg-slate-50'
                          : 'text-slate-700 hover:text-[#0F172A]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 font-bold">
                          Active
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-slate-200">
                <p className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-[0.16em] mb-3">
                  Core Capabilities
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES_LIST.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="p-2.5 border border-slate-200 bg-slate-50/50 text-xs font-semibold text-[#0F172A] hover:bg-slate-100 transition-all"
                    >
                      <span className="mr-1">{svc.icon}</span> {svc.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 space-y-2.5 mt-6">
              <Link
                href="/contact"
                className="w-full btn-primary-ink py-3.5 block text-center"
              >
                Start A Project
              </Link>
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full btn-emerald-cta py-3.5 block text-center"
              >
                Direct WhatsApp (+91 85198 37818)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
