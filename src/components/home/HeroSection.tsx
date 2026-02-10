import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MouseEvent, useMemo, useRef, useState } from "react";
import { ArrowRightLongIcon } from "@/components/ui/icons/ArrowRightLongIcon";
import { HeroSculptureCanvas } from "@/components/home/HeroSculptureCanvas";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blurProgress = useTransform(scrollYProgress, [0.25, 0.92], [0, 18]);
  const fadeProgress = useTransform(scrollYProgress, [0.5, 0.95], [1, 0.15]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;

    setPointer({ x, y });
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
                <div className="hero-sculpture-canvas" role="presentation" aria-hidden>
                  <HeroSculptureCanvas
                    pointer={pointer}
                    reduceMotion={Boolean(shouldReduceMotion)}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
