import { motion } from "framer-motion";

const governanceNodes = [
  { id: "board", label: "Board of Directors", level: 0 },
  { id: "exam", label: "Examination Committee", level: 1 },
  { id: "ethics", label: "Standards & Ethics Committee", level: 1 },
  { id: "evidence", label: "Evidence Review Panel", level: 1 },
  { id: "credential", label: "Credentialing & Disciplinary Council", level: 1 },
  { id: "registry", label: "Public Registry", level: 2 },
];

export function GovernanceMap() {
  return (
    <div className="relative py-8">
      {/* Board - Top */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="inline-block border border-border px-6 py-3 bg-card">
          <span className="font-serif text-lg">Board of Directors</span>
        </div>
      </motion.div>

      {/* Connecting line */}
      <div className="absolute left-1/2 top-[4.5rem] w-px h-8 bg-border" />

      {/* Horizontal line */}
      <div className="hidden md:block absolute left-[15%] right-[15%] top-[6.5rem] h-px bg-border" />

      {/* Committees - Middle */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 relative">
        {governanceNodes.slice(1, 5).map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            {/* Vertical connector */}
            <div className="hidden md:block absolute top-0 left-1/2 w-px h-4 bg-border" style={{ left: `${12.5 + index * 25}%` }} />
            <div className="border border-border px-4 py-3 bg-card">
              <span className="text-sm">{node.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connecting lines to registry */}
      <div className="hidden md:block absolute left-1/2 bottom-[5.5rem] w-px h-8 bg-border" />

      {/* Registry - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8"
      >
        <div className="inline-block border-2 border-primary px-6 py-3 bg-card">
          <span className="font-serif text-lg text-primary">Public Registry</span>
        </div>
      </motion.div>
    </div>
  );
}