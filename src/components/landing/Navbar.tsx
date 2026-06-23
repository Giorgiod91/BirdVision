"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Feather, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Species", href: "#metrics" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-stone-200/70 bg-[#f4f0e9]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2 font-semibold text-stone-900">
          <span className="grid size-8 place-items-center rounded-xl bg-stone-900 text-[#f4f0e9]">
            <Feather className="size-4" />
          </span>
          <span className="text-lg">BirdVision</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-stone-600 transition-colors hover:text-stone-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="lg" className="text-stone-600 hover:text-stone-900">
            Sign in
          </Button>
          <Button size="lg" className="bg-stone-900 text-[#f4f0e9] hover:bg-stone-800">
            Try it free
          </Button>
        </div>

        <button
          className="grid size-9 place-items-center rounded-lg text-stone-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-stone-200/70 bg-[#f4f0e9] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-stone-900/5"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 bg-stone-900 text-[#f4f0e9] hover:bg-stone-800">
              Try it free
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
