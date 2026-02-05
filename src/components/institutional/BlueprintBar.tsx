interface BlueprintBarProps {
  label: string;
  percentage: number;
  range?: string;
}

export function BlueprintBar({ label, percentage, range }: BlueprintBarProps) {
  return (
    <div className="flex items-center gap-4 py-2 group">
      <span className="w-48 text-sm truncate text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
      <div className="flex-1 h-1.5 bg-muted overflow-hidden">
        <div 
          className="h-full bg-foreground/60 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-20 text-right font-mono text-[11px] text-muted-foreground tabular-nums">
        {range || `${percentage}%`}
      </span>
    </div>
  );
}