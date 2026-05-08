import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isCustomDomain = process.env.IS_CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages subpaths, not for custom domains or Vercel
  basePath: isProd && !isCustomDomain && !process.env.VERCEL ? "/carrot-design-atelier" : "",
  assetPrefix: isProd && !isCustomDomain && !process.env.VERCEL ? "/carrot-design-atelier" : "",
};


export default nextConfig;

