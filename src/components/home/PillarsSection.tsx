import { motion } from "framer-motion";
import { SectionNumber } from "@/components/institutional/SectionNumber";

const pillars = [
  {
    number: 1,
    title: "Examination-based",
    description: "Published blueprints. Proctored examinations. Psychometrically designed item banks. A formal competence standard.",
  },
  {
    number: 2,
    title: "Institutional standards",
    description: "Governance, conflict-of-interest controls, and enforceable ethics. Disciplinary process with public policies.",
  },
  {
    number: 3,
    title: "Verifiable signal",
    description: "A public registry with active, lapsed, and revoked status. Verifiable record. No ambiguity.",
  },
];

export function PillarsSection() {
  return (
    <section className="py-[72px] md:py-[84px] border-t border-foreground/10">
      <div className="container-regular">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SectionNumber number={pillar.number} className="block mb-4" />
              <h3 className="text-xl mb-[18px]">{pillar.title}</h3>
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
