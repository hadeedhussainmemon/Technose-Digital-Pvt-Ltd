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
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <Link className="cursor-pointer" href="/">
          <Image
            priority
            src="/logo/logo.png"
            alt="Technose Digital Pvt Ltd logo"
            width={100}
            height={100}
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </Link>

        <div
          className="cursor-pointer hidden
            md:flex space-x-10 items-center
             text-black text-center
             font-medium"
        >
          <div onClick={scrollToWebsiteDesign} className="hover:text-[#00AAE7]">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-[#00AAE7]">
            Graphic Design
          </div>
          <div onClick={scrollToEcommerceStores} className="hover:text-[#00AAE7]">
            E-commerce Stores
          </div>
          <div onClick={scrollToBrands} className="hover:text-[#00AAE7]">
            Brands
          </div>
          <div onClick={scrollToServices} className="hover:text-[#00AAE7]">
            Services
          </div>
          <Link href="/work" className="hover:text-[#00AAE7]">
            Work
          </Link>
          <Link href="/pricing" className="hover:text-[#00AAE7]">
            Packages
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://wa.me/923168035550"
            className="flex items-center space-x-2 text-black hover:text-[#00AAE7] transition-colors font-medium"
            target="_blank"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>+92 316 8035550</span>
          </Link>
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center
            rounded-md border border-[#00AAE7] bg-[linear-gradient(110deg,#00aae7,45%,#0088cc,55%,#00aae7)]
            bg-[length:200%_100%] px-6 font-medium text-white transition-colors
             focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
            focus:ring-offset-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
