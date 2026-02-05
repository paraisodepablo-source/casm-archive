import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "The Credential", href: "/credential" },
  { label: "Levels & Pathway", href: "/levels" },
  { label: "Curriculum & Blueprints", href: "/curriculum" },
  { label: "Examinations", href: "/examinations" },
  { label: "Standards & Ethics", href: "/standards" },
  { label: "Governance", href: "/governance" },
  { label: "Research", href: "/research" },
  { label: "Candidates", href: "/candidates" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="container-wide">
        <div className="flex items-center justify-between h-12 text-sm">
          <Link to="/" className="font-serif text-lg font-medium no-underline hover:text-primary transition-colors">
            The CASM Institute
          </Link>
          
          <div className="flex items-center gap-4 font-mono text-xs">
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="no-underline hover:text-primary transition-colors"
            >
              {lang === "EN" ? "EN" : "ES"} / {lang === "EN" ? "ES" : "EN"}
            </button>
            <span className="text-border">|</span>
            <Link to="/verify" className="no-underline hover:text-primary transition-colors">
              Verify
            </Link>
            <Link to="/documents" className="no-underline hover:text-primary transition-colors">
              Documents
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-t border-border">
        <div className="container-wide">
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1 h-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 text-sm text-muted-foreground no-underline hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center h-12">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border overflow-hidden bg-background"
            >
              <div className="container-wide py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-muted-foreground no-underline hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}