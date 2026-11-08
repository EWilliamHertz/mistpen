import { HUES } from "@/lib/data";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xl font-extrabold tracking-tight ${className}`}
    >
      <span className="flex -space-x-1.5" aria-hidden="true">
        {HUES.map((h) => (
          <span
            key={h.id}
            className="h-4 w-4 rounded-full ring-2 ring-cream"
            style={{ background: h.color }}
          />
        ))}
      </span>
      MistPen
    </span>
  );
}
