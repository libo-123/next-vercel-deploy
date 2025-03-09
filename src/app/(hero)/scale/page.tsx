import Hero from '@/components/hero';
import React from 'react'
import scale from "../../../../public/img/scale.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
};
const Scale = () => {
  return <Hero imageUrl={scale} title="Scale" altText="scale" />;
};

export default Scale;
