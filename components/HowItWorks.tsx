"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Välj din färg",
    text: "Välj en färg för varje ändamål. Lila för doft, klar för fräsch, blå för ren och grå för din egen.",
  },
  {
    n: "2",
    title: "Ett ändamål per penna",
    text: "Håll varje penna till en enda sak och följ skötselkortet i paketet.",
  },
  {
    n: "3",
    title: "Märk och puffa",
    text: "Sätt på en etikett om du vill, fäst pennan i väskan och puffa när du behöver.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow">Så funkar det</p>
        <h2 className="h2 mt-3">Tre steg. Inget krångel.</h2>
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
