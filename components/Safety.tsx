"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const RULES = [
  {
    title: "One hue, one job",
    text: "Fill each pen with one kind of product and keep it that way. Never swap contents between pens.",
  },
  {
    title: "The mint pen is mouth-only",
    text: "Use it only for products made for use in the mouth, and do not share it.",
  },
  {
    title: "The right product for the job",
    text: "Only fill a pen with liquids that suit how you will use them, and follow that product's own instructions.",
  },
  {
    title: "Respect the alcohol",
    text: "Alcohol-based sanitizers are flammable. Keep pens away from heat and flames, and out of reach of small children.",
  },
];

export default function Safety() {
  return (
    <section className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
            The house rules
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            The colour code only works if you keep to it.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {RULES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-extrabold text-hue-mint">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-cream/70">{r.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-cream/50">
          MistPen pens are empty containers, not medical devices. They come with a care card.
        </p>
      </div>
    </section>
  );
}
