'use client';

import React from 'react';

const regions = [
  {
    name: 'Southwest Headquarters',
    city: 'Scottsdale & Phoenix, AZ',
    address: '6720 N Scottsdale Rd, Suite 190, Scottsdale, AZ 85253',
    phone: '(480) 977-3477',
    email: 'info@idmcompanies.com',
    markets: ['Scottsdale', 'North Phoenix', 'Gilbert', 'Mesa', 'Goodyear', 'Peoria'],
    units: '6,200+ Homes Built & Managed',
    description:
      'Our primary development operations center spearheading master-planned multifamily growth, garden-style communities, and resort amenity innovation across the fast-growing Valley of the Sun.',
    highlight: 'Desert Modernist Design',
  },
  {
    name: 'Pacific Northwest Regional Office',
    city: 'Vancouver, WA & Portland Metro',
    address: '1101 SE Tech Center Dr, Suite 160, Vancouver, WA 98683',
    phone: '(360) 903-0283',
    email: 'info@idmcompanies.com',
    markets: ['Vancouver', 'Portland Metro', 'Camas', 'Ridgefield', 'Southwest Washington'],
    units: '4,000+ Homes & Commercial Flex',
    description:
      'Rooted in the Pacific Northwest since 1993, managing sustainable multifamily housing, commercial flex spaces, and urban infill projects aligned with environmental conservation.',
    highlight: 'Cascadia Sustainable Engineering',
  },
];

export default function RegionalPresence() {
  return (
    <section id="regions" className="py-24 bg-[#0D111A] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-semibold uppercase tracking-wider mb-4">
            Geographic Footprint
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Dual Hubs. <span className="font-bold text-copper">Targeted Growth.</span>
          </h2>
          <p className="text-white/60 text-lg mt-3">
            Strategically centered in two of America’s most dynamic migration and business growth corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((reg) => (
            <div
              key={reg.name}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-copper/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-copper font-bold">
                    {reg.highlight}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                    {reg.units}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{reg.name}</h3>
                <p className="text-copper/90 font-medium text-sm mb-4">{reg.city}</p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  {reg.description}
                </p>

                {/* Submarkets Tags */}
                <div className="mb-6">
                  <p className="text-xs uppercase text-white/40 font-semibold tracking-wider mb-2">
                    Key Submarkets
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {reg.markets.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact strip */}
              <div className="pt-6 border-t border-white/10 space-y-2 text-xs sm:text-sm text-white/60">
                <p>📍 <span className="text-white/80">{reg.address}</span></p>
                <p>📞 <a href={`tel:${reg.phone.replace(/[^0-9]/g, '')}`} className="text-copper hover:underline">{reg.phone}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
