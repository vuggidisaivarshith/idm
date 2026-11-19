'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 450,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
