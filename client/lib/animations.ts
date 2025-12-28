import { Variants } from "framer-motion";

// Smooth easing curves for natural motion
const smoothEase = [0.25, 0.1, 0.25, 1] as const; // Custom cubic-bezier for smooth acceleration/deceleration
const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const tileVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
      ...springConfig,
    },
  },
});

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      ...springConfig,
    },
  },
};

