"use client";

import EditorialSubheading from "@/components/EditorialSubheading";
import { SectionHeader } from "@/components/SectionShell";
import { PRODUCTS } from "@/lib/data";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, type ReactNode } from "react";

function CornerBracket({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-accent/50 ${className ?? ""}`}
      aria-hidden
    />
  );
}

function MachineFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_80px_rgb(0_0_0/0.35)] ring-1 ring-white/5 sm:p-4 ${className}`}
    >
      <CornerBracket className="left-3 top-3 border-l-2 border-t-2 sm:left-4 sm:top-4" />
      <CornerBracket className="right-3 top-3 border-r-2 border-t-2 sm:right-4 sm:top-4" />
      <CornerBracket className="bottom-3 left-3 border-b-2 border-l-2 sm:bottom-4 sm:left-4" />
      <CornerBracket className="right-3 bottom-3 border-r-2 border-b-2 sm:right-4 sm:bottom-4" />
      <div className="relative aspect-[5/4] max-h-[min(52vw,400px)] overflow-hidden rounded-xl sm:max-h-[400px] lg:max-h-[360px]">
        {children}
      </div>
    </div>
  );
}

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
            className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
          >
            <div className="relative">
              <MachineFrame>
                <div className="group relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority={active === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-accent/10 opacity-80" />

                  <span className="absolute left-4 top-4 font-display text-5xl font-semibold text-white/12 sm:left-5 sm:top-5 sm:text-6xl">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                    <span className="text-[0.65rem] font-bold tracking-[0.16em] text-white/70 uppercase">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy/55 px-4 py-3 backdrop-blur-md sm:px-5 sm:py-3.5">
                    <p className="truncate text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
                      {product.name}
                    </p>
                  </div>
                </div>
              </MachineFrame>

              <div className="mt-4 flex gap-2.5 overflow-x-auto hide-scrollbar sm:gap-3">
                {PRODUCTS.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`View ${item.name}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:h-16 sm:w-20 ${
                        isActive
                          ? "border-accent/60 ring-2 ring-accent/30"
                          : "border-white/10 opacity-55 hover:border-white/25 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      {isActive && (
                        <span className="absolute inset-0 bg-accent/15" aria-hidden />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <MachineFrame>
              <div className="flex h-full flex-col bg-[#0c1a30] px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                  <div>
                    <p className="text-[0.62rem] font-bold tracking-[0.2em] text-accent uppercase">
                      Machine Specification Report
                    </p>
                    <p className="mt-1 text-[0.65rem] tracking-wide text-white/35">
                      Hydro Mech Engineers
                    </p>
                  </div>
                  <p className="shrink-0 font-display text-lg font-semibold tabular-nums text-white/20">
                    {String(active + 1).padStart(2, "0")}
                    <span className="text-white/10">/</span>
                    {String(PRODUCTS.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="mt-4 flex-1 overflow-y-auto hide-scrollbar">
                  <p className="text-label !text-accent !text-[0.62rem]">{product.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-[0.8rem] leading-relaxed text-slate-300 sm:text-sm sm:leading-[1.75]">
                    {product.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-[0.62rem] font-bold tracking-[0.18em] text-white/35 uppercase">
                      Key Capabilities
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {product.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-center gap-2.5 text-[0.8rem] text-slate-400 sm:text-sm"
                        >
                          <span className="h-px w-3 shrink-0 bg-accent/50" aria-hidden />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[0.62rem] font-bold tracking-[0.18em] text-white/35 uppercase">
                      Specifications
                    </p>
                    <dl className="mt-2.5 divide-y divide-white/[0.06]">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-baseline justify-between gap-4 py-2"
                        >
                          <dt className="text-[0.65rem] font-semibold tracking-[0.12em] text-white/35 uppercase">
                            {spec.label}
                          </dt>
                          <dd className="text-right text-[0.8rem] font-medium text-white/80 sm:text-sm">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="mt-3 border-t border-white/10 pt-3">
                  <Link
                    href="#connect"
                    className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-wide text-accent transition-colors hover:text-white sm:text-sm"
                  >
                    Inquire About This Machine
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </MachineFrame>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
