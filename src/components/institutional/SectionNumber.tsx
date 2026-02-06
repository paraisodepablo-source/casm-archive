interface SectionNumberProps {
  number: string | number;
  className?: string;
}

export function SectionNumber({ number, className = "" }: SectionNumberProps) {
  const formattedNumber = typeof number === "number" 
    ? number.toString().padStart(2, "0") 
    : number;

  return (
    <span 
      className={`font-mono text-sm font-medium tracking-[0.16em] text-muted-foreground ${className}`}
      aria-hidden="true"
    >
      {formattedNumber}
    </span>
  );
}