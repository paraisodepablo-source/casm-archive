interface BlueprintBarProps {
  label: string;
  percentage: number;
  range?: string;
}

export function BlueprintBar({ label, percentage, range }: BlueprintBarProps) {
  return (
    <div 
      className="flex items-center gap-4 py-2.5 group"
      role="listitem"
      aria-label={`${label}: ${range || percentage + '%'}`}
    >
      <span className="w-44 text-sm truncate text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
      <div className="flex-1 h-1.5 bg-foreground/10 overflow-hidden">
        <div 
          className="h-full bg-foreground/70 transition-all duration-500"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <span className="w-16 text-right font-mono text-[11px] text-muted-foreground tabular-nums tracking-wide">
        {range || `${percentage}%`}
      </span>
    </div>
  );
}