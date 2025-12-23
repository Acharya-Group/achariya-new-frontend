"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useTestimonials, Testimonial as TestimonialType } from "@/hooks/testimonial";

const Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { allTestimonials, deleteTestimonial } = useTestimonials();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const testimonials: TestimonialType[] = Array.isArray(allTestimonials.data)
    ? allTestimonials.data
    : [];

  // Pagination
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonials.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Delete handler
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    setDeletingId(id);
    deleteTestimonial.mutate(id, {
      onSuccess: () => {
        toast.success("Testimonial deleted successfully!");
        setDeletingId(null);
      },
      onError: (err) => {
        toast.error(err?.message || "Failed to delete testimonial!");
        setDeletingId(null);
      },
    });
  };

  // Copy to clipboard
  const copyData = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(testimonials));
      toast.success("Copied to clipboard!");
    }
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Testimonials", 14, 16);
    const tableData = testimonials.map(t => [t.name, t.description]);
    autoTable(doc, {
      head: [["Name", "Description"]],
      body: tableData,
      startY: 20,
    });
    doc.save("testimonials.pdf");
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Testimonials</h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 cursor-pointer bg-gray-200 rounded hover:bg-gray-300 transition">
            Copy
          </button>
          <CSVLink data={testimonials} filename="testimonials.csv" className="px-4 py-2 cursor-pointer bg-gray-200 rounded hover:bg-gray-300 transition">
            CSV
          </CSVLink>
          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition">
            PDF
          </button>
          <button onClick={() => window.print()} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition">
            Print
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr No.</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((t, index) => (
                <tr key={t._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2 max-w-[200px] truncate">{t.description}</td>
                  <td className="px-4 py-2">
                    <Image
                      height={64}
                      width={64}
                      src={t.Image}
                      alt={t.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <Link href={`/admin/update-testimonial/${t._id}`}>
                      <button className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(t._id)}
                      disabled={deletingId === t._id}
                      className={`p-2 text-white rounded ${deletingId === t._id ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Loading / Error */}
          {allTestimonials.isLoading && <p className="mb-4 text-gray-500">Loading testimonials...</p>}
          {allTestimonials.isError && <p className="mb-4 text-red-500">Error: {allTestimonials.error.message}</p>}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
