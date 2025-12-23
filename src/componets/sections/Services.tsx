"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaUniversity, FaLaptopCode, FaSpa, FaRobot, FaShoppingCart } from "react-icons/fa";
import SubHeading from "../ui/SubHeading";

const services = [
  {
    id: 1,
    name: "E-Mitra",
    description: "Your trusted digital service partner for Rajasthan government services.",
    icon: <FaUsers className="w-10 h-10 text-blue-600" />,
    link: "/e-mitra",
  },
  {
    id: 2,
    name: "RKCL / RSCIT / ITGK",
    description: "Rajasthan Knowledge Corporation Limited training & certification.",
    icon: <FaLaptopCode className="w-10 h-10 text-green-600" />,
    link: "/rkcl",
  },
  {
    id: 3,
    name: "Business Correspondent/Bank Bc",
    description: "Banking & financial services through our correspondent network.",
    icon: <FaUniversity className="w-10 h-10 text-purple-600" />,
    link: "/kiosk-banking",
  },
  {
    id: 4,
    name: "Yoga Professional Certification",
    description: "Get certified in Yoga with government-recognized certification.",
    icon: <FaSpa className="w-10 h-10 text-pink-600" />,
    link: "/yoga-certification",
  },
  {
    id: 5,
    name: "Drones Services / DGCA Certified Drone Pilot (RPC)",
    description: "Drone training, certification & professional aerial solutions.",
    icon: <FaRobot className="w-10 h-10 text-red-600" />,
    link: "/achariya-drones",
  },
{
  id: 6,
  name: "ShopNeo/ONDC Marketplace",
  description: "Our exclusive e-commerce platform offering a wide range of products and services online.",
  icon: <FaShoppingCart className="w-10 h-10 text-yellow-400" />, 
  link: "/shopneo",
}

];

const Services = () => {
  return (
    <div className="relative py-12">
      <div className="container mx-auto px-4">
      
        <SubHeading content="Our Services"  />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.div data-aos="flip-right" data-aos-duration="1500" 
              key={service.id}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-borderSpin"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                {/* Link */}
                <Link
                  href={service.link}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r duration-300 from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
