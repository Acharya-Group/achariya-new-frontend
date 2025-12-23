'use client'
import React from 'react'
import CountUp from 'react-countup'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from 'recharts'
import { User, ShoppingCart, DollarSign, MessageCircle } from 'lucide-react'

const cardData = [
  { title: 'Users', value: 1200, bg: 'bg-blue-500', icon: <User className="w-6 h-6" /> },
  { title: 'Orders', value: 320, bg: 'bg-green-500', icon: <ShoppingCart className="w-6 h-6" /> },
  { title: 'Revenue', value: 24000, bg: 'bg-yellow-500', icon: <DollarSign className="w-6 h-6" /> },
  { title: 'Feedbacks', value: 75, bg: 'bg-red-500', icon: <MessageCircle className="w-6 h-6" /> },
]

const barChartData = [
  { name: 'Jan', Orders: 30 },
  { name: 'Feb', Orders: 50 },
  { name: 'Mar', Orders: 40 },
  { name: 'Apr', Orders: 70 },
  { name: 'May', Orders: 60 },
]

const lineChartData = [
  { name: 'Week 1', Users: 200 },
  { name: 'Week 2', Users: 400 },
  { name: 'Week 3', Users: 300 },
  { name: 'Week 4', Users: 500 },
]

const AdminMainContent = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.title}
            className={`p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-between ${card.bg} text-white`}
          >
            <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-2xl font-bold mt-2">
                <CountUp end={card.value} duration={2} separator="," />
              </p>
            </div>
            <div className="p-3 bg-white/20 rounded-full">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold mb-4">Orders This Year</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', borderRadius: '8px', color: '#000' }} />
              <Bar dataKey="Orders" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold mb-4">Users Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineChartData}>
              <XAxis dataKey="name" stroke="#82ca9d" />
              <YAxis stroke="#82ca9d" />
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', borderRadius: '8px', color: '#000' }} />
              <Legend />
              <Line type="monotone" dataKey="Users" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AdminMainContent
