"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { revealVariants, type RevealVariantName } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariantName;
};

type ScrollRevealProps = RevealProps & {
  amount?: number;
  margin?: string;
};

export function LoadReveal({
  children,
  className,
  delay = 0,
  variant = "fadeBlur10",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-motion-reveal="load"
      data-motion-variant={variant}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={revealVariants[variant]}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp18",
  amount = 0.15,
  margin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-motion-reveal="scroll"
      data-motion-variant={variant}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount, margin }}
      variants={revealVariants[variant]}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
