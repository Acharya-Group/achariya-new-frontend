"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import useDc from "@/hooks/dc";
import { useState } from "react";
import toast from "react-hot-toast";
import React from "react";

const Page = () => {
  const { createDc } = useDc();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    district: "",
    state: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number) {
      return toast.error("Please fill in all required fields!");
    }

    createDc.mutate(formData, {
      onSuccess: () => {
        // toast.success("DC added successfully ✅");
        setFormData({
          name: "",
          email: "",
          number: "",
          district: "",
          state: "",
          address: "",
        });
      },
       onError: (error) => {
        toast.error("Error creating DC!");
        console.error(error);
      }
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add DC</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {["name", "email", "number", "district", "state"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "number"
                    ? "text" // ✅ better than number to allow +91, 0 prefixes
                    : "text"
                }
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              />
            </div>
          ))}

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
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
            />
          </div>

          <button
            type="submit"
            disabled={createDc.isPending}
            className={`w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary cursor-pointer transition ${
              createDc.isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {createDc.isPending ? "Adding..." : "Add Dc"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
