import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectorsData } from "@/data/sectors";
import SectorDetailPage from "@/components/sectors/SectorDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sectorsData.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorsData.find((s) => s.slug === slug);

  if (!sector) {
    return {
      title: "Sector Not Found | QHM Law Firm",
    };
  }

  return {
    title: `${sector.title} – Sector Advisory | QHM Law Firm`,
    description: sector.metaDescription,
    alternates: {
      canonical: `/sectors/${sector.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${sector.title} – Sector Advisory | QHM Law Firm`,
      description: sector.metaDescription,
      url: `/sectors/${sector.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${sector.title} – Sector Advisory | QHM Law Firm`,
      description: sector.metaDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const index = sectorsData.findIndex((s) => s.slug === slug);

  if (index === -1) {
    notFound();
  }

  const sector = sectorsData[index];
  const prev = index > 0 ? sectorsData[index - 1] : undefined;
  const next = index < sectorsData.length - 1 ? sectorsData[index + 1] : undefined;

  return (
    <SectorDetailPage
      sector={sector}
      adjacent={{ prev, next }}
    />
  );
}
