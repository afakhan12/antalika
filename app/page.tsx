import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
  title: "Antalika | Engineering Outsourcing & Industrial Trading (MENA)",
  description:
    "Antalika is a Turkey-based engineering outsourcing and industrial trading company supporting oil & gas, filtration, and procurement projects across Saudi Arabia, Iraq, Syria, and MENA.",
  keywords: [
    "industrial trading",
    "engineering outsourcing",
    "oil and gas supply",
    "industrial filtration",
    "Food Industy and Supplements",
    "Turkey",
    "Saudi Arabia",
    "Iraq",
    "Syria",
    "MENA procurement"
  ],
  alternates: { canonical: "/" }
};

export default function Page() {
  return <Home />;
}
