"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import useDc from "@/hooks/dc";

const Page: React.FC = () => {
  const { allDc, deleteDc } = useDc();
  const [mounted, setMounted] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allDc.isLoading) return <AdminLayout>Loading...</AdminLayout>;
  if (allDc.isError) return <AdminLayout>Error loading DCs!</AdminLayout>;

  const dcs = allDc.data || [];

  // Filtered DCs based on search query
  const filteredDcs = dcs.filter(dc =>
    dc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete handler
  const handleDelete = (id: string) => {
    if (confirm("Delete this DC?")) {
      deleteDc.mutate(id, {
        onSuccess: () => alert("Deleted successfully!"),
        onError: () => alert("Delete failed!"),
      });
    }
  };

  // Copy to clipboard
  const copyData = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(dcs));
      alert("Copied to clipboard!");
    }
  };

  // Export PDF
  const exportPDF = () => {
    if (typeof window === "undefined") return;

    const doc = new jsPDF();
    doc.text("DC List", 14, 16);

    const tableData = dcs.map(dc => [dc.name, dc.email, dc.number, dc.district, dc.state, dc.address]);

    autoTable(doc, {
      head: [["Name", "Email", "Number", "District", "State", "Address"]],
      body: tableData,
      startY: 20,
    });

    doc.save("dc-list.pdf");
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDcs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDcs.length / itemsPerPage);

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All DCs</h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Copy</button>
          <CSVLink data={dcs} filename="dc-list.csv" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">CSV</CSVLink>
          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">PDF</button>
          <button onClick={() => { if (typeof window !== "undefined") window.print(); }} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Print</button>
        </div>

        {/* Search input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[800px] divide-y divide-gray-200 w-full">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((dc, index) => (
                <tr key={dc._id}>
                  <td className="px-4 py-2">{index + 1 + (currentPage-1)*itemsPerPage}</td>
                  <td className="px-4 py-2">{dc.name}</td>
                  <td className="px-4 py-2">{dc.email}</td>
                  <td className="px-4 py-2">{dc.number}</td>
                  <td className="px-4 py-2">{dc.district}</td>
                  <td className="px-4 py-2">{dc.state}</td>
                  <td className="px-4 py-2 max-w-[200px]">
                    <div className="max-h-[100px] overflow-y-auto whitespace-pre-line">
                      {dc.address}
                    </div>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <Link href={`/admin/update-dc/${dc._id}`}>
                      <button className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600">
                        <FaEdit />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(dc._id!)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
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
