"use client";

import EditorialSubheading from "@/components/EditorialSubheading";
import { SectionHeader } from "@/components/SectionShell";
import { PRODUCTS } from "@/lib/data";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Products() {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  const go = useCallback((dir: -1 | 1) => {
    setActive((i) => (i + dir + PRODUCTS.length) % PRODUCTS.length);
  }, []);

  return (
    <section
      id="machines"
      data-section="2"
      className="relative overflow-hidden bg-navy py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div>
            <SectionHeader
              label="Machinery Portfolio"
              title="Industrial Machines Built to Perform"
              light
              accentLabel
              align="left"
              compact
            />
            <EditorialSubheading className="!mt-4 sm:!mt-5">
              Engineered for{" "}
              <span className="text-accent">accuracy</span>,{" "}
              <span className="text-accent">durability</span> and{" "}
              <span className="text-accent">efficiency</span> across{" "}
              <span className="italic text-white">every production line</span>.
            </EditorialSubheading>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous machine"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-all hover:border-accent/40 hover:bg-accent/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[4.5rem] text-center text-sm font-semibold tabular-nums text-white/40">
              {String(active + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next machine"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-all hover:border-accent/40 hover:bg-accent/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
          >
            <div className="group relative aspect-[5/4] max-h-[min(52vw,380px)] overflow-hidden rounded-2xl sm:max-h-[380px] lg:max-h-[340px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={active === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 font-display text-5xl font-semibold text-white/10 sm:left-6 sm:top-6 sm:text-6xl">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="space-y-3">
                <p className="text-label !text-accent">Featured Machine</p>
                <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {product.name}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-[1.75]">
                  {product.description}
                </p>
              </div>

              <Link
                href="#connect"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-accent uppercase transition-colors hover:border-accent/50 hover:bg-accent/20 hover:text-white"
              >
                Inquire About This Machine
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
