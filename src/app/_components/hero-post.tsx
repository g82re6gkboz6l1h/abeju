import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  tags?: string[];
  date?: string;
  readingMinutes?: number;
};

export function HeroPost({
  title,
  image,
  slug,
  meta,
  tags = [],
  date,
  readingMinutes,
}: Props) {
  const highlightedTags = tags.slice(0, 4);
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  const leadTag = highlightedTags[0] ?? "Manual QA";

  const stats = [
    {
      label: "Last updated",
      value: formattedDate ?? "This week",
      detail: "Fresh from the studio",
    },
    {
      label: "Reading time",
      value:
        typeof readingMinutes === "number" ? `${readingMinutes} min` : "6 min",
      detail: "Estimated effort",
    },
    {
      label: "Primary theme",
      value: leadTag,
      detail: "Focus area",
    },
  ];

  return (
    <section id="spotlight" className="mt-12 animate-fade-up">
      <div className="relative overflow-hidden rounded-5xl border border-ink-900/5 bg-white px-8 py-12 shadow-float md:px-12 lg:px-14">
        <div
          className="pointer-events-none absolute -top-32 right-[-15%] h-72 w-72 rounded-full bg-gradient-to-br from-tide-200/60 via-bloom-200/50 to-amber-200/70 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="flex flex-col justify-center gap-7">
            <div className="space-y-4">
              <span className="eyebrow text-ink-400">
                Editor&apos;s spotlight
              </span>
              <h1 className="font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                {meta}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/posts/${slug}`} className="btn-primary">
                Read the story
              </Link>
              <Link
                href="#quick-takes"
                className="inline-flex items-center text-sm font-semibold text-ink-600 hover:text-ink-800"
              >
                Browse quick takes →
              </Link>
            </div>

            {highlightedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs font-medium text-ink-500">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="badge-tonal">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <dl className="grid gap-4 pt-2 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-ink-900/5 bg-cloud-50/80 px-4 py-4 shadow-outline"
                >
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-ink-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-display text-ink-900">
                    {item.value}
                  </dd>
                  <dd className="mt-1 text-sm text-ink-500">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-ink-900/10 bg-cloud-50/80 shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/10 via-transparent to-transparent" />
            <CoverImage
              title={title}
              src={image}
              slug={slug}
              aspect="portrait"
            />
            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3 rounded-3xl border border-white/80 bg-white/90 px-5 py-4 text-ink-700 shadow-soft backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-ink-400">
                <span>Journal entry</span>
                {formattedDate && <span>{formattedDate}</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="badge-tonal bg-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
