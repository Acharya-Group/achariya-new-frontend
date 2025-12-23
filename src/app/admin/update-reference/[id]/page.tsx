"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AdminLayout from "@/componets/admin/AdminLayout";
import useReference, { Reference } from "@/hooks/reference";
import toast from "react-hot-toast";

const UpdateReferencePage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };

  const { allReference, updateReference } = useReference();

  const [formData, setFormData] = useState({
    referenceNo: "",
    date: "",
    issuedTo: "",
    issuedBy: "",
    subject: ""
  });

  // Fetch the reference to pre-fill the form
  useEffect(() => {
    const reference = allReference.data?.find(ref => ref._id === id);
    if (reference) {
      setFormData({
        referenceNo: reference.referenceNo,
        date: reference.date,
        issuedTo: reference.issuedTo,
        issuedBy: reference.issuedBy,
        subject: reference.subject
      });
    }
  }, [allReference.data, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateReference.mutate(
      { _id: id, ...formData } as Reference,
      {
        onSuccess: () => {
          toast.success("Reference updated successfully!");
          router.push("/admin/all-reference"); 
        },
        onError: () => {
          toast.error("Failed to update reference!");
        }
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-6">Update Reference</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reference No.</label>
            <input
              type="text"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              placeholder="Enter reference number"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issued To</label>
            <input
              type="text"
              name="issuedTo"
              value={formData.issuedTo}
              onChange={handleChange}
              placeholder="Enter recipient"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issued By</label>
            <input
              type="text"
              name="issuedBy"
              value={formData.issuedBy}
              onChange={handleChange}
              placeholder="Enter issuer"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
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
  disabled={updateReference.status === "pending"} 
  className={`w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary cursor-pointer transition ${
    updateReference.status === "pending" ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {updateReference.status === "pending" ? "Saving..." : "Update Reference"}
</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateReferencePage;
