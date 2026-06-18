"use client";

import { LayoutGrid } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useDragControls,
  useScroll,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { label: "Intro", href: "#intro" },
  { label: "Story", href: "#story" },
  { label: "Machines", href: "#machines" },
  { label: "Workflow", href: "#workflow" },
  { label: "Edge", href: "#edge" },
  { label: "Connect", href: "#connect" },
] as const;

const RADIUS = 88;
const MENU_SIZE = 240;
const MENU_HALF = MENU_SIZE / 2;
const DRAG_THRESHOLD = 8;

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * RADIUS,
    y: Math.sin(angle) * RADIUS,
  };
}

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function ScrollIndicator() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didDrag = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-section"));
            if (!isNaN(idx)) setActive(idx);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;

    pointerStart.current = { x: e.clientX, y: e.clientY };
    didDrag.current = false;

    const target = e.currentTarget;

    const onMove = (ev: PointerEvent) => {
      if (!pointerStart.current || didDrag.current) return;

      const dx = ev.clientX - pointerStart.current.x;
      const dy = ev.clientY - pointerStart.current.y;

      if (Math.hypot(dx, dy) >= DRAG_THRESHOLD) {
        didDrag.current = true;
        setIsDragging(true);
        dragControls.start(e);
        cleanup();
      }
    };

    const onUp = () => cleanup();

    const cleanup = () => {
      pointerStart.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    // Keep focus on the handle during press for reliable touch interaction.
    target.focus({ preventScroll: true });
  };

  const handleToggle = () => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div
      ref={constraintsRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-visible"
      aria-hidden="true"
    >
      <motion.nav
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          window.setTimeout(() => {
            didDrag.current = false;
          }, 0);
        }}
        whileDrag={{ scale: 1.03 }}
        aria-label="Section navigation"
        className="pointer-events-auto fixed right-4 z-50 sm:right-5"
        style={{ top: "50%", marginTop: -MENU_HALF }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => {
          if (!isDragging) setExpanded(false);
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: MENU_SIZE, height: MENU_SIZE }}
        >
          <AnimatePresence>
            {expanded && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute inset-0 rounded-full border border-white/12 bg-navy/75 shadow-[0_12px_48px_rgb(0_0_0/0.45)] backdrop-blur-2xl"
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
                  aria-hidden="true"
                />

                {SECTIONS.map(({ label, href }, i) => {
                  const { x, y } = getOrbitPosition(i, SECTIONS.length);
                  const isActive = active === i;

                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-1/2 top-1/2 z-10"
                    >
                      <Link
                        href={href}
                        aria-label={`Go to ${label}`}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setExpanded(false)}
                        className="group flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-transform duration-200 hover:scale-105 active:scale-95"
                      >
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                            isActive
                              ? "border-accent/50 bg-accent/20 shadow-[0_0_20px_rgb(37_99_235/0.55)]"
                              : "border-white/15 bg-navy/90 group-hover:border-white/30 group-hover:bg-navy"
                          }`}
                        >
                          <span
                            className={`block rounded-full transition-all duration-300 ${
                              isActive
                                ? "h-3 w-3 bg-accent"
                                : "h-2.5 w-2.5 bg-white/75 group-hover:bg-white"
                            }`}
                          />
                        </span>
                        <span
                          className={`rounded-md border px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.12em] whitespace-nowrap uppercase shadow-[0_4px_16px_rgb(0_0_0/0.35)] backdrop-blur-md transition-colors ${
                            isActive
                              ? "border-accent/40 bg-navy text-accent"
                              : "border-white/15 bg-navy text-white/85 group-hover:border-white/25 group-hover:text-white"
                          }`}
                        >
                          {label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={handleToggle}
            onPointerDown={handlePointerDown}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? "Close section navigation or drag to reposition"
                : "Open section navigation or drag to reposition"
            }
            className={`relative z-20 flex h-14 w-14 touch-manipulation items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } ${
              expanded
                ? "border-accent/40 bg-accent/15 text-accent shadow-[0_0_24px_rgb(37_99_235/0.3)]"
                : "glass-dark border-white/10 text-white/70 hover:border-white/25 hover:text-white"
            } ${isDragging ? "ring-2 ring-accent/40" : ""}`}
          >
            <LayoutGrid className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
