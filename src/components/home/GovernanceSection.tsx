import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GovernanceMap } from "@/components/institutional/GovernanceMap";

export function GovernanceSection() {
  return (
    <section className="section border-t border-border bg-card">
      <div className="container-regular">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Governance at a glance</h2>
        </motion.div>

        <GovernanceMap />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
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