"use client";

import { COMPANY } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[55] px-5 pt-6 sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <Link
          href="#intro"
          className="pointer-events-auto flex items-center"
          aria-label={`${COMPANY.name} home`}
        >
          <Image
            src={COMPANY.logo}
            alt={`${COMPANY.name} logo`}
            width={140}
            height={48}
            className="h-9 w-auto object-contain brightness-0 invert sm:h-10"
            priority
          />
        </Link>

        <Link
          href="#connect"
          className="pointer-events-auto group flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-xs font-bold tracking-[0.12em] text-white uppercase backdrop-blur-xl transition-all hover:border-accent/40 hover:bg-accent/15"
        >
          Get Quote
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.header>
  );
}
