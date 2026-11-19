'use client';

import React, { useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export default function AnimatedCard({
  children,
  className = '',
  enableTilt = true,
}: AnimatedCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || prefersReducedMotion || (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered && enableTilt && !prefersReducedMotion
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-4px)`
          : undefined,
      }}
      className={`glossy-card card-3d-tilt transition-all duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
