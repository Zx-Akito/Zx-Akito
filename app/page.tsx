import Image from "next/image";
import {
  DownloadSimpleIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  ChatCircleDotsIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  about,
  experience,
  profile,
  projects,
  stack,
} from "./data";
import { Reveal } from "./reveal";
import { ContactForm } from "./contact-form";

// Radius rule: buttons = pill, images & cards = rounded-2xl, input = rounded-xl.
const btn =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const wrap = "mx-auto max-w-6xl px-5 md:px-8";
const h2 = "text-3xl font-semibold tracking-tighter text-balance md:text-5xl";

const nav = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
];

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubLogoIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinLogoIcon },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95">
      <nav className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" className="flex items-center gap-3">
          <Image
            src={profile.portrait}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-medium tracking-tight">
              {profile.name}
            </span>
            <span className="block text-sm text-muted">{profile.role}</span>
          </span>
        </a>
        <div className="flex items-center gap-7">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden transition hover:text-muted md:block"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className={`${btn} bg-surface hover:bg-line`}>
            <ChatCircleDotsIcon size={18} weight="fill" className="text-sky-500" />
            Let&apos;s chat
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const d = (i: number) => ({ "--i": i }) as React.CSSProperties;
  // Doubled so translateX(-50%) loops seamlessly.
  const logos = [...stack, ...stack];
  const shots = [...projects, ...projects];
  return (
    <section className="overflow-hidden pt-10 pb-24 md:pt-14 md:pb-32">
      <div className={`${wrap} flex flex-col items-center text-center`}>
        {profile.available && (
          <p
            className="rise inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium"
            style={d(0)}
          >
            {/* Dot = real availability status */}
            <span className="size-2 rounded-full bg-green-600" />
            {profile.role} · Open to new projects
          </p>
        )}
        <h1
          className="rise mt-7 max-w-5xl text-[2.75rem] leading-[1] font-semibold tracking-tighter text-balance sm:text-6xl lg:text-[5.5rem]"
          style={d(1)}
        >
          {profile.headline.join(" ")}
        </h1>
        <p
          className="rise mt-7 max-w-[46ch] text-lg leading-relaxed text-balance text-muted"
          style={d(2)}
        >
          {profile.summary}
        </p>
        <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={d(3)}>
          <a href={profile.cv} className={`${btn} bg-fg text-bg hover:opacity-85`}>
            Download CV
            <DownloadSimpleIcon size={16} weight="bold" />
          </a>
          <a href="#contact" className={`${btn} bg-surface hover:bg-line`}>
            <ChatCircleDotsIcon size={18} weight="fill" className="text-sky-500" />
            Let&apos;s chat
          </a>
        </div>

        <div
          className="rise mt-14 w-full max-w-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          style={d(4)}
        >
          <ul className="marquee marquee-right flex w-max">
            {logos.map((t, i) => (
              <li
                key={i}
                aria-hidden={i >= stack.length}
                className="group flex items-center gap-2 pr-10 text-lg font-medium text-muted/70"
              >
                <StackLogo slug={t.slug} base="a1a1aa" className="size-5.5" />
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rise mt-16 md:mt-20" style={d(5)}>
        <ul className="marquee marquee-slow flex w-max">
          {shots.map((p, i) => (
            <li key={i} aria-hidden={i >= projects.length} className="pr-5">
              <ProjectShot
                project={p}
                sizes="36rem"
                priority={i < 3}
                className="h-72 w-[26rem] md:h-[26rem] md:w-[36rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className={`${wrap} scroll-mt-20 pb-24 md:pb-32`}>
      <Reveal className="flex flex-col items-center gap-5 text-center">
        <p className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium">
          Selected projects
        </p>
        <h2 className="text-[2.5rem] leading-none font-semibold tracking-tighter text-balance md:text-[4rem]">
          Apps built for performance, <br className="hidden md:block" />
          shipped with care.
        </h2>
      </Reveal>
      <ul className="mx-auto mt-16 grid max-w-5xl gap-x-6 gap-y-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <Reveal index={i % 2}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="View"
                className="group flex flex-col gap-5 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <ProjectShot
                  project={p}
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="aspect-[594/461]"
                />
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-lg text-muted">{p.category}</p>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Mountain photo with the project screenshot floating on top. Zooms on parent hover (needs `group` on parent).
function ProjectShot({
  project,
  sizes,
  priority,
  className,
}: {
  project: (typeof projects)[number];
  sizes: string;
  priority?: boolean;
  className: string;
}) {
  const ease =
    "transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-surface ${className}`}>
      <Image
        src={project.bg}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${ease} group-hover:scale-[1.04]`}
      />
      <div
        className={`absolute inset-x-[12%] top-1/2 aspect-[16/10] -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl shadow-black/30 ${ease} group-hover:scale-[1.03]`}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          priority={priority}
          sizes="(min-width: 768px) 28rem, 76vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function About() {
  const links = [
    ...socials,
    { label: "Email", href: `mailto:${profile.email}`, Icon: EnvelopeSimpleIcon },
  ];
  return (
    <section
      id="about"
      className={`${wrap} grid scroll-mt-20 items-center gap-12 py-24 md:grid-cols-2 md:py-32`}
    >
      <Reveal>
        <p className="inline-block rounded-full bg-surface px-4 py-1.5 text-sm font-medium">
          About
        </p>
        <h2 className="mt-5 text-5xl leading-none font-semibold tracking-tighter text-balance md:text-[4rem]">
          Hi, I am <br />
          {profile.name}
        </h2>
        <ul className="mt-8 flex gap-2">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-surface transition hover:bg-line"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[52ch] text-lg leading-relaxed text-muted">
          {about.body}
        </p>
        <dl className="mt-10 grid grid-cols-3 gap-4">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-2 rounded-2xl bg-surface/60 p-5"
            >
              <dt className="text-muted">{s.label}</dt>
              <dd className="order-first text-2xl font-medium tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal index={1}>
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
          <Image
            src={profile.portrait}
            alt={`Photo of ${profile.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className={`${wrap} grid scroll-mt-20 gap-12 py-24 md:grid-cols-12 md:py-32`}
    >
      <Reveal className="md:col-span-4">
        <h2 className={`${h2} md:sticky md:top-28`}>Experience</h2>
      </Reveal>

      <ol className="flex flex-col gap-14 md:col-span-8">
        {experience.map((e, i) => (
          <li key={e.period}>
            <Reveal
              index={i}
              className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8"
            >
              <p className="pt-1 font-mono text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {e.role}
                  <span className="font-normal text-muted"> at {e.company}</span>
                </h3>
                <ul className="mt-3 flex flex-col gap-2 leading-relaxed text-muted">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Stack() {
  return (
    <section className={`${wrap} pb-24 md:pb-32`}>
      <Reveal>
        <h2 className={h2}>Everyday tech stack</h2>
      </Reveal>
      <Reveal index={1}>
        <ul className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-6">
          {stack.map((t) => (
            <li
              key={t.slug}
              className="group flex flex-col items-center gap-3 bg-bg px-3 py-8 text-center text-sm text-muted transition hover:text-fg"
            >
              <StackLogo slug={t.slug} base="8e8e90" className="size-8" />
              {t.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

// Simple Icons logo in `base` color; swaps to the full-color /public/stack logo on parent hover (needs `group` on parent).
function StackLogo({
  slug,
  base,
  className,
}: {
  slug: string;
  base: string;
  className: string;
}) {
  return (
    <span className={`relative shrink-0 ${className}`}>
      {/* Simple Icons SVG; plain img because next/image blocks remote SVG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${slug}/${base}`}
        alt=""
        loading="lazy"
        className="size-full transition duration-300 group-hover:opacity-0"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/stack/${slug}.svg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </span>
  );
}

function Contact() {
  return (
    <section className={`${wrap} pb-24 md:pb-32`}>
      {/* Anchor is viewport-tall (minus nav) and shares the card's center,
          so jumping to #contact leaves the card centered below the nav. */}
      <div className="relative">
        <div
          id="contact"
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[min(0px,calc(50%-(100dvh-5rem)/2))] h-[calc(100dvh-5rem)] scroll-mt-20"
        />
        <Reveal>
          <div className="grid gap-12 rounded-2xl bg-surface p-6 sm:p-10 md:grid-cols-12 md:p-14">
            <div className="md:col-span-5">
              <h2 className={h2}>Have a project that needs building?</h2>
              <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">
                Tell me what you need. I reply within one business day.
              </p>
              <ul className="mt-10 grid gap-4 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-3 underline-offset-4 transition hover:underline"
                  >
                    <EnvelopeSimpleIcon size={20} />
                    {profile.email}
                  </a>
                </li>
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 underline-offset-4 transition hover:underline"
                    >
                      <Icon size={20} />
                      {label}
                      <ArrowUpRightIcon size={14} className="text-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-6">
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-muted">{profile.role}</p>
        </div>
        <ul className="grid gap-3 text-sm text-muted md:col-span-3">
          {nav.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-fg">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="grid content-start gap-3 text-sm text-muted md:col-span-3">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-fg"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-fg"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${wrap} flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-sm text-muted`}
      >
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 transition hover:text-fg"
        >
          Back to top
          <ArrowUpIcon size={14} />
        </a>
      </div>
    </footer>
  );
}
