"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import toast, { Toaster } from "react-hot-toast";
import { useSlider } from "@/hooks/slider";
import Image from "next/image";

const AddSliderPage: React.FC = () => {
  const { addSlider } = useSlider();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [link, setLink] = useState(""); 
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview(null);
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return toast.error("Please select an image!");
    if (!link) return toast.error("Please enter a link!");

    setLoading(true);
    addSlider.mutate(
      { image: selectedFile, link }, 
      {
        onSuccess: () => {
          toast.success("Slider added successfully!");
          setSelectedFile(null);
          setLink("");
          setPreview(null);
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add slider!");
          setLoading(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
         <Toaster />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add Slider</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Link Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter Link"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-700 cursor-pointer 
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-[#7a0706] file:text-white
                hover:file:bg-[#261b7d] transition"
              required
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <Image
              height={256}
              width={256}
              src={preview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded-lg border"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer bg-[#7a0706] text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02] disabled:opacity-50`}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddSliderPage;
