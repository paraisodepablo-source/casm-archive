import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type WaitlistSignupProps = {
  source?: string;
  compact?: boolean;
  buttonStyle?: "outline" | "solid";
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
  buttonStyle = "outline",
}: WaitlistSignupProps) {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("waitlist_view", { source, page: window.location.pathname });
  }, [source]);

  const isValidEmail = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

  const submitLabel =
    submitState === "submitting"
      ? "Submitting..."
      : "Be notified when candidate registration opens.";

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
      setMessage("You’re on the list. We’ll notify you when registration opens.");
      trackEvent("waitlist_success", { source, page: window.location.pathname });
    } catch {
      setSubmitState("error");
      setMessage("Couldn’t submit right now. Try again.");
      trackEvent("waitlist_error", { source, page: window.location.pathname });
    }
  };

  if (submitState === "success") {
    return (
      <div className="max-w-[600px]">
        <p className="text-sm text-foreground">{message}</p>
        <button
          type="button"
          onClick={() => {
            setSubmitState("idle");
            setMessage(null);
          }}
          className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors duration-[180ms]"
        >
          Change email
        </button>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-[600px]", compact && "max-w-[520px]")}>
      <p className="text-sm text-muted-foreground mb-4">Candidate registration is not yet open.</p>

      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        <div className="flex flex-col lg:flex-row gap-3 items-stretch">
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
            className="h-11 w-full lg:w-[260px] border border-foreground/20 bg-transparent px-4 text-[15px] text-foreground placeholder:text-muted-foreground/80 transition-colors duration-[180ms] outline-none focus:border-foreground/40"
          />

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className={cn(
              "h-11 px-6 text-sm transition-all duration-[180ms] active:translate-y-px border",
              buttonStyle === "outline"
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-[#111] bg-[#111] text-white hover:bg-black",
            )}
          >
            {submitLabel}
          </button>
        </div>

        {message && submitState !== "success" && (
          <p
            className={cn(
              "text-xs",
              submitState === "error" ? "text-foreground/80" : "text-muted-foreground",
            )}
          >
            {message}
          </p>
        )}

        <p className="text-xs text-muted-foreground">
          No spam. Privacy-first. <Link to="/privacy" className="underline underline-offset-4">Privacy</Link>
        </p>
      </form>
    </div>
  );
}
