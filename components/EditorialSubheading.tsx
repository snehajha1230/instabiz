"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type EditorialSubheadingProps = {
  children: ReactNode;
  className?: string;
};

export default function EditorialSubheading({
  children,
  className = "",
}: EditorialSubheadingProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative mt-6 max-w-2xl sm:mt-8 ${className}`}
    >
      <span
        className="font-display pointer-events-none absolute -top-5 -left-1 text-7xl leading-none text-accent/20 select-none sm:-top-6 sm:text-8xl"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="flex items-start gap-4 sm:gap-5">
        <div
          className="mt-2 hidden h-12 w-px shrink-0 bg-gradient-to-b from-accent via-accent/50 to-transparent sm:block"
          aria-hidden
        />
        <p className="font-display relative text-[1.3rem] leading-[1.5] font-medium tracking-tight text-slate-200 sm:text-2xl sm:leading-[1.45] lg:text-[1.75rem]">
          {children}
        </p>
      </div>
    </motion.blockquote>
  );
}
