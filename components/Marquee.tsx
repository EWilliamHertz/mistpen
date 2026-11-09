"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Parfym",
  "Handsprit",
  "Munspray",
  "3 ml",
  "Fickformat",
  "Färgkodad",
  "Påfyllningsbar",
];

export default function Marquee() {
  // Four copies so each half is wider than any screen; animating by -50% loops seamlessly.
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream" aria-hidden="true">
      <motion.div
        className="flex w-max whitespace-nowrap text-lg font-bold"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-5">{t}</span>
            <span className="h-2 w-2 rounded-full bg-hue-purple" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
