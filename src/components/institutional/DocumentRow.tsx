import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DocumentRowProps {
  id: string;
  title: string;
  version: string;
  status: "Active" | "Lapsed" | "Revoked" | "Draft" | "Archived";
  effective?: string;
  href?: string;
}

export function DocumentRow({ id, title, version, status, effective, href = "#" }: DocumentRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-[auto_1fr_auto_auto_auto] md:grid-cols-[120px_1fr_60px_100px_100px_120px] gap-2 md:gap-4 items-center py-3 border-b border-border hover:bg-muted/30 transition-colors group"
    >
      <span className="font-mono text-xs text-muted-foreground">{id}</span>
      <Link
        to={href}
        className="font-medium text-sm no-underline group-hover:underline group-hover:underline-offset-4 truncate"
      >
        {title}
      </Link>
      <span className="font-mono text-xs text-muted-foreground">{version}</span>
      {effective && (
        <span className="font-mono text-xs text-muted-foreground hidden md:block">{effective}</span>
      )}
      <span className={`status-badge text-center ${status === "Active" ? "status-badge-active" : ""}`}>
        {status.toUpperCase()}
      </span>
      <div className="flex gap-2 justify-end font-mono text-xs">
        <Link
          to={href}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors"
        >
          View
        </Link>
        <span className="text-border hidden md:inline">|</span>
        <Link
          to={`${href}?format=pdf`}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors hidden md:inline"
        >
          PDF
        </Link>
      </div>
    </motion.div>
  );
}