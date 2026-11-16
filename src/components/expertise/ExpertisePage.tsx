"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Gavel,
  Globe,
  Landmark,
  Lightbulb,
  Shield,
  Users,
  Zap,
} from "lucide-react";

type ExpertiseItem = {
  title: string;
  icon: React.ElementType;
  description: string;
  points?: string[];
};

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Corporate & Commercial",
    icon: Building2,
    description:
      "Corporate structuring, joint ventures, shareholder agreements, governance frameworks, and cross-border commercial transactions.",
  },
  {
    title: "Foreign Direct Investment (FDI)",
    icon: Globe,
    description:
      "Advising foreign investors on Saudi market entry, licensing, MISA approvals, regional headquarters setup, and restructuring.",
  },
  {
    title: "Regulatory Advisory & Public Policy",
    icon: Shield,
    description:
      "Advising and representing clients before key Saudi authorities, ensuring regulatory certainty within evolving legal frameworks.",
  },
  {
    title: "Dispute Resolution & Litigation",
    icon: Gavel,
    description:
      "Strategic representation in commercial disputes, tax litigation, regulatory investigations, and arbitration matters.",
  },
  {
    title: "Employment & Executive Matters",
    icon: Users,
    description:
      "Advising corporates on executive contracts, Saudization compliance, workforce restructuring, and dispute mitigation.",
  },
  {
    title: "Intellectual Property & Technology",
    icon: Lightbulb,
    description:
      "IP protection, licensing agreements, technology transactions, and digital regulatory compliance.",
  },
  {
    title: "Tax, Zakat & Transfer Pricing",
    icon: Landmark,
    description:
      "We are among the few Saudi firms with institutional experience in committee proceedings since inception.",
    points: [
      "ZATCA advisory",
      "Objection procedures",
      "Representation before Committees for Resolution of Tax Violations and Disputes",
      "Settlement negotiations",
      "Transfer pricing advisory",
    ],
  },
  {
    title: "Sector-Specific Advisory",
    icon: Zap,
    description:
      "Strategic counsel across Energy & Infrastructure, Healthcare & Pharmaceuticals, Aviation & Maritime, Real Estate & Development, and IT & Telecom.",
  },
];

const sectorItems = [
  {
    title: "Energy & Infrastructure",
    description:
      "Vision 2030 Lead Sector - Power, renewables, conventional energy, and large-scale public-private infrastructure projects.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    description:
      "Regulatory compliance for healthcare providers, pharmaceutical licensing, health tech, and medical practice regulations.",
  },
  {
    title: "Aviation & Maritime",
    description:
      "GACA regulatory compliance, commercial aircraft leasing, maritime logistics, transport concessions, and port operations.",
  },
  {
    title: "Real Estate & Development",
    description:
      "Mega-project advisory, off-plan sales licensing (Wafi), zoning, FIDIC construction contracts, and property disputes.",
  },
  {
    title: "IT, Media & Telecommunications",
    description:
      "CST regulatory compliance, cloud computing frameworks, telecommunications licensing, cyber governance, and media rights.",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

const blurItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(14px)", clipPath: "inset(0 0 14% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.82, ease },
  },
};

function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + index * 0.1, duration: 0.88, ease }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function ScrollTextReveal({ children }: { children: string }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            variants={{
              hidden: { y: "112%" },
              visible: {
                y: 0,
                transition: { delay: index * 0.08, duration: 0.82, ease },
              },
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function ExpertisePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.42]);
  const ruleScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.42]);

  return (
    <main className="relative bg-white">
      <section ref={heroRef} className="relative overflow-hidden border-b border-brand bg-bg-base px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-24">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              <TextReveal delay={0.08}>Legal Expertise</TextReveal>
            </h1>
            <motion.div style={{ scaleX: ruleScale }} className="mt-8 h-px w-full max-w-xl origin-left bg-brand" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.28, duration: 0.82, ease }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-black/58">
              Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={container}
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <motion.h2 variants={blurItem} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>Practice Areas</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p variants={blurItem} className="max-w-2xl text-sm leading-7 text-black/52 lg:justify-self-end">
              Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.
            </motion.p>
          </div>

          <motion.div variants={container} className="grid gap-px bg-brand md:grid-cols-2 xl:grid-cols-3">
            {expertiseItems.map((area, index) => {
              const Icon = area.icon;
              const isExpanded = expandedIndex === index;

              return (
                <motion.article
                  key={area.title}
                  variants={blurItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease }}
                  onClick={() =>
                    setExpandedIndex((prev) => (prev === index ? null : index))
                  }
                  className="group flex min-h-0 md:min-h-[340px] cursor-pointer md:cursor-default flex-col bg-white p-6 text-left transition-colors md:hover:bg-brand md:hover:text-white sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center border border-brand text-brand transition-colors md:group-hover:border-white/20 md:group-hover:text-white">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-brand transition-colors md:group-hover:text-white/42">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-brand transition-transform duration-300 md:hidden ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-8 md:mt-12">
                    <h3 className="text-2xl font-light leading-tight text-brand transition-colors sm:text-3xl md:group-hover:text-white">
                      {area.title}
                    </h3>
                  </div>

                  {/* Mobile View: Collapsed by default ("just the title in short"), expands to show description and points */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out md:hidden ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-brand/15 pt-4">
                        {area.description && (
                          <p className="text-sm leading-6 text-black/65">
                            {area.description}
                          </p>
                        )}
                        {area.points && area.points.length > 0 && (
                          <ul className="mt-3.5 space-y-2">
                            {area.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2.5 text-xs sm:text-sm leading-5 text-black/75"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Desktop View: Always Visible in the multi-column grid */}
                  <div className="hidden md:block">
                    {area.description && (
                      <p className="mt-5 text-sm leading-7 text-black/52 transition-colors group-hover:text-white/62">
                        {area.description}
                      </p>
                    )}
                    {area.points && area.points.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {area.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-black/58 transition-colors group-hover:text-white/68"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand transition-colors group-hover:bg-white/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={container}
        className="border-t border-brand px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <motion.h2 variants={blurItem} className="mt-4 text-5xl font-semibold uppercase leading-[0.98] text-brand sm:text-6xl lg:text-7xl">
              <ScrollTextReveal>{"Sector-Specific\nAdvisory."}</ScrollTextReveal>
            </motion.h2>
          </div>

          <motion.div variants={container} className="grid gap-px bg-brand">
            {sectorItems.map((sector, index) => (
              <motion.article
                key={sector.title}
                variants={blurItem}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease }}
                className="group grid gap-6 bg-white p-6 transition-colors hover:bg-brand hover:text-white sm:grid-cols-[0.18fr_0.82fr] sm:p-7"
              >
                <span className="font-mono text-xs text-brand transition-colors group-hover:text-white/42">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">{sector.title}</h3>
                  {sector.description && (
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-black/52 transition-colors group-hover:text-white/62">
                      {sector.description}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-gray-850 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={blurItem} className="text-xs font-light uppercase text-white/45">Next Step</motion.p>
            <motion.h2 variants={blurItem} className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Discuss Your Mandate</ScrollTextReveal>
            </motion.h2>
            <motion.p variants={blurItem} className="mt-5 max-w-xl text-sm leading-7 text-white/58">
              Engage our corporate team for strategic counsel on your commercial objectives in Saudi Arabia.
            </motion.p>
          </div>
          <motion.div variants={blurItem}>
            <Link href="/contact" className="group inline-flex min-h-12 items-center gap-4 border border-white bg-white px-6 text-sm font-medium uppercase text-gray-850 transition-colors hover:bg-gray-850 hover:text-white">
              Submit Enquiry
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
