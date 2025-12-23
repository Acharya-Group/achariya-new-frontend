"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import {FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useRkclEnquire, { RkclEnquire } from "@/hooks/rkclEnquire";

const Page: React.FC = () => {
  const { allEnquiries, deleteEnquiry, updateEnquiry } = useRkclEnquire();
  const [mounted, setMounted] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const enquiries = allEnquiries.data || [];
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstItem, indexOfLastItem);

  const handleStatusChange = (id: string, status: RkclEnquire["status"]) => {
    updateEnquiry.mutate(
      { _id: id, status } as RkclEnquire,
      {
        onSuccess: () => toast.success("Status updated successfully!"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      deleteEnquiry.mutate(id, {
        onSuccess: () => toast.success("Enquiry deleted successfully!"),
        onError: () => toast.error("Failed to delete enquiry"),
      });
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">RKCL Enquiries</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[1300px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">Tehsil</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">Pin Code</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentEnquiries.map((e, idx) => (
                <tr key={e._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                        <td className="px-4 py-2">{e.createdAt?.split("T")[0]}</td>
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.email}</td>
                  <td className="px-4 py-2">{e.number}</td>
                  <td className="px-4 py-2">{e.district}</td>
                  <td className="px-4 py-2">{e.tehsil}</td>
                  <td className="px-4 py-2">{e.city}</td>
                  <td className="px-4 py-2">{e.pinCode}</td>
                  <td className="px-4 py-2">{e.course}</td>
                  
                  <td className="px-4 py-2">
                    <select
                      value={e.status || "pending"}
                      onChange={(ev) => handleStatusChange(e._id, ev.target.value as RkclEnquire["status"])}
                      className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                 <td className="px-4 py-2"> <button
                                       onClick={() => handleDelete(e._id)}
                                       className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                                     >
                                       <FaTrash />
                                     </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
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
