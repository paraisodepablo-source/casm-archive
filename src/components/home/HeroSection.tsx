import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent, useMemo, useRef } from "react";
import { ArrowRightLongIcon } from "@/components/ui/icons/ArrowRightLongIcon";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blurProgress = useTransform(scrollYProgress, [0.25, 0.92], [0, 18]);
  const fadeProgress = useTransform(scrollYProgress, [0.5, 0.95], [1, 0.15]);

  const pointerX = useSpring(0, { stiffness: 40, damping: 22, mass: 0.6 });
  const pointerY = useSpring(0, { stiffness: 40, damping: 22, mass: 0.6 });

  const lighting = useMotionTemplate`
    radial-gradient(130% 100% at ${useTransform(pointerX, [-1, 1], [56, 44])}% ${useTransform(pointerY, [-1, 1], [38, 62])}%,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(244, 241, 235, 0.92) 42%,
      rgba(226, 222, 214, 0.85) 100%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;

    pointerX.set(x);
    pointerY.set(y);
  };

  const heroTransition = useMemo(
    () => ({ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1] }),
    [shouldReduceMotion],
  );

  return (
    <section
      ref={heroRef}
      className="hero-scientific relative isolate overflow-hidden bg-[#f2f0eb] pb-20 pt-20 md:pb-24 md:pt-24"
    >
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0" />

      <div className="container-wide relative z-10">
        <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={heroTransition}
            className="lg:col-span-5"
          >
            <p className="mb-8 border-b border-black/20 pb-5 text-[0.7rem] uppercase tracking-[0.22em] text-[#44423d]">
              The governing body for advanced clinical competence.
            </p>

            <h1 className="max-w-[11ch] font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[0.92] tracking-[-0.03em] text-[#1a1a1a]">
              THE SYSTEMIC STANDARD.
            </h1>

            <p className="mt-8 max-w-[44ch] text-[1.08rem] leading-[1.7] text-[#34332f]">
              A sovereign framework for advanced clinical practice—written, examined, and governed
              with institutional precision.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-black/20 pt-6">
              <Link
                to="/credential"
                className="group inline-flex items-center gap-3 border border-black/35 px-5 py-2.5 text-[0.86rem] uppercase tracking-[0.16em] text-[#1f1f1d] no-underline transition-colors hover:border-black/70"
              >
                Enter the standard
                <ArrowRightLongIcon className="h-3.5 w-[1.6rem] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/documents"
                className="inline-flex items-center text-[0.83rem] uppercase tracking-[0.18em] text-[#5a5752] no-underline transition-colors hover:text-[#1f1f1d]"
              >
                Examine the blueprint →
              </Link>
            </div>
          </motion.div>

          <div className="relative lg:col-span-7 lg:min-h-[73svh]">
            <div className="hero-divider hidden lg:block" aria-hidden />

            <motion.div
              style={{ opacity: fadeProgress, filter: useMotionTemplate`blur(${blurProgress}px)` }}
              className="hero-sticky-stage"
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: "easeOut", delay: 0.2 }}
                onMouseMove={handleMouseMove}
                className="hero-object-wrap"
              >
                <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
                  <filter id="morphogenetic-distortion">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.006 0.025"
                      numOctaves="2"
                      seed="4"
                      result="noise"
                    >
                      <animate
                        attributeName="baseFrequency"
                        dur="26s"
                        repeatCount="indefinite"
                        values="0.006 0.025;0.009 0.03;0.006 0.025"
                      />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" />
                  </filter>
                </svg>

                <motion.div
                  style={{ background: lighting }}
                  className="hero-sculpture"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotateZ: [0, 1.3, -0.8, 0],
                          rotateY: [0, 1.4, -1.2, 0],
                        }
                  }
                  transition={{ duration: 44, ease: "linear", repeat: Infinity }}
                >
                  <div className="hero-sculpture-blur" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
