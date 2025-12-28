import type { Metadata } from "next";
import OilGas from "@/pages/OilGas";

export const metadata: Metadata = {
  title: "Oil & Gas Equipment Supply & Procurement",
  description:
    "Oil & gas equipment supply, procurement, and engineering support across Turkey, Saudi Arabia, Iraq, and Syria. Valves, filters, drilling and wellhead equipment.",
  keywords: [
    "oil and gas supply",
    "oil and gas procurement",
    "drilling equipment",
    "wellhead equipment",
    "Saudi Arabia oil gas",
    "Iraq oil gas supplier",
    "Turkey oil gas trading"
  ],
  alternates: { canonical: "/industries/oil-gas" }
};

export default function Page() {
  return <OilGas />;
}
