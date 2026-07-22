"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { IndustryCard } from "@/components/industry-card";
import type { IndustrySummary } from "@/lib/site-data";

const MARQUEE_SPEED = 57.5;

type IndustryMarqueeProps = {
  industries: readonly IndustrySummary[];
};

export function IndustryMarquee({ industries }: IndustryMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [cycleWidth, setCycleWidth] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "100px 0px" },
    );

    observer.observe(marquee);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const firstSet = firstSetRef.current;
    if (!firstSet) return;

    const measure = () => {
      setCycleWidth(firstSet.getBoundingClientRect().width);
      x.set(0);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(firstSet);

    return () => observer.disconnect();
  }, [x]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !isInView || isPaused || cycleWidth === 0) return;

    const next = x.get() - (MARQUEE_SPEED * delta) / 1000;
    x.set(next <= -cycleWidth ? next + cycleWidth : next);
  });

  const renderSet = (duplicate = false) => (
    <div
      ref={duplicate ? undefined : firstSetRef}
      aria-hidden={duplicate ? true : undefined}
      inert={duplicate ? true : undefined}
      className="flex shrink-0 gap-6 pr-6"
    >
      {industries.map((industry) => (
        <div key={`${duplicate ? "duplicate" : "primary"}-${industry.slug}`} className="w-[min(84vw,302px)] shrink-0">
          <IndustryCard industry={industry} />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden"
      data-motion-marquee="industries"
      aria-label="Industries"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
    >
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {renderSet()}
        {renderSet(true)}
      </motion.div>
    </div>
  );
}
