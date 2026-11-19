import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let registered = false;

export function registerGSAP() {
  if (typeof window !== 'undefined' && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function syncLenisWithGSAP(lenis: Lenis) {
  if (typeof window === 'undefined') return () => {};

  registerGSAP();

  // Update ScrollTrigger on every Lenis scroll
  const handleScroll = () => {
    ScrollTrigger.update();
  };

  lenis.on('scroll', handleScroll);

  // Single synchronized ticker loop
  const updateTicker = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(updateTicker);
  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.off('scroll', handleScroll);
    gsap.ticker.remove(updateTicker);
  };
}

export { gsap, ScrollTrigger };
