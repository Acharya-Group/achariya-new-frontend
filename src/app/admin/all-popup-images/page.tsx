"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { usePopup, Popup } from "@/hooks/popup";

const Page: React.FC = () => {
  const { allPopups, deletePopup, updatePopup } = usePopup();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [editingPopup, setEditingPopup] = useState<Popup | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editLink, setEditLink] = useState<string>("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allPopups.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading popup...</p>
      </AdminLayout>
    );

  if (allPopups.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allPopups.error?.message}
        </p>
      </AdminLayout>
    );

  const Sliders = allPopups.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Sliders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Sliders.length / itemsPerPage);

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this Image?")) return;
    deletePopup.mutate(id, {
      onSuccess: () => toast.success("Popup deleted successfully!"),
      onError: () => toast.error("Failed to delete Popup!"),
    });
  };

  const handleEdit = (popup: Popup) => {
    setEditingPopup(popup);
    setPreviewImage(popup.image);
    setSelectedFile(null);
    setEditLink(popup.link); 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    if (!editingPopup) return toast.error("No popup selected!");
    if (!editLink.trim()) return toast.error("Link cannot be empty!");

    updatePopup.mutate(
      { id: editingPopup._id, image: selectedFile || undefined, link: editLink },
      {
        onSuccess: () => {
          toast.success("Popup updated successfully!");
          setEditingPopup(null);
          setSelectedFile(null);
          setPreviewImage(null);
          setEditLink("");
        },
        onError: () => toast.error("Failed to update Popup!"),
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Popups</h1>

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
              {currentItems.map((popup, idx) => (
                <tr key={popup._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2">{popup.link}</td>
                  <td className="px-4 py-2">
                    <Image
                      height={64}
                      width={96}
                      src={popup.image}
                      alt={`popup ${popup._id}`}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(popup)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(popup._id)}
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
        {editingPopup && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingPopup(null)}
                className="absolute top-2 right-2 text-gray-500 hover:animate-spin cursor-pointer hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update Popup</h2>

              {/* Upload File */}
              <input type="file" onChange={handleFileChange} className="mb-4 cursor-pointer bg-secondary text-white rounded-2xl inline py-2 px-3 max-w-[320px]" />

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
                disabled={updatePopup.status === "pending"}
                className={`px-4 py-2 bg-secondary cursor-pointer text-white rounded hover:bg-primary ${
                  updatePopup.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updatePopup.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
