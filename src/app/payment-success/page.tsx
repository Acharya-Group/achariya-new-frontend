"use client";

import Footer from "@/componets/layout/Footer";
import Header from "@/componets/layout/Header";
import CommonHero from "@/componets/sections/CommonHero";
import React, { useEffect, useState } from "react";

const PaymentFailedPage: React.FC = () => {
  const [orderId, setOrderId] = useState("N/A");
  const [txnid, setTxnid] = useState("N/A");

  useEffect(() => {
    // ✅ Run only in browser
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    setOrderId(searchParams.get("orderId") ?? "N/A");
    setTxnid(searchParams.get("txnid") ?? "N/A");
  }, []);

  return (
    <>
      <Header />
      <CommonHero title="Payment Failed" />
     <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h1>
            <p className="text-lg text-gray-700 mb-2">
              Your payment was successful.
            </p>
            <p className="text-gray-600">Order ID: {orderId}</p>
            <p className="text-gray-600">Transaction ID: {txnid}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentFailedPage;


    