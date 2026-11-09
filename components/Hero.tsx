"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BUNDLE_PRICE, BUNDLE_SIZE, HUES, SINGLE_PRICE } from "@/lib/data";
import Pen from "./Pen";
import Mist from "./Mist";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [burst, setBurst] = useState(0);
  const [auto, setAuto] = useState(true);
  const hue = HUES[index];

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % HUES.length), 4200);
    return () => clearInterval(t);
  }, [auto]);

  // Puffa varje gång pennan byts.
  useEffect(() => {
    setBurst((b) => b + 1);
  }, [index]);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink/60 shadow-soft"
          >
            <motion.span
              className="h-2 w-2 rounded-full"
              animate={{ backgroundColor: hue.color }}
              transition={{ duration: 0.6 }}
            />
            3 ml påfyllningsbar spraypenna
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Välj din färg.
            <br />
            <span className="relative isolate inline-block">
              <motion.span
                className="absolute inset-x-0 bottom-1 -z-10 h-4 rounded-full"
                animate={{ backgroundColor: hue.color }}
                transition={{ duration: 0.7 }}
              />
              Puffa dig fräsch.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-lg text-ink/70"
          >
            Spraypennor i fickformat, optimerade för parfym, handsprit och munspray. En färg per
            ändamål, så att du aldrig tar fel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#pricing"
              className="rounded-full bg-ink px-6 py-3 font-bold text-cream transition hover:scale-105"
            >
              Bygg ditt set, från {SINGLE_PRICE} kr
            </a>
            <a
              href="#colours"
              className="rounded-full border-2 border-ink/15 px-6 py-3 font-bold transition hover:border-ink"
            >
              Se färgkoden
            </a>
          </motion.div>

          <p className="mt-5 text-sm text-ink/50">
            {SINGLE_PRICE} kr styck · {BUNDLE_SIZE} för {BUNDLE_PRICE} kr · påfyllningsbar
          </p>
        </div>

        <div className="relative mx-auto flex h-[480px] w-full max-w-md items-center justify-center">
          <motion.div
            className="absolute inset-4 rounded-[3rem]"
            animate={{ backgroundColor: hue.soft }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            className="absolute h-64 w-64 rounded-full blur-3xl"
            animate={{ backgroundColor: hue.color, opacity: 0.35 }}
            transition={{ duration: 0.7 }}
          />

          <div style={{ transform: "rotate(-12deg)" }}>
            <motion.button
              type="button"
              aria-label={`Puffa med den ${hue.name.toLowerCase()}a pennan (${hue.job})`}
              onClick={() => setBurst((b) => b + 1)}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.96 }}
              className="relative block h-[380px] w-[48px] cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={hue.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <Pen hue={hue} className="h-full w-full drop-shadow-xl" />
                </motion.div>
              </AnimatePresence>
              <Mist burst={burst} color={hue.color} />
            </motion.button>
          </div>

          <div className="absolute left-8 top-8 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-soft">
            <AnimatePresence mode="wait">
              <motion.span
                key={hue.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {hue.name} · {hue.job}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-soft">
            {HUES.map((h, i) => (
              <button
                key={h.id}
                type="button"
                aria-label={`Visa pennan ${h.name} (${h.job})`}
                aria-pressed={i === index}
                onClick={() => {
                  setAuto(false);
                  setIndex(i);
                }}
                className="h-6 w-6 rounded-full ring-offset-2 transition hover:scale-110"
                style={{
                  background: h.color,
                  boxShadow: i === index ? `0 0 0 2px #fff, 0 0 0 4px ${h.color}` : undefined,
                }}
              />
            ))}
            <span className="mx-1 h-5 w-px bg-ink/15" />
            <button
              type="button"
              onClick={() => setBurst((b) => b + 1)}
              className="text-sm font-bold"
            >
              Puffa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
