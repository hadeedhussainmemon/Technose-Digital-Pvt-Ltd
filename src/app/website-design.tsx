"use client";

import Image from "next/image";

const showcaseImages = [
    { src: "/images/business.jpeg", alt: "Corporate website homepage design" },
    { src: "/images/coffe.jpeg", alt: "Cafe and local business website design" },
    { src: "/images/small-business-3.webp", alt: "Small business landing page design" },
    { src: "/images/man.jpeg", alt: "Personal brand portfolio website design" },
    { src: "/images/image-business.jpeg", alt: "Consulting firm website interface" },
    { src: "/images/custom-2.jpeg", alt: "Custom service page design layout" },
    { src: "/images/custom-3.jpeg", alt: "Creative agency website section design" },
    { src: "/images/design-g.webp", alt: "Modern visual style website concept" },
    { src: "/images/sales.webp", alt: "Sales-focused marketing page design" },
    { src: "/images/assets.webp", alt: "Business assets and conversion page design" },
    { src: "/images/ewr.webp", alt: "Brand storytelling website section" },
    { src: "/images/combo.png", alt: "Multi-device website presentation" },
];

const WebsiteDesign = () => {
    const columns = [
        showcaseImages.slice(0, 3),
        showcaseImages.slice(3, 6),
        showcaseImages.slice(6, 9),
        showcaseImages.slice(9, 12),
    ];

    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-emerald-200 bg-opacity-50">
                    Website Design <br /> that drives conversions
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                    We design and build high-performance websites that look premium,
                    communicate trust, and turn visitors into qualified leads.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-4">
                        {column.map((image) => (
                            <div key={image.src} className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                                <Image
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebsiteDesign;