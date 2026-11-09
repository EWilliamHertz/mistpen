import type { Hue } from "@/lib/data";

/**
 * Produktbild på en MistPen i vald färg (frilagd PNG, 100 x 846 px).
 * Bilden fyller sin ruta med `object-contain`, så ytterelementet styr storleken.
 */
export default function Pen({ hue, className = "" }: { hue: Hue; className?: string }) {
  return (
    <img
      src={hue.image}
      alt={`MistPen i färgen ${hue.name.toLowerCase()}`}
      width={100}
      height={846}
      draggable={false}
      className={`select-none object-contain ${className}`}
    />
  );
}
