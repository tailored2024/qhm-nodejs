import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicationBySlug, getPublicationSlugs } from "@/server/repositories/publications";
import InsightDetailPage from "@/components/insights/InsightDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getPublicationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublicationBySlug(slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: post.href,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function Insight({ params }: Props) {
  const { slug } = await params;
  const post = await getPublicationBySlug(slug);
  if (!post) notFound();

  return <InsightDetailPage post={post} />;
}
