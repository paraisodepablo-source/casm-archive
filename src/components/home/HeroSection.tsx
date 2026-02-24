import { motion } from "framer-motion";
import React from "react";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { WaitlistSignup } from "@/components/home/WaitlistSignup";

const easeTitle: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const h1Style: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 500,
  fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
  lineHeight: 1.0,
  letterSpacing: "-0.015em",
  margin: 0,
  whiteSpace: "nowrap",
};

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 73px)", display: "grid", placeItems: "center" }}
    >
      <InstitutionalSeal position="right" className="top-0" />

      <div className="container-regular relative z-10" style={{ marginTop: "-20px" }}>
        <div className="max-w-5xl">
          <div role="heading" aria-level={1} className="mb-12">
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

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeTitle, delay: 2.6 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-6"
            style={{ maxWidth: "42ch" }}
          >
            A three-level certification for medical professionals. Credentialed through proctored examination. Governed by published standards and public registry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeTitle, delay: 2.8 }}
            className="mt-6"
          >
            <WaitlistSignup source="hero_waitlist" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
