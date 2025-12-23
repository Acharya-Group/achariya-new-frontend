'use client';

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface ImageItem {
  id: number;
  url: string;
  category: string;
}

const Page: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([
    { id: 1, url: "/images/hero-slide-1.jpg", category: "school" },
    { id: 2, url: "/images/hero-slide-2.jpg", category: "school" },
    { id: 3, url: "/images/hero-slide-3.jpg", category: "college" },
    { id: 4, url: "/images/hero-slide-1.jpg", category: "college" },
    { id: 5, url: "/images/hero-slide-2.jpg", category: "office" },
    { id: 6, url: "/images/hero-slide-3.jpg", category: "office" },
  ]);

  const [selectedCategory] = useState<string>("school");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Filter by category
  const filteredImages = images.filter(img => img.category === selectedCategory);

  // Handlers
  const handleEdit = (id: number) => {
    alert(`Edit image ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-6 capitalize">{selectedCategory} Images</h1>
          
          <Link href="/admin/all-gallery"><button className="bg-secondary cursor-pointer hover:bg-primary transition duration-200 px-3 py-2 text-white rounded-2xl">All cotegories</button></Link>
        </div>
        {/* Images Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr No.</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredImages.map((img, idx) => (
                <tr key={img.id}>
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">
                    <Image width={128} height={80}
                      src={img.url}
                      alt={`Image ${img.id}`}
                      className="w-32 h-20 object-cover rounded cursor-pointer"
                      onClick={() => setPreviewImage(img.url)}
                    />
                  </td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(img.id)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(img.id)}
                      className="p-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setPreviewImage(null)}
          >
            <Image
            height={200}
            width={200}
              src={previewImage}
              alt="Preview"
              className="max-h-[80%] max-w-[80%] object-contain rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
