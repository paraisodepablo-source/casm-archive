interface BlueprintBarProps {
  label: string;
  percentage: number;
  range?: string;
}

export function BlueprintBar({ label, percentage, range }: BlueprintBarProps) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="w-48 text-sm truncate">{label}</span>
      <div className="flex-1 h-2 bg-muted rounded-none overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-20 text-right font-mono text-xs text-muted-foreground">
        {range || `${percentage}%`}
      </span>
    </div>
  );
}