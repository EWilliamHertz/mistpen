"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HUES } from "@/lib/data";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "done" | "error" | "unconfigured";

// Set NEXT_PUBLIC_WAITLIST_URL (see .env.example) to an endpoint that accepts { email } as JSON.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_URL;

const MESSAGES: Record<Exclude<Status, "idle" | "sending">, string> = {
  done: "You are on the list. We will email you when the pens are ready.",
  error: "Something went wrong. Please try again in a moment.",
  unconfigured: "Sign-up is not live yet. Please check back soon.",
};

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-4xl px-5 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 text-center shadow-soft sm:p-14">
          <div className="pointer-events-none absolute -left-10 -top-10 flex gap-2 opacity-30 blur-2xl">
            {HUES.map((h) => (
              <span
                key={h.id}
                className="h-40 w-40 rounded-full"
                style={{ background: h.color }}
              />
            ))}
          </div>

          <div className="relative">
            <h2 className="h2">Be first to pick your hue.</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">
              Join the list for launch news. Want custom colours for a team or event? Tell us in a
              reply.
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full border-2 border-ink/10 bg-cream px-5 py-3 outline-none transition focus:border-ink"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                disabled={status === "sending"}
                className="rounded-full bg-ink px-6 py-3 font-bold text-cream transition hover:scale-105 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Join the list"}
              </motion.button>
            </form>

            <div className="mt-4 h-6" aria-live="polite">
              <AnimatePresence mode="wait">
                {status !== "idle" && status !== "sending" && (
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-sm font-bold ${
                      status === "done" ? "text-emerald-700" : "text-ink/70"
                    }`}
                  >
                    {MESSAGES[status]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
