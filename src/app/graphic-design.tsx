"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

const GraphicDesign = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#00AAE7] to-cyan-300 bg-opacity-50 font-bold">
            Graphic Design <br /> for modern brands
          </div>

          <p className="mt-4 text-lg font-normal  text-black/70 max-w-lg text-center mx-auto px-4">
            From identity systems and social creatives to campaign visuals, we
            create designs that make your brand instantly recognizable.
          </p>
        </motion.div>
        
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10 mt-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-10 md:px-0"
          >
            <EvervaultCardSnippet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
