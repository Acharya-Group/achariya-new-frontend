'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  MessageSquare,
  Users,
  ShoppingCart,
  Image as LucideImage,
  Mail,
  PlusSquare,
  List,
  ChevronDown,
  ChevronRight,
  X,
  User,
  Video,
  FileText,
  LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

type MenuItem = {
  name: string
  href?: string
  icon:LucideIcon
  children?: MenuItem[]
}

interface AdminSidebarProps {
  isSidebarOpen: boolean
  onClose: () => void
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  {
    name: 'Profile',
    icon: User,
    children: [{ name: 'Change Password', href: '/admin/change-password', icon: FileText }],
  },
  {
    name: 'Slider',
    icon: LucideImage,
    children: [
        { name: 'Add Slider', href: '/admin/add-slider', icon: PlusSquare },
      { name: 'All Sliders', href: '/admin/all-sliders', icon: List },
    ],
  },
  {
    name: 'Testimonial',
    icon: LucideImage,
    children: [
        { name: 'Add Testimonial', href: '/admin/add-testimonial', icon: PlusSquare },
      { name: 'All Testimonial', href: '/admin/all-testimonial', icon: List },
    ],
  },
  {
    name: 'Blog',
    icon: LucideImage,
    children: [
        { name: 'Add Blog', href: '/admin/add-blog', icon: PlusSquare },
      { name: 'All Blog', href: '/admin/all-blog', icon: List },
    ],
  },
  {
    name: 'Popup Images',
    icon: LucideImage,
    children: [
        { name: 'Add Image', href: '/admin/add-popup-image', icon: PlusSquare },
      { name: 'All Images', href: '/admin/all-popup-images', icon: List },
    ],
  },
  {
    name: 'Videos',
    icon: Video,
    children: [
        { name: 'Add Video', href: '/admin/add-video', icon: PlusSquare },
      { name: 'All Videos', href: '/admin/all-video', icon: List },
    ],
  },
  {
    name: 'Gallery',
    icon: LucideImage,
    children: [
        { name: 'Add Gallery', href: '/admin/add-gallery', icon: PlusSquare },
      { name: 'All Gallery', href: '/admin/all-gallery', icon: List },
    ],
  },
  {
    name: 'DC',
    icon: Users,
    children: [
        { name: 'Add DC', href: '/admin/add-dc', icon: PlusSquare },
      { name: 'All DC', href: '/admin/all-dc', icon: List },
    ],
  },
 {
    name: 'Stationery',
    icon: ShoppingCart,
    children: [
      { name: 'Stationery Orders', href: '/admin/stationery-order', icon: List },
      { name: 'Stationery Rates', href: '/admin/stationery-rate', icon: List },
    ],
  },
  {
    name: 'Validate Reference',
    icon: FileText,
    children: [
      { name: 'Add Reference', href: '/admin/add-reference', icon: PlusSquare },
      { name: 'All Reference', href: '/admin/all-reference', icon: List },
    ],
  },
  { name: 'SEO', href: '/admin/seo', icon: FileText },
  { name: 'Contact Enquiries', href: '/admin/contact-enquiries', icon: Mail },
  { name: 'RKCL Enquiries', href: '/admin/rkcl-enquiries', icon: Mail },
  { name: 'Feedback & Compl.', href: '/admin/complaints-feedback', icon: MessageSquare },
]

export default function AdminSidebar({ isSidebarOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    )
  }

  return (
    <div
      className={`w-64 bg-white text-gray-800 h-screen fixed top-0 left-0 transform transition-transform duration-300 z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Header */}
      <Link href="/admin" className="px-4 py-2 border-b border-gray-300 flex justify-between items-center">
        <Image src="/images/logo.png" alt="Company Logo" width={90} height={35} className="object-cover" />
        <button onClick={onClose} className="md:hidden text-gray-800 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </Link>

      {/* Menu */}
      <nav className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="space-y-2 pb-10">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isOpen = openMenus.includes(item.name)
            const isActive = item.href === pathname

            return (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`flex w-full items-center justify-between px-2 py-2 rounded-lg hover:bg-gray-200 ${
                        isOpen ? 'font-semibold' : ''
                      }`}
                    >
                      <span className="flex items-center">
                        <Icon className="w-5 h-5 mr-2" />
                        {item.name}
                      </span>
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <ul className="pl-8 mt-1 space-y-1">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon
                          return (
                            <li key={child.name}>
                              <Link
                                href={child.href || '#'}
                                className={`flex items-center p-2 rounded-lg hover:bg-gray-200 ${
                                  child.href === pathname ? 'font-semibold' : ''
                                }`}
                              >
                                <ChildIcon className="w-4 h-4 mr-2" />
                                {child.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={`flex items-center p-2 rounded-lg hover:bg-gray-200 ${
                      isActive ? 'font-semibold' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
