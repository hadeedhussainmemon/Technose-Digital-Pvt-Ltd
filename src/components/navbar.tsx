"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToEcommerceStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToEcommerceStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !scrolled) setScrolled(true);
    else if (latest <= 100 && scrolled) setScrolled(false);
  });

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <motion.div
        className={`relative flex items-center justify-between w-full max-w-7xl px-6 md:px-10 transition-all duration-500 ease-in-out pointer-events-auto overflow-hidden ${
          scrolled 
            ? "h-20 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,170,231,0.1)]" 
            : "h-24 md:h-28 bg-white/20 backdrop-blur-md rounded-2xl border border-transparent shadow-none"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#00AAE7] to-cyan-400 z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        <Link className="cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105" href="/">
          <Image
            priority
            src="/logo/logo.png"
            alt="Technose Digital Pvt Ltd logo"
            width={250}
            height={250}
            className={`object-contain transition-all duration-500 ${scrolled ? 'w-16 h-16' : 'w-20 h-20 md:w-32 md:h-32'}`}
          />
        </Link>

        <div
          className="cursor-pointer hidden
            lg:flex space-x-10 items-center
             text-black text-center
             font-medium"
        >
          <div onClick={scrollToWebsiteDesign} className="relative group cursor-pointer hover:text-[#00AAE7] transition-colors py-2">
            Website Design
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </div>
          <div onClick={scrollToGraphicDesign} className="relative group cursor-pointer hover:text-[#00AAE7] transition-colors py-2">
            Graphic Design
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </div>
          <div onClick={scrollToEcommerceStores} className="relative group cursor-pointer hover:text-[#00AAE7] transition-colors py-2">
            E-commerce Stores
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </div>
          <div onClick={scrollToBrands} className="relative group cursor-pointer hover:text-[#00AAE7] transition-colors py-2">
            Brands
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </div>
          <div onClick={scrollToServices} className="relative group cursor-pointer hover:text-[#00AAE7] transition-colors py-2">
            Services
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </div>
          <Link href="/work" className="relative group hover:text-[#00AAE7] transition-colors py-2">
            Work
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </Link>
          <Link href="/pricing" className="relative group hover:text-[#00AAE7] transition-colors py-2">
            Packages
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00AAE7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToWebsiteDesign={scrollToWebsiteDesign}
                scrollToGraphicDesign={scrollToGraphicDesign}
                scrollToEcommerceStores={scrollToEcommerceStores}
                scrollToBrands={scrollToBrands}
                scrollToServices={scrollToServices}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            />
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-6">

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="
              inline-flex h-12 items-center justify-center 
              rounded-2xl border-2 border-[#00AAE7]/30 bg-gradient-to-r from-[#00AAE7] to-[#0088cc]
              px-8 font-bold text-white transition-all shadow-[0_0_20px_rgba(0,170,231,0.2)] hover:shadow-[0_0_30px_rgba(0,170,231,0.4)]
              focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
