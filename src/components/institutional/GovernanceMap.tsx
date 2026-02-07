/**
 * GOVERNANCE MAP - SVG Implementation (no animation)
 * 
 * Exact measurements:
 * - Container: 1040px, Xc = 520px
 * - Standard box: 240x56, border rgba(20,20,20,0.12)
 * - Board: 260x56, centered
 * - Committees at Y=110, gap=24px, positions: 4/268/532/796
 * - Registry at Y=230, centered
 * - Bus at Y=88, stroke rgba(20,20,20,0.18), width 1
 */

export function GovernanceMap() {
  const W = 1040;
  const boxH = 56;
  const boardW = 260;
  const stdW = 240;
  
  const boardY = 0;
  const busY = 88;
  const comY = 110;
  const regY = 230;
  
  const cx = [124, 388, 652, 916];
  const bx = [4, 268, 532, 796];
  const Xc = 520;
  
  const svgH = regY + boxH + 16;
  
  const stroke = "rgba(20,20,20,0.18)";
  const boxStroke = "rgba(20,20,20,0.12)";
  const boxFill = "hsl(40,15%,98%)";
  
  const committees = [
    "Examination Committee",
    "Standards & Ethics Committee",
    "Evidence Review Panel",
    ["Credentialing &", "Disciplinary Council"],
  ];

  return (
    <div className="py-8">
      <svg
        viewBox={`0 0 ${W} ${svgH}`}
        className="w-full max-w-[1040px] mx-auto"
        aria-label="Governance structure: Board of Directors oversees four committees and Public Registry"
      >
        {/* Board */}
        <rect x={Xc - boardW / 2} y={boardY} width={boardW} height={boxH}
          fill={boxFill} stroke={boxStroke} strokeWidth="1" />
        <text x={Xc} y={boardY + boxH / 2 + 5} textAnchor="middle"
          fontFamily="'Playfair Display', serif" fontSize="16" fill="#111">
          Board of Directors
        </text>
        
        {/* Board → bus */}
        <line x1={Xc} y1={boardY + boxH} x2={Xc} y2={busY - 5}
          stroke={stroke} strokeWidth="1" />
        
        {/* Horizontal bus */}
        <line x1={cx[0]} y1={busY} x2={cx[3]} y2={busY}
          stroke={stroke} strokeWidth="1" />
        
        {/* Drops to committees */}
        {cx.map((x, i) => (
          <line key={`drop-${i}`} x1={x} y1={busY} x2={x} y2={comY}
            stroke={stroke} strokeWidth="1" />
        ))}
        
        {/* Committee boxes */}
        {committees.map((label, i) => (
          <g key={`com-${i}`}>
            <rect x={bx[i]} y={comY} width={stdW} height={boxH}
              fill={boxFill} stroke={boxStroke} strokeWidth="1" />
            {Array.isArray(label) ? (
              <>
                <text x={cx[i]} y={comY + boxH / 2 - 3} textAnchor="middle"
                  fontFamily="'Inter', sans-serif" fontSize="13" fill="#111" style={{ lineHeight: 1.15 }}>
                  {label[0]}
                </text>
                <text x={cx[i]} y={comY + boxH / 2 + 13} textAnchor="middle"
                  fontFamily="'Inter', sans-serif" fontSize="13" fill="#111" style={{ lineHeight: 1.15 }}>
                  {label[1]}
                </text>
              </>
            ) : (
              <text x={cx[i]} y={comY + boxH / 2 + 5} textAnchor="middle"
                fontFamily="'Inter', sans-serif" fontSize="13" fill="#111">
                {label}
              </text>
            )}
          </g>
        ))}
        
        {/* Board → Registry (central, with gap at bus) */}
        <line x1={Xc} y1={busY + 5} x2={Xc} y2={regY}
          stroke={stroke} strokeWidth="1" />
        
        {/* Public Registry */}
        <rect x={Xc - stdW / 2} y={regY} width={stdW} height={boxH}
          fill={boxFill} stroke={boxStroke} strokeWidth="1" />
        <text x={Xc} y={regY + boxH / 2 + 5} textAnchor="middle"
          fontFamily="'Playfair Display', serif" fontSize="16" fill="#111">
          Public Registry
        </text>
      </svg>
    </div>
  );
}