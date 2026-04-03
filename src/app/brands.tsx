"use client";

import { motion } from "framer-motion";
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
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div
            className="bg-gradient-to-b from-[#00AAE7] to-cyan-300 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl"
          >
            The best brands <br /> choose us
          </div>

          <p className="mt-4 text-lg font-normal  text-black/70 max-w-lg text-center mx-auto px-4">
            From small businesses to large corporations, we have helped many
            brands elevate their business.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/70 p-5 md:h-40 md:p-8 hover:bg-neutral-900 transition-colors"
            >
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="Client brand logo"
                className="h-full w-auto max-w-full object-contain filter invert opacity-80"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center text-xl xl:text-3xl pt-10 md:pt-0 pb-4 px-8 text-center text-black font-serif italic">
            &quot;Technose Digital helped us unify design, development, and
            campaign execution into one smooth growth engine.&quot;
          </div>

          <div className="items-center flex justify-center flex-col text-black mt-4">
            <Image
              src="/logo/logo.png"
              alt="Technose Digital logo"
              width={100}
              height={100}
              className="w-12 pt-2 md:w-16"
            />

            <div className="pt-3 text-center text-black">
              <div className="text-lg font-bold">Amit Chawla</div>
              <div className="text-sm text-black/70">Founder, Northgate Commerce</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;