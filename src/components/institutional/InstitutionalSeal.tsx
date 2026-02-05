interface InstitutionalSealProps {
  className?: string;
  position?: "left" | "right" | "center";
}

export function InstitutionalSeal({ className = "", position = "right" }: InstitutionalSealProps) {
  const positionClasses = {
    left: "-left-20",
    right: "-right-20",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`seal-watermark ${positionClasses[position]} ${className}`}
      aria-hidden="true"
    >
      CASM
    </div>
  );
}