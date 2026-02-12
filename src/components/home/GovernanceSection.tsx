import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GovernanceMap } from "@/components/institutional/GovernanceMap";
import { motionMed } from "@/lib/motion";

export function GovernanceSection() {
  return (
    <section className="section border-t border-foreground/8 bg-card">
      <div className="container-regular">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionMed}
          className="text-center mb-8"
        >
          <h2>Governance at a glance</h2>
        </motion.div>

        <GovernanceMap />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...motionMed, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline">
            <Link to="/governance" className="no-underline">
              Governance & Policies
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}