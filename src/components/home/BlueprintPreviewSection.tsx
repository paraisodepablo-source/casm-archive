import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlueprintBar } from "@/components/institutional/BlueprintBar";

const blueprintData = {
  "Level I": {
    domains: [
      { label: "Cellular bioenergetics", percentage: 12, range: "10-14%" },
      { label: "Endocrinology", percentage: 10, range: "8-12%" },
      { label: "Nutrition", percentage: 10, range: "8-12%" },
      { label: "Microbiota & gut", percentage: 8, range: "6-10%" },
      { label: "Sleep & chronobiology", percentage: 8, range: "6-10%" },
      { label: "Cardiovascular", percentage: 10, range: "8-12%" },
      { label: "Neurobiology", percentage: 8, range: "6-10%" },
      { label: "Immunity & inflammation", percentage: 10, range: "8-12%" },
      { label: "Geroscience", percentage: 8, range: "6-10%" },
      { label: "Exercise physiology", percentage: 6, range: "4-8%" },
      { label: "Pharmacology", percentage: 6, range: "4-8%" },
      { label: "Evaluation & labs", percentage: 4, range: "2-6%" },
    ],
    focus: [
      "causal mechanisms across systems",
      "metabolic pathways and integration",
      "signal transduction fundamentals",
      "evidence hierarchy application",
    ],
  },
  "Level II": {
    domains: [
      { label: "Clinical decision-making", percentage: 15, range: "12-18%" },
      { label: "Multi-system integration", percentage: 12, range: "10-14%" },
      { label: "Lab interpretation", percentage: 12, range: "10-14%" },
      { label: "Therapeutic strategy", percentage: 12, range: "10-14%" },
      { label: "Risk stratification", percentage: 10, range: "8-12%" },
      { label: "Patient communication", percentage: 8, range: "6-10%" },
      { label: "Uncertainty management", percentage: 8, range: "6-10%" },
      { label: "Protocol design", percentage: 8, range: "6-10%" },
      { label: "Contraindications", percentage: 8, range: "6-10%" },
      { label: "Monitoring & adjustment", percentage: 7, range: "5-9%" },
    ],
    focus: [
      "prioritization under complexity",
      "interpreting contradictory data",
      "therapeutic trade-offs & troubleshooting",
      "uncertainty communication & ethics",
    ],
  },
  "Level III": {
    domains: [
      { label: "Complex case management", percentage: 20, range: "18-22%" },
      { label: "Long-horizon planning", percentage: 15, range: "12-18%" },
      { label: "Care coordination", percentage: 12, range: "10-14%" },
      { label: "Ethics & boundaries", percentage: 12, range: "10-14%" },
      { label: "Systems thinking", percentage: 12, range: "10-14%" },
      { label: "Metric selection", percentage: 10, range: "8-12%" },
      { label: "Communication mastery", percentage: 10, range: "8-12%" },
      { label: "Resource optimization", percentage: 9, range: "7-11%" },
    ],
    focus: [
      "multi-condition complexity management",
      "10-30 year healthspan strategy",
      "stakeholder coordination",
      "ethical boundary navigation",
    ],
  },
};

type LevelKey = keyof typeof blueprintData;

export function BlueprintPreviewSection() {
  const [activeTab, setActiveTab] = useState<LevelKey>("Level I");

  return (
    <section className="section border-t border-border bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="label-institutional mb-3">SECTION-03 · BLUEPRINTS · v1.0</p>
          <h2 className="mb-4">Blueprint Preview</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-border">
          {(Object.keys(blueprintData) as LevelKey[]).map((level) => (
            <button
              key={level}
              onClick={() => setActiveTab(level)}
              className={`px-6 py-3 font-mono text-sm transition-colors relative ${
                activeTab === level
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {level}
              {activeTab === level && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Level context line */}
        <p className="label-institutional mb-6">
          {activeTab === "Level I" && "Level I · Mechanistic mastery"}
          {activeTab === "Level II" && "Level II · Clinical application"}
          {activeTab === "Level III" && "Level III · Integration & strategy"}
        </p>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Bars */}
            <div className="lg:col-span-8">
              {blueprintData[activeTab].domains.map((domain, index) => (
                <motion.div
                  key={domain.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <BlueprintBar
                    label={domain.label}
                    percentage={domain.percentage}
                    range={domain.range}
                  />
                </motion.div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Focus areas
              </p>
              <ul className="space-y-3">
                {blueprintData[activeTab].focus.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button asChild variant="outline" className="mt-10">
          <Link to="/curriculum" className="no-underline">
            Curriculum & Blueprints
          </Link>
        </Button>
      </div>
    </section>
  );
}