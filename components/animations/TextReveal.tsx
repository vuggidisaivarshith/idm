'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  EASINGS,
  wordRevealContainerVariants,
  wordRevealItemVariants,
  blurToFocusVariants,
} from '@/lib/animations/variants';
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

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function WordReveal({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'font-extrabold text-gradient-aurora',
}: WordRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <motion.span
      variants={wordRevealContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block will-change-transform ${className}`}
    >
      {words.map((word, idx) => {
        const isHighlight = highlightWords.some(
          (h) => word.toLowerCase().includes(h.toLowerCase())
        );

        return (
          <motion.span
            key={idx}
            variants={wordRevealItemVariants}
            className={`inline-block mr-[0.28em] will-change-transform ${
              isHighlight ? highlightClassName : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BlurReveal({ children, className = '', delay = 0 }: BlurRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={blurToFocusVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      custom={delay}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
