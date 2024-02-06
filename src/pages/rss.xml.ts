import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site || "https://example.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      author: post.data.author,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
