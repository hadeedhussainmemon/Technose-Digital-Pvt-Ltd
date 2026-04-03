"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Dummy testimonial content for Project Store One.",
    name: "Client A",
  },
  {
    image: "/images/shop-2.jpeg",
    quote: "Dummy testimonial content for Project Store Two.",
    name: "Client B",
  },

  {
    image: "/images/s-2.webp",
    quote: "Dummy testimonial content for Project Store Three.",
    name: "Client C",
  },
];

const EcommerceStores = () => {
  return (
    <section className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-black/900 bg-opacity-50">
          E-commerce Stores <br /> that are built to sell
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We build E-commerce experiences with clear product storytelling,
          frictionless checkout, and conversion-focused layouts.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt={`${store.name} E-commerce storefront preview`}
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceStores;
