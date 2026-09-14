"use client";

import { useEffect, useRef, useState } from "react";
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react";
import { profile } from "./data";

const TYPES = [
  "Web app development",
  "Desktop app",
  "Mobile app",
  "Game development",
  "Rapid AI prototyping",
  "Technical consulting",
  "Job offer",
];

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const input =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-zinc-500 transition focus:border-accent focus:outline-2 focus:outline-offset-0 focus:outline-accent/30 aria-[invalid=true]:border-red-700";

// ponytail: sends via mailto, no backend. Switch to an API route / Formspree if a central inbox is needed.
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const type = String(f.get("type") ?? "");
    const message = String(f.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email))
      next.email = "Enter a valid email address.";
    if (message.length < 10)
      next.message = "Please add a bit more detail, at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `${type} from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Row id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            className={input}
          />
        </Row>
        <Row id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            className={input}
          />
        </Row>
      </div>

      <Row id="type" label="Inquiry type">
        <Select id="type" name="type" options={TYPES} />
      </Row>

      <Row id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about the project, timeline, and budget range."
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          className={`${input} resize-y`}
        />
      </Row>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium whitespace-nowrap text-accent-fg transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
        >
          Send message
        </button>
        <p role="status" className="text-sm text-muted">
          {sent && "Your email app will open with the message pre-filled."}
        </p>
      </div>
    </form>
  );
}

// Custom listbox (ARIA "select-only combobox" pattern): button + option list.
// Value is sent via a hidden input so FormData still reads it.
function Select({
  id,
  name,
  options,
}: {
  id: string;
  name: string;
  options: string[];
}) {
  const [value, setValue] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    list.current?.focus();
    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function show() {
    setActive(options.indexOf(value));
    setOpen(true);
  }

  function choose(i: number) {
    setValue(options[i]);
    setOpen(false);
    button.current?.focus();
  }

  function onButtonKey(e: React.KeyboardEvent) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      show();
    }
  }

  function onListKey(e: React.KeyboardEvent) {
    const last = options.length - 1;
    const keys: Record<string, () => void> = {
      ArrowDown: () => setActive((a) => Math.min(a + 1, last)),
      ArrowUp: () => setActive((a) => Math.max(a - 1, 0)),
      Home: () => setActive(0),
      End: () => setActive(last),
      Enter: () => choose(active),
      " ": () => choose(active),
      Escape: () => {
        setOpen(false);
        button.current?.focus();
      },
    };
    if (e.key === "Tab") return setOpen(false);
    if (!keys[e.key]) return;
    e.preventDefault();
    keys[e.key]();
  }

  return (
    <div ref={root} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        ref={button}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onButtonKey}
        className={`${input} flex items-center justify-between gap-3 text-left`}
      >
        <span className="truncate">{value}</span>
        <CaretDownIcon
          size={16}
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          ref={list}
          id={`${id}-list`}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKey}
          className="pop absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-line bg-bg p-1.5 shadow-[0_16px_40px_-16px_rgb(24_24_27/0.25)] outline-none"
        >
          {options.map((o, i) => (
            <li
              key={o}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={o === value}
              onPointerMove={() => setActive(i)}
              onClick={() => choose(i)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                i === active ? "bg-surface text-fg" : "text-muted"
              } ${o === value ? "font-medium text-fg" : ""}`}
            >
              {o}
              {o === value && <CheckIcon size={16} weight="bold" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Row({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label id={`${id}-label`} htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      <p id={`${id}-error`} className="min-h-5 text-sm text-red-700">
        {error}
      </p>
    </div>
  );
}
