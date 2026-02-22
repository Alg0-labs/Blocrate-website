import { useState, useCallback } from "react";
import { isValidEmail } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const SUCCESS_DURATION_MS = 4000;
const WAITLIST_TABLE = "Blocrate-MVP-Waitlist";

/** Get location string: try IP geolocation (country/city), fallback to timezone. */
async function getLocation(): Promise<string> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error("IP API error");
    const data = (await res.json()) as { country_name?: string; city?: string; region?: string };
    const parts = [data.city, data.region, data.country_name].filter(Boolean);
    if (parts.length) return parts.join(", ");
  } catch {
    // fallback: timezone (e.g. "America/New_York")
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) return tz;
  }
  return "Unknown";
}

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  }, []);

  const handleJoin = useCallback(async (): Promise<void> => {
    setError(null);
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!supabase) {
      setError("Signup is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    try {
      const location = await getLocation();
      const { error: insertError } = await supabase.from(WAITLIST_TABLE).insert({
        email: trimmed,
        location,
      });

      if (insertError) {
        if (insertError.code === "23505") {
          setError("This email is already on the waitlist.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }

      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), SUCCESS_DURATION_MS);
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  return {
    email,
    showSuccess,
    error,
    isSubmitting,
    handleEmailChange,
    handleJoin,
  };
}
