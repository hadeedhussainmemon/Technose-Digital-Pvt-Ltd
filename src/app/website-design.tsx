import { motion } from "framer-motion";
import Image from "next/image";

const showcaseImages = [
    { src: "/images/business.jpeg", alt: "Corporate project 01 website preview" },
    { src: "/images/coffe.jpeg", alt: "Coffee shop project 02 website preview" },
    { src: "/images/small-business-3.webp", alt: "Small firm project 03 website preview" },
    { src: "/images/man.jpeg", alt: "Portfolio project 04 website preview" },
    { src: "/images/image-business.jpeg", alt: "Agency project 05 website preview" },
    { src: "/images/custom-2.jpeg", alt: "SaaS project 06 website preview" },
    { src: "/images/custom-3.jpeg", alt: "Analytics project 07 website preview" },
    { src: "/images/design-g.webp", alt: "Creative project 08 website preview" },
    { src: "/images/sales.webp", alt: "E-Commerce project 09 website preview" },
    { src: "/images/assets.webp", alt: "Fintech project 10 website preview" },
    { src: "/images/ewr.webp", alt: "Logistics project 11 website preview" },
    { src: "/images/combo.png", alt: "B2B project 12 website preview" },
];

const WebsiteDesign = () => {
    const columns = [
        showcaseImages.slice(0, 3),
        showcaseImages.slice(3, 6),
        showcaseImages.slice(6, 9),
        showcaseImages.slice(9, 12),
    ];

    return (
        <div className="text-black">
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2"
            >
                <div className="text-4xl pb-5 md:text-8xl px-10 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#00AAE7] font-extrabold tracking-tighter">
                    Website Design That <br /> Drives Conversions
                </div>
                <p className="mt-4 text-xl font-medium text-black/60 max-w-lg text-center mx-auto px-4">
                    We design and build high-performance websites that look premium,
                    communicate trust, and turn visitors into qualified leads.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-4 md:px-10">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-6">
                        {column.map((image, index) => (
                            <motion.div 
                                key={image.src} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: (columnIndex * 0.1) + (index * 0.1) 
                                }}
                                className="group relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,170,231,0.15)] transition-all duration-500 ease-out border border-black/5 hover:border-[#00AAE7]/30"
                            >
                                <Image
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={image.src}
                                    alt={image.alt}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Glint/Shimmer Overlay */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-fast pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebsiteDesign;