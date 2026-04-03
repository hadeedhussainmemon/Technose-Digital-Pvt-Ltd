"use client";

import Image from "next/image";

const showcaseImages = [
    { src: "/images/business.jpeg", alt: "Dummy project 01 website preview" },
    { src: "/images/coffe.jpeg", alt: "Dummy project 02 website preview" },
    { src: "/images/small-business-3.webp", alt: "Dummy project 03 website preview" },
    { src: "/images/man.jpeg", alt: "Dummy project 04 website preview" },
    { src: "/images/image-business.jpeg", alt: "Dummy project 05 website preview" },
    { src: "/images/custom-2.jpeg", alt: "Dummy project 06 website preview" },
    { src: "/images/custom-3.jpeg", alt: "Dummy project 07 website preview" },
    { src: "/images/design-g.webp", alt: "Dummy project 08 website preview" },
    { src: "/images/sales.webp", alt: "Dummy project 09 website preview" },
    { src: "/images/assets.webp", alt: "Dummy project 10 website preview" },
    { src: "/images/ewr.webp", alt: "Dummy project 11 website preview" },
    { src: "/images/combo.png", alt: "Dummy project 12 website preview" },
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
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-emerald-200 bg-opacity-50">
                    Website Design <br /> that drives conversions
                </div>
                <p className="mt-4 text-lg font-normal text-black/70 max-w-lg text-center mx-auto px-4">
                    We design and build high-performance websites that look premium,
                    communicate trust, and turn visitors into qualified leads.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-4">
                        {column.map((image) => (
                            <div key={image.src}>
                                <Image
                                    width={800}
                                    height={1000}
                                    priority
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="h-auto max-w-full rounded-lg"
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