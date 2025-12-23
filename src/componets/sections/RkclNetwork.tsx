"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import useRkclEnquire, { CreateRkclInput } from "@/hooks/rkclEnquire";

const RkclNetwork: React.FC = () => {
  const { createEnquiry } = useRkclEnquire();

  const [formData, setFormData] = useState<CreateRkclInput>({
    name: "",
    email: "",
    number: "",
    district: "",
    tehsil: "",
    city: "",
    pinCode: "",
    course: "",
    status: "pending",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createEnquiry.mutateAsync(formData);
      toast.success("🎉 Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        district: "",
        tehsil: "",
        city: "",
        pinCode: "",
        course: "",
        status: "pending",
      });
    } catch{
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-primary font-bold text-center mb-6">
        Send a Query for Admission
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PHONE
          </label>
          <input
            type="number"
            name="number"
            placeholder="Enter your phone number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            DISTRICT
          </label>
          <input
            type="text"
            name="district"
            placeholder="Enter your district"
            value={formData.district}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Tehsil */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            TEHSIL
          </label>
          <input
            type="text"
            name="tehsil"
            placeholder="Enter your tehsil"
            value={formData.tehsil}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CITY / VILLAGE
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city or village"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Pin Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PIN CODE
          </label>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter your pin code"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            COURSE
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          >
   <option value="-1">Select Course</option>
	<option value="1">RS-CFA</option>
	<option value="2">RS-CFA with tally certificate</option>
	<option value="3">RCTE</option>
	<option value="4">RS-CSEP(basic level)</option>
	<option value="5">RS-CSEP(advance level)</option>
	<option value="6">RS-CSEP mode</option>
	<option value="7">RCDM</option>
	<option value="8">RCADM</option>
	<option value="9">RCGD</option>
	<option value="10">RCAGD</option>
	<option value="11">RCAE</option>
	<option value="12">RCAEVB</option>
	<option value="13">RCWDS</option>
	<option value="14">RCWDPHP</option>
	<option value="15">RCWDDJ</option>
	<option value="16">RCBPP</option>
	<option value="17">RCAPP</option>
	<option value="18">RS-CIT</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg cursor-pointer text-white font-medium text-lg w-full
              bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d]
              disabled:opacity-50 flex items-center justify-center transition`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                SUBMITTING...
              </>
            ) : (
              "SUBMIT"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RkclNetwork;
