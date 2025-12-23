import { vehicleData } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  FiGift,
  FiClock,
  FiMessageSquare,
  FiCreditCard,
  FiDollarSign,
  FiGlobe,
} from "react-icons/fi";
const Fastag = () => {

  const benefits = [
  {
    icon: <FiGift className="text-primary text-3xl" />,
    title: "Cash Back up to 2.5%",
    desc: "Customer can avail a cash back of 2.5% on all National Toll Payment using FASTag.",
  },
  {
    icon: <FiClock className="text-primary text-3xl" />,
    title: "Saves Fuel and Time",
    desc: "FASTag is read automatically at the toll plaza, reducing wait time and saving fuel.",
  },
  {
    icon: <FiMessageSquare className="text-primary text-3xl" />,
    title: "SMS Alerts for Transactions",
    desc: "Customer will receive SMS alerts for every transaction done through their FASTag account.",
  },
  {
    icon: <FiCreditCard className="text-primary text-3xl" />,
    title: "Online Recharge",
    desc: "Recharge your FASTag online via Credit/Debit Card, Net Banking, UPI, or NEFT/RTGS.",
  },
  {
    icon: <FiDollarSign className="text-primary text-3xl" />,
    title: "No Need to Carry Cash",
    desc: "Pay tolls digitally without carrying cash at toll plazas.",
  },
  {
    icon: <FiGlobe className="text-primary text-3xl" />,
    title: "Web Portal for Customers",
    desc: "Access your statements easily by logging into the FASTag customer portal.",
  },
];

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-8/12">
          <Image
            src="/images/fastag-banner.jpg"
            alt="Fastag"
            width={1200}
            height={400}
            className="w-full h-auto mb-8 rounded-lg shadow-lg"
          />

          <h4 className="text-primary font-semibold text-2xl">Who we are?</h4>
          <p className="mb-6 text-gray-700">
            Achariya Technologies Pvt. Ltd. is a leading organization working in
            the field of e-Governance, Financial Inclusion, ICT, Manpower
            Outsourcing, Skills, and is also empaneled with Bank of Baroda as
            its channel partner for Issuance, Marketing, and affixing of Bank of
            Baroda FASTag on private and/or commercial vehicles across India.
          </p>
  <h4 className="text-primary font-semibold text-2xl">What is FASTag?</h4>
          <p className="text-gray-700">
            FASTag is a hassle-free solution for trips on national highways. It
            uses Radio-Frequency Identification (RFID) technology for automatic
            toll deduction. The tag is affixed on the vehicle’s windshield and
            linked to a prepaid account. This enables seamless toll collection
            without stopping at toll plazas.
          </p>
          <p className="text-gray-700 mt-4 mb-6">
            An RFID system includes the tag, a read/write device, and a host
            system for data collection and processing. FASTag is reloadable,
            user-friendly, and ensures smooth passage through the ETC lane.
          </p>
          <h4 className="text-primary font-semibold text-2xl"> How does FASTag Work?</h4>
          <p className="mb-6 text-gray-700">
            Achariya Technologies Pvt. Ltd. is a leading organization working in
            the field of e-Governance, Financial Inclusion, ICT, Manpower
            Outsourcing, Skills, and is also empaneled with Bank of Baroda as
            its channel partner for Issuance, Marketing, and affixing of Bank of
            Baroda FASTag on private and/or commercial vehicles across India.
          </p>
             <Image
            src="/images/fastag-How-it-Works.png"
            alt="Fastag"
            width={1200}
            height={400}
            className="w-full h-auto mb-8 rounded-lg"
          />
           <p className="mb-6 text-gray-700">
           FASTag works in a similar fashion to other radio frequency identification (RFID) technologies. There is a RFID enabled sticker that is fixed to a vehicle’s windshield, and a reader at the toll booth can scan this card and wirelessly and automatically processes the payment.
When you pass a FASTag-enabled toll plaza, you won’t have to stop your car to make a cash payment for the toll fee. Instead, you can just keep driving and the fee will be paid automatically.
Basically, the readers can to scan the FASTag card while it is in motion by emitting a signal to the FASTag card to request the toll fee payment, and the payment immediately gets deducted! But, it is essential that a FASTag card is linked with a digital wallet or savings account to ensure that toll fee payment goes through.
          </p>

          <h4 className="text-primary font-semibold text-2xl">Benefits of Using FASTag</h4>
<div className="grid sm:grid-cols-2 gap-6 mt-6">
  {benefits.map((item, idx) => (
    <div
      key={idx}
      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md hover:bg-white transition duration-300"
    >
      <div className="flex-shrink-0">{item.icon}</div>
      <div>
        <h5 className="font-semibold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Right Section */}
        <div className="lg:w-4/12 space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              For More Queries
            </h3>
            <p className="mb-2">
              📧{" "}
              <a
                href="mailto:fastag@achariyagroup.com"
                className="text-blue-600 hover:underline"
              >
                fastag@achariyagroup.com
              </a>
            </p>
            <p className="mb-2">
              📞{" "}
              <a
                href="tel:+919587887755"
                className="text-blue-600 hover:underline"
              >
                +91 95878 87755
              </a>
            </p>
            <p>
              🎥{" "}
              <a
                href="https://youtu.be/ddun1Z9ATWs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                FASTag Installation & Unboxing Video
              </a>
            </p>
          </div>

      <div className="p-4 bg-white rounded-lg shadow">
  <h3 className="text-lg font-semibold mb-3 text-gray-800">
    Documents Required for FASTag
  </h3>
  <ul className="list-decimal list-inside space-y-1 text-gray-700">
    <li>Aadhaar Card</li>
    <li>PAN Card</li>
    <li>Voter ID / Driving License</li>
    <li>Bank Details</li>
    <li>Mobile Number</li>
    <li>Email ID</li>
    <li>Payment of ₹500</li>
  </ul>

  <p className="mt-4 text-gray-700 leading-relaxed">
    ✅ After submitting the above documents, we create a{" "}
    <span className="font-semibold">Customer Retailer ID</span> and provide the
    login credentials via email or phone call.
  </p>
</div>

        </div>
      </div>
       <h4 className="text-primary font-semibold text-2xl mb-4 mt-8">
        Class Wise Vehicle Distribution
      </h4>
         <div className="overflow-x-auto border border-gray-300 rounded-lg border-collapse">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md border-collapse">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <tr>
            <th className="p-3 text-left border border-gray-300">NPCI Vehicle Class</th>
            <th className="p-3 text-left border border-gray-300">Description</th>
            <th className="p-3 text-left border border-gray-300">Type</th>
            <th className="p-3 text-left border border-gray-300">Tag Cost (₹)</th>
            <th className="p-3 text-left border border-gray-300">Security Deposit (₹)</th>
            <th className="p-3 text-left border border-gray-300">Minimum Recharge (₹)</th>
            <th className="p-3 text-left border border-gray-300">Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-blue-50 transition"
            >
              <td className="p-3 font-medium border border-gray-300">{row.class}</td>
              <td className="p-3 border border-gray-300">{row.description}</td>
              <td className="p-3 border-t  border-gray-300 flex justify-center">
                <row.icon className="text-2xl text-primary" />
              </td>
              <td className="p-3 border border-gray-300">{row.tagCost}</td>
              <td className="p-3 border border-gray-300">{row.deposit}</td>
              <td className="p-3 border border-gray-300">{row.recharge}</td>
              <td className="p-3 font-semibold text-green-600 border border-gray-300">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Fastag;
