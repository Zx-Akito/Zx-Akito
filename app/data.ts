// All website content lives here. Compiled from the CV.

export const profile = {
  name: "Rifki Nurmansyah",
  role: "Software Engineer",
  // [highlighted, rest of line 1, line 2]
  headline: ["Software engineer", "for web,", "mobile, desktop, and games."],
  summary:
    "I build fast, secure, and maintainable apps, assisted by AI coding agents like Claude and Codex.",
  email: "zxakito89@gmail.com",
  github: "https://github.com/Zx-Akito",
  linkedin: "https://www.linkedin.com/in/rifki-nurmansyah-292aa0275",
  cv: "https://docs.google.com/document/d/1F2QI9Sd2rkQ8fmRflA4lhEdvaU3XFeMf54hvVDv8ceQ/export?format=pdf",
  available: true,
  // TODO: replace placeholder images with real photos and screenshots in /public
  portrait: "/profile.jpg",
  heroImage: "/hero.png",
};

export const about = {
  body: "Since 2023 I have worked as a Software Engineer at GoThru Media Indonesia, building desktop, mobile, and Unity applications. I use Claude and Codex for refactoring and architecture optimization. I am also currently pursuing a Bachelor's degree in Informatics Engineering at Universitas Terbuka.",
  stats: [
    { value: "3+", label: "Years in the industry" },
    { value: "~50%", label: "Faster startup" },
    { value: "~40%", label: "Less memory" },
  ],
};

// Card backgrounds: Unsplash photos (free license), unsplash.com/s/photos/foggy-mountains
export const projects = [
  {
    title: "Naruto Senki (火影战记)",
    year: "2026",
    category: "Game",
    desc: "Competitive 3v3 MOBA-style tower defense game with real-time login and leaderboards, for macOS, Windows, Android, and iOS.",
    tags: ["Cocos2d-x", "C++", "Convex", "WebSocket"],
    image: "/narsen.png",
    bg: "/projects/bg-1.webp",
    href: "https://narutosenki.my.id",
  },
  {
    title: "StuckNime",
    year: "2025",
    category: "Web app & PWA",
    desc: "Cross-platform anime streaming app with authentication, real-time data, and push notifications.",
    tags: ["Next.js", "Zustand", "Convex", "FCM"],
    image: "/stucknime-v2.png",
    bg: "/projects/bg-2.webp",
    href: "https://stucknime.my.id",
  },
  {
    title: "GoThru Photo Studio",
    year: "2025",
    category: "Desktop app",
    desc: "360° panorama photo file manager with AI-powered editing for automatic nadir removal and furniture placement.",
    tags: ["Tauri", "Rust", "React", "TypeScript"],
    image: "/photostudio.png",
    bg: "/projects/bg-3.webp",
    href: "https://gothru.co/gothru-photo-studio.html",
  },
  {
    title: "GoThru Navigator",
    year: "2024",
    category: "360° & VR app",
    desc: "360° panorama viewer with support for Google Street View, Cardboard, and Meta Quest.",
    tags: ["Unity", "C#", "WebView"],
    image: "/navigator.png",
    bg: "/projects/bg-4.webp",
    href: "https://gothruvr.com/",
  },
];

export const experience = [
  {
    period: "Mar 2023 - Present",
    role: "Software Engineer / Desktop Applications Developer",
    company: "GoThru Media Indonesia",
    points: [
      "Migrated GoThru Photo Studio from Electron to Tauri with Claude and Codex: ~50% faster startup and ~40% less memory usage.",
      "Designed and maintained GoThru Photo Studio and GoThru Navigator, including AI-powered editing features.",
      "Built Villume Mobile, a Unity-based virtual 3D gallery for digital collections.",
      "Improved Panorra Mobile's API architecture and performance, and sliced UI for GoThru Dashboard and GoThru Photographer.",
    ],
  },
  {
    period: "Nov 2023 - Jan 2024",
    role: "Unity Developer (Part Time)",
    company: "GoThru Media Indonesia",
    points: [
      "Developed an interactive educational game that teaches kids about animals.",
      "Built drag-and-drop, scoring, and ranking systems with SQLite in Unity.",
    ],
  },
  {
    period: "Apr 2020 - Jun 2020",
    role: "Web Developer (Intern)",
    company: "GoThru Media Indonesia",
    points: [
      "Built responsive landing pages with Handlebars and Bootstrap.",
    ],
  },
];

// Slugs from https://simpleicons.org. 12 items so the 3/4/6-column grid always fills.
export const stack = [
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Convex", slug: "convex" },
  { name: "Tauri", slug: "tauri" },
  { name: "Rust", slug: "rust" },
  { name: "Electron", slug: "electron" },
  { name: "React Native", slug: "expo" },
  { name: "Unity", slug: "unity" },
  { name: "Cocos2d-x", slug: "cocos" },
  { name: "Figma", slug: "figma" },
];
