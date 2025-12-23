"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useStationeryOrder from "@/hooks/stationeryOrder";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const OrdersPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 200;

  // Filters
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [kioskFilter, setKioskFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("all"); // today / last3 / last7 / custom
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

  // Selected orders
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Fetch orders from backend
  const { allOrders, deleteOrder } = useStationeryOrder(currentPage, itemsPerPage);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allOrders.isLoading)
    return (
      <AdminLayout>
        <p>Loading orders...</p>
      </AdminLayout>
    );

  const ordersData = allOrders.data;
  const orders = ordersData?.data || [];
  const totalPages = ordersData?.totalPages || 1;

  // ----------------------------
  // Client-side filtering
  // ----------------------------
  const filteredOrders = orders.filter((o) => {
    const matchesPayment = paymentFilter === "all" ? true : o.paymentStatus === paymentFilter;
    const matchesKiosk =
      kioskFilter.trim() === "" ? true : (o.kioskId ?? "").toLowerCase().includes(kioskFilter.toLowerCase());

    const orderDate = o.createdAt ? new Date(o.createdAt) : null;
    const today = new Date();
    let matchesDate = true;

    if (orderDate) {
      if (dateFilter === "today") {
        matchesDate = orderDate.toDateString() === today.toDateString();
      } else if (dateFilter === "last3") {
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(today.getDate() - 3);
        matchesDate = orderDate >= threeDaysAgo && orderDate <= today;
      } else if (dateFilter === "last7") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        matchesDate = orderDate >= sevenDaysAgo && orderDate <= today;
      } else if (dateFilter === "custom" && customStartDate && customEndDate) {
        const start = new Date(customStartDate);
        const end = new Date(customEndDate);
        matchesDate = orderDate >= start && orderDate <= end;
      }
    }

    return matchesPayment && matchesKiosk && matchesDate;
  });

  // ----------------------------
  // Select / Select All
  // ----------------------------
  const toggleSelectOrder = (id: string) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]);
      setSelectAll(false);
    } else {
      const allIds = filteredOrders.map((o) => o._id);
      setSelectedOrders(allIds);
      setSelectAll(true);
    }
  };

  // ----------------------------
  // Bulk Delete
  // ----------------------------
  const handleBulkDelete = () => {
    if (!selectedOrders.length) return toast.error("No orders selected");
    if (!confirm(`Delete ${selectedOrders.length} selected orders?`)) return;

    selectedOrders.forEach((id) =>
      deleteOrder.mutate(id, {
        onSuccess: () => toast.success("Order deleted!"),
        onError: () => toast.error("Delete failed"),
      })
    );

    setSelectedOrders([]);
    setSelectAll(false);
  };

  // ----------------------------
  // Other features (Copy, PDF, CSV) remain the same
  // ----------------------------
  const copyData = () => {
    navigator.clipboard.writeText(JSON.stringify(filteredOrders, null, 2));
    toast.success("Copied to clipboard!");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Stationery Orders", 14, 16);

    const tableData = filteredOrders.map((o) => [
      o.createdAt ? o.createdAt.split("T")[0] : "",
      o.name ?? "",
      o.phoneNo ?? "",
      o.amount ?? "",
      o.paymentStatus ?? "",
      o.transactionId ?? "",
      o.kioskId ?? "",
      o.address ?? "",
      o.pinCode ?? "",
      o.status ?? "",
      o.items?.map((item) => `${item.type} (${item.quantity})`).join(", ") ?? "",
    ]);

    autoTable(doc, {
      head: [
        [
          "Date",
          "Name",
          "Phone",
          "Amount",
          "Payment",
          "Txn ID",
          "Kiosk",
          "Address",
          "Pin",
          "Status",
          "Items",
        ],
      ],
      body: tableData,
      startY: 20,
    });

    doc.save("orders-list.pdf");
  };

  // ----------------------------
  // Delete single order
  // ----------------------------
  const handleDelete = (id: string) => {
    if (!confirm("Delete this order?")) return;
    deleteOrder.mutate(id, {
      onSuccess: () => toast.success("Order deleted!"),
      onError: () => toast.error("Delete failed"),
    });
  };

  // ----------------------------
  // CSV Export (Dynamic multi-item)
  // ----------------------------
  const maxItems = Math.max(...filteredOrders.map((o) => o.items?.length || 0));
  const csvHeaders = [
    "Date",
    "Name",
    "Phone",
    "Amount",
    "Payment",
    "TransactionID",
    "Kiosk",
    "Address",
    "Pin",
    "Status",
    ...Array.from({ length: maxItems }, (_, i) => `Item ${i + 1}`),
  ];

  const csvData = filteredOrders.map((o) => {
    const row: Record<string, string> = {
      Date: o.createdAt ? o.createdAt.split("T")[0] : "",
      Name: o.name ?? "",
      Phone: o.phoneNo ?? "",
      Amount: o.amount?.toString() ?? "",
      Payment: o.paymentStatus ?? "",
      TransactionID: o.transactionId ?? "",
      Kiosk: o.kioskId ?? "",
      Address: o.address ?? "",
      Pin: o.pinCode ?? "",
      Status: o.status ?? "",
    };

    for (let i = 0; i < maxItems; i++) {
      row[`Item ${i + 1}`] = o.items?.[i] ? `${o.items[i].type} (${o.items[i].quantity})` : "";
    }

    return row;
  });

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded">Copy</button>

          <CSVLink
            data={csvData}
            headers={csvHeaders.map((h) => ({ label: h, key: h }))}
            filename="orders.csv"
            className="px-4 py-2 bg-gray-200 rounded"
          >
            CSV
          </CSVLink>

          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded">PDF</button>

          <button onClick={() => window.print()} className="px-4 py-2 bg-gray-200 rounded">Print</button>

          <button onClick={handleBulkDelete} className="px-4 py-2 bg-red-500 text-white rounded">
            Delete Selected
          </button>
        </div>

        {/* Filters */}
     <div className="overflow-x-auto mb-4">
  <div className="flex gap-4 min-w-max">
    <select
      value={paymentFilter}
      onChange={(e) => {
        setPaymentFilter(e.target.value);
        setCurrentPage(1);
      }}
      className="p-2 border rounded"
    >
      <option value="all">All Payments</option>
      <option value="success">Success</option>
      <option value="pending">Pending</option>
      <option value="failed">Failed</option>
    </select>

    <input
      type="text"
      placeholder="Filter by kiosk ID..."
      value={kioskFilter}
      onChange={(e) => {
        setKioskFilter(e.target.value);
        setCurrentPage(1);
      }}
      className="p-2 border rounded"
    />

    <select
      value={dateFilter}
      onChange={(e) => {
        setDateFilter(e.target.value);
        setCurrentPage(1);
      }}
      className="p-2 border rounded"
    >
      <option value="all">All Dates</option>
      <option value="today">Today</option>
      <option value="last3">Last 3 Days</option>
      <option value="last7">Last 7 Days</option>
      <option value="custom">Custom Range</option>
    </select>

    {dateFilter === "custom" && (
      <div className="flex gap-2">
        <input
          type="date"
          value={customStartDate}
          onChange={(e) => setCustomStartDate(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={customEndDate}
          onChange={(e) => setCustomEndDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
    )}
  </div>
</div>


        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[1500px] divide-y divide-gray-200 w-full">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2">
                  <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
                </th>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Payment</th>
                <th className="px-4 py-2 text-left">Txn ID</th>
                <th className="px-4 py-2 text-left">Kiosk ID</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Pin</th>
                <th className="px-4 py-2 text-left">Items</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order, index) => (
                <tr key={order._id}>
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order._id)}
                      onChange={() => toggleSelectOrder(order._id)}
                    />
                  </td>
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-4 py-2">{order.createdAt?.split("T")[0] ?? ""}</td>
                  <td className="px-4 py-2">{order.name ?? ""}</td>
                  <td className="px-4 py-2">{order.phoneNo ?? ""}</td>
                  <td className="px-4 py-2">{order.amount ?? ""}</td>
                  <td className="px-4 py-2">{order.paymentStatus ?? ""}</td>
                  <td className="px-4 py-2">{order.transactionId ?? ""}</td>
                  <td className="px-4 py-2">{order.kioskId ?? ""}</td>
                  <td className="px-4 py-2">
                    <div className="max-h-[100px] p-2 border rounded overflow-y-auto">{order.address ?? ""}</div>
                  </td>
                  <td className="px-4 py-2">{order.pinCode ?? ""}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc pl-4">
                      {order.items?.map((item, i) => (
                        <li key={i}>{item.type} - {item.quantity}</li>
                      )) ?? ""}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="p-2 bg-red-500 text-white rounded"
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
            disabled={ordersData?.page === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            Page {ordersData?.page || 1} of {totalPages}
          </span>

          <button
            disabled={ordersData?.page === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrdersPage;
