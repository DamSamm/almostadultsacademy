import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/almostadultsacademy",
  assetPrefix: "/almostadultsacademy/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
