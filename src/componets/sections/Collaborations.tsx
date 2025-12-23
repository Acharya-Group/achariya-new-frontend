"use client"
import React from 'react'
import SubHeading from '../ui/SubHeading'
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { ourCollaborations } from "../../lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';

const Collaborations = () => {
  return (
      <section className='bg-gray-50'>
          <div className="container mx-auto px-4 py-12">
            <SubHeading content="Our Collaborations"  />
            <div>
                 {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              slidesPerView={8}
              breakpoints={{
                1200: { slidesPerView: 8 },
                992: { slidesPerView: 7 },
                768: { slidesPerView: 4 },
                500: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
              }}
              className="trusted_slider max-w-[2200px] mx-auto"
            >
              {ourCollaborations.map((logo, idx) => (
                <SwiperSlide
                  key={idx}
                  className="flex justify-center items-center px-2 py-2 h-[80px]"
                >
                  <Image
                    src={logo}
                    alt={`Logistics Partner ${idx + 1}`}
                    width={150}
                    height={80}
                    className="object-contain w-full h-[80px] lg:h-[50px] hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            </div>
      </section>
  )
}

export default Collaborations