import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiMonitor className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "Website Design",
        description:
          "Conversion-focused websites with fast load times, clean UX, and responsive layouts that perform across all devices.",
      
      },
      {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiStorefront className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "E-commerce Store",
        description:
          "Scalable Shopify and custom stores built to improve checkout flow, average order value, and repeat purchases.",
       
      },
      {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiLock className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiLock className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "Authentication",
        description:
          "Secure authentication and access control implementation with modern standards to protect users and data.",
      
      },
      {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiMegaphone className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "Social Media",
        description:
          "Performance-driven social campaigns and content systems designed to increase reach, leads, and brand trust.",
      
      },
      {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiAppStoreLogo className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "App Development",
        description:
          "Custom mobile app development with intuitive interfaces, reliable architecture, and smooth user journeys.",
      
      },
      {
<<<<<<< HEAD
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-[#00AAE7]" /></div>,
=======
        icon : <div className="inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3"><PiHeadsetFill className="h-6 w-6 text-cyan-300" /></div>,
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        title: "Support",
        description:
          "Dedicated post-launch support for updates, fixes, and continuous optimization as your business scales.",
     
      },
];