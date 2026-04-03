"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import DropDownMenu from "./drop-down-menu";

const PricingNavbar = () => {
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
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.jpg"
              alt="Technose Digital Pvt Ltd logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-black/30 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-black/30 cursor-pointer"
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
            focus:ring-offset-white

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingNavbar;
