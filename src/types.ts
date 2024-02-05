export interface Frontmatter {
  title: string;
  author: string;
  pubDate: string;
  description: string;
  image: { url: string; alt: string };
  tags: Array<string>;
}
