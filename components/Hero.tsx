"use client";

import { FloatingOrbs } from "@/components/effects/Parallax";
import TextReveal from "@/components/effects/TextReveal";
import { COMPANY } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Cog, Gauge, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PILLARS = [
  { icon: Gauge, label: "Precision", value: "±0.1mm" },
  { icon: Layers, label: "Capacity", value: "Multi-Process" },
  { icon: Cog, label: "Engineering", value: "Hydraulic Core" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1.02]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);

  return (
    <section
      ref={ref}
      id="intro"
      data-section="0"
      className="grain relative min-h-screen overflow-hidden bg-navy"
    >
      <FloatingOrbs />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 pt-32 pb-8 sm:px-8 sm:pt-36 sm:pb-10 lg:px-10">
        <div className="flex flex-1 flex-col">
          <div className="grid flex-1 items-stretch gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-10 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="flex items-center gap-5"
              >
                <div className="h-px w-14 bg-gradient-to-r from-accent to-transparent" />
                <span className="text-[0.65rem] font-bold tracking-[0.25em] text-accent uppercase">
                  Est. Industrial Excellence
                </span>
              </motion.div>

              <div className="space-y-8">
                <h1 className="font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[1.02] font-semibold tracking-tight text-white">
                  <TextReveal text="Precision Sheet" delay={0.1} />
                  <br />
                  <span className="shimmer-text inline-block">Metal Machinery</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="max-w-[28rem] text-base leading-[1.9] text-slate-400 sm:text-lg"
                >
                  {COMPANY.name} engineers durable, reliable sheet metal solutions
                  for modern industries — built for precision, productivity, and
                  decades of performance.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap items-center gap-5"
              >
                <a href="#machines" className="btn-primary group">
                  View Machinery
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#connect" className="btn-ghost">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            {/* Abstract visual panel — no product images */}
            <motion.div
              style={{ scale: visualScale, opacity: visualOpacity }}
              className="relative mx-auto h-full w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 to-primary/8 blur-3xl" />
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 via-primary/10 to-accent/15 ring-glow sm:min-h-[24rem]">
                <div className="grid-pattern absolute inset-0 opacity-40" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
                />

                <div className="relative flex h-full flex-col items-center justify-between gap-8 py-8 px-6 sm:py-10 sm:px-7">
                  <Image
                    src={COMPANY.logo}
                    alt={`${COMPANY.name} logo`}
                    width={160}
                    height={56}
                    className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
                    priority
                  />

                  <div className="grid w-full gap-3">
                    {PILLARS.map(({ icon: Icon, label, value }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                        className="glass-dark flex items-center gap-3 rounded-xl px-4 py-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                            {label}
                          </p>
                          <p className="text-sm font-semibold text-white">{value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
