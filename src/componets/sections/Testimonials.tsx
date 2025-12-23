"use client";
import React, { useState, useEffect } from "react";
import SubHeading from "../ui/SubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Testimonial, useTestimonials } from "@/hooks/testimonial";

const Testimonials = () => {
  const { allTestimonials } = useTestimonials();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    if (allTestimonials.isSuccess && allTestimonials.data) {
      setTestimonials(allTestimonials.data);
    }
  }, [allTestimonials.isSuccess, allTestimonials.data]);

  if (allTestimonials.isLoading) return <p>Loading testimonials...</p>;
  if (allTestimonials.isError) return <p>Error: {allTestimonials.error?.message}</p>;
  if (!testimonials.length) return <p>No testimonials found</p>;

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 relative">
        <SubHeading content="What Our Clients Say" />
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            loop={true}
            pagination={{ el: ".projects-pagination", clickable: true }}
            navigation={{ nextEl: ".project-next", prevEl: ".project-prev" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
  <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-borderSpin">
    <div className="bg-white  text-white p-6 rounded-xl shadow-md flex flex-col items-center h-60">
      <Image
        height={80}
        width={80}
        src={testimonial.Image}
        alt={testimonial.name}
        className="w-[80px] h-[80px] border object-cover border-white p-2 rounded-full mb-4 shadow-lg"
      />
      <h3 className="text-lg text-primary font-semibold text-center mb-2">
        {testimonial.name}
      </h3>
      <div className="flex-grow flex items-center"> 
        <p className="text-gray-600 text-sm text-center italic line-clamp-3">
          "{testimonial.description}"
        </p>
      </div>
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="absolute cursor-pointer project-prev left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 flex justify-center items-center shadow hover:bg-secondary transition-all">
            <FiArrowLeft />
          </button>
          <button className="absolute cursor-pointer project-next right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 flex justify-center items-center shadow hover:bg-secondary transition-all">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
