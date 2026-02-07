import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { motionSlow } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-20 md:pb-24">
      <InstitutionalSeal position="right" className="top-0" />
      
      <div className="container-regular relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionSlow}
          >
            <p className="eyebrow mb-5">
              THE CASM INSTITUTE · v1.0 · GLOBAL STANDARD
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.08 }}
            className="mb-6"
          >
            A public, examination-based standard for advanced systems medicine.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.16 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8"
            style={{ maxWidth: '42ch' }}
          >
            Credentialed through proctored examinations. Governed by published standards, enforceable ethics, and public registry status.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="h-11">
              <Link to="/verify" className="no-underline">
                Verify a credential
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11">
              <Link to="/credential" className="no-underline">
                Explore the credential
              </Link>
            </Button>
            <Link
              to="/verify"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-1"
            >
              Open the registry
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}