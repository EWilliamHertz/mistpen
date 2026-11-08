"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Pick your hue",
    text: "Choose a colour for each job. Coral for scent, mint for fresh, sky for clean, graphite for your own.",
  },
  {
    n: "2",
    title: "Fill it, once",
    text: "Fill each pen with one product made for that job, following the care card in the pack.",
  },
  {
    n: "3",
    title: "Label and spritz",
    text: "Stick on a label if you like, clip it to your bag, and spritz whenever you need it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow">How it works</p>
        <h2 className="h2 mt-3">Three steps. No fuss.</h2>
      </Reveal>

      <div className="relative mt-12 grid gap-8 md:grid-cols-3">
        <motion.div
          aria-hidden="true"
          className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 origin-left bg-ink/15 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.12}>
            <div className="relative">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl font-extrabold text-cream">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
