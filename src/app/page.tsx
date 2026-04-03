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
      {/* Background Mesh Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00AAE7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-[#00AAE7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#00AAE7]/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>
      
      <div className="relative z-10 w-full md:items-center md:justify-center antialiased bg-grid-black/[0.02]">
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
        
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 z-20 relative pointer-events-none">
          Build authority online. <br /> Scale revenue with confidence.
        </div>
        <p className="mt-4 text-lg font-normal text-black/70 max-w-lg text-center mx-auto px-4 z-20 relative pointer-events-none">
          Technose Digital Pvt Ltd crafts high-performing websites, standout
          brand identities, and growth campaigns tailored to your business
          goals.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap my-6">
          <Link
            href="/contact"
            className="cursor-pointer flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r bg-[#00AAE7] border-transparent font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
          </Link>

        </div>

        <div className="w-full pt-20">
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
