"use client";

import { SectionHeader } from "@/components/SectionShell";
import { PROCESS_STEPS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section
      id="workflow"
      data-section="3"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgb(37_99_235/0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label="How We Deliver"
          title="From Concept to Lifetime Support"
          light
          accentLabel
          align="center"
        />

        <div className="relative mt-4 space-y-0">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className={`relative flex items-center gap-8 py-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`inline-block ${isEven ? "lg:ml-auto" : ""}`}>
                    <span className="font-display text-7xl font-semibold text-white/8 sm:text-8xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="-mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
                      {step}
                    </h3>
                    <div
                      className={`mt-3 h-0.5 w-16 bg-gradient-to-r from-accent to-primary ${
                        isEven ? "lg:ml-auto" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="relative z-10 hidden lg:flex lg:w-16 lg:shrink-0 lg:items-center lg:justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    className="h-4 w-4 rounded-full bg-accent shadow-[0_0_20px_rgb(37_99_235/0.6)]"
                  />
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-8 h-full w-px bg-gradient-to-b from-accent/60 to-white/10" />
                  )}
                </div>

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:hidden">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={`m-${step}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="font-semibold text-white">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
