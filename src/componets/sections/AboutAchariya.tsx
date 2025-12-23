"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";


const AboutAchariya = () => {

  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Background Decorative Image */}
      <Image
        className="absolute hidden sm:flex top-[20px] end-[-40px] animate-spin-slow"
        src="/images/icons/red-circel.png"
        alt="Decorative Dots"
        width={100}
        height={100}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl md:text-4xl font-bold text-primary lg:mb-6 mb-4 flex flex-wrap items-center gap-2"
        >
          About <span className="text-secondary ml-2">Achariya</span>
          <span className="text-secondary ml-2">
            <Typewriter
              words={[
                "Empowering Digital Innovation",
                "Building Smarter Solutions",
                "Transforming Ideas Into Reality",
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

        {/* About Text */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="text-gray-700 leading-relaxed space-y-6"
        >
          <p>
            <strong>Achariya Technologies Private Limited</strong> commenced its
            operations in 2008. Since then, the company has evolved with an
            innovative and integrated communication approach—covering environment
            scanning, research & analytics, perception mapping, strategic image
            building, media relations & advocacy, crisis communication, media
            innovation, industry & government relations, digital platforms, and
            other value-added services.
          </p>

          <p>
            Over the years, we have strategically aligned our processes to meet
            the business objectives of clients, while constantly updating our
            methods to match global standards. Today, Achariya Technologies
            stands as a nationally recognized service provider in{" "}
            <strong>
              e-Governance, e-Mitra, G2C, B2C, B2B Services, Insurance,
              RKCL-RSCIT, and Bank BC (CSP)
            </strong>
            , operating successfully across India.
          </p>

          <p>
            With a legacy of more than 15 years, we have been at the forefront
            of <strong>Digital Transformation & Emerging Technologies</strong>.
            By integrating advanced information systems, maintaining high
            standards of delivery, and ensuring transparency, we continue to
            offer clients unmatched value and efficiency.
          </p>

          <p>
            Our success story is shaped by our commitment to{" "}
            <strong>quality service, technological innovation,</strong> and{" "}
            <strong>customer satisfaction</strong>—helping us remain a trusted
            partner for individuals, businesses, and governments alike.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div
            data-aos="fade-right"
            data-aos-duration="1400"
            className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-primary relative overflow-hidden"
          >
            <div className="bg-secondary h-[100px] w-[100px] absolute opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
            <div className="bg-secondary h-[100px] w-[100px] absolute opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a <strong>unique and quality service provider</strong> in
              every sector we serve, setting new benchmarks of excellence,
              innovation, and customer satisfaction while continuously adapting
              to the dynamic global business environment.
            </p>
          </div>

          {/* Mission */}
          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-secondary relative overflow-hidden"
          >
            <div className="bg-secondary h-[100px] w-[100px] absolute opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
            <div className="bg-secondary h-[100px] w-[100px] absolute opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>

            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a truly <strong>customer-centric organization</strong>,
              building trust and long-term relationships through unmatched
              service standards, transparency, and advanced technological
              solutions that empower individuals, businesses, and governments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAchariya;
