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
                <div className="text-3xl pb-5 md:text-7xl px-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-200 bg-opacity-50 font-bold">
                    Website Design That Drives Conversions
                </div>
                <p className="mt-4 text-lg font-normal text-black/70 max-w-lg text-center mx-auto px-4">
                    We design and build high-performance websites that look premium,
                    communicate trust, and turn visitors into qualified leads.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-4 md:px-0">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-4">
                        {column.map((image, index) => (
                            <motion.div 
                                key={image.src} 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: (columnIndex * 0.1) + (index * 0.1) 
                                }}
                                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
                            >
                                <Image
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebsiteDesign;