"use client";
import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { FaChalkboardTeacher, FaLaptopCode, FaHome, FaGlobe } from "react-icons/fa";
import SubHeading from "../ui/SubHeading";
import Image from "next/image";
const AchariyaDrone = () => {
  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
  <div className="order-2 lg:order-1">
    <SubHeading content="About Achariya Drones" className="text-start"/>
    <p className="text-base text-gray-700 mb-4">
      Welcome to Drone Pilot Training Institute. Achariya Technologies Pvt.
      Ltd. was founded in 2008 as a Drone startup in Hisar. By securing well
      noted projects at the end of 2022, we began operations out of office in
      Hisar, because working from home had never been our cup of tea. With new
      joinees and a bigger office, we started our journey of becoming the
      training hub for Drones in India by designing Industrial Application
      based Drone Courses.
    </p>
    <p className="text-base text-gray-700">
      The aim for Achariya Technologies Pvt. Ltd. had always been to believe
      in training the next generation for becoming extremely skilled in the
      UAV + Geospatial industry. Our highly trained staff has many years of
      experience in the aviation industry and also in the drone industry,
      primarily from the defence background with certifications from the
      Ministry of Defence through their respective wings (Army, Navy or Air
      Force). This experience is now being extended to the rapidly growing
      UAV (Drone) market in the civilian sector. So our students will be
      certified by Ex-Military UAV pilot. We also periodically affiliate
      with various organizations around the world for creating a better
      career for our students.
    </p>
  </div>
  <div className="flex justify-center order-1 lg:order-2">
    <div>
      <Image height={400} width={1000}
        src="/images/achariya-drones.jpg"
        alt="Drone Training"
        className="w-full h-[200] lg:h-[400px] object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</div>

{/* Gallery */}
<section>
   <SubHeading content="OUR GALLERY" className="text-start"/>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    <Image src="/images/drone-10.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-1.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-2.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-3.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-4.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-5.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
    <Image src="/images/drone-6.jpg" alt="gallery" width={400} height={400} className="rounded-lg max-h-[200px] object-cover" />
  </div>
</section>

      {/* Why Choose Us */}
      <section>
   <SubHeading content="WHY CHOOSE US" className="text-start"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Trainers */}
  <div className="bg-white shadow-md hover:border-blue-800 border rounded-2xl p-6 text-center hover:shadow-xl transition">
    <FaChalkboardTeacher className="mx-auto mb-4 w-20 h-20 text-red-600" />
    <h3 className="font-semibold text-lg text-gray-900">
      Highly Qualified & Most Experienced Trainers
    </h3>
  </div>
  {/* Labs */}
  <div className="bg-white shadow-md hover:border-blue-800 border rounded-2xl p-6 text-center hover:shadow-xl transition">
    <FaLaptopCode className="mx-auto mb-4 w-20 h-20 text-blue-600" />
    <h3 className="font-semibold text-lg text-gray-900">
      Well equipped labs with latest simulation softwares & tools
    </h3>
  </div>
  {/* Accommodation */}
  <div className="bg-white shadow-md hover:border-blue-800 border rounded-2xl p-6 text-center hover:shadow-xl transition">
    <FaHome className="mx-auto mb-4 w-20 h-20 text-green-600" />
    <h3 className="font-semibold text-lg text-gray-900">
      Affordable & hygienic accommodation
    </h3>
  </div>
  {/* Placement */}
  <div className="bg-white shadow-md hover:border-blue-800 border rounded-2xl p-6 text-center hover:shadow-xl transition">
    <FaGlobe className="mx-auto mb-4 w-20 h-20 text-purple-600" />
    <h3 className="font-semibold text-lg text-gray-900">
      All India & International placement support
      <p className="text-xs">(SIIN Partner with NSDC for Overseas Employment Opportunities)</p>
    </h3>
  </div>
</div>
      </section>
      <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mt-2">For More Information</h2>
          <Link href="https://atpldrones.com" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Globe className="w-5 h-5" /> https://atpldrones.com
          </Link>
          <Link href="mailto:droneinfo@achariyagroup.com" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Mail className="w-5 h-5" /> droneinfo@achariyagroup.com
          </Link>
          <Link href="tel:+91 958-788-7157" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Phone className="w-5 h-5" /> +91 958-788-7157
          </Link>
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" /> ATPL Drones #107, Shiv Vihar AB,
            Near Maharani Bagh Palace, Lalarpura, Gandhi Path (West), Vaishali
            Nagar, Jaipur, Rajasthan 302021
          </p>
      </div>
    </div>
  );
};

export default AchariyaDrone;
