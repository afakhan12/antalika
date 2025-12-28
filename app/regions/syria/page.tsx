import type { Metadata } from "next";
import SyriaRegion from "@/pages/regions/Syria";

export const metadata: Metadata = {
  title: "Industrial Trading & Engineering Support in Syria | Antalika",
  description:
    "Antalika delivers industrial equipment, engineering services, and oil & gas solutions to Syria. Trusted industrial supplier and engineering partner for Syrian market.",
  keywords: [
    "industrial supplier syria",
    "engineering services syria",
    "oil and gas equipment syria",
    "industrial procurement syria",
    "engineering outsourcing syria",
    "syria industrial supply"
  ],
  alternates: { canonical: "/regions/syria" }
};

export default function SyriaPage() {
  return <SyriaRegion />;
}

