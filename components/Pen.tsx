import { useId } from "react";
import type { Hue } from "@/lib/data";

/** Original illustration of a MistPen spray pen. viewBox is 60 x 260, nozzle tip at (30, 14). */
export default function Pen({ hue, className = "" }: { hue: Hue; className?: string }) {
  const gid = useId();
  return (
    <svg viewBox="0 0 60 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.12" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="1" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="27" y="14" width="6" height="18" rx="3" fill="#C9CAD6" />
      <rect x="25" y="28" width="10" height="44" rx="4" fill="#1B1B2F" />
      <rect x="14" y="68" width="32" height="178" rx="16" fill={hue.color} />
      <rect x="14" y="68" width="32" height="178" rx="16" fill={`url(#${gid})`} />
      <rect x="44" y="92" width="5" height="64" rx="2.5" fill="#1B1B2F" opacity="0.3" />
      <rect x="19" y="156" width="22" height="64" rx="8" fill="#fff" opacity="0.92" />
      <text
        transform="rotate(-90 30 188)"
        x="30"
        y="191.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1.6"
        fill="#1B1B2F"
      >
        {hue.job.toUpperCase()}
      </text>
    </svg>
  );
}
