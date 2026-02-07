import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";
import { motionSlow } from "@/lib/motion";

export function ClosingSection() {
  return (
    <section className="section border-t border-foreground/8 relative overflow-hidden">
      <InstitutionalSeal position="center" className="top-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionSlow}
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            Rigor is not a feature. It is the product.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <span>10–15% expected completion</span>
            <span className="hidden sm:inline text-foreground/12">|</span>
            <span>900–1,000 hours of study</span>
            <span className="hidden sm:inline text-foreground/12">|</span>
            <span>Public registry verification</span>
          </div>
          
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About the Institute
          </Link>
        </motion.div>
      </div>
    </section>
  );
}