import Hero from '@/components/hero';
import React from 'react'
import reliability from "../../../public/img/reliability.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};
const Reliability = () => {
  return <Hero imageUrl={reliability} title="Reliability" altText="reliability" />;
};

export default Reliability;
