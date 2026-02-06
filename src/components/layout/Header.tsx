import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { number: "01", label: "The Credential", href: "/credential" },
  { number: "02", label: "Levels & Pathway", href: "/levels" },
  { number: "03", label: "Curriculum & Blueprints", href: "/curriculum" },
  { number: "04", label: "Examinations", href: "/examinations" },
  { number: "05", label: "Standards & Ethics", href: "/standards" },
  { number: "06", label: "Governance", href: "/governance" },
  { number: "07", label: "Research", href: "/research" },
  { number: "08", label: "Candidates", href: "/candidates" },
  { number: "09", label: "Verify (Registry)", href: "/verify" },
  { number: "10", label: "Documents", href: "/documents" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      {/* Top bar */}
      <div className="container-wide">
        <div className="flex items-center justify-between h-12 text-sm">
          <Link to="/" className="font-serif text-base font-medium no-underline hover:text-primary transition-colors">
            The CASM Institute
          </Link>
          
          <div className="flex items-center font-mono text-xs tracking-wide">
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="no-underline hover:text-primary transition-colors px-3"
            >
              {lang === "EN" ? "EN" : "ES"} / {lang === "EN" ? "ES" : "EN"}
            </button>
            <span className="text-foreground/20 mx-1.5">|</span>
            <Link to="/verify" className="no-underline hover:text-primary transition-colors px-3">
              Registry
            </Link>
            <Link to="/documents" className="no-underline hover:text-primary transition-colors px-3">
              Documents
            </Link>
            <span className="text-foreground/20 mx-1.5">|</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="no-underline hover:text-primary transition-colors font-mono uppercase tracking-[0.16em] px-3"
            >
              {isMenuOpen ? "Close" : "Index"}
            </button>
          </div>
        </div>
      </div>

      {/* Index Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-foreground/10 shadow-sm"
          >
            <div className="container-wide py-8">
              <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-2 no-underline hover:text-primary transition-colors"
                  >
                    <span className="font-mono text-xs text-muted-foreground w-6 tracking-[0.16em]">{item.number}</span>
                    <span className="text-foreground group-hover:underline group-hover:underline-offset-4">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-12 bg-foreground/5 z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
