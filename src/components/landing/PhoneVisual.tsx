"use client";

import { motion } from "motion/react";
import { Bird, MapPin, Volume2, Leaf } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Gardens & woodland" },
  { icon: Leaf, label: "Insects, seeds, berries" },
  { icon: Volume2, label: "Warbling song" },
];

export function PhoneVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* glow */}
      <div className="absolute inset-0 -z-10 translate-y-6 rounded-[3rem] bg-[#9a8c79]/30 blur-3xl" />

      <div className="relative rounded-[2.5rem] border border-stone-300/70 bg-stone-900 p-2.5 shadow-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#f4f0e9]">
          {/* photo area */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[radial-gradient(120%_100%_at_30%_10%,#d8cdb8,#a89a83)]">
            {/* stylised bird "photo" */}
            <Bird
              className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 text-stone-900/25"
              strokeWidth={1.25}
            />

            {/* scanning line */}
            <motion.div
              animate={{ y: ["-12%", "112%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"
            />

            {/* focus reticle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
              className="absolute left-[34%] top-[30%] size-24 rounded-xl border-2 border-white/80 shadow-[0_0_24px_rgba(255,255,255,0.35)]"
            />

            <div className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
              Analyzing…
            </div>
          </div>

          {/* result card */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-xl leading-tight text-stone-900">
                  European Robin
                </p>
                <p className="text-xs italic text-stone-500">Erithacus rubecula</p>
              </div>
              <span className="rounded-full bg-[#8a9a6b]/15 px-2.5 py-1 text-xs font-semibold text-[#5f6e3f]">
                98% match
              </span>
            </div>

            <div className="space-y-1.5">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 text-xs text-stone-600"
                >
                  <f.icon className="size-3.5 text-[#8a7c68]" />
                  {f.label}
                </div>
              ))}
            </div>

            <button className="w-full rounded-xl bg-stone-900 py-2.5 text-sm font-medium text-[#f4f0e9]">
              View full profile
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
