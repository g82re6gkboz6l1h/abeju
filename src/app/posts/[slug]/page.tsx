import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Footer from "@/app/_components/footer";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="relative overflow-hidden pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-haze-field opacity-60" />
      <Header />
      <Container>
        <article className="mx-auto mb-32 mt-10 max-w-3xl rounded-5xl border border-ink-900/10 bg-white/90 px-6 py-10 shadow-soft sm:px-10">
          <PostHeader
            title={post.title}
            date={post.date}
            meta={post.meta}
            tags={post.tags}
            readingMinutes={post.readingMinutes}
          />
          <PostBody content={content} />
        </article>
      </Container>
      <Footer />
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    description: post.meta,
    keywords: post.keywords,
    openGraph: {
      title,
      description: post.meta,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
