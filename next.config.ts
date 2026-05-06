import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isCustomDomain = process.env.IS_CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd && !isCustomDomain ? "/carrot-design-atelier" : "",
  assetPrefix: isProd && !isCustomDomain ? "/carrot-design-atelier" : "",
};


export default nextConfig;

