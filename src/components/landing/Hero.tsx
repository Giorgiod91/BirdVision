"use client";

import { motion } from "motion/react";
import { ArrowRight, ImagePlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneVisual } from "./PhoneVisual";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-28">
      {/* soft ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(154,140,121,0.18),transparent_70%)]" />
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-28 size-72 rounded-full bg-[#c9bba6]/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 26, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 top-12 size-80 rounded-full bg-[#b7c4ad]/40 blur-3xl"
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/60 px-3 py-1 text-xs font-medium text-stone-600 backdrop-blur">
              <Sparkles className="size-3.5 text-[#8a7c68]" />
              AI bird identification
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-heading text-5xl leading-[1.05] tracking-tight text-stone-900 md:text-7xl"
          >
            Snap a bird,
            <br />
            <span className="italic text-[#8a7c68]">know it instantly.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-stone-600"
          >
            Upload a photo or video from your phone and BirdVision names the
            species in seconds — then tells you everything about it: habitat,
            diet, song and where it&apos;s headed next.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="group h-11 gap-2 bg-stone-900 px-5 text-[#f4f0e9] hover:bg-stone-800"
            >
              <ImagePlus className="size-4" />
              Upload a photo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-stone-300 bg-white/50 px-5 text-stone-800 hover:bg-white"
            >
              See an example
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-6 text-sm text-stone-500"
          >
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-[#8a9a6b]" />
              11,000+ species recognised
            </span>
            <span>Free to start</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
        >
          <PhoneVisual />
        </motion.div>
      </div>
    </section>
  );
}
