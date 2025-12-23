"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import useReference from "@/hooks/reference";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const { allReference, deleteReference } = useReference();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const references = allReference.data || [];

  const handleDelete = (id: string) => {
    if (confirm("Are you sure to delete this reference?")) {
      deleteReference.mutate(id, {
        onSuccess: () => toast.success("Reference deleted!"),
        onError: () => toast.error("Failed to delete reference!"),
      });
    }
  };

  const copyData = () => {
    navigator.clipboard.writeText(JSON.stringify(references));
    toast.success("Copied to clipboard!");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Reference List", 14, 16);
    const tableData = references.map(r => [r.referenceNo, r.date, r.issuedTo, r.issuedBy, r.subject]);
    autoTable(doc, { head: [["Reference No", "Date", "Issued To", "Issued By", "Subject"]], body: tableData, startY: 20 });
    doc.save("references.pdf");
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = references.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(references.length / itemsPerPage);

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All References</h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Copy</button>
          <CSVLink data={references} filename="references.csv" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">CSV</CSVLink>
          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">PDF</button>
          <button onClick={() => window.print()} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Print</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Reference No</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Issued To</th>
                <th className="px-4 py-2 text-left">Issued By</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((ref, index) => (
                <tr key={ref._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{ref.referenceNo}</td>
                  <td className="px-4 py-2">{ref.date}</td>
                  <td className="px-4 py-2">{ref.issuedTo}</td>
                  <td className="px-4 py-2">{ref.issuedBy}</td>
                          <td className="px-4 py-2 max-w-[200px]">
  <div className="max-h-[100px] overflow-y-auto whitespace-pre-line">
    {ref.subject}
  </div>
</td>

                  <td className="px-4 py-2 flex gap-2">
                    <Link href={`/admin/update-reference/${ref._id}`}>
                      <button className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(ref._id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
