import { useEffect, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement | null>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const { threshold = 0.2, rootMargin = "0px" } = options;
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return isIntersecting;
}
