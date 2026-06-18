"use client";

import Marquee from "@/components/effects/Marquee";
import { SectionHeader } from "@/components/SectionShell";
import { FEATURES } from "@/lib/data";
import {
  Award,
  Cog,
  Headphones,
  Target,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Cog,
  Target,
  Zap,
  Wrench,
  Headphones,
};

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[number]; index: number }) {
  const Icon = iconMap[feature.icon];

  return (
    <article className="group relative w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.06] sm:w-[340px]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/25">
        <Icon className="h-5 w-5" />
      </div>

      <span className="absolute right-6 top-6 font-display text-4xl font-semibold text-white/8">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
        {feature.title}
      </h3>
      <p className="text-sm leading-[1.85] text-slate-400">{feature.description}</p>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="edge" data-section="4" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgb(24_74_167/0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label="The Hydro Mech Edge"
          title="Why Industry Leaders Choose Us"
          description="Six pillars of engineering excellence that set our machines apart from the competition."
          light
          accentLabel
          align="left"
          compact
        />
      </div>

      <div className="relative mt-10 bg-navy">
        <Marquee speed="slow" pauseOnHover className="bg-navy py-2">
          <div className="flex gap-5 px-3 sm:gap-6 sm:px-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
