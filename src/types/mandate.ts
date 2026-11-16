export interface MandateItem {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  points?: string[];
  positioning: string;
  mandates: {
    category: string;
    headline: string;
    details: string;
  }[];
  metaDescription: string;
}
