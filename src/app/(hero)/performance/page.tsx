import Image from "next/image";

import performance from "../../../../public/img/performance.png";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
};

const Performance = () => {
  return <Hero imageUrl={performance} title="Perfessional Cloud Hosting" altText="performance" />;
};

export default Performance;
