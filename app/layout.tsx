import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "./data";
import { SmoothScroll } from "./smooth-scroll";
import { CursorDot } from "./cursor-dot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans">
        <SmoothScroll />
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
