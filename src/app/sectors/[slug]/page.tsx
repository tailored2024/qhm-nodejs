import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSectors, getSectorBySlug, getSectorWithAdjacent } from "@/server/repositories/sectors";
import SectorDetailPage from "@/components/sectors/SectorDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const sectorsData = await getSectors();
  return sectorsData.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = await getSectorBySlug(slug);

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
  const result = await getSectorWithAdjacent(slug);
  if (!result) notFound();
  const { record: sector, adjacent: { prev, next } } = result;

  return (
    <SectorDetailPage
      sector={sector}
      adjacent={{ prev, next }}
    />
  );
}
