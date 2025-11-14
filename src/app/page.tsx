import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  if (!allPosts.length) {
    return null;
  }

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const quickTakes = morePosts.slice(0, 3);
  const remainingPosts = morePosts.slice(3);
  const tagCloud = Array.from(
    new Set(allPosts.flatMap((post) => post.tags ?? []))
  ).slice(0, 12);

  const formatBriefDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    }).format(new Date(value));

  const snapshotMetrics = [
    { label: "Teams interviewed", value: "48" },
    { label: "Checklists shared", value: "42" },
    { label: "Launch rescues", value: "17" },
  ];

  return (
    <main className="relative overflow-hidden pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-haze-field opacity-70" />
      <Header />
      <Container>
        <HeroPost
          title={heroPost.title}
          image={heroPost.image}
          slug={heroPost.slug}
          meta={heroPost.meta}
          tags={heroPost.tags}
          date={heroPost.date}
          readingMinutes={heroPost.readingMinutes}
        />

        {quickTakes.length > 0 && (
          <section id="quick-takes" className="mt-20 animate-fade-up">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <span className="eyebrow">Quick takes</span>
                <h2 className="section-title text-balance">
                  Three sharp reads for your next quality sync
                </h2>
                <p className="section-subtitle">
                  Lightning summaries from manual testing shifts, enablement
                  rituals, and resilient release plays.
                </p>
              </div>
              <div className="btn-ghost self-start md:self-auto">
                Updated weekly
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {quickTakes.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="surface-panel group flex h-full flex-col gap-4 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-ink-400">
                    <span>Note {index + 1}</span>
                    {post.date && <span>{formatBriefDate(post.date)}</span>}
                  </div>
                  <h3 className="font-display text-2xl leading-snug text-ink-900 transition-colors duration-200 group-hover:text-ink-700">
                    {post.title}
                  </h3>
                  <p className="line-clamp-4 text-sm leading-relaxed text-ink-600">
                    {post.meta}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.35em] text-ink-500">
                    <span>Read memo</span>
                    {typeof post.readingMinutes === "number" && (
                      <span>{post.readingMinutes} min</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section id="themes" className="mt-24 animate-fade-up">
          <div className="grid gap-8 rounded-5xl border border-ink-900/8 bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <span className="eyebrow">Themes we follow</span>
                <h2 className="section-title text-balance">
                  The manual testing essentials shaping 2025
                </h2>
                <p className="section-subtitle">
                  Tags pulled from each feature. Explore what repeatedly shows
                  up across resilient QA teams.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-ink-600 sm:grid-cols-3">
                {snapshotMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-ink-900/10 bg-cloud-50/80 px-4 py-3 text-center shadow-outline"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ink-400">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-display text-ink-800">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tagCloud.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between rounded-3xl border border-ink-900/8 bg-cloud-50/90 px-5 py-4"
                >
                  <span className="text-sm font-semibold text-ink-700">
                    #{tag}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-ink-400">
                    Trending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="mt-24 animate-fade-up">
          <div className="relative overflow-hidden rounded-5xl border border-ink-900/8 bg-gradient-to-br from-bloom-50 via-white to-tide-50 px-8 py-12 shadow-soft md:px-12">
            <div className="grid gap-10 md:grid-cols-[1.4fr,0.9fr] md:items-center">
              <div className="space-y-5">
                <span className="eyebrow text-ink-400">Stay ahead</span>
                <h2 className="section-title text-balance">
                  Get the Abeju field notes in your inbox
                </h2>
                <p className="section-subtitle">
                  A short Sunday digest highlighting fresh manual testing
                  insights, checklists, and leadership prompts.
                </p>
              </div>
              <div className="surface-panel flex flex-col gap-4 rounded-4xl border border-ink-900/10 bg-white/90 p-6 shadow-outline">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-400">
                  Join the waitlist
                </p>
                <p className="text-sm leading-relaxed text-ink-600">
                  We&apos;re polishing the subscriber experience. Drop us a note
                  and we&apos;ll invite you as soon as it ships.
                </p>
                <Link
                  href="mailto:hello@abeju.com"
                  className="btn-primary self-start"
                >
                  Email the editor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {remainingPosts.length > 0 && <MoreStories posts={remainingPosts} />}
      </Container>
      <Footer />
    </main>
  );
}
