"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const data = [
  { name: "Jan", users: 400, sales: 240 },
  { name: "Feb", users: 300, sales: 139 },
  { name: "Mar", users: 500, sales: 980 },
  { name: "Apr", users: 278, sales: 390 },
  { name: "May", users: 189, sales: 480 },
  { name: "Jun", users: 239, sales: 380 },
];

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1 mb-3">Welcome back! Here's your admin overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-6 gap-4">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
            <h2 className="text-gray-500 text-sm">Total Users</h2>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
            <h2 className="text-gray-500 text-sm">Total Sales</h2>
            <p className="text-2xl font-bold mt-2">340</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
            <h2 className="text-gray-500 text-sm">New Orders</h2>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
            <h2 className="text-gray-500 text-sm">New Orders</h2>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Line Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#7a0706" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#7a0706" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
