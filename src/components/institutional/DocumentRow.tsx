import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DocumentRowProps {
  id: string;
  title: string;
  version: string;
  status: "Active" | "Draft" | "Archived";
  href?: string;
}

export function DocumentRow({ id, title, version, status, href = "#" }: DocumentRowProps) {
  const statusClass = status === "Active" 
    ? "text-success" 
    : status === "Draft" 
      ? "text-warning" 
      : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="document-row group"
    >
      <span className="font-mono text-xs text-muted-foreground">{id}</span>
      <span className="font-medium">{title}</span>
      <span className="font-mono text-xs text-muted-foreground">{version}</span>
      <span className={`font-mono text-xs ${statusClass}`}>{status}</span>
      <Link 
        to={href}
        className="font-mono text-xs text-primary hover:underline"
      >
        View
      </Link>
    </motion.div>
  );
}