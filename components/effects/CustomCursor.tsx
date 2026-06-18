"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE =
  'a, button, [role="button"], .btn-primary, .btn-ghost, [data-cursor="pointer"]';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduced || !finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE)) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      if (
        target.closest(INTERACTIVE) &&
        !related?.closest(INTERACTIVE)
      ) {
        setHovering(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  const scale = clicking ? 0.85 : hovering ? 1.6 : 1;
  const dotScale = clicking ? 0.6 : hovering ? 0 : 1;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="custom-cursor-ring"
        animate={{
          opacity: visible ? 1 : 0,
          scale,
          width: hovering ? 52 : 36,
          height: hovering ? 52 : 36,
        }}
        transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.2 } }}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor-dot"
        animate={{
          opacity: visible ? 1 : 0,
          scale: dotScale,
        }}
        transition={{ duration: 0.2 }}
        style={{ x, y }}
      />
    </>
  );
}
