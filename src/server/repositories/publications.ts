import "server-only";
import { publications } from "@/content/publications";
import type { InsightPost } from "@/types/publication";

/** Return summaries only, so full bodies are not serialized to the listing UI. */
export async function getPublications(): Promise<InsightPost[]> {
  return publications.map(({ id, title, date, excerpt, href, category, image, imageAlt }) => ({
    id, title, date, excerpt, href, category,
    ...(image ? { image, imageAlt } : {}),
  }));
}

export async function getPublicationBySlug(slug: string) {
  return publications.find((publication) => publication.slug === slug);
}

export async function getPublicationSlugs(): Promise<string[]> {
  return publications.map(({ slug }) => slug);
}
