import type { HueId } from "@/lib/data";

export function HueIcon({ id, className }: { id: HueId; className?: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  switch (id) {
    case "scent":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
          <path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16Z" />
        </svg>
      );
    case "fresh":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
          <path d="M5 19 13 11" />
        </svg>
      );
    case "clean":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M12 3c3 4 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 3-6 6-10Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
          <circle cx="6" cy="12" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="18" cy="12" r="1.8" />
        </svg>
      );
  }
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
