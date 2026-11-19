'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants } from '@/lib/animations/variants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  staggerDelay?: number;
}

export default function StaggerContainer({
  children,
  className = '',
  delayChildren = 0.05,
  staggerChildren,
  staggerDelay,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const effectiveStagger = staggerDelay ?? staggerChildren ?? 0.08;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren: effectiveStagger,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
