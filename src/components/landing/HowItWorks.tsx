"use client";

import { motion } from "motion/react";
import { Smartphone, Sparkles, Bird, BookOpen } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "./motion-primitives";

const steps = [
  {
    icon: Smartphone,
    title: "Capture",
    desc: "Take a photo or short video of the bird with your phone — or pick one from your camera roll.",
  },
  {
    icon: Sparkles,
    title: "Analyze",
    desc: "Our AI scans plumage, shape, size and colour, comparing it against 11,000+ species.",
  },
  {
    icon: Bird,
    title: "Identify",
    desc: "Within seconds you get the species name and a match confidence you can trust.",
  },
  {
    icon: BookOpen,
    title: "Discover",
    desc: "Dive into a rich profile and save the sighting to your personal life list.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-white/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-[#8a7c68]">How it works</span>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight text-stone-900 md:text-5xl">
            From snapshot to species in seconds
          </h2>
        </Reveal>

        <Stagger className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} className="relative text-center">
              <div className="relative mx-auto grid size-14 place-items-center rounded-2xl border border-stone-200 bg-[#f4f0e9] text-[#8a7c68] shadow-sm">
                <s.icon className="size-6" />
                <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-stone-900 text-xs font-bold text-[#f4f0e9]">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
