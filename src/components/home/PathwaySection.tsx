import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { motionMed } from "@/lib/motion";

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
    <section className="section border-t border-foreground/8">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionMed}
          className="max-w-xl mb-8"
        >
          <h2 className="mb-5">The Pathway</h2>
          <p className="text-muted-foreground">
            Three levels. A deliberately demanding progression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...motionMed, delay: 0.08 }}
          className="overflow-x-auto"
        >
          <table className="table-institutional">
            <thead>
              <tr>
                <th className="w-36">Level</th>
                <th>Focus</th>
                <th className="w-40">Study Time</th>
                <th className="w-80">Exam Format</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((level) => (
                <tr key={level.level} className="h-[76px]">
                  <td className="font-serif text-2xl">Level {level.level}</td>
                  <td className="font-medium">{level.title}</td>
                  <td className="font-mono text-xs text-muted-foreground tracking-wider">{level.studyTime}</td>
                  <td className="font-mono text-xs text-muted-foreground tracking-wider">{level.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...motionMed, delay: 0.16 }}
          className="mt-12 pt-8 border-t border-foreground/8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="label-institutional mb-2">{stat.label}</p>
                <p className="text-foreground font-medium">{stat.value}</p>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-8">
            <Link to="/curriculum" className="no-underline">
              View exam blueprints
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}