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

            {/* Blueprint machinery visual */}
            <motion.div
              style={{ scale: visualScale, opacity: visualOpacity }}
              className="relative mx-auto h-full w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
            >
              <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-accent/25 via-primary/12 to-transparent blur-3xl" />
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-px rounded-[1.8rem] bg-gradient-to-br from-accent/30 via-transparent to-primary/20"
              />

              <div className="relative flex h-full min-h-[26rem] flex-col sm:min-h-[30rem] lg:min-h-[34rem]">
                <div className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050d18] ring-glow">
                  <Image
                    src="/heroimage.png"
                    alt="Precision sheet metal machinery engineering blueprint"
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/50" />
                  <div className="grid-pattern pointer-events-none absolute inset-0 opacity-15" />

                  <div
                    className="pointer-events-none absolute top-5 left-5 h-9 w-9 border-t-2 border-l-2 border-accent/50"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute top-5 right-5 h-9 w-9 border-t-2 border-r-2 border-accent/50"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute bottom-20 left-5 h-9 w-9 border-b-2 border-l-2 border-accent/50 sm:bottom-24"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute right-5 bottom-20 h-9 w-9 border-r-2 border-b-2 border-accent/50 sm:bottom-24"
                    aria-hidden
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="glass-dark absolute top-4 right-4 flex items-center gap-2 rounded-full px-3.5 py-1.5"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-[0.58rem] font-bold tracking-[0.2em] text-accent uppercase">
                      Live Blueprint
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="glass-dark absolute top-1/2 left-3 hidden -translate-y-1/2 rounded-lg px-2.5 py-1.5 lg:block"
                  >
                    <p className="text-[0.55rem] font-bold tracking-[0.15em] text-white/35 uppercase">
                      Height
                    </p>
                    <p className="font-mono text-xs font-semibold text-accent">2450 mm</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="glass-dark absolute top-[38%] right-3 hidden rounded-lg px-2.5 py-1.5 lg:block"
                  >
                    <p className="text-[0.55rem] font-bold tracking-[0.15em] text-white/35 uppercase">
                      Width
                    </p>
                    <p className="font-mono text-xs font-semibold text-accent">2150 mm</p>
                  </motion.div>
                </div>

                <div className="relative z-10 -mt-14 grid gap-2 px-1 sm:-mt-16 sm:grid-cols-3 sm:gap-2.5">
                  {PILLARS.map(({ icon: Icon, label, value }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="glass-dark flex items-center gap-2.5 rounded-xl px-3.5 py-3 sm:flex-col sm:items-start sm:gap-2 sm:px-3 sm:py-3.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent sm:h-8 sm:w-8">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.55rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                          {label}
                        </p>
                        <p className="truncate text-sm font-semibold text-white sm:text-[0.8rem]">
                          {value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
