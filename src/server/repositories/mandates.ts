import "server-only";
import { mandatesData } from "@/content/mandates";
import { findAdjacent } from "@/lib/records";

export async function getMandates() {
  return mandatesData;
}

export async function getMandateBySlug(slug: string) {
  return mandatesData.find((record) => record.slug === slug);
}

export async function getMandateWithAdjacent(slug: string) {
  return findAdjacent(mandatesData, (record) => record.slug === slug);
}
