"use client";
import React, { useState, useEffect } from "react";
import SubHeading from "../ui/SubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { useBlogs } from "@/hooks/blogs";
import type { Blog } from "@/hooks/blogs";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const BlogSection = () => {
  const { allBlogs } = useBlogs();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (allBlogs.isSuccess && allBlogs.data) {
      setBlogs(allBlogs.data);
    }
  }, [allBlogs.isSuccess, allBlogs.data]);

  if (allBlogs.isLoading) return <p>Loading blogs...</p>;
  if (allBlogs.isError) return <p>Error: {allBlogs.error?.message}</p>;
  if (!blogs.length) return <p>No blogs found</p>;

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <SubHeading content="Latest Blogs" />
        <div className="relative mt-6">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
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
            {blogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-borderSpin">
                  <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                    {/* Full-width image */}
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={300}
                     
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 flex flex-col items-center">
                      <h3 className="text-lg font-semibold text-center mb-2 line-clamp-1">
                        {blog.title}
                      </h3>
                    <p className="text-gray-600 text-sm text-center mb-2 line-clamp-2">
    {blog.shortDescription}
</p>
                      <Link className="font-semibold text-primary hover:underline hover:!text-secondary" href={`/blog/${blog._id}`}>
                          Learn More
                      </Link>
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
<Link className="flex justify-center mt-8" href="/blog">
                        <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] text-white rounded transition duration-300">
                          View More
                        </button>
                      </Link>

      </div>
    </section>
  );
};

export default BlogSection;
