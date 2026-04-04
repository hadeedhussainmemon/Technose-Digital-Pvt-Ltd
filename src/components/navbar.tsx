"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
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

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-neutral-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-24 md:h-28">
        <Link className="cursor-pointer shrink-0" href="/">
          <Image
            priority
            src="/logo/logo.png"
            alt="Technose Digital Pvt Ltd logo"
            width={250}
            height={250}
            className="w-20 h-20 md:w-32 md:h-32 object-contain"
          />
        </Link>

        <div
          className="cursor-pointer hidden
            lg:flex space-x-10 items-center
             text-black text-center
             font-medium"
        >
          <div onClick={scrollToWebsiteDesign} className="hover:text-[#00AAE7] transition-colors">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-[#00AAE7] transition-colors">
            Graphic Design
          </div>
          <div onClick={scrollToEcommerceStores} className="hover:text-[#00AAE7] transition-colors">
            E-commerce Stores
          </div>
          <div onClick={scrollToBrands} className="hover:text-[#00AAE7] transition-colors">
            Brands
          </div>
          <div onClick={scrollToServices} className="hover:text-[#00AAE7] transition-colors">
            Services
          </div>
          <Link href="/work" className="hover:text-[#00AAE7] transition-colors">
            Work
          </Link>
          <Link href="/pricing" className="hover:text-[#00AAE7] transition-colors">
            Packages
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

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="https://wa.me/923168035550"
            className="flex items-center space-x-2 text-black hover:text-[#00AAE7] transition-colors font-medium whitespace-nowrap"
            target="_blank"
          >
            <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            <span>+92 316 8035550</span>
          </Link>
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center
            rounded-md border border-[#00AAE7] bg-[linear-gradient(110deg,#00aae7,45%,#0088cc,55%,#00aae7)]
            bg-[length:200%_100%] px-6 font-medium text-white transition-colors
             focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
