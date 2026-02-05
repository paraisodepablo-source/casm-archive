import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocumentRow } from "@/components/institutional/DocumentRow";

const documents = [
  { id: "CASM-DOC-001", title: "Candidate Handbook", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-002", title: "Curriculum & Exam Blueprints", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-003", title: "Code of Ethics", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-004", title: "Conflict of Interest Policy", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-005", title: "Disciplinary Process", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-006", title: "Exam Integrity & Security Policy", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-007", title: "Designation & Trademark Usage Rules", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-008", title: "Evidence Review Methodology", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-009", title: "Scope & Claims Policy", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
  { id: "CASM-DOC-010", title: "Versioning & Update Policy", version: "v1.0", status: "Active" as const, effective: "2024-01-01" },
];

const Documents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="eyebrow mb-4">DOCUMENT LIBRARY</p>
            <h1 className="mb-4">Official Documents</h1>
            <p className="text-muted-foreground max-w-xl">
              All institutional policies, procedures, and standards are versioned and publicly available.
            </p>
          </motion.div>

          {/* Table header */}
          <div className="grid grid-cols-5 gap-6 py-3 border-b border-border font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span>Document ID</span>
            <span className="col-span-2">Title</span>
            <span>Version</span>
            <span>Status</span>
          </div>

          {/* Document rows */}
          <div>
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <DocumentRow
                  id={doc.id}
                  title={doc.title}
                  version={doc.version}
                  status={doc.status}
                  href={`/documents/${doc.id.toLowerCase()}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;