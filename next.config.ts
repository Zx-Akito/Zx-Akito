import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ponytail: picsum placeholders; replace with local images in /public when real photos exist
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
