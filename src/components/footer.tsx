"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black/[0.96] border-t border-white/10 pt-16 pb-8 px-6 md:px-10 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 lg:gap-20">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Technose Digital Pvt Ltd logo"
              width={200}
              height={100}
              className="w-32 object-contain"
            />
          </Link>
          <p className="text-gray-400 text-base leading-relaxed">
            Technose Digital Pvt Ltd crafts high-performing websites, standout brand identities, and growth campaigns tailored to scale your business.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="https://wa.me/923168035550" target="_blank" className="text-gray-400 hover:text-[#00AAE7] transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00AAE7] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00AAE7] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00AAE7] transition-colors">
              <FaFacebook className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-lg">Quick Links</h3>
          <Link href="/#services" className="text-gray-400 hover:text-[#00AAE7] transition-colors">Services</Link>
          <Link href="/work" className="text-gray-400 hover:text-[#00AAE7] transition-colors">Our Work</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-[#00AAE7] transition-colors">Packages</Link>
          <Link href="/contact" className="text-gray-400 hover:text-[#00AAE7] transition-colors">Contact Us</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg">Contact</h3>
          <div className="text-gray-400 space-y-2">
            <p className="hover:text-white transition-colors cursor-pointer">hello@technose-digital.com</p>
            <p className="hover:text-white transition-colors cursor-pointer">+92 316 8035550</p>
            <p className="hover:text-white transition-colors cursor-pointer">Karachi, Pakistan</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Technose Digital Pvt Ltd. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
