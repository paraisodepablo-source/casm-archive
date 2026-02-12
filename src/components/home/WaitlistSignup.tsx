import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type WaitlistSignupProps = {
  source?: string;
  compact?: boolean;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trackEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const payload = { event: eventName, ...data };
  const scopedWindow = window as typeof window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  scopedWindow.dataLayer?.push(payload);
  scopedWindow.gtag?.("event", eventName, data);
}

export function WaitlistSignup({
  source = "hero_waitlist",
  compact = false,
}: WaitlistSignupProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("waitlist_view", { source, page: window.location.pathname });
  }, [source]);

  const isValidEmail = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

  const heroCtaLabel = "Be notified when candidate registration opens.";

  const submitWaitlist = async (candidateEmail: string) => {
    const normalizedEmail = candidateEmail.trim().toLowerCase();
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: normalizedEmail,
        locale: navigator.language ?? "en",
        source,
        page: window.location.pathname,
        ts: new Date().toISOString(),
      }),
    });

    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; already?: boolean; error?: string }
      | null;

    if (response.status === 409 || data?.already) {
      return { ok: true };
    }

    if (!response.ok || !data?.ok) {
      throw new Error(data?.error ?? "request_failed");
    }

    return { ok: true };
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail) {
      setMessage("Enter a valid email.");
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");
    setMessage(null);
    trackEvent("waitlist_submit", { source, page: window.location.pathname });

    try {
      await submitWaitlist(email);
      setSubmitState("success");
      setMessage("You’re on the list.");
      trackEvent("waitlist_success", { source, page: window.location.pathname });
    } catch {
      setSubmitState("error");
      setMessage("Couldn’t submit right now. Try again.");
      trackEvent("waitlist_error", { source, page: window.location.pathname });
    }
  };

  return (
    <div className={cn("w-full max-w-[600px]", compact && "max-w-[520px]")}>
      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            setEmail("");
            setMessage(null);
            setSubmitState("idle");
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline" className="h-11 px-5 hover:bg-foreground/[0.03] hover:border-foreground/50">
            {heroCtaLabel}
          </Button>
        </DialogTrigger>

        <DialogContent
          className="w-[92vw] max-w-[640px] border border-border bg-background p-7 shadow-none sm:p-9"
          overlayClassName="bg-black/15"
          showClose={false}
        >
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="font-serif text-[2rem] leading-tight">Notification list</DialogTitle>
            <DialogDescription className="max-w-[46ch] text-base leading-relaxed text-muted-foreground">
              Receive a single email when candidate registration opens.
            </DialogDescription>
          </DialogHeader>

          {submitState === "success" ? (
            <div className="mt-6 space-y-5">
              <p className="text-base text-foreground">{message}</p>
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-3" noValidate>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (message) setMessage(null);
                  }}
                  placeholder="Email address"
                  autoComplete="email"
                  aria-label="Email address"
                  autoFocus
                  className="h-11 w-full border border-border bg-transparent px-4 text-[15px] leading-6 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-[180ms] focus:border-foreground/35"
                />

                <Button
                  type="submit"
                  variant="outline"
                  disabled={submitState === "submitting"}
                  className="h-11 shrink-0 px-5"
                >
                  Notify me
                </Button>
              </div>

              {message && (
                <p
                  className={cn(
                    "text-xs",
                    submitState === "error" ? "text-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {message}
                </p>
              )}
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
