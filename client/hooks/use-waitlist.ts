import { useState, useCallback } from "react";
import { isValidEmail } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const SUCCESS_DURATION_MS = 4000;
const WAITLIST_TABLE = "Blocrate-MVP-Waitlist";

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
      const { error: insertError } = await supabase.from(WAITLIST_TABLE).insert({
        email: trimmed,
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
