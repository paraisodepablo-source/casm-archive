interface SectionNumberProps {
  number: string | number;
  className?: string;
}

export function SectionNumber({ number, className = "" }: SectionNumberProps) {
  const formattedNumber = typeof number === "number" 
    ? number.toString().padStart(2, "0") 
    : number;

  return (
    <span className={`section-number ${className}`}>
      {formattedNumber}
    </span>
  );
}