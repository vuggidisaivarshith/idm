'use client';

import React, { useState } from 'react';

interface ShowcaseCardProps {
  children: React.ReactNode;
  className?: string;
  initialRotate?: string;
  floatDelay?: string;
}

function FloatingCard({ children, className = '', initialRotate = 'rotate-0', floatDelay = '0s' }: ShowcaseCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.02, 1.02, 1.02)`
          : undefined,
        animationDelay: floatDelay,
      }}
      className={`card-3d-tilt transition-transform duration-300 ease-out will-change-transform ${initialRotate} ${className}`}
    >
      {children}
    </div>
  );
}

export default function SocialMediaShowcase() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto min-h-[460px] flex items-center justify-center p-4">
      {/* Subtle Backdrop Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primarypurple/10 via-royalblue/8 to-softpink/10 rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* 1. Main Centerpiece: Reel / Video Hook Preview Card */}
      <FloatingCard
        initialRotate="rotate-[-1deg]"
        floatDelay="0s"
        className="w-[260px] sm:w-[285px] bg-white rounded-xl border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] overflow-hidden z-20 animate-float-gentle"
      >
        {/* Card Header */}
        <div className="px-3.5 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-[#0F172A] flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs">
              IDM
            </div>
            <span className="text-xs font-bold text-[#0F172A]">idmsmarttech</span>
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-slate-200 bg-slate-50 text-slate-700">
            Reels
          </span>
        </div>

        {/* Video Hook Visual Container */}
        <div className="relative h-44 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#365679] p-4 flex flex-col justify-between text-white overflow-hidden group">
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-[9px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 border border-white/25">
              9:16 Video Creative
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="z-10 space-y-1">
            <span className="inline-block px-2 py-0.5 bg-emerald-500 font-mono text-[9px] font-bold text-white uppercase tracking-wider">
              Retention Hook 0:03s
            </span>
            <p className="text-xs font-serif font-bold text-white drop-shadow-sm line-clamp-2">
              High-Converting Visual Hook &amp; Dynamic Subtitles
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Engagement Action Bar */}
        <div className="px-3 py-2 bg-slate-50/80 flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-200 font-mono">
          <span className="font-bold text-[#0F172A]">⚡ Pacing</span>
          <span className="font-bold text-[#365679]">🎧 Audio</span>
          <span className="font-bold text-emerald-700">📈 Retention</span>
        </div>
      </FloatingCard>

      {/* 2. Top-Right Floating Card: Campaign Performance Panel */}
      <FloatingCard
        initialRotate="rotate-[2.5deg]"
        floatDelay="1.2s"
        className="hidden sm:block absolute -top-4 -right-2 sm:right-2 w-52 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,1)] p-3.5 z-30 animate-float-reverse"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-500">Google &amp; Meta Ads</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <p className="text-xs font-bold text-[#0F172A]">Campaign Funnel Active</p>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-[10px] text-slate-600">
            <span>Intent Target:</span>
            <span className="font-mono font-bold text-[#0F172A]">High ROAS</span>
          </div>
          <div className="flex justify-between text-[10px] text-slate-600">
            <span>A/B Creative:</span>
            <span className="font-mono font-bold text-emerald-700">Optimal</span>
          </div>
        </div>
      </FloatingCard>

      {/* 3. Bottom-Left Floating Card: Social Media Post Mockup */}
      <FloatingCard
        initialRotate="rotate-[-3deg]"
        floatDelay="2.5s"
        className="hidden sm:block absolute -bottom-5 -left-3 sm:left-2 w-56 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,1)] p-3.5 z-30 animate-float-gentle"
      >
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-base">📸</span>
          <div>
            <p className="text-xs font-bold text-[#0F172A]">Aesthetic Feed Grid</p>
            <p className="text-[10px] text-slate-500 font-mono">Multi-Slide Carousels</p>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px]">
          <span className="text-slate-500 font-mono">Brand Sync</span>
          <span className="font-mono font-bold text-emerald-700 uppercase">Ready</span>
        </div>
      </FloatingCard>

      {/* 4. Bottom-Right Floating Card: Local SEO & Google Search Visibility */}
      <FloatingCard
        initialRotate="rotate-[1.5deg]"
        floatDelay="3.8s"
        className="hidden sm:block absolute -bottom-8 right-6 w-52 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,1)] p-3 z-25 animate-float-reverse"
      >
        <div className="flex items-center space-x-2">
          <span className="text-base">📍</span>
          <div>
            <p className="text-xs font-bold text-[#0F172A]">Google Maps 3-Pack</p>
            <p className="text-[10px] text-[#365679] font-mono font-semibold">Local Search Optimized</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
