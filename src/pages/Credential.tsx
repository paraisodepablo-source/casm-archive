import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InstitutionalSeal } from "@/components/institutional/InstitutionalSeal";

const Credential = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <InstitutionalSeal position="right" className="top-0" />
          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="eyebrow mb-6">THE CREDENTIAL</p>
              <h1 className="text-6xl md:text-8xl mb-8">CASM</h1>
              <p className="text-xl text-muted-foreground">
                Charter in Advanced Systems Medicine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Definition */}
        <section className="section-sm border-t border-border">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl mb-6">Definition</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                CASM is a multi-level credential designed to identify clinical excellence in systems medicine, preventive care, and healthspan strategy. It evaluates mechanistic understanding, clinical decision-making, and complex integration under uncertainty through rigorous examinations and institutional standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who it is for */}
        <section className="section-sm border-t border-border">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl mb-6">Who it is for</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Primary eligibility (v1.0):</strong> licensed physicians (MD/MBBS/DO) in good standing.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Rationale:</strong> CASM is designed to set a high bar from inception and establish global credibility through the most regulated clinical pathway.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What CASM certifies */}
        <section className="section-sm border-t border-border">
          <div className="container-regular">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl mb-6">What CASM certifies</h2>
              <p className="text-muted-foreground mb-6">CASM certifies advanced competence in:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  systems-level clinical reasoning across multi-factorial chronic complexity
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  prioritization of interventions under constraint and uncertainty
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  disciplined interpretation of labs, imaging, and technology-derived measures
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  longitudinal healthspan planning over 10–30 years
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  therapeutic trade-offs, deprescribing frameworks, and ethical boundaries
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Awarding requirements */}
        <section className="section-sm border-t border-border">
          <div className="container-regular">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl mb-6">Awarding requirements</h2>
              <p className="text-muted-foreground mb-6">To be awarded each level, a candidate must:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  meet eligibility and identity verification requirements
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  pass the relevant proctored examination
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  accept the Code of Ethics and COI policy
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  accept disciplinary jurisdiction and designation rules
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Designation rules */}
        <section className="section-sm border-t border-border">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="callout-policy">
                <h3 className="text-xl mb-4">Designation rules</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>"CASM" may be used only while listed as Active in the Registry</li>
                  <li>Misuse may result in status change, suspension, or revocation</li>
                  <li>Registry status is the source of truth</li>
                </ul>
              </div>

              <Button asChild variant="outline" className="mt-8">
                <Link to="/verify" className="no-underline">
                  Verify a Credential
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Credential;