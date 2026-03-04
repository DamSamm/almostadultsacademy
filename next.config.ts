import type { NextConfig } from "next";

// Only apply static export settings on GitHub Actions (production build), not locally
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined, // Static export only for deployment
  basePath: isProd ? "/almostadultsacademy" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
