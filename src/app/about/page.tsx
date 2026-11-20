import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a Saudi-based corporate law firm advising multinationals, financial institutions, and regional headquarters.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
