'use client'
import React from 'react'
import { Menu, Search, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface AdminNavbarProps {
  onSidebarToggle: () => void
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ onSidebarToggle }) => {
  const router = useRouter()

  const handleLogout = () => {
    // 1️⃣ Remove token
    localStorage.removeItem('adminToken')

    // 2️⃣ Redirect to login page
    router.push('/admin/login')
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between">
      {/* Sidebar Toggle */}
      <button
        onClick={onSidebarToggle}
        className="p-2 rounded-md hover:bg-gray-200 md:hidden"
      >
        <Menu className="w-6 h-6 text-gray-800" />
      </button>

      {/* Search Box */}
      <div className="flex-1 hidden sm:flex mx-4 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Avatar and Logout */}
      <div className="flex items-center space-x-4">
        <Image
          height={40}
          width={40}
          src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-avatar-person-business/100/10A-1User-512.png"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
        <button
          onClick={handleLogout}
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          title="Logout"
        >
          <LogOut className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  )
}

export default AdminNavbar
