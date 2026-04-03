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
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "Website Design",
        description:
          "Conversion-focused websites with fast load times, clean UX, and responsive layouts that perform across all devices.",
      
      },
      {
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "E-commerce Store",
        description:
          "Scalable Shopify and custom stores built to improve checkout flow, average order value, and repeat purchases.",
       
      },
      {
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiLock className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "Authentication",
        description:
          "Secure authentication and access control implementation with modern standards to protect users and data.",
      
      },
      {
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "Social Media",
        description:
          "Performance-driven social campaigns and content systems designed to increase reach, leads, and brand trust.",
      
      },
      {
        icon : <div className="bg-[#00AAE7]/10 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "App Development",
        description:
          "Custom mobile app development with intuitive interfaces, reliable architecture, and smooth user journeys.",
      
      },
      {
        icon : <div className="bg-[#00AAE7]/10 p-4 ronpm install three @react-three/fiber@8 @react-three/drei@9unded-full"><PiHeadsetFill className="w-8 h-8 text-[#00AAE7]" /></div>,
        title: "Support",
        description:
          "Dedicated post-launch support for updates, fixes, and continuous optimization as your business scales.",
     
      },
];