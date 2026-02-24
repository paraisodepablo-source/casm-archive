import { motion } from "framer-motion";
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { WaitlistSignup } from "@/components/home/WaitlistSignup";
import { motionSlow } from "@/lib/motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeTitle: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Estilos del h1 replicados para usar en motion.p independientes
const h1Style: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 500,
  fontSize: "clamp(2.625rem, 6.5vw, 5.5rem)",
  lineHeight: 0.98,
  letterSpacing: "-0.015em",
  margin: 0,
  whiteSpace: "nowrap",
};

export function HeroSection() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const isNewHeroVersion = searchParams.get("hero") === "v2";

  return (
    <section key={location.key} className="relative overflow-hidden pt-24 md:pt-28 pb-20 md:pb-24 min-h-[calc(100vh-4rem)]">
      <InstitutionalSeal position="right" className="top-0" />

      <div className="container-regular relative z-10">
        <div className="max-w-3xl">

          {isNewHeroVersion ? (
            <div role="heading" aria-level={1} className="mb-6">
              <motion.p
                style={h1Style}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: easeTitle, delay: 0.1 }}
              >
                CASM:
              </motion.p>
              <motion.p
                style={h1Style}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: easeTitle, delay: 0.9 }}
              >
                The competence standard
              </motion.p>
              <motion.p
                style={h1Style}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: easeTitle, delay: 1.7 }}
              >
                for systems medicine.
              </motion.p>
            </div>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={motionSlow}
              className="mb-6"
            >
              A public, examination-based standard for advanced systems medicine.
            </motion.h1>
          )}

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeTitle, delay: isNewHeroVersion ? 2.6 : 0.08 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-6"
            style={{ maxWidth: "42ch" }}
          >
            {isNewHeroVersion
              ? "A three-level certification for medical professionals. Credentialed through proctored examination. Governed by published standards and public registry."
              : "Credentialed through proctored examinations. Governed by published standards, enforceable ethics, and public registry status."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeTitle, delay: isNewHeroVersion ? 2.8 : 0.16 }}
            className="mt-6"
          >
            <WaitlistSignup source="hero_waitlist" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
