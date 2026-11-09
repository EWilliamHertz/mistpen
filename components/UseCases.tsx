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
    title: "Parfym på språng",
    line: "Ta med doften du älskar och fräscha upp dig före mötet, efter gymmet eller på väg ut.",
    bullets: ["Får plats i fickan eller en liten väska", "Optimerad för parfym", "Påfyllningsbar så ofta du vill"],
  },
  {
    id: "clean",
    title: "Handsprit till hands",
    line: "Ha rena händer inom räckhåll på bussen, på torget och före lunch.",
    bullets: ["Ett tryck, fin dimma", "Optimerad för handsprit", "Fäst i väskan eller stoppa i jackan"],
  },
  {
    id: "fresh",
    title: "Munspray, alltid redo",
    line: "Ett diskret puff efter kaffet eller lunchen. Den här pennan hålls till ett enda ändamål.",
    bullets: ["Optimerad för munspray", "Byt aldrig användning mellan pennor", "Personlig: dela den inte"],
  },
];

export default function UseCases() {
  return (
    <section id="uses" className="bg-white/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Tre ändamål, en ficka</p>
          <h2 className="h2 mt-3 max-w-2xl">Gjord för det du ändå bär med dig.</h2>
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
                      Färg: {hue.name} · {hue.job}
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
