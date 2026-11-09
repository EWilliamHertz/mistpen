"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const RULES = [
  {
    title: "En färg, ett ändamål",
    text: "Använd varje penna till en sorts produkt och håll det så. Byt aldrig innehåll mellan pennorna.",
  },
  {
    title: "Den klara pennan är för munnen",
    text: "Använd den bara till produkter avsedda för munnen, och dela den inte med andra.",
  },
  {
    title: "Rätt produkt för ändamålet",
    text: "Använd bara vätskor som passar hur du ska använda dem, och följ den produktens egna anvisningar.",
  },
  {
    title: "Respektera alkoholen",
    text: "Alkoholbaserad handsprit är brandfarlig. Håll pennorna borta från värme och eld, och utom räckhåll för småbarn.",
  },
];

export default function Safety() {
  return (
    <section className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
            Husreglerna
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Färgkoden fungerar bara om du håller dig till den.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {RULES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-extrabold text-hue-frost">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-cream/70">{r.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-cream/50">
          MistPen-pennor är tomma behållare, inte medicintekniska produkter. Ett skötselkort medföljer.
        </p>
      </div>
    </section>
  );
}
