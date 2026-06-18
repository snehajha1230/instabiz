"use client";

import Marquee from "@/components/effects/Marquee";
import { SectionHeader } from "@/components/SectionShell";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

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
          description="A young company with an old-world commitment to quality, precision, and long-term partnerships."
          light
          accentLabel
          align="left"
          compact
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
        >
          <div className="space-y-6 p-8 sm:p-10">
            <p className="max-w-3xl text-base leading-[1.8] text-slate-300 sm:text-lg">
              Hydro Mech Engineers is dedicated to delivering reliable and economical
              sheet metal machinery for modern industries — using premium materials
              and continuously improving engineering standards.
            </p>
            <p className="max-w-3xl text-base leading-[1.8] text-slate-400">
              We believe in building long-term customer relationships through
              excellent after-sales support and dependable service from our
              Bangalore manufacturing hub.
            </p>

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
