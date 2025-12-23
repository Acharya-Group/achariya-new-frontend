"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSlider, Slider } from "@/hooks/slider";

const Page: React.FC = () => {
  const { allSliders, deleteSlider, updateSlider } = useSlider();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [editingSlider, setEditingSlider] = useState<Slider | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editLink, setEditLink] = useState<string>("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Loading and error state
  if (allSliders.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading sliders...</p>
      </AdminLayout>
    );

  if (allSliders.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allSliders.error?.message}
        </p>
      </AdminLayout>
    );

  const Sliders = allSliders.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Sliders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Sliders.length / itemsPerPage);

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this slide?")) return;
    deleteSlider.mutate(id, {
      onSuccess: () => toast.success("Slider deleted successfully!"),
      onError: () => toast.error("Failed to delete slider!"),
    });
  };

  const handleEdit = (slider: Slider) => {
    setEditingSlider(slider);
    setPreviewImage(slider.image);
    setSelectedFile(null);
    setEditLink(slider.link);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    if (!editingSlider) return toast.error("No slider selected!");
    if (!editLink.trim()) return toast.error("Link cannot be empty!");

    updateSlider.mutate(
      { id: editingSlider._id, image: selectedFile || undefined, link: editLink },
      {
        onSuccess: () => {
          toast.success("Slider updated successfully!");
          setEditingSlider(null);
          setSelectedFile(null);
          setPreviewImage(null);
          setEditLink("");
        },
        onError: () => toast.error("Failed to update slider!"),
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Slides</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Link</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((slide, idx) => (
                <tr key={slide._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2">{slide.link}</td>
                  <td className="px-4 py-2">
                    <Image
                      height={64}
                      width={96}
                      src={slide.image}
                      alt={`Slide ${slide._id}`}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(slide)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(slide._id)}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Update Modal */}
        {editingSlider && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingSlider(null)}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:animate-spin hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update Slider</h2>

              {/* Upload File */}
              <input type="file" onChange={handleFileChange} className="mb-4" />

              {/* Update Link */}
              <input
                type="text"
                value={editLink}
                onChange={(e) => setEditLink(e.target.value)}
                placeholder="Enter link"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              {/* Preview */}
              {previewImage && (
                <Image
                  height={160}
                  width={160}
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}

              {/* Update Button */}
              <button
                onClick={handleUpdate}
                disabled={updateSlider.status === "pending"}
                className={`px-4 py-2 cursor-pointer bg-secondary text-white rounded hover:bg-primary ${
                  updateSlider.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updateSlider.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
