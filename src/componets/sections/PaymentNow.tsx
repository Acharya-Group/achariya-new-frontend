"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useStationeryOrder, { StationeryOrder, PayUResponse } from "@/hooks/stationeryOrder";

const PaymentNow: React.FC = () => {
  const { allOrders, initiatePayment } = useStationeryOrder();
  const [order, setOrder] = useState<StationeryOrder | null>(null);
  const [paidStatus, setPaidStatus] = useState<string>("Unpaid");

  // ✅ Get orderId from URL
  const [orderId, setOrderId] = useState<string>("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("orderId");
    if (id) setOrderId(id);
  }, []);

  // ✅ Load current order
useEffect(() => {
  if (!orderId) return;

  const found =
    allOrders.data?.data?.find((o) => o._id === orderId) || null;

  setOrder(found);
  setPaidStatus(found?.paymentStatus ?? "Unpaid");
}, [allOrders.data, orderId]);


  // ✅ Handle PayU payment
  const handlePayment = async () => {
    if (!order) return alert("Order not loaded yet. Please wait or refresh.");

    try {
      const response: PayUResponse = await initiatePayment.mutateAsync({
        amount: order.amount || 0,
        name: order.name,
        email: order.email || "default@example.com",
        phone: order.phoneNo,
        orderId: order._id,
      });

      const paymentData = response.data;
      if (!paymentData?.action) throw new Error("Invalid payment data returned from server.");

      const form = document.createElement("form");
      form.method = "POST";
      form.action = paymentData.action;

      Object.entries(paymentData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = String(value);
          form.appendChild(input);
        }
      });

      // Ensure orderId is included
      const extraField = document.createElement("input");
      extraField.type = "hidden";
      extraField.name = "orderId";
      extraField.value = order._id;
      form.appendChild(extraField);

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert(err instanceof Error ? err.message : "Payment initiation failed");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden">
        {/* Left: Order Info */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Order Information</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 w-[120px]">Order ID</label>
              <input type="text" value={order?._id ?? ""} readOnly className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none" />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 w-[120px]">Name</label>
              <input type="text" value={order?.name ?? ""} readOnly className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none" />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 w-[120px]">Amount</label>
              <input type="text" value={order?.amount ? `₹${order.amount.toFixed(2)}` : "₹0.00"} readOnly className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none" />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 w-[120px]">Payment Status</label>
              <input type="text" value={paidStatus} readOnly className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none" />
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handlePayment}
                disabled={!order || initiatePayment.status === "pending"}
                className={`px-6 py-2 rounded-lg text-white font-medium text-lg ${
                  !order || initiatePayment.status === "pending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d]"
                } transition-colors flex items-center justify-center mx-auto`}
              >
                {initiatePayment.status === "pending" ? "PROCESSING..." : "Pay Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <Image src="/images/payNow.jpg" alt="Payment" width={400} height={400} className="rounded-lg shadow-md w-full" />
        </div>
      </div>
    </div>
  );
};

export default PaymentNow;
