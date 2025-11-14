import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  date?: string;
  tags?: string[];
  readingMinutes?: number;
};

export function PostPreview({
  title,
  image,
  slug,
  meta,
  date,
  tags = [],
  readingMinutes,
}: Props) {
  const primaryTag = tags[0];
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink-900/8 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-float">
      <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-cloud-50/80">
        <CoverImage slug={slug} title={title} src={image} aspect="square" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
        {primaryTag && (
          <span className="absolute left-4 top-4 badge-tonal bg-white/70">
            {primaryTag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-6">
        {formattedDate && (
          <time
            className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-ink-400"
            dateTime={date}
          >
            {formattedDate}
          </time>
        )}

        <h3 className="mt-4 font-display text-2xl leading-snug text-ink-900 transition-colors duration-200 group-hover:text-ink-700">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-600">
          {meta}
        </p>

        <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-ink-500">
          <Link
            href={`/posts/${slug}`}
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.3em] text-ink-700"
          >
            Open file
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <span>
            {typeof readingMinutes === "number"
              ? `${readingMinutes} MIN`
              : "FIELD LOG"}
          </span>
        </div>
      </div>
    </article>
  );
}
