"use client";

import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: "slow" | "normal";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export default function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  const duration = speed === "slow" ? "45s" : "30s";

  return (
    <div className={`group/marquee relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-inherit to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-inherit to-transparent" />
      <div
        className={`flex w-max gap-0 ${
          pauseOnHover ? "group-hover/marquee:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marquee ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
