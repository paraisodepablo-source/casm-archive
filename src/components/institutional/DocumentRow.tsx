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
      className="grid grid-cols-[100px_1fr_60px_100px_80px_100px] gap-4 items-center py-4 border-b border-foreground/10 hover:bg-foreground/[0.02] transition-colors group"
    >
      <span className="font-mono text-xs text-muted-foreground tracking-wide">{id}</span>
      <Link
        to={href}
        className="font-medium text-sm no-underline group-hover:underline group-hover:underline-offset-4 truncate"
      >
        {title}
      </Link>
      <span className="font-mono text-xs text-muted-foreground tracking-wide">{version}</span>
      <span className="font-mono text-xs text-muted-foreground tracking-wide">{effective || "—"}</span>
      <span className={`status-badge text-center ${status === "Active" ? "status-badge-active" : ""}`}>
        {status.toUpperCase()}
      </span>
      <div className="flex gap-2 justify-end font-mono text-xs tracking-wide">
        <Link
          to={href}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors"
        >
          View
        </Link>
        <span className="text-foreground/20">|</span>
        <Link
          to={`${href}?format=pdf`}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors"
        >
          PDF
        </Link>
      </div>
    </motion.div>
  );
}
