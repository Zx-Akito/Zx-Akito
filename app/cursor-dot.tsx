"use client";

import { useEffect, useRef } from "react";

// Dot that trails the mouse. Mouse/trackpad only; touch has no hover cursor.
export function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(pointer: fine)").matches) return;
    const k = matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.18;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (el.style.opacity !== "1") {
        x = tx;
        y = ty;
        el.style.opacity = "1";
      }
    };
    const hide = () => (el.style.opacity = "0");
    // Grow into a labelled pill over elements with data-cursor="Label".
    const over = (e: PointerEvent) => {
      const text = (e.target as Element).closest<HTMLElement>("[data-cursor]")
        ?.dataset.cursor;
      el.toggleAttribute("data-big", !!text);
      if (text && label.current) label.current.textContent = text;
    };
    const tick = () => {
      x += (tx - x) * k;
      y += (ty - y) * k;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    };

    addEventListener("pointermove", move);
    addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", hide);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", move);
      removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="group pointer-events-none fixed top-0 left-0 z-50 opacity-0 transition-opacity duration-300"
    >
      <div className="flex size-4 -translate-1/2 items-center justify-center rounded-full bg-fg text-sm font-medium text-bg transition-[width,height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-big:size-20">
        <span
          ref={label}
          className="scale-50 opacity-0 transition duration-300 group-data-big:scale-100 group-data-big:opacity-100"
        />
      </div>
    </div>
  );
}
