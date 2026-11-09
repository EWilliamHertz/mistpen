"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const spread = -55 + (i * 110) / 15; // degrees from vertical
  const rad = (spread * Math.PI) / 180;
  const dist = 70 + ((i * 37) % 60);
  return {
    x: Math.sin(rad) * dist,
    y: -Math.cos(rad) * dist,
    size: 6 + ((i * 5) % 9),
    delay: (i % 4) * 0.025,
  };
});

/**
 * Burst of mist particles from the nozzle. Place inside a `relative` wrapper that is
 * shaped like the pen (60:260). Bump `burst` to trigger a new spray.
 */
export default function Mist({ burst, color }: { burst: number; color: string }) {
  if (burst === 0) return null;
  return (
    <div className="pointer-events-none absolute left-1/2 top-[0.5%] h-0 w-0" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={`${burst}-${i}`}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: color,
            filter: "blur(1.5px)",
          }}
          initial={{ opacity: 0.85, x: 0, y: 0, scale: 0.4 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 1.8 }}
          transition={{ duration: 0.95, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
