import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DocumentRow } from "@/components/institutional/DocumentRow";
import { motionMed } from "@/lib/motion";

const documents = [
  { id: "CASM-DOC-001", title: "Candidate Handbook", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-002", title: "Exam Blueprints", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-003", title: "Code of Ethics", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-004", title: "Conflict of Interest Policy", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-005", title: "Disciplinary Process", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
];

export function DocumentsSection() {
  return (
    <section className="border-t border-b border-foreground/8" style={{ minHeight: 'calc(100vh - 73px)', display: 'flex', alignItems: 'center' }}>
      <div className="container-wide w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionMed}
          className="mb-8"
        >
          <h2 className="mb-5">Official documents</h2>
          <p className="text-muted-foreground max-w-xl">
            Versioned policies, blueprints, and governance documents. Publicly referenced and change-controlled.
          </p>
        </motion.div>

        <div className="border-t border-foreground/8">
          {documents.map((doc) => (
            <DocumentRow
              key={doc.id}
              id={doc.id}
              title={doc.title}
              version={doc.version}
              status={doc.status}
              effective={doc.effective}
              href={`/documents/${doc.id.toLowerCase()}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...motionMed, delay: 0.08 }}
          className="mt-8"
        >
          <Button asChild variant="outline">
            <Link to="/documents" className="no-underline">
              View all documents
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}