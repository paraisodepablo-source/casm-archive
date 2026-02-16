import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { motionFast } from "@/lib/motion";

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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/8">
      <div className="container-regular">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-[15px] font-medium no-underline hover:opacity-70 transition-opacity duration-[160ms]"
          >
            The CASM Institute
          </Link>
          
          {/* Right nav */}
          <nav className="flex items-center font-mono text-[13px] tracking-[0.14em]">
            {/* Language switch */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setLang("EN")}
                className={`no-underline px-2 py-1 transition-colors duration-[160ms] ${
                  lang === "EN"
                    ? "border border-foreground/12 bg-white text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ES")}
                className={`no-underline px-2 py-1 transition-colors duration-[160ms] ${
                  lang === "ES"
                    ? "border border-foreground/12 bg-white text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
            </div>
            
            <span className="text-foreground/12 mx-3 select-none">|</span>
            
            <Link
              to="/verify"
              className={`no-underline px-3 py-1 transition-colors duration-[160ms] relative ${
                location.pathname === "/verify" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Verify
              {location.pathname === "/verify" && (
                <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-foreground" />
              )}
            </Link>
            
            <Link
              to="/documents"
              className={`no-underline px-3 py-1 transition-colors duration-[160ms] relative ${
                location.pathname === "/documents" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Documents
              {location.pathname === "/documents" && (
                <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-foreground" />
              )}
            </Link>

            <Link
              to="/?hero=v2"
              className="no-underline px-3 py-1 text-muted-foreground hover:text-foreground transition-colors duration-[160ms]"
            >
              click here to see the new hero version
            </Link>
            
            <span className="text-foreground/12 mx-3 select-none">|</span>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="no-underline text-muted-foreground hover:text-foreground transition-colors duration-[160ms] font-mono uppercase tracking-[0.18em] px-3 py-1"
            >
              {isMenuOpen ? "Close" : "Index"}
            </button>
          </nav>
        </div>
      </div>

      {/* Index overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={motionFast}
              className="absolute top-full left-0 right-0 bg-background border-b border-foreground/8"
            >
              <div className="container-regular py-10">
                <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-baseline gap-5 py-2.5 no-underline transition-colors duration-[160ms]"
                    >
                      <span className="font-mono text-[11px] text-muted-foreground w-5 tracking-[0.18em] tabular-nums">
                        {item.number}
                      </span>
                      <span className="text-foreground/80 group-hover:text-foreground group-hover:underline group-hover:underline-offset-4 transition-colors duration-[160ms]">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionFast}
              className="fixed inset-0 top-[72px] bg-foreground/5 z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
