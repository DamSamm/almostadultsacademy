import type { NextConfig } from "next";

// Only apply basePath on GitHub Actions (production build), not locally
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",       // Generates a static /out folder
  basePath: isProd ? "/almostadultsacademy" : "",
  images: {
    unoptimized: true,    // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
