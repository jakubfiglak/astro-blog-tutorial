import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await pagesGlobToRssItems(import.meta.glob("./**/*.md"));

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site || "https://example.com",
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.pubDate,
      author: post.author,
      link: `https://astro-learner.netlify.app${post.link}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
