import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DocumentRow } from "@/components/institutional/DocumentRow";

const documents = [
  { id: "CASM-DOC-001", title: "Candidate Handbook", version: "v1.0", status: "Active" as const },
  { id: "CASM-DOC-002", title: "Exam Blueprints", version: "v1.0", status: "Active" as const },
  { id: "CASM-DOC-003", title: "Code of Ethics", version: "v1.0", status: "Active" as const },
  { id: "CASM-DOC-004", title: "Conflict of Interest Policy", version: "v1.0", status: "Active" as const },
  { id: "CASM-DOC-005", title: "Disciplinary Process", version: "v1.0", status: "Active" as const },
];

export function DocumentsSection() {
  return (
    <section className="section border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="mb-4">Official documents</h2>
        </motion.div>

        <div className="border-t border-border">
          {documents.map((doc) => (
            <DocumentRow
              key={doc.id}
              id={doc.id}
              title={doc.title}
              version={doc.version}
              status={doc.status}
              href={`/documents/${doc.id.toLowerCase()}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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