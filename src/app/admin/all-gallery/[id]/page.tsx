"use client";

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaTrash, FaEdit, FaTimes } from "react-icons/fa";
import { useGallery, ImageType } from "@/hooks/gallery";
import { useParams } from "next/navigation";

const SingleCategoryPage: React.FC = () => {
  const { id } = useParams(); // category _id from URL
  const { useSingleGallery, updateImage, deleteImage } = useGallery();

  const { data: category, isLoading, isError } = useSingleGallery(id as string);

  const [editingImage, setEditingImage] = useState<ImageType | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (isLoading) return <AdminLayout>Loading...</AdminLayout>;
  if (isError || !category) return <AdminLayout>Error loading category!</AdminLayout>;

  // -----------------------------
  // Handlers
  // -----------------------------
  const handleDeleteImage = (image: ImageType) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    deleteImage.mutate(
      { categoryId: category._id, imageId: image._id! }, // ✅ use MongoDB _id
      {
        onSuccess: () => toast.success("Image deleted successfully!"),
        onError: () => toast.error("Failed to delete image!"),
      }
    );
  };

  const handleEditImage = (image: ImageType) => {
    setEditingImage(image);
    setPreviewImage(image.url);
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    if (!editingImage || !selectedFile) return toast.error("No image selected!");

    updateImage.mutate(
      { categoryId: category._id, imageId: editingImage._id!, image: selectedFile }, // ✅ use MongoDB _id
      {
        onSuccess: () => {
          toast.success("Image updated successfully!");
          setEditingImage(null);
          setSelectedFile(null);
          setPreviewImage(null);
        },
        onError: () => toast.error("Failed to update image!"),
      }
    );
  };

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">{category.category}</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[400px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr No.</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {category.images.map((img, index) => (
                <tr key={img._id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <Image
                      src={img.url}
                      width={100}
                      height={100}
                      alt={`Image ${index + 1}`}
                      className="object-cover h-[100px] w-[100px] rounded"
                    />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEditImage(img)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteImage(img)}
                      className="p-2 bg-red-500 text-white cursor-pointer rounded hover:bg-red-600"
                    >
                      <FaTrash size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {editingImage && (
          <div className="fixed inset-0  backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 border border-blue-900 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingImage(null)}
                className="absolute top-2 right-2 text-gray-500 hover:animate-spin hover:text-gray-800 cursor-pointer"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-bold mb-4">Update Image</h2>

                 <input type="file" onChange={handleFileChange} className="mb-4 bg-secondary text-white rounded-2xl max-w-[300px] inline py-2 px-3" />


              {previewImage && (
                <Image
                  src={previewImage}
                  width={200}
                  height={200}
                  alt="Preview"
                  className="object-cover h-[200px] w-[200px] rounded mb-4"
                />
              )}

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-secondary cursor-pointer text-white rounded hover:bg-primary"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default SingleCategoryPage;
