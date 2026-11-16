import "server-only";
import { sectorsData } from "@/content/sectors";
import { findAdjacent } from "@/lib/records";

export async function getSectors() {
  return sectorsData;
}

export async function getSectorBySlug(slug: string) {
  return sectorsData.find((record) => record.slug === slug);
}

export async function getSectorWithAdjacent(slug: string) {
  return findAdjacent(sectorsData, (record) => record.slug === slug);
}
