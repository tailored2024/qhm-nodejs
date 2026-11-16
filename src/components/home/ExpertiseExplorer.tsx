"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ChevronDown,
  Globe,
  Gavel,
  Lightbulb,
  Scale,
  Shield,
  Users,
  Zap,
  Calculator,
} from "lucide-react";
import {
  practiceAreas,
  ease,
  revealContainer,
  revealItem,
  PremiumButton,
  ScrollTextReveal,
  SectionLabel,
} from "./shared";

const practiceIcons: Record<string, React.ElementType> = {
  "Corporate & Commercial": Building2,
  "Joint Ventures & FDI": Globe,
  "Regulatory Advisory": Shield,
  "Dispute Resolution": Gavel,
  "Employment & Labor": Users,
  "IP & Technology": Lightbulb,
  "Tax & Zakat": Calculator,
  "Sector Advisory": Zap,
};

export default function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeArea = practiceAreas[safeActiveIndex] ?? practiceAreas[0];
  const ActiveIcon = practiceIcons[activeArea.title] ?? Scale;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={revealContainer}
      className="bg-white px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-14 flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
          <motion.div
            variants={revealItem}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
          />
          <div>
            <SectionLabel>Practice Areas</SectionLabel>
            <motion.h2
              variants={revealItem}
              className="mt-3 text-4xl font-light leading-tight text-brand md:text-5xl"
            >
              <ScrollTextReveal>Our Mandate</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.div variants={revealItem}>
            <PremiumButton href="/expertise">All Practice Areas</PremiumButton>
          </motion.div>
        </div>

        <div className="grid gap-px bg-brand lg:grid-cols-[0.95fr_1.05fr]">
          {/* Desktop Preview Panel (hidden on mobile; mobile cards expand inline so users never have to scroll up) */}
          <motion.div
            variants={revealItem}
            className="relative hidden lg:flex flex-col justify-between overflow-hidden p-8 text-white sm:p-10 lg:min-h-[560px] lg:p-12 bg-brand"
          >
            <AnimatePresence mode="wait">
              {activeArea.image ? (
                <motion.img
                  key={activeArea.image}
                  src={activeArea.image}
                  alt={activeArea.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute inset-0 h-full w-full object-cover z-0"
                />
              ) : null}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.title}
                initial={{ opacity: 0, x: -24, clipPath: "inset(0 18% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0, x: 18, clipPath: "inset(0 0 0 14%)" }}
                transition={{ duration: 0.5, ease }}
                className="relative z-10 flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center border border-white/20">
                      <ActiveIcon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-sm text-white/40">
                      {String(safeActiveIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-14 max-w-xl text-5xl font-light leading-[0.98] lg:text-6xl">
                    {activeArea.title}
                  </h3>
                </div>

                <div className="mt-12">
                  <p className="max-w-xl text-base leading-7 text-white/80">
                    {activeArea.description}
                  </p>
                  {activeArea.points && activeArea.points.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {activeArea.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/85"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-8">
                    <PremiumButton href={activeArea.href} inverse>
                      Explore Practice
                    </PremiumButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid gap-px bg-brand sm:grid-cols-2">
            {practiceAreas.map((area, i) => {
              const Icon = practiceIcons[area.title] ?? Scale;
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={area.title}
                  custom={i}
                  variants={revealItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease }}
                  className={`group flex flex-col justify-between p-6 text-left transition-colors sm:p-7 ${
                    isActive
                      ? "bg-gray-850 text-white"
                      : "bg-white text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setActiveIndex((prev) => (prev === i ? -1 : i));
                    }}
                    onMouseEnter={() => {
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                      ) {
                        setActiveIndex(i);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex((prev) => (prev === i ? -1 : i));
                      }
                    }}
                    className="flex w-full cursor-pointer flex-col justify-between select-none"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className={
                          isActive
                            ? "text-white"
                            : "text-brand transition-colors group-hover:text-white"
                        }
                      />
                      <div className="flex items-center gap-2.5">
                        <span
                          className={
                            isActive
                              ? "font-mono text-xs text-white/40"
                              : "font-mono text-xs text-brand transition-colors group-hover:text-white/40"
                          }
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 lg:hidden ${
                            isActive
                              ? "rotate-180 text-white"
                              : "text-brand group-hover:text-white"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-12">
                      <h3
                        className={
                          isActive
                            ? "text-2xl font-light leading-tight text-white"
                            : "text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white"
                        }
                      >
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Inline Expansion (shows details right under card; zero scrolling up needed) */}
                  {isActive && (
                    <div className="mt-4 border-t border-white/15 pt-4 lg:hidden">
                      {area.image && (
                        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden bg-white/5">
                          <Image
                            src={area.image}
                            alt={area.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                      )}
                      <p className="text-sm leading-relaxed text-white/80">
                        {area.description}
                      </p>
                      {area.points && area.points.length > 0 && (
                        <ul className="mt-3.5 space-y-2">
                          {area.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-white" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-5">
                        <PremiumButton href={area.href} inverse>
                          Explore Practice
                        </PremiumButton>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
