import type { Metadata } from "next";
import Filters from "@/pages/Filters";

export const metadata: Metadata = {
  title: "Industrial Filtration Systems & Filter Bags",
  description:
    "Industrial filtration systems including filter bags, cartridges, and stainless steel housings for oil & gas and process industries across MENA.",
  keywords: [
    "industrial filtration",
    "filter bags",
    "filter cartridges",
    "stainless steel filter housings",
    "oil gas filtration"
  ],
  alternates: { canonical: "/products/filters" }
};

export default function Page() {
  return <Filters />;
}
