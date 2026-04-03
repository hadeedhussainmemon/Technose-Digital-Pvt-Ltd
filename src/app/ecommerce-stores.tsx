import { motion } from "framer-motion";
import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Technose Digital completely rebuilt our store, resulting in a 40% increase in checkout conversions within the first month.",
    name: "Client A",
  },
  {
    image: "/images/shop-2.jpeg",
    quote: "Their team understood our brand vision perfectly and delivered a Shopify experience that our customers absolutely love.",
    name: "Client B",
  },

  {
    image: "/images/s-2.webp",
    quote: "Scaling our B2B operations was seamless thanks to the incredibly fast and robust architecture built by Technose.",
    name: "Client C",
  },
];

const EcommerceStores = () => {
  return (
    <section className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#00AAE7] to-neutral-800 bg-opacity-50 font-bold">
            E-commerce Stores <br /> that are built to sell
          </div>

          <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto px-4">
            We build E-commerce experiences with clear product storytelling,
            frictionless checkout, and conversion-focused layouts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-4 md:px-10 py-10">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt={`${store.name} E-commerce storefront preview`}
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto shadow-md"
                />
                <p className="text-neutral-800 font-bold text-lg mt-6 text-center leading-relaxed">
                  &quot;{store.quote}&quot;
                </p>
                <div className="h-[2px] w-12 bg-[#00AAE7] my-4" />
                <p className="text-[#00AAE7] font-bold text-lg">
                  {store.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceStores;
