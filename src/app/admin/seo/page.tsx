"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useSeo from "@/hooks/seo";

const SeoPage: React.FC = () => {
  const { seoQuery, upsertSeo } = useSeo();

  const [formData, setFormData] = useState({
    title: "",
    keywords: "",
    description: "",
  });

  // ✅ Custom loading state for submit
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seoQuery.data) {
      setFormData({
        title: seoQuery.data.title,
        keywords: seoQuery.data.keywords,
        description: seoQuery.data.description,
      });
    }
  }, [seoQuery.data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ start loading
    try {
      await upsertSeo.mutateAsync(formData);
      toast.success("SEO saved successfully!");
    } catch{
      toast.error("Failed to save SEO");
    } finally {
      setLoading(false);
    }
  };

  if (seoQuery.isLoading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">SEO Add & Update</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
            <textarea
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              rows={4}
              placeholder="Enter keywords"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            ></textarea>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // ✅ disable button during loading
            className="w-full bg-[#7a0706] cursor-pointer text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Saving..." : "Submit"} {/* ✅ show custom loading text */}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default SeoPage;
