import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DocumentRow } from "@/components/institutional/DocumentRow";

const documents = [
  { id: "CASM-DOC-001", title: "Candidate Handbook", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-002", title: "Exam Blueprints", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-003", title: "Code of Ethics", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-004", title: "Conflict of Interest Policy", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
  { id: "CASM-DOC-005", title: "Disciplinary Process", version: "v1.0", status: "Active" as const, effective: "2026-02-01" },
];

export function DocumentsSection() {
  return (
    <section className="section border-t border-foreground/10">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[24px]"
        >
          <p className="label-institutional mb-[18px]">DOCUMENT INDEX · CASM-DOC-INDEX · v1.0</p>
          <h2 className="mb-[18px]">Official documents</h2>
          <p className="text-muted-foreground max-w-xl">
            Versioned policies, blueprints, and governance documents. Publicly referenced and change-controlled.
          </p>
        </motion.div>

        <div className="border-t border-foreground/10">
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
          className="mt-[32px]"
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
