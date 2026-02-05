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
    exam: "structured cases + essays + ethics · ~5 hours",
  },
];

export function PathwaySection() {
  return (
    <section className="section border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >
          <p className="label-institutional mb-3">SECTION-02 · PATHWAY · v1.0</p>
          <h2 className="mb-4">The Pathway</h2>
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
                <th className="w-24">Level</th>
                <th>Focus</th>
                <th className="w-40">Study Time</th>
                <th className="w-72">Exam Format</th>
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
                >
                  <td className="font-serif text-xl">Level {level.level}</td>
                  <td className="font-medium">{level.title}</td>
                  <td className="font-mono text-sm text-muted-foreground">{level.studyTime}</td>
                  <td className="font-mono text-sm text-muted-foreground">{level.exam}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-sm text-muted-foreground">
            <p>Minimum expected duration: <span className="text-foreground">2–2.5 years</span></p>
            <p>Expected completion rate: <span className="text-foreground">10–15%</span></p>
            <p>Purpose: <span className="text-foreground">a strong, discriminating competence standard.</span></p>
          </div>

          <Button asChild variant="outline" className="mt-8">
            <Link to="/curriculum" className="no-underline">
              View Blueprints
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}