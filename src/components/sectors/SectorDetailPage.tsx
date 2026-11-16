"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Briefcase,
  Scale,
} from "lucide-react";
import type { SectorItem } from "@/data/sectors";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const valuePropositions = [
  {
    title: "Regulatory Certainty",
    description:
      "We guide corporates through Saudi Arabia’s evolving legal framework with clarity and strategic foresight, ensuring compliance while protecting commercial interests.",
    icon: ShieldCheck,
  },
  {
    title: "Transactional Risk Management",
    description:
      "From structuring investments to negotiating cross-border agreements, we mitigate legal exposure and protect enterprise value at every stage.",
    icon: Briefcase,
  },
  {
    title: "Government & Regulatory Engagement",
    description:
      "We advise and represent clients before key Saudi authorities, including ZATCA and dispute resolution committees, leveraging deep institutional knowledge.",
    icon: Building2,
  },
  {
    title: "Dispute Avoidance & Resolution",
    description:
      "We provide litigation strategy, tax dispute representation, and arbitration support for complex corporate disputes.",
    icon: Scale,
  },
];

export default function SectorDetailPage({
  sector,
  adjacent,
}: {
  sector: SectorItem;
  adjacent: {
    prev?: SectorItem;
    next?: SectorItem;
  };
}) {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Top Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-brand/15 bg-neutral-50/80 px-5 py-4 backdrop-blur-sm sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs uppercase tracking-wider">
          <Link
            href="/expertise"
            className="group inline-flex items-center gap-2 font-medium text-brand transition-colors hover:text-black"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>All Practice Areas</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-brand/60">
            <span>SECTOR {sector.number} OF 05</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-3.5 py-1 text-xs uppercase tracking-widest text-white/80"
            >
              <span>{sector.eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>{sector.number}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-light leading-tight sm:text-6xl lg:text-7xl"
            >
              {sector.heroHeadline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/85 sm:text-xl"
            >
              {sector.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="border-l-2 border-brand pl-6 sm:pl-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand/60">
              Sector Advisory Positioning
            </span>
            <p className="mt-4 max-w-4xl text-lg font-light leading-relaxed text-brand sm:text-2xl sm:leading-10">
              {sector.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* Representative Mandates */}
      {sector.mandates.length > 0 && (
        <section className="border-t border-brand/10 bg-neutral-900 px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                  Track Record & Precedent
                </span>
                <h2 className="mt-3 text-3xl font-light sm:text-4xl lg:text-5xl">
                  Representative Mandates
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sector.mandates.map((mandate, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
                >
                  <div>
                    <span className="inline-block border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-mono tracking-wider text-white/80">
                      {mandate.category}
                    </span>
                    <h3 className="mt-5 text-base font-normal leading-snug text-white sm:text-lg">
                      {mandate.headline}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {mandate.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Institutional Strengths */}
      <section className="border-t border-brand/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand/60">
            Core Value Proposition
          </span>
          <h2 className="mt-3 text-3xl font-light text-brand sm:text-4xl">
            Partner-Led Advisory Model
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valuePropositions.map((vp) => {
              const Icon = vp.icon;
              return (
                <div
                  key={vp.title}
                  className="border border-brand/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-brand/20 bg-neutral-50 text-brand">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl font-light text-brand">
                    {vp.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {vp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Adjacent Sector Navigation */}
      <section className="border-t border-brand/15 bg-neutral-50 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {adjacent.prev ? (
              <Link
                href={`/sectors/${adjacent.prev.slug}`}
                className="group flex items-center gap-3 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-brand/20 bg-white text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand/50">
                    Previous Sector
                  </span>
                  <p className="text-sm font-medium text-brand transition-colors group-hover:text-black">
                    {adjacent.prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {adjacent.next ? (
              <Link
                href={`/sectors/${adjacent.next.slug}`}
                className="group flex items-center gap-3 text-right self-end sm:self-auto"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand/50">
                    Next Sector
                  </span>
                  <p className="text-sm font-medium text-brand transition-colors group-hover:text-black">
                    {adjacent.next.title}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-brand/20 bg-white text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              Corporate Advisory
            </span>
            <h2 className="mt-2 text-3xl font-light leading-tight sm:text-4xl">
              Engage with QHM&apos;s Corporate Advisory Team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              For multinational corporations, institutional clients, and
              international law firms requiring trusted on-the-ground counsel in
              Saudi Arabia, our Corporate Advisory Team provides partner-led,
              commercially focused legal support delivered to international
              standards.
            </p>
            <p className="mt-2 text-xs text-white/60">
              We prioritize mandates aligned with our corporate advisory focus.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 border border-white bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <span>Discuss Your Mandate</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
