import { Link } from "react-router-dom";

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
    <div className="document-row group">
      <span className="font-mono text-[11px] text-muted-foreground tracking-wider">{id}</span>
      <Link
        to={href}
        className="font-medium text-sm no-underline group-hover:underline group-hover:underline-offset-4 truncate transition-colors duration-[160ms]"
      >
        {title}
      </Link>
      <span className="font-mono text-[11px] text-muted-foreground tracking-wider">{version}</span>
      <span className="font-mono text-[11px] text-muted-foreground tracking-wider">{effective || "—"}</span>
      <span className={`status-badge text-center ${status === "Active" ? "status-badge-active" : ""}`}>
        {status.toUpperCase()}
      </span>
      <div className="flex gap-2 justify-end font-mono text-[11px] tracking-wider">
        <Link
          to={href}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors duration-[160ms]"
        >
          View
        </Link>
        <span className="text-foreground/12 select-none">|</span>
        <Link
          to={`${href}?format=pdf`}
          className="text-muted-foreground hover:text-foreground no-underline hover:underline hover:underline-offset-4 transition-colors duration-[160ms]"
        >
          PDF
        </Link>
      </div>
    </div>
  );
}