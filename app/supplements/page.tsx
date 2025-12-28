import type { Metadata } from "next";
import Supplements from "@/pages/Supplements";

export const metadata: Metadata = {
    title: "Supplements & Functional Food Distribution | Antalika",
    description:
      "Distribution of nutritional supplements and functional food products across Iraq and Syria. Authorized supply partner for selected Turkish brands.",
    keywords: [
      "supplements distribution",
      "sports nutrition distributor",
      "BigJoy distributor Iraq",
      "BigJoy distributor Syria",
      "supplements wholesale Iraq",
      "supplements supply Syria",
      "functional food MENA"
    ],
  };
  
export default function Page() {
  return <Supplements />;
}
