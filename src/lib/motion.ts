import type { Variants } from "motion/react";

export type RevealVariantName =
  | "fadeUp7"
  | "fadeUp15"
  | "fadeUp17"
  | "fadeUp18"
  | "fadeUp28"
  | "fadeBlur10";

const quickSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 58,
  mass: 1,
};

const sectionSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const imageSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 58,
  mass: 1,
};

function fadeUp(distance: number, transition: typeof quickSpring | typeof sectionSpring | typeof imageSpring): Variants {
  return {
    hidden: { opacity: 0.001, y: distance },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { ...transition, delay },
    }),
  };
}

export const revealVariants: Record<RevealVariantName, Variants> = {
  fadeUp7: fadeUp(7, quickSpring),
  fadeUp15: fadeUp(15, sectionSpring),
  fadeUp17: fadeUp(17, sectionSpring),
  fadeUp18: fadeUp(18, sectionSpring),
  fadeUp28: fadeUp(28, imageSpring),
  fadeBlur10: {
    hidden: { opacity: 0.001, y: 10, filter: "blur(7px)" },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...sectionSpring, delay },
    }),
  },
};

export const headerSpring = sectionSpring;
