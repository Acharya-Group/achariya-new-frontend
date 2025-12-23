"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useFeedbackComplaint, { FeedbackComplaint } from "@/hooks/feedbackComplaint";

const FeedbackAdminPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { allFeedbacks, updateFeedback, deleteFeedback } = useFeedbackComplaint();

  useEffect(() => {
    setMounted(true);
  }, []);

useEffect(() => {
  if (allFeedbacks.isSuccess) {
    toast.success("Feedback & complaints fetched successfully!");
  }

  if (allFeedbacks.isError) {
    toast.error(allFeedbacks.error?.message || "Failed to fetch data");
  }
}, [
  allFeedbacks.isSuccess,
  allFeedbacks.isError,
  allFeedbacks.error?.message, 
]);


  if (!mounted) return null;
  if (allFeedbacks.isLoading)
    return (
      <AdminLayout>
        <p className="p-6">Loading data...</p>
      </AdminLayout>
    );

  const feedbacks = allFeedbacks.data;
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstItem, indexOfLastItem);

  const handleStatusChange = (entry: FeedbackComplaint, newStatus: FeedbackComplaint["status"]) => {
    updateFeedback.mutate(
      { _id: entry._id, status: newStatus },
      {
        onSuccess: () => toast.success("Status updated successfully"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;

    deleteFeedback.mutate(id, {
      onSuccess: () => toast.success("Deleted successfully"),
      onError: () => toast.error("Failed to delete"),
    });
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Feedback & Complaints</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[1300px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">District</th>
                <th className="px-4 py-2">State</th>
                <th className="px-4 py-2">Form Type</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentFeedbacks.map((entry, index) => (
                <tr key={entry._id}>
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td className="px-4 py-2">{entry.createdAt?.split("T")[0]}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.number}</td>
                  <td className="px-4 py-2">{entry.district}</td>
                  <td className="px-4 py-2">{entry.state}</td>
                  <td className="px-4 py-2">{entry.formType}</td>
                  <td className="px-4 py-2">{entry.subject}</td>
                  <td className="px-4 py-2">
                    <div className="w-40 h-20 p-2 border rounded overflow-y-auto">{entry.message}</div>
                  </td>
                  <td className="px-4 py-2">
                    <select
                      value={entry.status || "pending"}
                      onChange={(e) =>
                        handleStatusChange(entry, e.target.value as FeedbackComplaint["status"])
                      }
                      className="px-2 py-1 rounded border-[#7a0706] border-[2px]"
                    >
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {currentFeedbacks.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-2 text-center text-gray-500">
                    No entries found
                  </td>
                </tr>
              )}
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
            Page {currentPage} of {totalPages || 1}
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
    </AdminLayout>
  );
};

export default FeedbackAdminPage;
