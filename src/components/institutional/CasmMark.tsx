interface CasmMarkProps {
  className?: string;
}

export function CasmMark({ className = "" }: CasmMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="2" width="3" height="14" rx="0.8" fill="currentColor" opacity="0.88" />
      <rect x="7.5" y="2" width="3" height="14" rx="0.8" fill="currentColor" opacity="0.72" />
      <rect x="13.5" y="2" width="3" height="14" rx="0.8" fill="currentColor" opacity="0.56" />
    </svg>
  );
}
