"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const slideFrameClass = "relative h-[220px] w-full overflow-hidden rounded-2xl md:h-[320px]";

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <div className={slideFrameClass}>
              <Image
                priority
                src="/images/business.jpeg"
                alt="Business website hero preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <div className={slideFrameClass}>
              <Image
                priority
                src="/images/coffe.jpeg"
                alt="Cafe brand website preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <div className={slideFrameClass}>
              <Image
                priority
                src="/images/small-business-3.webp"
                alt="Small business landing page preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <div className={slideFrameClass}>
              <Image
                priority
                src="/images/man.jpeg"
                alt="Personal brand service page preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <div className={slideFrameClass}>
              <Image
                priority
                src="/images/image-business.jpeg"
                alt="Corporate marketing website preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;