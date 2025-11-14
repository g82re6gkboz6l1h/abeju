import Link from "next/link";

const navLinks = [
  { href: "#spotlight", label: "Spotlight" },
  { href: "#quick-takes", label: "Quick takes" },
  { href: "#themes", label: "Themes" },
  { href: "#reports", label: "In-depth" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-900/10 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-bloom-400 via-amber-300 to-tide-400 text-base font-display uppercase text-white shadow-soft">
              ab
            </span>
            <p className="font-display text-2xl text-ink-800">Abeju</p>
          </div>
          <p className="text-sm leading-relaxed text-ink-500">
            Manual testing perspectives for thoughtful quality leaders. Field
            notes on rituals, storytelling, and durable release practices.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm text-ink-500 md:text-right">
          <div className="flex flex-wrap gap-4 uppercase tracking-[0.25em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-xs text-ink-400">
            © {year} Abeju. Crafted with care for the QA community.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
