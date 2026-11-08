import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-ink/60 sm:flex-row sm:items-center">
        <Logo />
        <p>Empty, refillable 3 ml spray pens. Fill only with products suited to their use.</p>
        <p>© {new Date().getFullYear()} MistPen</p>
      </div>
    </footer>
  );
}
