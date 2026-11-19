'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, reducedMotionVariants } from '@/lib/animations/variants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? reducedMotionVariants : pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex-1 flex flex-col will-change-transform"
    >
      {children}
    </motion.div>
  );
}
