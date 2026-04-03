import Image from "next/image";
import React from "react";

const logos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
  {
    image: "/logo/logoipsum-247.svg",
  },
];

const Brands = () => {
  return (
    <section className="w-full px-4 pt-16 md:pt-24">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          className="bg-gradient-to-b from-cyan-400 to-emerald-200 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-5xl"
        >
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-black/70 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/70 p-5 md:h-40 md:p-8"
            >
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="Client brand logo"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-black font-serif">
          &quot;Technose Digital helped us unify design, development, and
          campaign execution into one smooth growth engine.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-black">
          <Image
            src="/images/logo.svg"
            alt="Technose Digital logo"
            width={1000}
            height={1000}
            className="w-10 pt-2 md:w-12"
          />

          <div className="pt-3 text-center text-black">
            <div className="text-sm font-semibold">Client Name</div>
            <div className="text-xs text-black/70 md:text-sm">Founder, Dummy Brand</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;