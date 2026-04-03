import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
 
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="w-screen h-screen bg-white text-black p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl border-t border-slate-100"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link href="/pricing" className="text-black text-2xl" onClick={onClose}>
          Packages
        </Link>
        <Link href="/contact" className="text-black text-2xl" onClick={onClose}>
          Contact
        </Link>
        <Link href="/work" className="text-black text-2xl" onClick={onClose}>
          Work
        </Link>

        <Link
          href="/#services"
          className="cursor-pointer text-black text-2xl"
          onClick={onClose}
        >
          Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;