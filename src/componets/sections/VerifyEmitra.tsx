"use client";

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface EmitraKiosk {
  "S.No": number;
  "Kiosk Code": string;
  "Kiosk Name": string;
  "Kiosk Admin SSOID": string;
  "Kiosk Owner SSOID": string;
  "SLA District": string;
  "Kiosk Address": string;
  "Active Status": string;
}

const EmitraVerify = () => {
  const [data, setData] = useState<EmitraKiosk[]>([]);
  const [kioskId, setKioskId] = useState("");
  const [ssoId, setSsoId] = useState("");
  const [filtered, setFiltered] = useState<EmitraKiosk[]>([]);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("/verifyEmitra.xlsx");
        if (!response.ok) throw new Error("Excel file not found");
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.SheetNames[0];
        const jsonData: EmitraKiosk[] = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheet]
        );
        setData(jsonData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      } finally {
        setLoading(false);
      }
    };
    loadExcel();
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);

    if (!kioskId.trim() || !ssoId.trim()) {
      alert("Please enter both Kiosk ID and SSO ID");
      return;
    }

    const match = data.filter(
      (item) =>
        item["Kiosk Code"].toLowerCase() === kioskId.toLowerCase() &&
        (item["Kiosk Admin SSOID"].toLowerCase() === ssoId.toLowerCase() ||
          item["Kiosk Owner SSOID"].toLowerCase() === ssoId.toLowerCase())
    );

    setFiltered(match);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading Emitra Kiosk Data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Emitra Kiosk Verification</h1>
        <p className="text-gray-600 mt-2">
          Verify your Kiosk ID and SSO ID from registered data
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleVerify}
        className="bg-white shadow-lg rounded-3xl p-6 w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Enter Kiosk Code"
          value={kioskId}
          onChange={(e) => setKioskId(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
        />
        <input
          type="text"
          placeholder="Enter Admin/Owner SSOID"
          value={ssoId}
          onChange={(e) => setSsoId(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#261b7d] to-[#7a0706] text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
        >
          Verify
        </button>
      </form>

      {/* Result */}
      <div className="mt-8 w-full max-w-2xl">
        {checked && filtered.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center">
            <p className="text-yellow-700 font-medium">
              ❌ This Kiosk is not belongs to Achariya Technologies Pvt. Ltd.
            </p>
          </div>
        )}

        {filtered.map((kiosk, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-xl p-6 mt-4 shadow"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {kiosk["Kiosk Name"]}
            </h2>
            <p className="text-sm text-gray-700">
              <strong>Kiosk Code:</strong> {kiosk["Kiosk Code"]}
            </p>
            <p className="text-sm text-gray-700">
              <strong>District:</strong> {kiosk["SLA District"]}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> {kiosk["Kiosk Address"]}
            </p>
            <p
              className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                kiosk["Active Status"] === "Y"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {kiosk["Active Status"] === "Y" ? "Active" : "Inactive"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmitraVerify;
