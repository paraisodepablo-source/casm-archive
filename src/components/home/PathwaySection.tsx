import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const levels = [
  {
    level: "I",
    title: "Mechanistic mastery",
    studyTime: "300–350 hours",
    exam: "240 MCQ · 6 hours",
  },
  {
    level: "II",
    title: "Clinical application",
    studyTime: "300–350 hours",
    exam: "120 clinical item sets · 6 hours",
  },
  {
    level: "III",
    title: "Complex integration & strategy",
    studyTime: "~300 hours",
    exam: "Structured cases + essays + ethics · ~5 hours",
  },
];

const stats = [
  { label: "MINIMUM DURATION", value: "2–2.5 years" },
  { label: "EXPECTED COMPLETION", value: "10–15%" },
  { label: "PURPOSE", value: "A strong, discriminating competence standard." },
];

export function PathwaySection() {
  return (
    <section className="section border-t border-foreground/10">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-[24px]"
        >
          <p className="label-institutional mb-[18px]">SECTION-02 · PATHWAY · v1.0</p>
          <h2 className="mb-[18px]">The Pathway</h2>
          <p className="text-muted-foreground">
            Three levels. A deliberately demanding progression.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="table-institutional">
            <thead>
              <tr>
                <th className="w-32">Level</th>
                <th>Focus</th>
                <th className="w-40">Study Time</th>
                <th className="w-80">Exam Format</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((level, index) => (
                <motion.tr
                  key={level.level}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="h-[72px]"
                >
                  <td className="font-serif text-2xl">Level {level.level}</td>
                  <td className="font-medium">{level.title}</td>
                  <td className="font-mono text-xs text-muted-foreground tracking-wide">{level.studyTime}</td>
                  <td className="font-mono text-xs text-muted-foreground tracking-wide">{level.exam}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Stats band - institutional stamp style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-foreground/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="label-institutional">{stat.label}</p>
                <p className="text-foreground font-medium">{stat.value}</p>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-[32px]">
            <Link to="/curriculum" className="no-underline">
              View exam blueprints
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
