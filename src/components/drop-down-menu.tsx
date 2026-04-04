import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToEcommerceStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ 
  onClose,
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToEcommerceStores,
  scrollToBrands,
  scrollToServices,
}) => {
  return (
    <motion.div
      className="fixed inset-0 top-24 w-full h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-2xl text-black p-6 z-50 border-t border-neutral-100"
      initial={{ opacity: 0, y: "-20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-20%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col space-y-4 pt-4 overflow-y-auto max-h-full">
        <div 
          onClick={() => { scrollToWebsiteDesign(); onClose(); }} 
          className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2 cursor-pointer"
        >
          Website Design
        </div>
        <div 
          onClick={() => { scrollToGraphicDesign(); onClose(); }} 
          className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2 cursor-pointer"
        >
          Graphic Design
        </div>
        <div 
          onClick={() => { scrollToEcommerceStores(); onClose(); }} 
          className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2 cursor-pointer"
        >
          E-commerce Stores
        </div>
        <div 
          onClick={() => { scrollToBrands(); onClose(); }} 
          className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2 cursor-pointer"
        >
          Brands
        </div>
        <div 
          onClick={() => { scrollToServices(); onClose(); }} 
          className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2 cursor-pointer"
        >
          Services
        </div>
        
        <div className="h-px bg-neutral-100 my-4" />

        <Link href="/work" className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2" onClick={onClose}>
          Success Stories
        </Link>
        <Link href="/pricing" className="text-2xl font-bold tracking-tight text-neutral-800 hover:text-[#00AAE7] transition-colors py-2" onClick={onClose}>
          Our Packages
        </Link>
        <Link href="/contact" className="text-2xl font-bold tracking-tight text-[#00AAE7] py-2" onClick={onClose}>
          Start A Project
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;