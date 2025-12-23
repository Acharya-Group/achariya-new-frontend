"use client";

import React from "react";
import { MapPin, Clock, CheckCircle, FileText } from "lucide-react";
import { kisokConst } from "@/lib/utils";
import BankBcCommision from "./BankBcCommision";

const bcServicesList = [
  "Account Opening",
  "Cash Deposit (Own Bank)",
  "Cash Deposit (Other Bank – AEPS / RuPay Card)",
  "Cash Withdrawal (On Us)",
  "Cash Withdrawal (Off Us)",
  "Fund Transfer (Own Bank)",
  "Fund Transfer (Other Bank – AEPS / RuPay Card)",
  "Balance Enquiry (Own Bank)",
  "Balance Enquiry (Other Bank – AEPS / RuPay Card)",
  "Mini Statement",
  "TDR / RD Opening",
  "Enrollment under PMSBY Scheme",
  "Enrollment under PMJJBY Scheme",
  "Enrollment under APY Scheme",
  "Cheque Collection",
  "Aadhaar Seeding",
  "Mobile Seeding",
  "IMPS",
  "NEFT",
  "Request for New Cheque Book",
  "Stop Payment for Cheque",
  "Cheque Status Enquiry",
  "Renew TD",
  "Block Debit Card",
  "Launch Complaints",
  "Track Complaints",
  "Request for SMS Alert / Email Statement",
  "Pension Life Certificate Authentication (Jeevan Pramaan)",
  "Recovery / Collection up to Bank-approved Limit",
  "Apply for RuPay Debit Card",
  "Passbook Update",
  "Loan Request Initiation – Personal Loan",
  "Loan Request Initiation – Home Loan",
  "Loan Request Initiation – Vehicle Loan",
  "Request Initiation for Life Insurance",
  "Request Initiation for Health Insurance",
  "Request Initiation for Motor Insurance",
  "PPF (Public Provident Fund)",
  "Sukanya Samriddhi Account",
];

 const pdfLinks = {
    banner: "/pdf/bob-posters.pdf",
  };

  // Function to download PDF
  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function KioskBank() {
  return (
    <section className="max-w-7xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-3 space-y-8">

        {/* Header */}
        <header className="mb-8 flex justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Bank BC — Banking Services
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Achariya Technologies Pvt. Ltd. — Financial & Social inclusion via BC Kiosks
            </p>
          </div>
            <button
          onClick={() => handleDownload(pdfLinks.banner)}
          className="bg-primary text-white text-sm font-semibold cursor-pointer px-4 py-2 rounded-lg shadow-lg hover:bg-secondary transition flex items-center gap-2"
        >
          📄Download Bank of Baroda banner
        </button>
        </header>

        {/* Overview */}
        <article className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Achariya Technologies Pvt. Ltd. has emerged as a leading player at the forefront of driving financial inclusion and
            social inclusion initiatives through its network of BC Kiosks providing Business Correspondent Banking Services. We are a
            Corporate Business Correspondent to Bank of Baroda offering a real-time, paperless, interoperable banking platform that
            delivers a unique service experience to customers. Our BC Kiosks render comprehensive banking services to the unbanked and
            under-banked population of India.
          </p>
        </article>

        {/* Service Offerings */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Service Offerings</h3>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Bank Account Opening under Pradhan Mantri Jan Dhan Yojana</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Cash Deposits, Withdrawals, Money Transfer</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Fixed and Recurring Deposits</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Balance Enquiry, Statement of Accounts</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Disbursement under Direct Benefit Transfer</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Lead generation for various loan products of Bank</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Enrollments: PMSBY, PMJJBY, Atal Pension Yojana, Sukanya Samriddhi, PPF</li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mt-6">
          <h3 className="text-base font-semibold text-gray-800">Key Features and Benefits</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
            <li>Outlets located at Gram Panchayat or village locations for easy access</li>
            <li>Open beyond normal banking hours</li>
            <li>Paperless & biometric-enabled banking</li>
            <li>Interoperable banking across banks via Aadhaar</li>
            <li>Zero balance accounts under PMJDY</li>
          </ol>
        </section>

        {/* Who can become BC */}
        <section className="mt-8 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Who can become Bank Business Correspondent?</h3>
          <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
            <tbody>
              <tr className="border-b"><td className="p-3">Non-Governmental Organisations (NGOs)</td><td className="p-3">Farmers clubs</td></tr>
              <tr className="border-b"><td className="p-3">Self Help Groups (SHGs)</td><td className="p-3">Community based organisations</td></tr>
              <tr className="border-b"><td className="p-3">Micro Finance Institutions (MFIs)</td><td className="p-3">Village Knowledge Centres</td></tr>
              <tr className="border-b"><td className="p-3">Post Offices</td><td className="p-3">Agri Clinics / Agri Business Centers</td></tr>
              <tr className="border-b"><td className="p-3">Insurance agents</td><td className="p-3">Krishi Vigyan Kendras</td></tr>
              <tr className="border-b"><td className="p-3">Panchayats</td><td className="p-3">Khadi and Village Industries units</td></tr>
              <tr><td className="p-3">Civil Society Organisations (CSOs)</td><td className="p-3">Corporate entities with IT outlets in rural parts</td></tr>
            </tbody>
          </table>
        </section>

        {/* Services Offered By BC */}
        <section className="mt-8 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Services Offered By BC (Bank Mitra)</h3>
          <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
            <tbody>
              <tr className="border-b"><td className="p-3 font-medium">Savings Account</td><td className="p-3">Balance Enquiry / Mini Statement</td><td className="p-3">Cash Deposit / Cash Withdrawal</td></tr>
              <tr className="border-b"><td className="p-3">Fixed Deposit / E-KYC Enrolment</td><td className="p-3">Aadhaar Enabled Payment System (AEPS)</td><td className="p-3">Rupay ATM Card / Identity Card</td></tr>
              <tr className="border-b"><td className="p-3">Loan Deposit / Recurring Deposit</td><td className="p-3">Social Security Schemes (PMJJBY, PMSBY & APY)</td><td className="p-3">Pass Book Printing</td></tr>
              <tr><td className="p-3">DBT Enabled Facility</td><td className="p-3">Saving Account Opening</td><td className="p-3">3rd Party Financial Products</td></tr>
            </tbody>
          </table>
        </section>

        {/* How to become BC */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">How to Become a Banking Correspondent (BC)</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
            <li>Download the application form and BC selection format from the website.</li>
            <li>Submit forms with Aadhaar, PAN, 10th certificate & police verification to <strong>fi@Achariyagroup.com</strong>.</li>
            <li>Company verifies documents & location availability with Bank.</li>
            <li>Company forwards request to Bank for BC settlement account.</li>
            <li>After account opening, Company applies for K.O.Code generation for the BC.</li>
            <li>Technical team assists with software installation & primary training.</li>
            <li>BC operates as per PMJDY norms and partnering Banks.</li>
          </ol>
        </section>

        {/* PMJDY Benefits */}
        <section className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2"><FileText size={16}/> PMJDY Benefits</h3>
          <ul className="mt-2 text-gray-700 space-y-2 text-sm">
            <li>Zero minimum balance</li>
            <li>Accidental insurance cover of Rs. 2,00,000</li>
            <li>Life insurance cover of Rs. 30,000 (subject to eligibility)</li>
            <li>Direct Benefit Transfer for government schemes</li>
            <li>Overdraft facility up to Rs. 10,000</li>
            <li>Affordable premiums for PMSBY & PMJJBY</li>
            <li>Atal Pension Yojana: Rs.1,000–5,000 p.m. for eligible members</li>
          </ul>
        </section>

        {/* BC Point Info */}
        <section className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">What is a BC Point?</h3>
          <p className="text-gray-700 mb-2">
            A BC Point is a physical location where a Business Correspondent (BC) provides banking & financial services in areas without bank branches.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Physical outlet managed by BC agent</li>
            <li>Extension of the bank</li>
            <li>Connecting bank with rural or underserved customers</li>
          </ul>
        </section>

        {/* BC Services List */}
        <section className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">List of Services Offered at BC Points</h3>
          <div className="overflow-x-auto max-h-96">
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {bcServicesList.map((service, index) => <li key={index}>{service}</li>)}
            </ol>
          </div>
        </section>

        {/* BC Benefits */}
        <section className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits of BC Points</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Accessibility – Brings banking closer to remote & unbanked areas</li>
            <li>Financial Inclusion – Serves underserved populations</li>
            <li>Affordable Services – Cost-effective banking</li>
            <li>Support for Banks – Expand reach without full branches</li>
          </ul>
        </section>

        <BankBcCommision />

        {/* Location & Hours */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3 border p-5 rounded-lg">
            <MapPin size={18} />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-sm text-gray-600">Outlets at Gram Panchayat / Village level for local access</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border p-5 rounded-lg">
            <Clock size={18} />
            <div>
              <h4 className="font-semibold text-gray-800">Hours</h4>
              <p className="text-sm text-gray-600">Open beyond normal banking hours for convenience</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-sm text-gray-500">
          <p>
            <span className="font-medium text-gray-700">Note:</span> Content is informational & follows PMJDY & GOI schemes.
          </p>
        </footer>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="lg:col-span-1 space-y-6">
        {/* Download Section */}
        <div className="p-4 border rounded-xl bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-3">Download Application Form</h3>
          <ul className="space-y-2 text-sm text-primary">
            {kisokConst.map((file, index) => (
              <li key={index}>
                <a href={file.href} download={file.download} className="hover:underline font-semibold text-primary">{file.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section */}
        <div className="p-4 border rounded-xl bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-primary">
            <li><a href="/e-mitra" className="hover:underline">e-Mitra</a></li>
            <li><a href="/kiosk-banking" className="hover:underline">Kiosk Banking</a></li>
            <li><a href="/aadhar" className="hover:underline">Aadhaar</a></li>
            <li><a href="/fastag" className="hover:underline">Fastag</a></li>
            <li><a href="/school-easy" className="hover:underline">School Easy</a></li>
            <li><a href="/rkcl" className="hover:underline">RKCL</a></li>
          </ul>
        </div>
      </aside>

    </section>
  );
}
