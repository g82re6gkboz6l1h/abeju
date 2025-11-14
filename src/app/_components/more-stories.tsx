import Link from "next/link";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  if (!posts.length) {
    return null;
  }

  return (
    <section id="reports" className="mt-24 animate-fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="eyebrow">In-depth reports</span>
          <h2 className="section-title text-balance">
            Blueprints for resilient quality programmes
          </h2>
          <p className="section-subtitle">
            Extended essays, step-by-step frameworks, and reference checklists
            compiled from front-line test engineering teams.
          </p>
        </div>
        <Link
          href="#newsletter"
          className="btn-secondary self-start md:self-auto"
        >
          Receive weekly briefings
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            image={post.image}
            slug={post.slug}
            meta={post.meta}
            date={post.date}
            tags={post.tags}
            readingMinutes={post.readingMinutes}
          />
        ))}
      </div>
    </section>
  );
}
