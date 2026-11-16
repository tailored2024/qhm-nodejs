/** Plain serializable values shared by the server and existing client components. */
export type InsightPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  category: string;
  image?: string;
  imageAlt?: string;
};

export type PublicationInline = {
  text: string;
  href?: string;
};

export type PublicationBlock =
  | { type: "paragraph"; content: PublicationInline[] }
  | { type: "heading"; level: 2 | 3 | 4 | 5 | 6; content: PublicationInline[] }
  | { type: "list"; ordered: boolean; items: PublicationInline[][] };

export type Publication = InsightPost & {
  slug: string;
  publishedAt: string;
  sourceUrl: string;
  body: PublicationBlock[];
};
