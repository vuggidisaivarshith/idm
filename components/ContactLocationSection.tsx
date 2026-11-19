'use client';

import React, { useState } from 'react';

export default function ContactLocationSection() {
  const [service, setService] = useState('Starter Growth (₹4,999/mo)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-darkcard/60 text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Agency Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Ready to Accelerate <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Your Revenue?
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Book a free strategy session or request an immediate Google Business Profile audit with our Shamshabad team.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Hyderabad Office Location</p>
                <p className="text-sm font-semibold text-white mt-1">
                  First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess, Shamshabad, Hyderabad, Telangana — 501218
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Direct Phone / WhatsApp</p>
                  <p className="text-lg font-bold text-white mt-0.5">+91 85198 37818</p>
                </div>
                <a
                  href="tel:+918519837818"
                  className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all"
                >
                  Call Now
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Official Email</p>
                  <p className="text-base font-semibold text-white mt-0.5">info@idmsmarttech.com</p>
                </div>
                <a
                  href="mailto:info@idmsmarttech.com"
                  className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/15 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Request a Free Growth Audit</h3>
            <p className="text-sm text-slate-400 mb-8">
              Fill out this quick form or message us directly on WhatsApp for an immediate reply within 30 minutes.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-4xl">🚀</span>
                <h4 className="text-xl font-bold text-white mt-3">Audit Request Received!</h4>
                <p className="text-sm text-slate-300 mt-1">
                  Thank you! An IDM Smart Tech growth specialist will contact you via WhatsApp/Phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                      Your Name / Business Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                    Primary Service Needed *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1424] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Starter Growth (₹4,999/mo)">Starter Growth Package (₹4,999/mo)</option>
                    <option value="Pro Scale Marketing (₹12,999/mo)">Pro Scale Marketing (₹12,999/mo)</option>
                    <option value="GMB Reinstatement / Suspension Fix (₹2,999)">GMB Reinstatement / Suspension Fix (₹2,999)</option>
                    <option value="GMB Video Verification (₹2,999)">GMB Video Verification (₹2,999)</option>
                    <option value="GMB Phone Number Update (₹2,999)">GMB Phone Number Update (₹2,999)</option>
                    <option value="New GMB Creation (₹4,000)">New GMB Creation & Map Ranking (₹4,000)</option>
                    <option value="Web / Mobile App Development">Custom Web / Mobile App Development</option>
                    <option value="AI Automation & CRM Tools">AI Automation & Custom CRM/ERP Tools</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                    Current Challenges / Business Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business, current website or GMB issue, and what targets you want to achieve..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/25"
                  >
                    Submit Request
                  </button>
                  <a
                    href="https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20would%20like%20to%20discuss%20my%20business%20growth."
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>💬</span> WhatsApp Instant
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
