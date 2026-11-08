"use client";

import { motion } from "framer-motion";
import { HUES, type HueId } from "@/lib/data";
import { CheckIcon, HueIcon } from "./Icons";
import Reveal from "./Reveal";

interface UseCase {
  id: HueId;
  title: string;
  line: string;
  bullets: string[];
}

const CASES: UseCase[] = [
  {
    id: "scent",
    title: "Perfume on the go",
    line: "Decant your signature scent and refresh before the meeting, after the gym, on the way out.",
    bullets: ["Fits any pocket or small bag", "Fill from your own bottle", "Refill as often as you like"],
  },
  {
    id: "clean",
    title: "Hand sanitizer, handy",
    line: "Keep clean hands within reach on the bus, at the market, before lunch.",
    bullets: ["One press, fine mist", "Fill with the sanitizer you trust", "Clipped to a bag or tucked in a coat"],
  },
  {
    id: "fresh",
    title: "Mouth spray, always ready",
    line: "A discreet spritz after coffee or lunch. This pen stays for the mouth, and only the mouth.",
    bullets: ["Use mouth sprays made for oral use", "Never swap its contents", "Personal item: do not share it"],
  },
];

export default function UseCases() {
  return (
    <section id="uses" className="bg-white/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Three jobs, one pocket</p>
          <h2 className="h2 mt-3 max-w-2xl">Made for the things you carry anyway.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => {
            const hue = HUES.find((h) => h.id === c.id) ?? HUES[0];
            return (
              <Reveal key={c.id} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full overflow-hidden rounded-[2rem] bg-cream shadow-soft"
                >
                  <div className="p-6" style={{ background: hue.soft }}>
                    <motion.span
                      whileHover={{ rotate: 12, scale: 1.08 }}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: hue.color, color: hue.ink }}
                    >
                      <HueIcon id={hue.id} className="h-7 w-7" />
                    </motion.span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-ink/70">{c.line}</p>
                    <ul className="mt-5 space-y-2 text-sm text-ink/80">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-ink/50">
                      Hue: {hue.name} · {hue.job}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
