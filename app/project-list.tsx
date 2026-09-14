"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { projects as Projects } from "./data";

// Desktop: hovering/focusing a row shows its image in the sticky right panel.
// Mobile: image shows inline in each row.
export function ProjectList({ projects }: { projects: typeof Projects }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 grid gap-10 md:grid-cols-12">
      <ul className="border-t border-line md:col-span-6">
        {projects.map((p, i) => (
          <li key={p.title} className="border-b border-line">
            <a
              href={p.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group block py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3
                  className={`text-2xl font-semibold tracking-tight transition-colors md:text-3xl ${
                    active === i ? "text-fg" : "text-fg md:text-muted"
                  }`}
                >
                  {p.title}
                </h3>
                <span className="font-mono text-sm text-muted">{p.year}</span>
              </div>
              <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">
                {p.desc}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="font-mono text-xs text-muted">
                  {p.category}: {p.tags.join(", ")}
                </p>
                <ArrowUpRightIcon
                  size={20}
                  className={`shrink-0 transition ${
                    active === i
                      ? "text-accent md:-translate-y-0.5 md:translate-x-0.5"
                      : "text-muted"
                  }`}
                />
              </div>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-surface md:hidden">
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  fill
                  sizes="(min-width: 768px) 1px, 100vw"
                  className="object-cover"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:col-span-6 md:block">
        <div className="sticky top-24 aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
          {/* next/image fill needs a relative/absolute parent; sticky is not accepted */}
          <div className="absolute inset-0">
          {projects.map((p, i) => (
            <Image
              key={p.title}
              src={p.image}
              alt={active === i ? `Screenshot of ${p.title}` : ""}
              fill
              sizes="50vw"
              className={`object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
