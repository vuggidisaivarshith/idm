'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASINGS } from '@/lib/animations/variants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.48,
        delay,
        ease: EASINGS.aurora,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
