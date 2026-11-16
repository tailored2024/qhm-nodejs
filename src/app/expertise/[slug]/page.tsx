import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMandates, getMandateBySlug, getMandateWithAdjacent } from "@/server/repositories/mandates";
import MandateDetailPage from "@/components/mandates/MandateDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const mandatesData = await getMandates();
  return mandatesData.map((mandate) => ({
    slug: mandate.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mandate = await getMandateBySlug(slug);

  if (!mandate) {
    return {
      title: "Mandate Not Found | QHM Law Firm",
    };
  }

  return {
    title: `${mandate.title} – Our Mandate | QHM Law Firm`,
    description: mandate.metaDescription,
    alternates: {
      canonical: `/expertise/${mandate.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${mandate.title} – Our Mandate | QHM Law Firm`,
      description: mandate.metaDescription,
      url: `/expertise/${mandate.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${mandate.title} – Our Mandate | QHM Law Firm`,
      description: mandate.metaDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const result = await getMandateWithAdjacent(slug);
  if (!result) notFound();
  const { record: mandate, adjacent: { prev, next } } = result;

  return (
    <MandateDetailPage
      mandate={mandate}
      adjacent={{ prev, next }}
    />
  );
}
