import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact our team for corporate legal counsel in Saudi Arabia.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
