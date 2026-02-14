import { useState, useCallback } from "react";
import { isValidEmail } from "@/lib/utils";

const SUCCESS_DURATION_MS = 4000;

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  }, []);

  const handleJoin = useCallback(() => {
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
    setShowSuccess(true);
    setEmail("");
    setTimeout(() => setShowSuccess(false), SUCCESS_DURATION_MS);
  }, [email]);

  return {
    email,
    showSuccess,
    error,
    handleEmailChange,
    handleJoin,
  };
}
