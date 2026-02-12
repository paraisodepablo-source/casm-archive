import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlueprintBar } from "@/components/institutional/BlueprintBar";
import { motionMed, motionFast } from "@/lib/motion";

const blueprintData = {
  "Level I": {
    context: "Mechanistic mastery",
    domains: [
      { label: "Cellular bioenergetics", percentage: 12, range: "10–14%" },
      { label: "Endocrinology", percentage: 10, range: "8–12%" },
      { label: "Nutrition", percentage: 10, range: "8–12%" },
      { label: "Microbiota & gut", percentage: 8, range: "6–10%" },
      { label: "Sleep & chronobiology", percentage: 8, range: "6–10%" },
      { label: "Cardiovascular", percentage: 10, range: "8–12%" },
      { label: "Neurobiology", percentage: 8, range: "6–10%" },
      { label: "Immunity & inflammation", percentage: 10, range: "8–12%" },
      { label: "Geroscience", percentage: 8, range: "6–10%" },
      { label: "Exercise physiology", percentage: 6, range: "4–8%" },
      { label: "Pharmacology", percentage: 6, range: "4–8%" },
      { label: "Evaluation & labs", percentage: 4, range: "2–6%" },
    ],
    focus: [
      "Causal mechanisms across systems",
      "Metabolic pathway integration",
      "Signal transduction fundamentals",
      "Evidence hierarchy application",
    ],
  },
  "Level II": {
    context: "Clinical application",
    domains: [
      { label: "Clinical decision-making", percentage: 15, range: "12–18%" },
      { label: "Multi-system integration", percentage: 12, range: "10–14%" },
      { label: "Lab interpretation", percentage: 12, range: "10–14%" },
      { label: "Therapeutic strategy", percentage: 12, range: "10–14%" },
      { label: "Risk stratification", percentage: 10, range: "8–12%" },
      { label: "Patient communication", percentage: 8, range: "6–10%" },
      { label: "Uncertainty management", percentage: 8, range: "6–10%" },
      { label: "Protocol design", percentage: 8, range: "6–10%" },
      { label: "Contraindications", percentage: 8, range: "6–10%" },
      { label: "Monitoring & adjustment", percentage: 7, range: "5–9%" },
    ],
    focus: [
      "Prioritization under complexity",
      "Interpreting contradictory data",
      "Therapeutic trade-offs & troubleshooting",
      "Uncertainty communication & ethics",
    ],
  },
  "Level III": {
    context: "Integration & strategy",
    domains: [
      { label: "Complex case management", percentage: 20, range: "18–22%" },
      { label: "Long-horizon planning", percentage: 15, range: "12–18%" },
      { label: "Care coordination", percentage: 12, range: "10–14%" },
      { label: "Ethics & boundaries", percentage: 12, range: "10–14%" },
      { label: "Systems thinking", percentage: 12, range: "10–14%" },
      { label: "Metric selection", percentage: 10, range: "8–12%" },
      { label: "Communication mastery", percentage: 10, range: "8–12%" },
      { label: "Resource optimization", percentage: 9, range: "7–11%" },
    ],
    focus: [
      "Multi-condition complexity management",
      "10–30 year healthspan strategy",
      "Stakeholder coordination",
      "Ethical boundary navigation",
    ],
  },
};

type LevelKey = keyof typeof blueprintData;

export function BlueprintPreviewSection() {
  const [activeTab, setActiveTab] = useState<LevelKey>("Level I");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="section border-t border-foreground/8 bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionMed}
          className="mb-8"
        >
          <h2 className="mb-5">Blueprint Preview</h2>
          <p className="text-muted-foreground max-w-xl">
            Indicative weighting by domain. Percent ranges represent blueprint allocation.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-0 mb-2 border-b border-foreground/8">
          {(Object.keys(blueprintData) as LevelKey[]).map((level) => (
            <button
              key={level}
              onClick={() => setActiveTab(level)}
              className={`px-5 py-3 font-mono text-[13px] tracking-[0.14em] transition-colors duration-200 relative ${
                activeTab === level
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {level.toUpperCase()}
              {activeTab === level && (
                <motion.div
                  layoutId="blueprintTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                  transition={motionFast}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Level context */}
        <p className="label-institutional mb-8">
          {activeTab} · {blueprintData[activeTab].context}
        </p>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={motionFast}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Bars */}
            <div className="lg:col-span-8" role="list" aria-label="Domain weightings">
              {blueprintData[activeTab].domains.map((domain, index) => (
                <BlueprintBar
                  key={domain.label}
                  label={domain.label}
                  percentage={domain.percentage}
                  range={domain.range}
                  animate={isInView}
                  delay={index * 0.03}
                />
              ))}
            </div>

            {/* Focus areas */}
            <div className="lg:col-span-4">
              <p className="label-institutional mb-4">
                FOCUS AREAS
              </p>
              <ul className="space-y-3">
                {blueprintData[activeTab].focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-foreground/30 mt-0.5 text-xs select-none">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button asChild variant="outline" className="mt-8">
          <Link to="/curriculum" className="no-underline">
            Curriculum & Blueprints
          </Link>
        </Button>
      </div>
    </section>
  );
}