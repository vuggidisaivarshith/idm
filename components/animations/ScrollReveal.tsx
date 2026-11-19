'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  fadeUpVariants,
  fadeDownVariants,
  fadeLeftVariants,
  fadeRightVariants,
  fadeInVariants,
  scaleInVariants,
} from '@/lib/animations/variants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export type ScrollRevealVariant =
  | 'fadeUp'
  | 'fade-up'
  | 'fadeDown'
  | 'fade-down'
  | 'fadeLeft'
  | 'fade-left'
  | 'fadeRight'
  | 'fade-right'
  | 'fadeIn'
  | 'fade-in'
  | 'scaleIn'
  | 'scale'
  | 'zoom-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: ScrollRevealVariant;
  delay?: number;
  className?: string;
  margin?: string;
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  margin = '-40px',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  let selectedVariant: Variants = fadeUpVariants;
  if (variant === 'fadeIn' || variant === 'fade-in') selectedVariant = fadeInVariants;
  else if (variant === 'scaleIn' || variant === 'scale' || variant === 'zoom-in') selectedVariant = scaleInVariants;
  else if (variant === 'fadeDown' || variant === 'fade-down') selectedVariant = fadeDownVariants;
  else if (variant === 'fadeLeft' || variant === 'fade-left') selectedVariant = fadeLeftVariants;
  else if (variant === 'fadeRight' || variant === 'fade-right') selectedVariant = fadeRightVariants;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      custom={delay}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
