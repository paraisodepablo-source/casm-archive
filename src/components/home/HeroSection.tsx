import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { VerifySearch } from "@/components/institutional/VerifySearch";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Watermark seal */}
      <InstitutionalSeal position="right" className="top-0" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow - consistent pattern */}
              <p className="eyebrow mb-[18px]">
                THE CASM INSTITUTE · v1.0 · GLOBAL STANDARD
              </p>
              
              {/* Headline - precise line breaks */}
              <h1 className="mb-[24px] max-w-2xl">
                A global, examination-based credential in advanced systems medicine and healthspan.
              </h1>
              
              {/* Subcopy - institutional language */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-[32px]">
                CASM is awarded through proctored examinations and governed by published standards, enforceable ethics, and public registry status. Designed to formalize clinical competence in complex preventive and integrative care.
              </p>
              
              {/* CTAs - consistent heights, 16-18px gap */}
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="border border-foreground bg-foreground text-background hover:bg-foreground/90 h-11">
                  <Link to="/credential" className="no-underline">
                    Explore the Credential
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11">
                  <Link to="/verify" className="no-underline">
                    Open the Registry
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Verify panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <VerifySearch />
          </motion.div>
        </div>
      </div>
    </section>
  );
}