import { motion } from "framer-motion";

/**
 * GOVERNANCE MAP - SVG Implementation
 * 
 * Exact measurements as specified:
 * - Container: 1040px
 * - Center axis: Xc = 520px
 * - Standard box: 240x56, padding 18px, border rgba(20,20,20,0.12)
 * - Row of 4 committees at Y1 = Y0 + 110px
 * - Gap between boxes: 24px
 * - Committee X positions: 4, 268, 532, 796 (centers: 124, 388, 652, 916)
 * - Board: 260x56, centered at Xc
 * - Public Registry: 240x56, centered at Xc, Y2 = Y1 + 120px
 * 
 * Connections:
 * - Stroke: rgba(20,20,20,0.18), width 1, linecap butt
 * - Board → committees: vertical to Ybus, horizontal bus, 4 drops
 * - Board → Public Registry: central vertical with gap at bus crossing
 */

export function GovernanceMap() {
  // Dimensions
  const containerWidth = 1040;
  const boxHeight = 56;
  const standardBoxWidth = 240;
  const boardBoxWidth = 260;
  const gap = 24;
  
  // Y positions
  const boardY = 0;
  const busY = 88; // Y0 + 110 - 22
  const committeesY = 110;
  const registryY = committeesY + 120;
  
  // X positions for committees (left edge)
  const committeeX = [4, 268, 532, 796];
  // X centers for committees
  const committeeCenters = [124, 388, 652, 916];
  
  // Center
  const centerX = containerWidth / 2;
  
  // SVG height
  const svgHeight = registryY + boxHeight + 20;
  
  const strokeColor = "rgba(20, 20, 20, 0.18)";
  const boxBorderColor = "rgba(20, 20, 20, 0.12)";
  
  const committees = [
    "Examination Committee",
    "Standards & Ethics Committee",
    "Evidence Review Panel",
    ["Credentialing &", "Disciplinary Council"]
  ];

  return (
    <div className="relative py-8">
      <svg 
        viewBox={`0 0 ${containerWidth} ${svgHeight}`}
        className="w-full max-w-[1040px] mx-auto"
        style={{ maxHeight: `${svgHeight}px` }}
        aria-label="Governance structure diagram showing Board of Directors at top, four committees in middle, and Public Registry at bottom"
      >
        {/* Board of Directors */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <rect
            x={centerX - boardBoxWidth / 2}
            y={boardY}
            width={boardBoxWidth}
            height={boxHeight}
            fill="hsl(40, 15%, 98%)"
            stroke={boxBorderColor}
            strokeWidth="1"
          />
          <text
            x={centerX}
            y={boardY + boxHeight / 2 + 5}
            textAnchor="middle"
            className="font-serif text-lg"
            fill="currentColor"
          >
            Board of Directors
          </text>
        </motion.g>
        
        {/* Vertical line from Board to bus */}
        <line
          x1={centerX}
          y1={boardY + boxHeight}
          x2={centerX}
          y2={busY - 5}
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="butt"
        />
        
        {/* Horizontal bus line */}
        <line
          x1={committeeCenters[0]}
          y1={busY}
          x2={committeeCenters[3]}
          y2={busY}
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="butt"
        />
        
        {/* Vertical drops to committees */}
        {committeeCenters.map((cx, index) => (
          <line
            key={`drop-${index}`}
            x1={cx}
            y1={busY}
            x2={cx}
            y2={committeesY}
            stroke={strokeColor}
            strokeWidth="1"
            strokeLinecap="butt"
          />
        ))}
        
        {/* Committee boxes */}
        {committees.map((label, index) => (
          <motion.g
            key={`committee-${index}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <rect
              x={committeeX[index]}
              y={committeesY}
              width={standardBoxWidth}
              height={boxHeight}
              fill="hsl(40, 15%, 98%)"
              stroke={boxBorderColor}
              strokeWidth="1"
            />
            {Array.isArray(label) ? (
              <>
                <text
                  x={committeeCenters[index]}
                  y={committeesY + boxHeight / 2 - 4}
                  textAnchor="middle"
                  className="text-sm"
                  fill="currentColor"
                >
                  {label[0]}
                </text>
                <text
                  x={committeeCenters[index]}
                  y={committeesY + boxHeight / 2 + 12}
                  textAnchor="middle"
                  className="text-sm"
                  fill="currentColor"
                >
                  {label[1]}
                </text>
              </>
            ) : (
              <text
                x={committeeCenters[index]}
                y={committeesY + boxHeight / 2 + 5}
                textAnchor="middle"
                className="text-sm"
                fill="currentColor"
              >
                {label}
              </text>
            )}
          </motion.g>
        ))}
        
        {/* Central vertical line to Registry with gap at bus */}
        <line
          x1={centerX}
          y1={busY + 5}
          x2={centerX}
          y2={registryY}
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="butt"
        />
        
        {/* Public Registry */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <rect
            x={centerX - standardBoxWidth / 2}
            y={registryY}
            width={standardBoxWidth}
            height={boxHeight}
            fill="hsl(40, 15%, 98%)"
            stroke={boxBorderColor}
            strokeWidth="1"
          />
          <text
            x={centerX}
            y={registryY + boxHeight / 2 + 5}
            textAnchor="middle"
            className="font-serif text-lg"
            fill="currentColor"
          >
            Public Registry
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
