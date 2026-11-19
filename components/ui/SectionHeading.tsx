'use client';

import React from 'react';
import Badge from './Badge';
import { motion } from 'framer-motion';
import { EASINGS } from '@/lib/animations/variants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
        {badge && (
          <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
            <Badge text={badge} />
          </div>
        )}
        <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-tight">
          {title}{' '}
          {highlightText && (
            <span className="font-extrabold text-gradient-aurora block sm:inline">
              {highlightText}
            </span>
          )}
        </h2>
        {description && (
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`mb-14 will-change-transform ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASINGS.aurora } },
          }}
          className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}
        >
          <Badge text={badge} />
        </motion.div>
      )}

      {/* Line & Blur Reveal for Section Title */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, delay: 0.08, ease: EASINGS.aurora },
          },
        }}
        className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-tight"
      >
        {title}{' '}
        {highlightText && (
          <motion.span
            variants={{
              hidden: { opacity: 0, filter: 'blur(6px)' },
              visible: {
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.6, delay: 0.2, ease: EASINGS.aurora },
              },
            }}
            className="font-extrabold text-gradient-aurora block sm:inline"
          >
            {highlightText}
          </motion.span>
        )}
      </motion.h2>

      {/* Fade-Up for Description */}
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.48, delay: 0.24, ease: EASINGS.aurora },
            },
          }}
          className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
