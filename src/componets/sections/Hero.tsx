"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { Slider, useSlider } from "@/hooks/slider";

const Hero = () => {
  const { allSliders } = useSlider();
  const [sliders, setSliders] = useState<Slider[]>([]);

  useEffect(() => {
    if (allSliders.isSuccess && allSliders.data) {
      setSliders(allSliders.data);
    }
  }, [allSliders.isSuccess, allSliders.data]);

  // Handle loading, error, and empty states
  if (allSliders.isLoading) {
    return (
      <div className="w-full h-[200px] lg:min-h-[400px] flex items-center justify-center">
        <p>Loading sliders...</p>
      </div>
    );
  }

  if (allSliders.isError) {
    return (
      <div className="w-full h-[200px] lg:min-h-[400px] flex items-center justify-center">
        <p>Error: {allSliders.error?.message}</p>
      </div>
    );
  }

  if (!sliders.length) {
    return (
      <div className="w-full h-[200px] lg:min-h-[400px] flex items-center justify-center">
        <p>No sliders found</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        speed={800}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="hero_slider w-full h-[160px] sm:h-[300px] min-[400px]:h-[220px] lg:min-h-[400px]"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href={slide.link}
              className="block w-full h-[160px] sm:h-[300px] lg:h-[400px] min-[400px]:h-[220px]"
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1600}
                height={500}
                priority={index === 0}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        aria-label="left arrow"
        className="hero-prev hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-1 sm:p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 sm:flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300"
      >
        <FiArrowLeft />
      </button>
      <button
        aria-label="right arrow"
        className="hero-next hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-1 sm:p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 sm:flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300"
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Hero;
