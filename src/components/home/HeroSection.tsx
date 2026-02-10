import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { motionSlow } from "@/lib/motion";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const blueprintBars = [
    { label: "Cellular bioenergetics", percentage: 12, range: "10–14%" },
    { label: "Endocrinology", percentage: 10, range: "8–12%" },
    { label: "Nutrition", percentage: 10, range: "8–12%" },
    { label: "Microbiota & gut", percentage: 8, range: "6–10%" },
    { label: "Sleep & chronobiology", percentage: 8, range: "6–10%" },
  ];

  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-16 md:pb-20">
      <InstitutionalSeal position="right" className="top-0 opacity-30" />
      
      <div className="container-regular relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.08 }}
            className="mb-6 text-[clamp(2.4rem,5.6vw,4.9rem)] leading-[1.05]"
          >
            <span className="block">A public, examination-based credential standard</span>
            <span className="block">for advanced systems medicine.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.16 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[46ch] mb-10"
          >
            Awarded by proctored examination and defined by published competence standards. Governed by enforceable ethics and public registry status.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="h-11">
              <Link to="/curriculum" className="no-underline">
                Explore the standard
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11">
              <Link to="/credential" className="no-underline">
                Explore the credential
              </Link>
            </Button>
            <Link
              to="/verify"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-1 no-underline hover:underline hover:underline-offset-4"
            >
              Open the registry
            </Link>
          </motion.div>
          </div>

          <div className="w-full max-w-xl lg:justify-self-end">
            <div className="rounded-none border border-foreground/10 bg-transparent px-6 py-6 md:px-8 md:py-7">
              <div className="space-y-4">
                {blueprintBars.map((bar, index) => {
                  const isHiddenOnMobile = index > 3;
                  return (
                    <motion.div
                      key={bar.label}
                      className={`flex items-center gap-4 ${isHiddenOnMobile ? "hidden sm:flex" : "flex"}`}
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        delay: shouldReduceMotion ? 0 : 0.08 + index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm text-foreground/80">
                          <span>{bar.label}</span>
                          <span className="text-xs text-muted-foreground">{bar.range}</span>
                        </div>
                        <div className="hero-blueprint-track mt-2">
                          <motion.div
                            className="hero-blueprint-fill"
                            initial={shouldReduceMotion ? false : { width: "0%" }}
                            animate={{ width: `${bar.percentage}%` }}
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.8,
                              delay: shouldReduceMotion ? 0 : 0.12 + index * 0.08,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
