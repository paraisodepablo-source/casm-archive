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
    <section
      className="relative overflow-hidden"
      style={isNewHeroVersion
        ? { height: "calc(100vh - 73px)", display: "grid", placeItems: "center" }
        : { paddingTop: "3rem", paddingBottom: "6rem" }}
    >
      <InstitutionalSeal position="right" className="top-0" />

      <div className="container-regular relative z-10" style={isNewHeroVersion ? { marginTop: "-20px" } : undefined}>
        <div className={isNewHeroVersion ? "max-w-5xl" : "max-w-3xl"}>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionSlow}
            className="mb-12"
            style={isNewHeroVersion ? { fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", lineHeight: 1.0 } : undefined}
          >
            {isNewHeroVersion ? (
              <>
                <span className="block">CASM:</span>
                <span className="block">The competence standard</span>
                <span className="block">for systems medicine.</span>
              </>
            ) : (
              "A public, examination-based standard for advanced systems medicine."
            )}
          </motion.h1>

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
