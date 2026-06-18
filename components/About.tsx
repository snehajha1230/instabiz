"use client";

import Marquee from "@/components/effects/Marquee";
import EditorialSubheading from "@/components/EditorialSubheading";
import { SectionHeader } from "@/components/SectionShell";
import { Eye, Factory, Handshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const STORY_PILLARS = [
  {
    icon: Factory,
    label: "What We Build",
    body: (
      <>
        Hydro Mech Engineers is dedicated to delivering{" "}
        <span className="font-medium text-white">reliable and economical</span>{" "}
        sheet metal machinery for modern industries — using{" "}
        <span className="text-accent">premium materials</span> and continuously
        improving engineering standards.
      </>
    ),
    tags: ["Premium Materials", "Strict QC"],
  },
  {
    icon: Handshake,
    label: "How We Partner",
    body: (
      <>
        We believe in building{" "}
        <span className="font-medium text-white">long-term customer relationships</span>{" "}
        through excellent after-sales support and dependable service from our
        Bangalore manufacturing hub.
      </>
    ),
    tags: ["After-Sales Support", "Bangalore HQ"],
  },
] as const;

const DETAILS = [
  "15+ Years of Craft",
  "100% Quality Focus",
  "500+ Deliveries",
  "Premium Materials",
  "Strict QC",
  "Bangalore HQ",
  "Doddanekundi Industrial Area",
  "After-Sales Support",
  "Long-Term Partnerships",
  "Economical Machinery",
];

export default function About() {
  return (
    <section
      id="story"
      data-section="1"
      className="relative scroll-mt-[5.5rem] overflow-hidden bg-navy pt-12 pb-16 sm:scroll-mt-24 sm:pt-14 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label="Our Story"
          title="Engineering Trust Through Every Machine"
          light
          accentLabel
          align="left"
          compact
        />

        <EditorialSubheading>
          A young company with an{" "}
          <span className="italic text-white">old-world commitment</span> to{" "}
          <span className="text-accent">quality</span>,{" "}
          <span className="text-accent">precision</span>, and long-term
          partnerships.
        </EditorialSubheading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
        >
          <div className="space-y-8 p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {STORY_PILLARS.map(({ icon: Icon, label, body, tags }, index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/20 hover:bg-white/[0.04] sm:p-7"
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-3 font-display text-6xl font-semibold text-white/[0.04] select-none"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] text-accent uppercase">
                      {label}
                    </p>
                  </div>

                  <p className="relative font-display text-[1.2rem] leading-[1.6] text-slate-300 sm:text-[1.35rem] sm:leading-[1.55]">
                    {body}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                <span className="text-[0.65rem] font-bold tracking-[0.18em] text-slate-400 uppercase">
                  Doddanekundi Industrial Area, Bangalore
                </span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="border-l-2 border-accent/60 pl-5">
              <div className="mb-2 flex items-center gap-2">
                <Eye className="h-4 w-4 text-accent" />
                <p className="text-[0.65rem] font-bold tracking-[0.2em] text-accent uppercase">
                  Our Vision
                </p>
              </div>
              <p className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                Deliver innovative products with superior quality and unmatched
                customer support.
              </p>
            </div>
          </div>

          <div className="border-t border-white/8 bg-[#0a1628] py-4">
            <Marquee speed="slow">
              <div className="flex items-center gap-12 px-6">
                {DETAILS.map((detail) => (
                  <span
                    key={detail}
                    className="flex shrink-0 items-center gap-12 text-sm font-semibold tracking-wide text-slate-400"
                  >
                    {detail}
                    <span className="text-accent/40" aria-hidden>
                      ◆
                    </span>
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
