import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  date?: string;
  meta?: string;
  tags?: string[];
  readingMinutes?: number;
};

export function PostHeader({ title, date, meta, tags, readingMinutes }: Props) {
  return (
    <div className="animate-fade-up">
      <PostTitle>{title}</PostTitle>
      <div className="space-y-6">
        {meta && <p className="text-lg leading-relaxed text-ink-600">{meta}</p>}
        <div className="flex flex-wrap items-center gap-4">
          {date && (
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-600 shadow-outline">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <DateFormatter dateString={date} />
            </span>
          )}
          {typeof readingMinutes === "number" && (
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-600 shadow-outline">
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
                  d="M12 8v4l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readingMinutes} min read
            </span>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="badge-tonal px-4 py-2">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-ink-900/10 to-transparent"></div>
      </div>
    </div>
  );
}
