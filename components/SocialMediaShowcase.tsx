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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
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
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.03, 1.03, 1.03)`
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
      <div className="absolute inset-0 bg-gradient-to-tr from-primarypurple/15 via-royalblue/10 to-softpink/15 rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* 1. Main Centerpiece: Reel / Video Hook Preview Card */}
      <FloatingCard
        initialRotate="rotate-[-1.5deg]"
        floatDelay="0s"
        className="w-[260px] sm:w-[280px] bg-white rounded-2xl border border-bordercolor shadow-card-hover overflow-hidden z-20 animate-float-gentle"
      >
        {/* Card Header */}
        <div className="px-3.5 py-2.5 bg-white border-b border-bordercolor flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primarypurple via-royalblue to-softpink flex items-center justify-center text-[9px] font-extrabold text-white">
              IDM
            </div>
            <span className="text-xs font-heading font-bold text-textprimary">idmsmarttech</span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sectionsoft text-primarypurple">
            Reels
          </span>
        </div>

        {/* Video Hook Visual Container */}
        <div className="relative h-44 bg-gradient-to-br from-slate-900 via-primarypurple/90 to-royalblue p-4 flex flex-col justify-between text-white overflow-hidden group">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
              9:16 Vertical Creative
            </span>
            <span className="w-2 h-2 rounded-full bg-brandmint animate-ping" />
          </div>

          <div className="z-10 space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-brandmint/90 text-[10px] font-bold text-white uppercase tracking-wider">
              Retention Hook 0:03s
            </span>
            <p className="text-xs font-heading font-bold text-white drop-shadow-sm line-clamp-2">
              High-Converting Visual Hook & Dynamic Subtitles
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Engagement Action Bar */}
        <div className="px-3 py-2 bg-pagebg/70 flex items-center justify-between text-[11px] text-textsecondary border-t border-bordercolor">
          <span className="font-semibold text-textprimary">⚡ Viral Pacing</span>
          <span className="font-semibold text-primarypurple">🎧 Trending Audio</span>
          <span className="font-semibold text-royalblue">📈 High Retention</span>
        </div>
      </FloatingCard>

      {/* 2. Top-Right Floating Card: Campaign Performance Panel */}
      <FloatingCard
        initialRotate="rotate-[3deg]"
        floatDelay="1.2s"
        className="hidden sm:block absolute -top-4 -right-2 sm:right-2 w-52 bg-white/95 backdrop-blur-md rounded-2xl border border-bordercolor shadow-card p-3.5 z-30 animate-float-reverse"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-textsecondary">Meta & Google Ads</span>
          <span className="w-2 h-2 rounded-full bg-brandmint" />
        </div>
        <p className="text-xs font-heading font-bold text-textprimary">Campaign Funnel Active</p>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-[10px] text-textsecondary">
            <span>Optimization:</span>
            <span className="font-semibold text-primarypurple">High Intent Leads</span>
          </div>
          <div className="flex justify-between text-[10px] text-textsecondary">
            <span>A/B Creative Test:</span>
            <span className="font-semibold text-royalblue">Running</span>
          </div>
        </div>
      </FloatingCard>

      {/* 3. Bottom-Left Floating Card: Social Media Post Mockup */}
      <FloatingCard
        initialRotate="rotate-[-4deg]"
        floatDelay="2.5s"
        className="hidden sm:block absolute -bottom-5 -left-3 sm:left-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl border border-bordercolor shadow-card p-3.5 z-30 animate-float-gentle"
      >
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-base">📸</span>
          <div>
            <p className="text-xs font-heading font-bold text-textprimary">Aesthetic Feed Grid</p>
            <p className="text-[10px] text-textsecondary">Multi-Slide Carousels</p>
          </div>
        </div>
        <div className="pt-2 border-t border-bordercolor flex items-center justify-between text-[10px]">
          <span className="text-textsecondary">Brand Color Sync</span>
          <span className="font-bold text-brandmint">Ready to Publish</span>
        </div>
      </FloatingCard>

      {/* 4. Bottom-Right Floating Card: Local SEO & Google Search Visibility */}
      <FloatingCard
        initialRotate="rotate-[2deg]"
        floatDelay="3.8s"
        className="hidden sm:block absolute -bottom-8 right-6 w-52 bg-white/95 backdrop-blur-md rounded-2xl border border-bordercolor shadow-card p-3 z-25 animate-float-reverse"
      >
        <div className="flex items-center space-x-2">
          <span className="text-base">📍</span>
          <div>
            <p className="text-xs font-heading font-bold text-textprimary">Google Maps 3-Pack</p>
            <p className="text-[10px] text-brandcyan font-semibold">Local Search Optimized</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
