import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath is applied only for production builds (GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
