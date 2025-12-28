import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://antalika.com";

  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/outsourcing",
    "/filters",
    "/oil-gas-equipment",
    "/supplements",
    "/services",
    "/sectors-ranges",
    "/regions/turkey",
    "/regions/saudi-arabia",
    "/regions/iraq",
    "/regions/syria",
    "/terms-conditions",
    "/cookie-policy",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}

