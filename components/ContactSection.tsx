'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formType, setFormType] = useState<'partner' | 'resident'>('partner');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0E14] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Let&apos;s Build <br />
              <span className="font-bold text-copper">Together.</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Whether you are an institutional equity partner, land owner, prospective resident, or sub-contractor, our team is ready to connect.
            </p>

            <div className="space-y-4 pt-4 text-sm text-white/70">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <p className="font-semibold text-white">Scottsdale Headquarters (Southwest)</p>
                <p className="text-xs text-white/50 mt-1">6720 N Scottsdale Rd, Suite 190, Scottsdale, AZ 85253</p>
                <p className="text-copper mt-1">Direct: (480) 977-3477</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <p className="font-semibold text-white">Vancouver Headquarters (Pacific Northwest)</p>
                <p className="text-xs text-white/50 mt-1">1101 SE Tech Center Dr, Suite 160, Vancouver, WA 98683</p>
                <p className="text-copper mt-1">Direct: (360) 903-0283</p>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            {/* Segmented Gateway Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <button
                type="button"
                onClick={() => setFormType('partner')}
                className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  formType === 'partner'
                    ? 'bg-copper text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Capital & Land Partners
              </button>
              <button
                type="button"
                onClick={() => setFormType('resident')}
                className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  formType === 'resident'
                    ? 'bg-copper text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Resident Leasing Inquiries
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-copper/10 border border-copper/30">
                <span className="text-3xl">✓</span>
                <h4 className="text-xl font-bold text-white mt-2">Inquiry Received</h4>
                <p className="text-sm text-white/70 mt-1">
                  Thank you for reaching out to IDM Companies. An executive representative will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-copper"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-copper"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-copper"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      {formType === 'partner' ? 'Organization / Company' : 'Preferred Market'}
                    </label>
                    <input
                      type="text"
                      placeholder={formType === 'partner' ? 'Firm name' : 'Phoenix, Scottsdale, Vancouver...'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-copper"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                    Message or Project Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      formType === 'partner'
                        ? 'Describe your land parcel, investment parameters, or subcontractor inquiry...'
                        : 'Tell us about your desired move-in date, bedroom count, or questions...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-copper resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-copper text-black font-bold text-sm uppercase tracking-wider hover:bg-[#c29e2e] transition-all shadow-lg shadow-copper/20"
                >
                  Send Inquiry to IDM
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
