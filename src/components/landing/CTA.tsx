"use client";

import { motion } from "motion/react";
import { ArrowRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./motion-primitives";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="relative overflow-hidden rounded-3xl border border-stone-300/70 bg-gradient-to-br from-[#e9e2d6] to-[#dcd2c1] px-8 py-16 text-center shadow-sm md:px-16 md:py-20">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-1/2 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_60%)]"
          />
          <div className="relative">
            <h2 className="text-balance font-heading text-4xl tracking-tight text-stone-900 md:text-5xl">
              Your next bird is one photo away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-stone-700">
              Join millions of birders identifying species in seconds. Free to
              start — no account needed for your first ID.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="group h-11 gap-2 bg-stone-900 px-6 text-[#f4f0e9] hover:bg-stone-800"
              >
                <ImagePlus className="size-4" />
                Identify a bird
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-stone-400/60 bg-white/40 px-6 text-stone-800 hover:bg-white"
              >
                Get the app
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
