import { useEffect, useState } from "react";

/**
 * Returns true when the user has scrolled past the hero section
 * (i.e. input is no longer visible). Uses scroll position: when
 * scrollY exceeds ~60% of viewport height, we consider them past the hero.
 */
export function useScrollPastHero(): boolean {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const check = () => {
      const threshold = window.innerHeight * 0.6;
      setHasScrolledPast(window.scrollY > threshold);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return hasScrolledPast;
}
