"use client";

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import useReference from "@/hooks/reference"; 
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    referenceNo: "",
    date: "",
    issuedTo: "",
    issuedBy: "",
    subject: ""
  });

  const { createReference } = useReference(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.referenceNo || !formData.date || !formData.issuedTo || !formData.issuedBy || !formData.subject) {
      return toast.error("Please fill in all required fields!");
    }

    createReference.mutate(formData, {
      onSuccess: () => {
        toast.success("Reference added successfully!");
        setFormData({ referenceNo: "", date: "", issuedTo: "", issuedBy: "", subject: "" });
      },
      onError: (error) => {
        toast.error("Failed to add reference!");
        console.error(error);
      }
    });
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-6">Add Reference</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["referenceNo", "date", "issuedTo", "issuedBy"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field === "referenceNo" ? "Reference No." : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "date" ? "date" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              rows={3}
              placeholder="Enter subject"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            ></textarea>
          </div>

 <button
  type="submit"
  disabled={createReference.status === "pending"} 
  className={`w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary cursor-pointer transition ${
    createReference.status === "pending" ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {createReference.status === "pending" ? "Saving..." : "Add Reference"}
</button>


        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
