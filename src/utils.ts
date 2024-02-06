export function get_unique_tags<T extends { data: { tags: string[] } }>(
  posts: T[]
) {
  return [...new Set(posts.map((post) => post.data.tags).flat())];
}
