import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { WaitlistSignup } from "@/components/home/WaitlistSignup";
import { motionSlow } from "@/lib/motion";

export function HeroSection() {
  const [searchParams] = useSearchParams();
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.08 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-6"
            style={{ maxWidth: "42ch" }}
          >
            {isNewHeroVersion
              ? "A three-level certification for medical professionals. Credentialed through proctored examination. Governed by published standards and public registry."
              : "Credentialed through proctored examinations. Governed by published standards, enforceable ethics, and public registry status."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.16 }}
            className="mt-6"
          >
            <WaitlistSignup source="hero_waitlist" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
