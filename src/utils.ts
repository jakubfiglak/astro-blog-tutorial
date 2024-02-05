import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "./types";

export function get_unique_tags(posts: MarkdownInstance<Frontmatter>[]) {
  return [...new Set(posts.map((post) => post.frontmatter.tags).flat())];
}
