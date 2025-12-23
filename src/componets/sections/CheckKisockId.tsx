"use client";

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface Kiosk {
  "S.No": number;
  District: string;
  "Kiosk Name": string;
  "Kiosk Code": string;
  "Kiosk Admin SSOID": string | number;
  "Kiosk Owner SSOID": string | number;
  "LSP Name": string;
  "Kiosk Address": string;
  "Kiosk Email": string;
  "Validity": string;
  "Active Status": string;
  "Kiosk Type": string;
  "Registration Date": string;
  "Kiosk Approved Date": string;
  "Urban/Rural": string;
  "Muncipality": string;
  "Ward No": string | number;
  "Panchayat Samiti": string;
  "Gram Panchayat": string;
  "Village": string;
  "First Transaction Date": string;
  "Last Transaction Date": string;
  "Non Functional": string;
  "Govt Premise": string;
}

const CheckKioskId = () => {
  const [data, setData] = useState<Kiosk[]>([]);
  const [refNumber, setRefNumber] = useState("");
  const [filteredRefs, setFilteredRefs] = useState<Kiosk[]>([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to safely convert to string and lowercase
  const safeToString = (value: string | number | undefined | null): string => {
    if (value === undefined || value === null) return '';
    return String(value).toLowerCase();
  };

  // Automatically load Excel file from public folder on component mount
  useEffect(() => {
    const loadExcelFile = async () => {
      try {
        setLoading(true);
         const response = await fetch('/KioskData.xlsx'); 
        if (!response.ok) {
          throw new Error('Excel file not found in public folder');
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheetData: Kiosk[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        setData(sheetData);
        setError(null);
      } catch (err) {
        console.error('Error loading Excel file:', err);
        setError('Excel file load nahi ho paayi. Please check file name and location.');
      } finally {
        setLoading(false);
      }
    };

    loadExcelFile();
  }, []);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNumber.trim()) {
      alert("Please enter a Kiosk Code / SSO ID!");
      return;
    }

    if (data.length === 0) {
      alert("Data load nahi hui hai. Please wait...");
      return;
    }

    const searchTerm = refNumber.toLowerCase().trim();
    
    const filtered = data.filter(
      (row) =>
        safeToString(row["Kiosk Code"]).includes(searchTerm) ||
        safeToString(row["Kiosk Admin SSOID"]).includes(searchTerm) ||
        safeToString(row["Kiosk Owner SSOID"]).includes(searchTerm)
    );

    setFilteredRefs(filtered);
    setChecked(true);
    setRefNumber("");
  };

  // Safe value display function
  const safeDisplay = (value: string | number | undefined | null): string => {
    if (value === undefined || value === null) return "N/A";
    return String(value);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-lg text-gray-600">Loading kiosk data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center max-w-md">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <p className="text-red-600 text-lg font-semibold mb-2">Error</p>
          <p className="text-red-500 text-sm mb-4">{error}</p>
          <p className="text-gray-600 text-xs">
            Make sure 'kiosk-data.xlsx' file is in public folder
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Kiosk Information System
        </h1>
        <p className="text-gray-600">
          Total {data.length} kiosks loaded • Search by Kiosk Code or SSO ID
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleCheck}
        className="bg-white flex flex-col sm:flex-row justify-center gap-3 items-center rounded-3xl w-full max-w-lg p-5 shadow-xl mb-8"
      >
        <input
          type="text"
          placeholder="Enter Kiosk Code / Admin SSOID / Owner SSOID"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition"
        />
        <button 
          type="submit"
          disabled={loading}
          className="px-6 py-3 cursor-pointer font-semibold bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] text-white rounded-lg transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </form>

      {/* Message if no data found */}
      {checked && filteredRefs.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center max-w-md">
          <p className="text-yellow-600 text-lg font-semibold mb-2">No kiosk found!</p>
          <p className="text-yellow-500 text-sm">
            Please check the Kiosk Code or SSO ID and try again.
          </p>
        </div>
      )}

      {/* Display Kiosk Data */}
      <div className="w-full max-w-6xl space-y-6">
        {filteredRefs.map((kiosk, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Header Section */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {safeDisplay(kiosk["Kiosk Name"])}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold">Kiosk Code:</span> {safeDisplay(kiosk["Kiosk Code"])}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex gap-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    safeDisplay(kiosk["Active Status"]).toLowerCase() === "active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {safeDisplay(kiosk["Active Status"])}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    safeDisplay(kiosk["Non Functional"]).toLowerCase() === "yes" 
                      ? "bg-red-100 text-red-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {safeDisplay(kiosk["Non Functional"]) ? "Non-Functional" : "Functional"}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6">
              {/* Basic Information */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-blue-700 border-b pb-2">Basic Information</h4>
                {/* <InfoRow label="S.No" value={safeDisplay(kiosk["S.No"])} /> */}
                <InfoRow label="District" value={safeDisplay(kiosk.District)} />
                <InfoRow  label="LSP Name" value={safeDisplay(kiosk["LSP Name"])} />
                <InfoRow label="Kiosk Type" value={safeDisplay(kiosk["Kiosk Type"])} />
                <InfoRow label="Urban/Rural" value={safeDisplay(kiosk["Urban/Rural"])} />
              </div>

              {/* SSO Information */}
              {/* <div className="space-y-3">
                <h4 className="font-semibold text-lg text-green-700 border-b pb-2">SSO Information</h4>
                <InfoRow label="Kiosk Admin SSOID" value={safeDisplay(kiosk["Kiosk Admin SSOID"])} />
                <InfoRow label="Kiosk Owner SSOID" value={safeDisplay(kiosk["Kiosk Owner SSOID"])} />
                <InfoRow label="Kiosk Email" value={safeDisplay(kiosk["Kiosk Email"])} />
                <InfoRow label="Validity" value={safeDisplay(kiosk.Validity)} />
              </div> */}

              {/* Location Details */}
              {/* <div className="space-y-3">
                <h4 className="font-semibold text-lg text-purple-700 border-b pb-2">Location Details</h4>
                <InfoRow label="Muncipality" value={safeDisplay(kiosk.Muncipality)} />
                <InfoRow label="Ward No" value={safeDisplay(kiosk["Ward No"])} />
                <InfoRow label="Panchayat Samiti" value={safeDisplay(kiosk["Panchayat Samiti"])} />
                <InfoRow label="Gram Panchayat" value={safeDisplay(kiosk["Gram Panchayat"])} />
                <InfoRow label="Village" value={safeDisplay(kiosk.Village)} />
              </div> */}

              {/* Dates Information */}
              {/* <div className="space-y-3">
                <h4 className="font-semibold text-lg text-orange-700 border-b pb-2">Dates</h4>
                <InfoRow label="Registration Date" value={formatDate(kiosk["Registration Date"])} />
                <InfoRow label="Kiosk Approved Date" value={formatDate(kiosk["Kiosk Approved Date"])} />
                <InfoRow label="First Transaction Date" value={formatDate(kiosk["First Transaction Date"])} />
                <InfoRow label="Last Transaction Date" value={formatDate(kiosk["Last Transaction Date"])} />
              </div> */}

              {/* Status Information */}
              {/* <div className="space-y-3">
                <h4 className="font-semibold text-lg text-red-700 border-b pb-2">Status Information</h4>
                <InfoRow label="Non Functional" value={safeDisplay(kiosk["Non Functional"])} />
                <InfoRow label="Govt Premise" value={safeDisplay(kiosk["Govt Premise"])} />
              </div> */}

              {/* Address Section - Full Width */}
              {/* <div className="md:col-span-2 lg:col-span-3 space-y-3">
                <h4 className="font-semibold text-lg text-gray-700 border-b pb-2">Kiosk Address</h4>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-gray-700">{safeDisplay(kiosk["Kiosk Address"])}</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper component for consistent info row styling
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-start">
    <span className="font-medium text-gray-600 text-sm">{label}:</span>
    <span className="text-gray-800 text-sm text-right font-semibold ml-2 max-w-[60%] break-words">
      {value || "N/A"}
    </span>
  </div>
);

export default CheckKioskId;