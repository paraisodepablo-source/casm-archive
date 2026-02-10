import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CasmMark } from "@/components/institutional/CasmMark";

const registryRows = [
  {
    label: "Standards",
    description: "Published blueprints & competence domains",
    href: "/documents",
  },
  {
    label: "Ethics",
    description: "Enforceable code + disciplinary process",
    href: "/documents",
  },
  {
    label: "Registry",
    description: "Public status tracking",
    href: "/verify",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-[#f2efe8] pb-[72px] pt-[72px] md:pt-[88px]">
      <div className="container-regular relative z-10">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <CasmMark className="h-[16px] w-[16px] text-foreground/80" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                THE STANDARD BODY
              </span>
            </div>

            <h1 className="max-w-[12ch] text-[clamp(2.75rem,5.8vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              A public competence standard.
            </h1>

            <p className="mt-5 max-w-[46ch] text-[1.16rem] leading-[1.55] text-muted-foreground">
              An examination-governed credential. Built on published standards,
              enforceable ethics, and public registry status.
            </p>

            <p className="mt-3 text-[0.93rem] text-foreground/75">Verifiable by design.</p>

            <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
              <Button asChild size="lg" className="h-11 rounded-sm px-5">
                <Link to="/credential" className="no-underline">
                  Explore the credential
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 rounded-sm px-5">
                <Link to="/documents" className="no-underline">
                  View exam blueprints
                </Link>
              </Button>
              <Link
                to="/documents"
                className="ml-1 no-underline text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
              >
                Read governance structure
              </Link>
            </div>
          </div>

          <div className="relative pt-2 lg:col-span-5 lg:pt-14">
            <motion.aside
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut", delay: 0.08 }}
              className="relative w-full max-w-[500px] border border-black/15 bg-[#fbfaf8] px-7 py-7 md:px-8 md:py-8"
            >
              <div className="absolute right-7 top-7 opacity-70">
                <CasmMark className="h-[14px] w-[14px] text-foreground/75" />
              </div>

              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Public Registry Excerpt
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                CASM Standard v1.0
              </p>

              <motion.div
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut", delay: 0.12 }}
                className="my-4 h-px origin-left bg-black/15"
              />

              <h2 className="mb-4 text-[1.125rem] font-medium leading-tight">Institutional controls</h2>

              <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                Status: <span className="text-foreground">Not yet issued</span>
              </p>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {registryRows.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group grid grid-cols-[92px_1fr] gap-4 py-3 no-underline"
                  >
                    <span className="text-sm text-foreground/78 transition-colors group-hover:text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-5 space-y-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                <p>DOC ID: CASM-STD-v1.0</p>
                <p>Issued by: The CASM Institute</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
