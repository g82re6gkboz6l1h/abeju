import Link from "next/link";

const navLinks = [
  { href: "#quick-takes", label: "Quick Takes" },
  { href: "#themes", label: "Themes" },
  { href: "#reports", label: "In-Depth" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-wide text-ink-800"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-bloom-400 via-amber-300 to-tide-400 text-base font-display uppercase text-white shadow-soft">
              ab
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg">Abeju</p>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-ink-400">
                Quality journal
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold text-ink-500 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#newsletter"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Join the digest
          </Link>
        </div>

        <div
          className="flex items-center gap-5 overflow-x-auto pb-4 text-xs font-semibold uppercase tracking-[0.35em] text-ink-500 md:hidden"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-ink-800"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#newsletter"
            className="whitespace-nowrap transition-colors hover:text-ink-800"
          >
            Digest
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
