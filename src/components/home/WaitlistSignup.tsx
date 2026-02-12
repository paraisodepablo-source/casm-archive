import { FormEvent, useEffect, useMemo, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("waitlist_view", { source, page: window.location.pathname });
  }, [source]);

  const isValidEmail = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

  const submitLabel = "Be notified when candidate registration opens.";

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
      setMessage("You’re on the notification list.");
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
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-[600px]", compact && "max-w-[520px]")}>
      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        <div className="flex flex-col gap-[14px] sm:flex-row sm:items-baseline sm:gap-6 lg:gap-7">
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
            className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-[11px] text-[15px] leading-6 text-foreground placeholder:text-muted-foreground/55 transition-colors duration-[180ms] outline-none focus:border-foreground/50 sm:w-[clamp(280px,30vw,320px)]"
          />

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="group inline-flex w-fit items-baseline gap-1 bg-transparent px-0 py-[11px] text-sm text-foreground underline decoration-2 underline-offset-[6px] transition-all duration-[180ms] ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-foreground/50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{submitLabel}</span>
            <span
              aria-hidden="true"
              className={cn(
                "text-[10px] leading-none transition-opacity duration-[180ms]",
                submitState === "submitting" ? "animate-pulse opacity-80" : "opacity-0",
              )}
            >
              •
            </span>
            <span
              aria-hidden="true"
              className="opacity-0 -translate-x-0.5 transition-all duration-[180ms] group-hover:translate-x-1 group-hover:opacity-100"
            >
              →
            </span>
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

      </form>
    </div>
  );
}
