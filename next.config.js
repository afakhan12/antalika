/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // No basePath - site is deployed at root domain (www.antalika.com.tr)
};

module.exports = nextConfig;
