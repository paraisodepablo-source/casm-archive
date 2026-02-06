import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";

export function ClosingSection() {
  return (
    <section className="section border-t border-foreground/10 relative overflow-hidden">
      <InstitutionalSeal position="center" className="top-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-[24px]">
            Rigor is not a feature. It is the product.
          </h2>
          <Link
            to="/about"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 hover:underline-offset-[6px]"
          >
            About the Institute
          </Link>
        </motion.div>
      </div>
    </section>
  );
}