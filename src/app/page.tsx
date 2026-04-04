"use client";

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import EcommerceStores from "./ecommerce-stores";
import Brands from "./brands";
import Services from "./services";
import { useRef } from "react";
import FAQS from "./faq";
import Stats from "./stats";
import { Hero3D } from "@/components/ui/hero-3d";

import { motion } from "framer-motion";

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const ecommerceStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEcommerceStores = () => {
    ecommerceStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full md:items-center md:justify-center bg-white relative overflow-hidden">
      {/* Background Mesh Glows & Noise */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full overflow-hidden">
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00AAE7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-[#00AAE7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#00AAE7]/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 w-full md:items-center md:justify-center antialiased">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToEcommerceStores={scrollToEcommerceStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="#00AAE7" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 h-screen flex flex-col justify-center">
        {/* Real 3D Component Rendering Behind Hero Text */}
        <Hero3D />
        
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-5xl pb-5 md:text-8xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-black via-black/80 to-[#00AAE7]/50 z-20 relative pointer-events-none font-extrabold tracking-tighter"
        >
          Build Authority Online. <br /> Scale Revenue With Confidence.
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg font-medium text-black/70 max-w-lg text-center mx-auto px-4 z-20 relative pointer-events-none"
        >
          Technose Digital Pvt Ltd crafts high-performing websites, standout
          brand identities, and growth campaigns tailored to your business
          goals.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 flex-wrap my-10 z-20 relative pointer-events-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <Link
              href="/contact"
              className="relative z-10 cursor-pointer flex items-center justify-center px-10 py-4 text-white bg-gradient-to-r from-[#00AAE7] to-[#0088cc] font-bold tracking-tight shadow-[0_10px_30px_rgba(0,170,231,0.3)] group-hover:shadow-[0_15px_40px_rgba(0,170,231,0.4)] transition-all text-xl"
            >
              Start A Project

              {/* Shimmer Effect Overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer-fast pointer-events-none" />
            </Link>
          </motion.div>
        
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/work"
              className="cursor-pointer flex items-center justify-center rounded-3xl px-10 py-4 text-black bg-white border border-black/5 font-bold tracking-tight shadow-xl hover:bg-neutral-50 transition-all text-xl"
            >
              View Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Page Content Block */}
      <div className="w-full relative z-10 antialiased bg-white pb-20">
        <div className="w-full pt-10">
          <SliderOne />
        </div>
        <Stats />
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={ecommerceStoresRef}>
          <EcommerceStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id="services" ref={servicesRef}>
          <Services />
        </div>
        <FAQS />
      </div>
    </div>
    </div>
  );
}
