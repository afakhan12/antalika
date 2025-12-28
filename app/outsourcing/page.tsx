import type { Metadata } from "next";
import Outsourcing from "@/pages/Outsourcing";

export const metadata: Metadata = {
  title: "Engineering Outsourcing & Digital Support",
  description:
    "Multidisciplinary engineering outsourcing and digital engineering support for industrial, trading, and oil & gas operations across MENA.",
  keywords: [
    "engineering outsourcing",
    "structural engineering outsourcing",
    "mechanical engineering services",
    "digital engineering support",
    "MENA engineering services"
  ],
  alternates: { canonical: "/outsourcing" }
};

export default function Page() {
  return <Outsourcing />;
}
