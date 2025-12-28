import type { Metadata } from "next";
import IraqRegion from "@/pages/regions/Iraq";

export const metadata: Metadata = {
  title: "Industrial Supplier & Engineering Services in Iraq | Antalika",
  description:
    "Antalika provides industrial equipment, engineering outsourcing, and oil & gas solutions to Iraq. Your reliable industrial supplier and engineering partner for Iraqi market.",
  keywords: [
    "industrial supplier iraq",
    "oil and gas equipment iraq",
    "engineering services iraq",
    "industrial procurement iraq",
    "engineering outsourcing iraq",
    "iraq industrial supply"
  ],
  alternates: { canonical: "/regions/iraq" }
};

export default function IraqPage() {
  return <IraqRegion />;
}

