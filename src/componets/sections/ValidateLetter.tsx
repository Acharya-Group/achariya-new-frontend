"use client";

import React, { useState } from "react";
import useReference from "@/hooks/reference";

interface Reference {
  _id: string;
  referenceNo: string;
  date: string;
  issuedTo: string;
  issuedBy: string;
  subject: string;
}

const ValidateLetter = () => {
  const { allReference } = useReference();
  const [refNumber, setRefNumber] = useState("");
  const [filteredRefs, setFilteredRefs] = useState<Reference[]>([]);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNumber.trim()) {
      alert("Please enter a reference number!");
      return;
    }

    if (!allReference.data) return;

    const filtered = allReference.data.filter((ref: Reference) =>
      ref.referenceNo.toLowerCase().includes(refNumber.toLowerCase())
    );

    setFilteredRefs(filtered);
    setChecked(true);
    setRefNumber("");
  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
      {/* Input + Check Button */}
      <form
        onSubmit={handleCheck}
        className="bg-white flex flex-col sm:flex-row justify-center gap-3 items-center rounded-3xl w-full max-w-lg p-5 shadow-xl"
      >
        <input
          type="text"
          placeholder="Enter Reference Number"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition"
        />
        <button className="px-4 py-3 cursor-pointer font-semibold bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] text-white rounded-lg transition duration-300">
          Check
        </button>
      </form>

      {/* Message if no data found */}
      {checked && filteredRefs.length === 0 && (
        <p className="text-center text-red-500 mt-6 text-lg font-medium animate-pulse">
          No data found.
        </p>
      )}

      {/* Display Reference Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {filteredRefs.map((ref) => (
          <div
            key={ref._id}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2 border-gray-200">
              Reference No: <span className="text-blue-600">{ref.referenceNo}</span>
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Date:</strong> {ref.date}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Issued To:</strong> {ref.issuedTo}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Issued By:</strong> {ref.issuedBy}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Subject:</strong>{" "}
              <span className="whitespace-pre-line">{ref.subject}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidateLetter;
