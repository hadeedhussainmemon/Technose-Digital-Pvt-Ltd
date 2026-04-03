import { motion } from "framer-motion";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <motion.div
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
        <div
          className="text-4xl pb-5 md:text-7xl text-center
           bg-clip-text text-transparent bg-gradient-to-b
            from-[#00AAE7] to-neutral-800 bg-opacity-50 mt-10 md:mt-20 font-bold"
        >
          Growth services for <br /> ambitious businesses
        </div>
        <p
          className="mt-4 text-lg font-normal text-black/70 max-w-lg text-center mx-auto px-4"
        >
          From high-converting websites and E-commerce development to branding and
          performance marketing, we execute what drives measurable growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CardHoverEffectDemo />
      </motion.div>
    </div>
  );
};

export default Services;
