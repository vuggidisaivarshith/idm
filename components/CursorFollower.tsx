'use client';

import React, { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block fixed pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '32px',
        height: '32px',
        background: 'radial-gradient(circle, rgba(105, 87, 245, 0.22) 0%, rgba(67, 133, 244, 0.08) 50%, transparent 70%)',
      }}
    />
  );
}
