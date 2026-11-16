import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mandatesData } from "@/data/mandates";
import MandateDetailPage from "@/components/mandates/MandateDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mandatesData.map((mandate) => ({
    slug: mandate.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mandate = mandatesData.find((m) => m.slug === slug);

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
  const index = mandatesData.findIndex((m) => m.slug === slug);

  if (index === -1) {
    notFound();
  }

  const mandate = mandatesData[index];
  const prev = index > 0 ? mandatesData[index - 1] : undefined;
  const next = index < mandatesData.length - 1 ? mandatesData[index + 1] : undefined;

  return (
    <MandateDetailPage
      mandate={mandate}
      adjacent={{ prev, next }}
    />
  );
}
