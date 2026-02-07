import type { Transition } from "framer-motion";

/**
 * CASM Motion System
 * 
 * Durations: 160ms (fast), 240ms (med), 360ms (slow)
 * Easing: cubic-bezier(0.16, 1, 0.3, 1) — ease-out standard
 * Displacements: 8px max
 * Respects prefers-reduced-motion via CSS
 */

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const motionFast: Transition = {
  duration: 0.16,
  ease,
};

export const motionMed: Transition = {
  duration: 0.24,
  ease,
};

export const motionSlow: Transition = {
  duration: 0.36,
  ease,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: motionSlow,
};

export const fadeInViewUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: motionMed,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true } as const,
  transition: motionMed,
};

export function staggerDelay(index: number, base = 0): Transition {
  return {
    duration: 0.24,
    ease,
    delay: base + index * 0.06,
  };
}