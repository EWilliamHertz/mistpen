import Logo from "./Logo";

const LINKS = [
  { href: "#colours", label: "Colour code" },
  { href: "#uses", label: "Uses" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label="MistPen home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition hover:scale-105"
        >
          Build your set
        </a>
      </div>
    </header>
  );
}
