"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaPhone } from "react-icons/fa";
import { projectManagersContact } from "@/lib/utils";
import SubHeading from "../ui/SubHeading";
import ContactForm from "./Contact";
import useDc from "@/hooks/dc";

const ContactUsPage = () => {
  const [success, setSuccess] = useState(false);
  const { allDc } = useDc();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allDc.isLoading) return <div className="text-center p-8">Loading...</div>;
  if (allDc.isError) return <div className="text-center p-8 text-red-500">Error loading data!</div>;

  const dcs = allDc.data || [];
  

  const contactCards = [
    {
      id: 1,
      title: "CORPORATE OFFICE",
      icon: <FaBriefcase className="text-primary text-3xl" />,
      content: (
        <>
          Achariya Technologies Pvt. Ltd. 107, Shiv Vihar AB, Near Maharani Bagh
          Palace, Lalarpura Gandhi Path (West), Vaishali Nagar, Jaipur- 302021
          (Raj.) INDIA
        </>
      ),
    },
    {
      id: 2,
      title: "REG. OFFICE",
      icon: <FaBriefcase className="text-primary text-3xl" />,
      content: (
        <>
          Site No. 7P, Near Veda Hospital, Sector 16-17, Hisar – 125001 (HR) –
          INDIA
        </>
      ),
    },
   {
  id: 3,
  title: "CALL US AT",
  icon: <FaPhone className="text-primary text-3xl" />,
  content: (
    <>
      <p className="text-primary font-semibold">+91 890-190-3333</p>
      <p className="text-primary font-semibold">+91 903-404-0243</p>
      <p className="text-primary font-semibold">+91 958-788-7702</p>
    </>
  ),
},

    {
      id: 4,
      title: "EMAIL ADDRESS",
      icon: <FaEnvelope className="text-primary text-3xl" />,
      content: (
        <>
          <p>info@achariyagroup.com</p>
          <p>manager@achariyagroup.com</p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
   <ContactForm/>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <h3 className="text-green-600 font-semibold text-lg">✅ Success!</h3>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setSuccess(false)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-4">
        {contactCards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white border-2 border-[#261b7d] rounded-2xl p-3 shadow-lg flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            <motion.div className="mb-4" whileHover={{ scale: 1.2, rotate: 10 }}>
              {card.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {card.title}
            </h3>
            <div className="text-sm text-gray-500">{card.content}</div>
          </motion.div>
        ))}
      </div>

      {/* Project Managers Table */}
      <SubHeading content="Projects Manager & Technical Team Phone Numbers" />
      <div className="overflow-x-auto border rounded-[10px] border-gray-300">
       <table className="border border-gray-300 rounded-lg overflow-hidden min-w-[400px] sm:min-w-full">
  <thead className="bg-primary text-white">
    <tr>
      <th className="p-4 text-left">Name</th>
      <th className="p-4 text-left">Project</th>
      <th className="p-4 text-left">Designation</th>
      <th className="p-4 text-left">mobile</th>
      <th className="p-4 text-left">Location</th>
    </tr>
  </thead>
  <tbody>
    {projectManagersContact.map((project, index) => (
      <tr
        key={index}
        className={`border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 ${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        }`}
      >
        <td className="p-4">{project.name}</td>
        <td className="p-4">{project.project}</td>
        <td className="p-4">{project.designation}</td>
        <td className="p-4">{project.mobile}</td>
        <td className="p-4">{project.location}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>

      {/* District Coordinators Table */}
      <div className="mt-10">
        <SubHeading content="District Co-Ordinators Contact Details :" />
        <div className="overflow-x-auto border rounded-[10px] border-gray-300">
                 <table className="min-w-full border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3 text-left">Sr.No.</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">District</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {dcs.length > 0 ? (
              dcs.map((dc, index) => (
                <tr
                  key={dc._id || index}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{dc.name}</td>
                  <td className="p-3">{dc.number}</td>
                  <td className="p-3">{dc.district}</td>
                  <td className="p-3">{dc.email}</td>
                  <td className="p-3 max-w-[250px] whitespace-pre-line">{dc.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-500">
                  No District Coordinators found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
