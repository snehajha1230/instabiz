"use client";

import { ArrowUpRight, Headphones, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const ASSURANCES = [
  { icon: ShieldCheck, label: "Quality Assured", desc: "Every machine inspected before dispatch." },
  { icon: Truck, label: "Pan-India Delivery", desc: "Reliable logistics to your facility." },
  { icon: Headphones, label: "Lifetime Support", desc: "Dedicated after-sales engineering team." },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgb(37_99_235/0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
        >
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center border-b border-white/8 px-8 py-10 sm:px-10 sm:py-12 lg:border-r lg:border-b-0"
            >
              <div className="max-w-lg space-y-6">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.25em] text-accent uppercase">
                    Ready to Build?
                  </p>
                  <span className="section-accent-line !mt-2" />
                </div>
                <h2 className="font-display text-4xl font-semibold leading-[1.12] text-white sm:text-5xl">
                  Reliable Sheet Metal Machinery Awaits
                </h2>
                <p className="text-base leading-[1.9] text-slate-400 sm:text-lg">
                  Let&apos;s engineer efficient manufacturing solutions tailored to
                  your production floor.
                </p>
                <Link href="#connect" className="btn-primary">
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center px-8 py-10 sm:px-10 sm:py-12"
            >
              <div className="w-full space-y-4">
                <div className="rounded-xl border border-accent/25 bg-accent/10 px-6 py-5 text-center">
                  <p className="font-display text-4xl font-semibold text-white sm:text-5xl">24/7</p>
                  <p className="mt-1 text-xs font-bold tracking-[0.18em] text-slate-400 uppercase">
                    After Sales Support
                  </p>
                </div>

                {ASSURANCES.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
