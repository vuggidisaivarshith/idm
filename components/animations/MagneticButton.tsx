'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Max pixel offset (default 8px)
  maxDistance?: number;
}

export default function MagneticButton({
  children,
  className = '',
  strength,
  maxDistance,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const effectiveStrength = maxDistance ?? strength ?? 8;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on touch / reduced motion
    if (prefersReducedMotion || (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)) {
      return;
    }

    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = ((clientX - centerX) / (width / 2)) * effectiveStrength;
    const y = ((clientY - centerY) / (height / 2)) * effectiveStrength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (prefersReducedMotion) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.2 }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
