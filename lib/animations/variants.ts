import { Variants } from 'framer-motion';

// Consistent cubic-bezier easing curves across IDM Smart Tech
export const EASINGS = {
  aurora: [0.16, 1, 0.3, 1] as const, // Fast start, smooth long deceleration
  gentle: [0.22, 1, 0.36, 1] as const, // Spring-like natural settling
  bounce: [0.34, 1.56, 0.64, 1] as const, // Playful snap
  linear: [0, 0, 1, 1] as const,
};

// Page Transition Variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.995,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: EASINGS.gentle,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.995,
    transition: {
      duration: 0.22,
      ease: EASINGS.gentle,
    },
  },
};

// Viewport Scroll Reveal: Fade Up
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Viewport Scroll Reveal: Fade Down
export const fadeDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Viewport Scroll Reveal: Fade Left
export const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Viewport Scroll Reveal: Fade Right
export const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Viewport Scroll Reveal: Fade In
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Viewport Scroll Reveal: Scale In
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Staggered Container for Grid Cards
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Modal and Lightbox Preview Variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: EASINGS.aurora,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: {
      duration: 0.2,
      ease: EASINGS.aurora,
    },
  },
};

// Blur to focus reveal for headings and highlights
export const blurToFocusVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 12,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.55,
      delay: customDelay,
      ease: EASINGS.aurora,
    },
  }),
};

// Line mask reveal for major headings
export const lineRevealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const lineRevealItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.52,
      ease: EASINGS.aurora,
    },
  },
};

// Word by word reveal for Hero headline
export const wordRevealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const wordRevealItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: EASINGS.aurora,
    },
  },
};

// Image mask clip path reveal
export const imageMaskVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASINGS.aurora,
    },
  },
};

// Reduced motion fallbacks
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.01 } },
};
