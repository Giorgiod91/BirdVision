"use client";

import { motion } from "motion/react";
import {
  ScanLine,
  BookOpen,
  Volume2,
  Camera,
  Bookmark,
  Globe,
} from "lucide-react";
import { Reveal, Stagger, fadeUp } from "./motion-primitives";

const features = [
  {
    icon: ScanLine,
    title: "Instant identification",
    desc: "Point, upload, done. Our vision model names the species in seconds — even from a blurry shot.",
  },
  {
    icon: BookOpen,
    title: "Rich species profiles",
    desc: "Habitat, diet, size, lifespan and fun facts — everything about your bird in one beautiful page.",
  },
  {
    icon: Volume2,
    title: "Song recognition",
    desc: "Can't see it but can hear it? Record the call and BirdVision identifies it by sound too.",
  },
  {
    icon: Camera,
    title: "Photo & video",
    desc: "Works with a single snapshot or a whole clip — we pick the clearest frame automatically.",
  },
  {
    icon: Bookmark,
    title: "Your life list",
    desc: "Every sighting is saved with date and location, building your personal birding journal.",
  },
  {
    icon: Globe,
    title: "Worldwide coverage",
    desc: "Over 11,000 species across every continent, kept up to date by our community of birders.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-[#8a7c68]">Features</span>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight text-stone-900 md:text-5xl">
            More than just a name
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            BirdVision turns a quick photo into a complete portrait of the bird in
            front of you.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-[#9a8c79]/12 text-[#8a7c68]">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
