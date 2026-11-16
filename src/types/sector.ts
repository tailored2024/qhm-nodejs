export interface SectorMandate {
  category: string;
  headline: string;
  details: string;
}

export interface SectorItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  heroHeadline: string;
  intro: string;
  positioning: string;
  mandates: SectorMandate[];
  metaDescription: string;
}
