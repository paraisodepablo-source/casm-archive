import { motion } from "framer-motion";
import { motionMed } from "@/lib/motion";

const whatIs = [
  "A credential awarded by proctored examination",
  "A published competence standard",
  "Governance-led, with enforceable ethics",
  "A verified designation with public registry status",
];

const whatIsNot = [
  "A course or prep program",
  "Coaching",
  "Commercial biohacking",
  "Affiliation to supplements, labs, or therapies",
];

export function WhatIsSection() {
  return (
    <section className="section border-t border-foreground/8">
      <div className="container-regular">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionMed}
          className="mb-12"
        >
          <p className="eyebrow mb-5">SCOPE</p>
          <h2>What CASM is. What it is not.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...motionMed, delay: 0.06 }}
            className="md:pr-12 md:border-r border-foreground/12"
          >
            <p className="label-institutional mb-4">INCLUDED</p>
            <h3 className="mb-6">What CASM is</h3>
            <ul className="space-y-4">
              {whatIs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-foreground select-none">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...motionMed, delay: 0.12 }}
            className="md:pl-12"
          >
            <p className="label-institutional mb-4">EXCLUDED</p>
            <h3 className="mb-6">What CASM is not</h3>
            <ul className="space-y-4">
              {whatIsNot.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-foreground select-none">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}