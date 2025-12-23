"use client";

import React from "react";
import Link from "next/link";
import SubHeading from "../ui/SubHeading";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "@/lib/utils";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Projects = () => {

  return (
    <section>
      <div className="container mx-auto px-4 py-12 relative">
        <SubHeading content="Our Projects"  />

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            pagination={{
              el: ".projects-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".project-next",
              prevEl: ".project-prev",
            }}
            breakpoints={{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }} 
            className="overflow-visible h-[240px]"
          >
            {projects.map((project) => (
              <SwiperSlide  key={project.id}>
                <Link href={project.link} passHref>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "auto",
                      borderRadius: "20px",
                      overflow: "hidden",
                      mt: 2,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        className="max-h-[90px] min-h-[90px]"
                        image={project.img}
                        alt={project.title}
                        
                      />
                      <CardContent sx={{ pt: 2 }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: "bold", color: "#261b7d" }}
                        >
                          {project.title}
                        </Typography>
                         <Typography
                          variant="body2"
                          sx={{ 
                            color: "text.secondary", 
                            lineHeight: 1.5,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {project.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button aria-label="left arrow" className="absolute cursor-pointer hidden project-prev left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 sm:flex justify-center items-center shadow hover:bg-secondary transition-all">
              <FiArrowLeft/>
          </button>
          <button aria-label="right arrow" className="absolute cursor-pointer hidden project-next right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 sm:flex justify-center items-center shadow hover:bg-secondary transition-all">
               <FiArrowRight/>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="projects-pagination mt-6 flex  justify-center gap-2 [&>.swiper-pagination-bullet]:bg-gray-400 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet-active]:bg-primary"></div>
      </div>
    </section>
  );
};

export default Projects;
