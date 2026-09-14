import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
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
import { ProjectList } from "./project-list";
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
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#" className="font-mono text-sm font-medium tracking-tight">
          zxakito
          <span className="text-muted">.dev</span>
        </a>
        <div className="flex items-center gap-7 text-sm text-muted">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden transition hover:text-fg md:block"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className={`${btn} bg-fg py-2 text-bg hover:opacity-85`}
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const d = (i: number) => ({ "--i": i }) as React.CSSProperties;
  return (
    <section className={`${wrap} pt-14 pb-24 md:pt-20 md:pb-32`}>
      {profile.available && (
        <p
          className="rise mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted"
          style={d(0)}
        >
          {/* Dot = real availability status */}
          <span className="size-1.5 rounded-full bg-accent" />
          Open to new projects & roles
        </p>
      )}
      <h1
        className="rise text-[2.5rem] leading-[1.05] font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]"
        style={d(1)}
      >
        <span className="md:block">
          <mark className="rounded-xl bg-black px-3 text-white [box-decoration-break:clone]">
            {profile.headline[0]}
          </mark>{" "}
          {profile.headline[1]}{" "}
        </span>
        <span className="text-muted md:block">{profile.headline[2]}</span>
      </h1>

      <div className="mt-12 grid items-end gap-10 md:mt-16 md:grid-cols-12">
        <div className="rise md:col-span-5 md:pb-2" style={d(2)}>
          <p className="max-w-[42ch] text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={`${btn} bg-accent text-accent-fg hover:opacity-90`}
            >
              View projects
              <ArrowDownIcon size={16} weight="bold" />
            </a>
            <a
              href={profile.cv}
              className={`${btn} border border-line hover:bg-surface`}
            >
              Download CV
            </a>
          </div>
        </div>
        <div
          className="rise relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface md:col-span-7"
          style={d(3)}
        >
          <Image
            src={profile.heroImage}
            alt="Desk with a laptop and monitor showing code"
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className={`${wrap} scroll-mt-20 pb-24 md:pb-32`}>
      <Reveal>
        <h2 className={h2}>Selected projects</h2>
      </Reveal>
      <ProjectList projects={projects} />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-surface py-24 md:py-32">
      <div className={wrap}>
        <Reveal>
          <h2 className="max-w-4xl text-2xl leading-[1.25] font-medium tracking-tight text-balance md:text-4xl">
            {about.statement}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line">
              <Image
                src={profile.portrait}
                alt={`Photo of ${profile.name}`}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal
            index={1}
            className="flex flex-col justify-between gap-12 md:col-span-8"
          >
            <p className="max-w-[60ch] text-lg leading-relaxed text-muted">
              {about.body}
            </p>
            <dl className="grid grid-cols-3 gap-6 border-t border-line pt-8">
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="order-first text-4xl font-semibold tracking-tighter md:text-6xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
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
                <h3 className="text-xl font-semibold tracking-tight">
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
              {/* Simple Icons SVG; plain img because next/image blocks remote SVG */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                // One dark color for all logos: some brand colors are white (Unity) and vanish on a light background.
                src={`https://cdn.simpleicons.org/${t.slug}/18181b`}
                alt=""
                width={32}
                height={32}
                loading="lazy"
                className="size-8 opacity-55 transition duration-300 group-hover:opacity-100"
              />
              {t.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${wrap} scroll-mt-20 pb-24 md:pb-32`}>
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
          href="#"
          className="inline-flex items-center gap-2 transition hover:text-fg"
        >
          Back to top
          <ArrowUpIcon size={14} />
        </a>
      </div>
    </footer>
  );
}
