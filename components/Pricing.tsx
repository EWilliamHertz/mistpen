"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BUNDLE_PRICE,
  BUNDLE_SIZE,
  HUES,
  SINGLE_PRICE,
  priceFor,
  type HueId,
} from "@/lib/data";
import Pen from "./Pen";
import Reveal from "./Reveal";

type Counts = Record<HueId, number>;

const MAX_PER_HUE = 12;

const PRESETS: { label: string; counts: Counts }[] = [
  { label: "Starter trio", counts: { scent: 1, fresh: 1, clean: 1, free: 0 } },
  { label: "Full set of 4", counts: { scent: 1, fresh: 1, clean: 1, free: 1 } },
  { label: "Clear", counts: { scent: 0, fresh: 0, clean: 0, free: 0 } },
];

export default function Pricing() {
  const [counts, setCounts] = useState<Counts>(PRESETS[0].counts);

  const total = HUES.reduce((sum, h) => sum + counts[h.id], 0);
  const price = priceFor(total);
  const bundles = Math.floor(total / BUNDLE_SIZE);
  const singles = total % BUNDLE_SIZE;
  const saved = total * SINGLE_PRICE - price;

  const parts: string[] = [];
  if (bundles > 0) parts.push(`${bundles} × 3-pack (${bundles * BUNDLE_PRICE} kr)`);
  if (singles > 0) parts.push(`${singles} × single (${singles * SINGLE_PRICE} kr)`);

  const change = (id: HueId, delta: number) =>
    setCounts((c) => ({ ...c, [id]: Math.min(MAX_PER_HUE, Math.max(0, c[id] + delta)) }));

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow">Pricing</p>
        <h2 className="h2 mt-3 max-w-2xl">Simple prices. Better in threes.</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          {SINGLE_PRICE} kr for one pen, or {BUNDLE_SIZE} for {BUNDLE_PRICE} kr. Mix any hues in
          a 3-pack.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-6">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-widest text-ink/50">Single</p>
              <p className="mt-2 text-5xl font-extrabold tabular-nums">{SINGLE_PRICE} kr</p>
              <p className="mt-2 text-ink/70">One pen, any hue.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] bg-ink p-7 text-cream shadow-soft">
              <span className="absolute right-5 top-5 rounded-full bg-hue-mint px-3 py-1 text-xs font-extrabold text-ink">
                Best value
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-cream/60">3-pack</p>
              <p className="mt-2 text-5xl font-extrabold tabular-nums">{BUNDLE_PRICE} kr</p>
              <p className="mt-2 text-cream/70">
                About {Math.round(BUNDLE_PRICE / BUNDLE_SIZE)} kr per pen. You save{" "}
                {BUNDLE_SIZE * SINGLE_PRICE - BUNDLE_PRICE} kr.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] bg-white p-7 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-extrabold">Build your set</h3>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setCounts(p.counts)}
                    className="rounded-full border-2 border-ink/10 px-3 py-1 text-xs font-bold transition hover:border-ink"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <ul className="mt-5 divide-y divide-ink/10">
              {HUES.map((h) => (
                <li key={h.id} className="flex items-center gap-4 py-3">
                  <div className="h-16 w-[15px] shrink-0">
                    <Pen hue={h} className="h-full w-full" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">
                      {h.name} <span className="text-ink/50">· {h.job}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={`Fewer ${h.name} pens`}
                      onClick={() => change(h.id, -1)}
                      className="h-9 w-9 rounded-full border-2 border-ink/15 text-lg font-bold transition hover:border-ink"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-lg font-extrabold tabular-nums">
                      {counts[h.id]}
                    </span>
                    <button
                      type="button"
                      aria-label={`More ${h.name} pens`}
                      onClick={() => change(h.id, 1)}
                      className="h-9 w-9 rounded-full text-lg font-bold transition hover:scale-110"
                      style={{ background: h.color, color: h.ink }}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-end justify-between gap-4 border-t border-ink/10 pt-5">
              <div>
                <p className="text-sm font-bold">
                  {total} {total === 1 ? "pen" : "pens"}
                </p>
                <p className="mt-1 text-xs text-ink/50">
                  {parts.length > 0 ? parts.join(" + ") : "Add a pen to start"}
                </p>
              </div>
              <div className="text-right">
                <div className="h-11 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={price}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="text-4xl font-extrabold tabular-nums"
                    >
                      {price} kr
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p className="h-5 text-sm font-bold text-emerald-700">
                  {saved > 0 ? `You save ${saved} kr` : ""}
                </p>
              </div>
            </div>

            {total > 0 ? (
              <a
                href="#waitlist"
                className="mt-5 block rounded-full bg-ink px-6 py-3 text-center font-bold text-cream transition hover:scale-[1.02]"
              >
                Reserve my set
              </a>
            ) : (
              <p className="mt-5 rounded-full bg-ink/5 px-6 py-3 text-center font-bold text-ink/50">
                Pick at least one pen
              </p>
            )}
            <p className="mt-3 text-center text-xs text-ink/50">
              Prices include VAT. Delivery is shown at launch. Pens arrive empty, ready to fill.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
