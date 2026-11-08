"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HUES, type HueId } from "@/lib/data";
import Pen from "./Pen";
import { CheckIcon, HueIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ColourCode() {
  const [active, setActive] = useState<HueId>("scent");
  const hue = HUES.find((h) => h.id === active) ?? HUES[0];

  return (
    <section id="colours" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow">The colour code</p>
        <h2 className="h2 mt-3 max-w-2xl">One hue, one job.</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          In a bag, every pen looks the same. So we made the colour the label. Pick a hue to see
          what it is for.
        </p>
      </Reveal>

      <div
        role="tablist"
        aria-label="Choose a hue"
        className="mt-10 flex flex-wrap gap-2"
      >
        {HUES.map((h) => {
          const on = h.id === active;
          return (
            <button
              key={h.id}
              role="tab"
              aria-selected={on}
              aria-controls="hue-panel"
              onClick={() => setActive(h.id)}
              className="relative rounded-full px-5 py-2.5 text-sm font-bold"
            >
              {on && (
                <motion.span
                  layoutId="hue-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span
                className={`relative flex items-center gap-2 transition-colors ${
                  on ? "text-cream" : "text-ink"
                }`}
              >
                <span className="h-3 w-3 rounded-full" style={{ background: h.color }} />
                {h.job}
              </span>
            </button>
          );
        })}
      </div>

      <div id="hue-panel" role="tabpanel" className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={hue.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div
              className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[2.5rem]"
              style={{ background: hue.soft }}
            >
              <div
                className="absolute h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{ background: hue.color }}
              />
              <motion.div
                initial={{ rotate: -20, y: 30 }}
                animate={{ rotate: -10, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="relative h-[340px] w-[78px]"
              >
                <Pen hue={hue} className="h-full w-full drop-shadow-xl" />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold tracking-widest"
                style={{ background: hue.color, color: hue.ink }}
              >
                <HueIcon id={hue.id} className="h-4 w-4" />
                {hue.job.toUpperCase()}
              </span>
              <h3 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {hue.tagline}
              </h3>
              <p className="mt-3 text-lg text-ink/70">{hue.scenario}</p>

              <div className="mt-6 rounded-2xl bg-white p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">
                  Fill it with
                </p>
                <p className="mt-1 font-bold">{hue.fillWith}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/75">
                  {hue.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft sm:grid-cols-2">
          <div>
            <p className="font-extrabold">Colour-code it</p>
            <p className="mt-1 text-ink/70">
              The pen colour tells you the job at a glance. No reading, no guessing.
            </p>
          </div>
          <div>
            <p className="font-extrabold">Or label it</p>
            <p className="mt-1 text-ink/70">
              Every pack includes a sticker sheet with all four labels, for the pens you want to
              relabel or the jobs we have not thought of.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
