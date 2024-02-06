export interface Frontmatter {
  title: string;
  author: string;
  pubDate: Date;
  description: string;
  image: { url: string; alt: string };
  tags: Array<string>;
}
