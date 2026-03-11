"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-cyan-400 to-neutral-50 bg-opacity-50 mt-20"
      >
        Growth services for ambitious businesses
      </div>
      <p
        className="mt-4 text-lg font-normal text-neutral-300 max-w-lg   text-center mx-auto"
      >
        From high-converting websites and Shopify development to branding and
        performance marketing, we execute what drives measurable growth.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
