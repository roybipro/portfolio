import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.GITHUB_ACTIONS ? { basePath: "/portfolio" } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  },
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
