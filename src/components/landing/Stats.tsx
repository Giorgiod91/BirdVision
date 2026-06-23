"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Reveal } from "./motion-primitives";

const stats = [
  { value: 11000, suffix: "+", decimals: 0, label: "Bird species" },
  { value: 98, suffix: "%", decimals: 0, label: "ID accuracy" },
  { value: 3, suffix: "s", decimals: 0, label: "Average result time" },
  { value: 2, suffix: "M+", decimals: 0, label: "Sightings logged" },
];

function Counter({
  value,
  decimals,
  suffix,
}: {
  value: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) =>
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="metrics" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="rounded-3xl border border-stone-200 bg-white/70 p-10 shadow-sm md:p-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl text-stone-900 md:text-5xl">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-stone-600">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
