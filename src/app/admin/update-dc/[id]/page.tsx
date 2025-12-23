"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import useDc from "@/hooks/dc";
import toast from "react-hot-toast";

const Page = () => {
  const params = useParams(); // get params
  const router = useRouter();
  const { allDc, updateDc } = useDc();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    district: "",
    state: "",
    address: "",
  });

  // Find DC by ID after fetching allDc
  useEffect(() => {
    if (allDc.data && params?.id) {
      const dcToEdit = allDc.data.find((dc) => dc._id === params.id);
      if (dcToEdit) {
        setFormData({
          name: dcToEdit.name || "",
          email: dcToEdit.email || "",
          number: dcToEdit.number || "",
          district: dcToEdit.district || "",
          state: dcToEdit.state || "",
          address: dcToEdit.address || "",
        });
      }
    }
  }, [allDc.data, params?.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number) {
      return toast.error("Please fill in required fields!");
    }

    updateDc.mutate(
       { id: params.id as string, formData }, 
      {
        onSuccess: () => {
          toast.success("DC updated successfully!");
          router.push("/admin/all-dc"); 
        },
        onError: () => toast.error("Failed to update DC!"),
      }
    );
  };

  if (allDc.isLoading) {
    return (
      <AdminLayout>
        <p>Loading...</p>
      </AdminLayout>
    );
  }

  if (allDc.isError) {
    return (
      <AdminLayout>
        <p>Error loading DC data</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Update DC</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter number"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter district"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter address"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={updateDc.isPending}
            className="w-full bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-primary transition transform"
          >
            {updateDc.isPending ? "Updating..." : "Update DC"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
