import { motion } from "framer-motion";

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
    <section className="section border-t border-foreground/10">
      <div className="container-regular">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
          {/* What it is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:pr-12 md:border-r border-foreground/15"
          >
            <p className="label-institutional mb-[18px]">INCLUDED</p>
            <h3 className="text-2xl mb-[24px]">What CASM is</h3>
            <ul className="space-y-4">
              {whatIs.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-foreground select-none">–</span>
                  <span>{item}</span>
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
            className="md:pl-12"
          >
            <p className="label-institutional mb-[18px]">EXCLUDED</p>
            <h3 className="text-2xl mb-[24px]">What CASM is not</h3>
            <ul className="space-y-4">
              {whatIsNot.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-foreground select-none">–</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}