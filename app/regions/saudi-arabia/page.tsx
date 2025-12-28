import type { Metadata } from "next";
import SaudiArabiaRegion from "@/pages/regions/SaudiArabia";

export const metadata: Metadata = {
  title: "Oil & Gas Trading & Industrial Supply in Saudi Arabia | Antalika",
  description:
    "Antalika delivers premium oil and gas equipment, industrial filtration systems, and engineering services to Saudi Arabia. Leading industrial supplier for Saudi market.",
  keywords: [
    "oil and gas trading saudi arabia",
    "industrial supplier saudi arabia",
    "engineering services saudi arabia",
    "oil and gas equipment saudi arabia",
    "industrial procurement saudi arabia",
    "saudi arabia industrial supply"
  ],
  alternates: { canonical: "/regions/saudi-arabia" }
};

export default function SaudiArabiaPage() {
  return <SaudiArabiaRegion />;
}

