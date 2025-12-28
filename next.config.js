/** @type {import('next').NextConfig} */
const repo = "antalika";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // ✅ IMPORTANT for GitHub Pages project site
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

module.exports = nextConfig;
