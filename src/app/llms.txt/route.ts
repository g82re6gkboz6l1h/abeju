import { getAllPosts } from "@/lib/api";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abeju.com";

  // Group posts by category/topic if needed, or just list them
  const postsList = posts
    .map((post) => {
      const title = post.title;
      const url = `${baseUrl}/posts/${post.slug}`;
      const description = post.meta || "";
      return `- [${title}](${url}): ${description}`;
    })
    .join("\n");

  const llmsTxt = `# Abeju

> Abeju is a Next.js hub focused on intelligent testing systems, automation craft, and quality leadership. It chronicles insights on manual testing, automated testing, AI-powered testing solutions, and best practices for software quality assurance.

Abeju provides in-depth articles about software testing methodologies, comparing manual and automated approaches, exploring AI innovations in testing (including Zof AI), and sharing practical techniques for QA professionals. The content is aimed at testers, QA engineers, developers, and technical leaders who want to stay current with testing strategies and quality assurance practices.

## Articles

${postsList}

## About This Site

This is a Next.js blog using:
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Markdown with gray-matter for blog posts
- Inter and Playfair Display fonts

All blog post URLs follow the pattern \`/posts/[slug]\` where the slug matches the markdown filename in the \`_posts\` directory.
`;

  return new NextResponse(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
