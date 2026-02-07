import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlueprintBarProps {
  label: string;
  percentage: number;
  range?: string;
  animate?: boolean;
  delay?: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function BlueprintBar({ label, percentage, range, animate = false, delay = 0 }: BlueprintBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldAnimate = animate || isInView;

  return (
    <div 
      ref={ref}
      className="flex items-center gap-4 py-2.5 group"
      role="listitem"
      aria-label={`${label}: ${range || percentage + '%'}`}
    >
      <span className="w-44 text-sm truncate text-muted-foreground group-hover:text-foreground transition-colors duration-150">
        {label}
      </span>
      <div className="flex-1 relative">
        <div className="blueprint-bar-track w-full" />
        <motion.div 
          className="blueprint-bar-fill absolute top-0 left-0 origin-left"
          initial={{ scaleX: 0 }}
          animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.3,
            delay,
            ease,
          }}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <span className="w-16 text-right font-mono text-[11px] text-muted-foreground tabular-nums tracking-wider">
        {range || `${percentage}%`}
      </span>
    </div>
  );
}