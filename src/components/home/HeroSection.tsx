import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { WaitlistSignup } from "@/components/home/WaitlistSignup";
import { motionSlow } from "@/lib/motion";

export function HeroSection() {
  const [searchParams] = useSearchParams();
  const isNewHeroVersion = searchParams.get("hero") === "v2";

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-20 md:pb-24">
      <InstitutionalSeal position="right" className="top-0" />

      <div className="container-regular relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionSlow}
            className="mb-6"
          >
            {isNewHeroVersion ? (
              <>
                CASM:
                <br />
                The competence standard
                <br />
                for systems medicine.
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
