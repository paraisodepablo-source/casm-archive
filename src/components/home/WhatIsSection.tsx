import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const whatIs = [
  "A credential awarded by examination",
  "A public competence standard",
  "A governance-led institution with enforceable ethics",
  "A verified designation with registry status",
];

const whatIsNot = [
  "Not a course",
  "Not coaching",
  "Not commercial biohacking",
  "Not an affiliation to supplements, labs, or therapies",
];

export function WhatIsSection() {
  return (
    <section className="section border-t border-border">
      <div className="container-regular">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* What it is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">What CASM is</h3>
            <ul className="space-y-4">
              {whatIs.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What it is not */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl mb-6">What CASM is not</h3>
            <ul className="space-y-4">
              {whatIsNot.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}