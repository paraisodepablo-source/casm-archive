import { motion } from "framer-motion";
import { SectionNumber } from "@/components/institutional/SectionNumber";
import { motionMed, staggerDelay } from "@/lib/motion";

const pillars = [
  {
    number: 1,
    title: "A living standard.",
    description: "Twelve clinical domains maintained by active practitioners and researchers. Revised as evidence evolves.",
  },
  {
    number: 2,
    title: "Built for a shortage that already exists.",
    description: "Demand is rising. Clinical capacity is not. CASM closes that gap at scale without lowering standards.",
  },
  {
    number: 3,
    title: "Enforceable by design.",
    description: "Proctored examinations. Published blueprints. A public registry. Governance with disciplinary authority. Not a certificate. A credential that can be revoked.",
  },
];

export function PillarsSection() {
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
          <h2>Three pillars of an enforceable credential.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={staggerDelay(index)}
            >
              <SectionNumber number={pillar.number} className="block mb-4" />
              <h3 className="mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
