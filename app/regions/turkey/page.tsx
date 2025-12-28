import type { Metadata } from "next";
import TurkeyRegion from "@/pages/regions/Turkey";

export const metadata: Metadata = {
  title: "Industrial Trading & Engineering Services in Turkey | Antalika",
  description:
    "Antalika provides comprehensive industrial trading, engineering outsourcing, and oil & gas equipment supply services across Turkey. Your trusted Turkish engineering and procurement partner.",
  keywords: [
    "turkish engineering outsourcing",
    "industrial supplier turkey",
    "oil and gas trading turkey",
    "engineering services turkey",
    "industrial procurement turkey",
    "turkish industrial equipment",
    "engineering support turkey"
  ],
  alternates: { canonical: "/regions/turkey" }
};

export default function TurkeyPage() {
  return <TurkeyRegion />;
}

