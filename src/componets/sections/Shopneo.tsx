"use client"
import { shopneoFeatures } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Shopneo = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div>
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-3xl md:text-4xl font-bold text-primary lg:mb-6 mb-4 flex flex-wrap items-center gap-2"
          >
            ShopNeo.in <span className="text-secondary ml-2">- eCommerce Portal</span>
            <span className="text-secondary ml-2">
              <Typewriter
                words={[
                     "Shop Smarter, Faster, Better",
      "Trending Products",
      "Online Shopping Experience",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <div className="grid lg:grid-cols-5 overflow-hidden gap-8 items-center mb-12 flex-col-reverse lg:flex-row">
            <div data-aos="fade-right" data-aod-duration="1500" className="lg:col-span-1 order-2 lg:order-1">
              <Image
                src="/images/shopneo_logo.png"
                alt="ShopNeo eCommerce Portal"
                width={300}
                height={300}
                className="rounded-lg shadow-lg mx-auto border-2 border-amber-600"
              />
              <p className="text-center mt-2"><strong>Powered By ONDC</strong></p>
            </div>

            <div data-aos="fade-left" data-aod-duration="1500" className="lg:col-span-4 text-gray-700 leading-relaxed order-1 lg:order-2">
              <p className="text-gray-700 leading-relaxed">
                <strong>“ShopNeo.in”</strong> is the ultimate online shopping destination, bringing together buyers and sellers across <strong>Pan India</strong> on a single, easy-to-use platform. Designed for convenience, efficiency, and security, ShopNeo.in allows customers to browse thousands of products across categories such as fashion, electronics, home essentials, personal care, and much more. The platform provides detailed product descriptions, customer reviews, personalized recommendations, and intuitive search and filter options to help shoppers make informed decisions.

                ShopNeo.in is also <strong>powered by ONDC (Open Network for Digital Commerce)</strong>, which enhances transparency, interoperability, and access for both buyers and sellers. Being part of ONDC ensures that ShopNeo.in users benefit from a larger digital marketplace ecosystem while maintaining seamless transactions and fair competition.

                For sellers, ShopNeo.in is a powerful tool to reach a nationwide audience without the need for physical stores. Sellers can easily list products, manage inventory, track sales, access real-time analytics, and run promotional campaigns to boost visibility and growth. Secure payment gateways, reliable shipping options, and a dedicated support system ensure smooth transactions for both buyers and sellers.

                With ShopNeo.in, online shopping becomes a seamless experience that combines choice, convenience, and confidence. Whether you're looking for the latest trends, exclusive deals, or a trusted platform to sell your products, ShopNeo.in empowers every user to make the most of the digital marketplace. Join today and explore a world of shopping and selling opportunities designed to make your online experience enjoyable, secure, and rewarding.
              </p>

            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
            {/* For Buyers */}
            <div data-aos="fade-right" data-aos-duration="1500" className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-primary relative overflow-hidden">
              <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
              <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
              <h3 className="text-2xl font-semibold text-primary mb-4">For Buyers</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="0">Wide selection of products across categories: fashion, electronics, home essentials, and more.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="500">User-friendly interface for smooth browsing and checkout.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="1000">Secure payments with multiple options.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="1500">Fast delivery and easy tracking of orders.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="2000">Exclusive deals, discounts, and festive offers.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="1500">Product reviews and ratings to make informed decisions.</li>
              </ul>
            </div>
            {/* For Sellers */}
            <div data-aos="fade-left" data-aos-duration="1500" className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-secondary overflow-hidden relative">
              <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
              <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">For Sellers</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="0">Reach customers across India without geographical limits.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="500">Showcase your products professionally on a modern platform.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="1000">Easy onboarding with free registration.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="1500">Advanced analytics to track sales and performance.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="2000">Marketing and promotional support to boost sales.</li>
                <li data-aos="fade-up" data-aos-delay="1500" data-aod-duration="2500">Secure payment settlement and reliable support.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50">
          <div className="py-12 container mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Key Features of ShopNeo.in
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shopneoFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 relative z-0 hover:bg-[url(/gif/services.gif)] backdrop-blur-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-xl flex flex-col items-center text-center hover:before:opacity-100 before:content-[''] before:absolute before:inset-0  before:backdrop-blur-xs before:opacity-0 before:transition-opacity before:duration-500"
                  >
                    <Icon className="relative z-[2] text-secondary text-3xl mb-3" />
                    <h4 className="relative z-[2] font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="relative z-[2] text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="mt-12 text-center container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join ShopNeo Today!
          </h3>
          <p className="text-gray-700 mb-6">
            Free registration for <strong>sellers</strong> across Pan India. Grow your business or shop with ease!
          </p>
          <a
            href="https://shopneo.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-primary text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shopneo;
