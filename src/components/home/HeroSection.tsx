import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

const controls = [
  {
    label: "Standards",
    description: "Published blueprints & competence domains",
    href: "/documents",
  },
  {
    label: "Ethics",
    description: "Conflict-of-interest controls & disciplinary process",
    href: "/documents",
  },
  {
    label: "Registry",
    description: "Public status: active · lapsed · revoked",
    href: "/verify",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-[72px] pt-[72px] md:pt-[88px]">
      <motion.svg
        aria-hidden
        viewBox="0 0 1200 420"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[min(1200px,110vw)] -translate-y-1/2 translate-x-[-35%] md:translate-x-[-18%]"
      >
        <text
          x="0"
          y="320"
          className="fill-foreground/0 stroke-foreground/10"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="300"
          fontWeight="600"
          letterSpacing="-0.03em"
          strokeWidth="1"
        >
          CASM
        </text>
      </motion.svg>

      <div className="container-regular relative z-10">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="max-w-[12ch] text-[clamp(2.75rem,6.1vw,4.75rem)] leading-[0.98] tracking-[-0.02em]">
              A public standard for clinical competence.
            </h1>

            <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.55] text-muted-foreground">
              Credentialed by proctored examinations. Governed by published
              standards, enforceable ethics, and public registry status.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
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

          <div className="relative lg:col-span-5 lg:self-start">
            <svg
              aria-hidden
              viewBox="0 0 420 250"
              className="pointer-events-none absolute -bottom-10 -left-8 hidden w-[115%] text-foreground/20 md:block"
            >
              <motion.path
                d="M55 170 L190 85 L340 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                initial={
                  shouldReduceMotion ? false : { pathLength: 0, opacity: 0.25 }
                }
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: "easeOut" }}
              />
              <motion.path
                d="M55 170 L205 188 L340 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                initial={
                  shouldReduceMotion ? false : { pathLength: 0, opacity: 0.2 }
                }
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.0, ease: "easeOut", delay: 0.1 }}
              />
              {[{ x: 55, y: 170 }, { x: 205, y: 188 }, { x: 340, y: 90 }].map((node, index) => (
                <motion.circle
                  key={`${node.x}-${node.y}`}
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="hsl(var(--background))"
                  stroke="currentColor"
                  strokeWidth="1"
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.45 + index * 0.1, duration: 0.25 }}
                />
              ))}
            </svg>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut", delay: 0.1 }}
              className="relative w-full max-w-[480px] border border-foreground/10 bg-card px-6 py-6 md:px-8"
            >
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                CASM STANDARD · v1.0
              </p>
              <h2 className="mb-4 text-[1.125rem] font-medium leading-tight">
                Institutional controls
              </h2>

              <div className="divide-y divide-foreground/10">
                {controls.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group relative grid grid-cols-[100px_1fr_auto] items-start gap-4 py-3 no-underline"
                  >
                    <span className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                    <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      View
                    </span>
                    <span className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-0.5 bg-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
