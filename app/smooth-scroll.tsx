"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Inertia wheel scroll like Framer sites. Anchors keep native scroll-margin offsets.
export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.08 });
    return () => lenis.destroy();
  }, []);
  return null;
}
