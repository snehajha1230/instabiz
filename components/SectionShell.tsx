import { type ReactNode } from "react";
import TextReveal from "@/components/effects/TextReveal";

type SectionShellProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  accentLabel?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  dataSection?: number;
};

type SectionHeaderProps = Pick<
  SectionShellProps,
  "label" | "title" | "description" | "align" | "light" | "accentLabel"
> & { compact?: boolean };

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  accentLabel = false,
  compact = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${compact ? "mb-0" : "mb-20"} ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <p className={`text-label ${light || accentLabel ? "!text-accent" : ""}`}>{label}</p>
      <span
        className={`section-accent-line ${compact ? "!mt-2" : ""} ${isCenter ? "mx-auto" : ""}`}
      />
      <h2
        className={`font-display text-4xl font-semibold leading-[1.15] sm:text-5xl ${
          compact ? "mt-2.5" : "mt-6"
        } ${light ? "text-white" : "text-ink"}`}
      >
        <TextReveal text={title} className={light ? "text-white" : ""} />
      </h2>
      {description && (
        <p
          className={`text-base leading-[1.85] sm:text-lg ${
            compact ? "mt-2" : "mt-6"
          } ${isCenter ? "mx-auto" : ""} max-w-2xl ${light ? "text-slate-300" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function SectionShell({
  label,
  title,
  description,
  align = "center",
  light = false,
  accentLabel = false,
  children,
  className = "",
  id,
  dataSection,
}: SectionShellProps) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={`relative overflow-hidden py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label={label}
          title={title}
          description={description}
          align={align}
          light={light}
          accentLabel={accentLabel}
        />
        {children}
      </div>
    </section>
  );
}
