"use client";
import { FiBarChart2, FiCreditCard, FiFileText, FiUserCheck, FiUsers, FiCloud, FiMessageSquare, FiEdit3, FiSmartphone } from "react-icons/fi";


const features = [
  {
    title: "Management Dashboard",
    desc: "Centralized real-time analysis of admissions, attendance, fee records, staff, and exam & inventory data. Smart data analytics to manage and boost school performance.",
    icon: <FiBarChart2 className="w-10 h-10 text-primary" />,
  },
  {
    title: "Fee Accounting & Collection",
    desc: "Track school fees collected through cash / online mode in real time. Payment gateway integration available.",
    icon: <FiCreditCard className="w-10 h-10 text-primary" />,
  },
  {
    title: "Report Card Generation & Result Analysis",
    desc: "Teachers generate online or offline student academic performance along with progress reports.",
    icon: <FiFileText className="w-10 h-10 text-primary" />,
  },
  {
    title: "Attendance Entry",
    desc: "Student & staff attendance entry. Bio-metric integration available.",
    icon: <FiUserCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: "Parent Portal",
    desc: "One-stop access for parents to schedule information about their children. Events and live wards’ social progress.",
    icon: <FiUsers className="w-10 h-10 text-primary" />,
  },
  {
    title: "Cloud Based ERP System",
    desc: "Enables all data to sync in real-time with school’s servers ensuring anytime access with better reliability.",
    icon: <FiCloud className="w-10 h-10 text-primary" />,
  },
  {
    title: "SMS Alerts",
    desc: "Send instant SMS alerts, circulars & notifications to parents/students.",
    icon: <FiMessageSquare className="w-10 h-10 text-primary" />,
  },
  {
    title: "Exam & Marks Management",
    desc: "Online entry of exam marks, progress reports, class promotion & student records.",
    icon: <FiEdit3 className="w-10 h-10 text-primary" />,
  },
  {
    title: "Web & Mobile Access",
    desc: "Accessible from any device like Mobile, Laptop, Tablet & Desktop.",
    icon: <FiSmartphone className="w-10 h-10 text-primary" />,
  },
];

export default function SchoolEasy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Introduction Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h3>
          <p className="text-gray-600 text-sm">
            SchoolEasy is a cloud based School Management System that enables
            schools to use and operate many integrated interrelated modules thereby
            managing administration efficiently. Due to its competitive nature, the
            education sector requires quality solutions for resource management.
          </p>
          <p className="text-gray-600 text-sm">
            SchoolEasy is browser-based, responsive, and supports devices like mobile, tablet,
            and desktop. It offers real-time data syncing, role-based access, minimal IT
            infrastructure needs, and customizable modules for each school.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-white flex flex-wrap p-8 rounded-2xl shadow-md space-y-6">
          <div className="md:w-6/12">
              <h3 className="text-2xl font-semibold text-gray-800">Key Features</h3>
              <ul className="list-decimal list-inside text-gray-600 text-sm space-y-2 mt-3">
                <li>School Website Design along with CMS</li>
                <li>School Website Domain Integration</li>
                <li>School Registration & Management</li>
                <li>Staff Registration & Management</li>
                <li>Fee Management + Payment Gateway Integration</li>
                <li>Student Admission Management</li>
                <li>Old Admission Data Import</li>
                <li>Student & Staff Attendance Management</li>
                <li>Microsoft Teams Integration for Online Classes</li>
                <li>Inbuilt LMS for Assignments & Assessments</li>
                <li>Exam Marks Entry & Result Generation</li>
                <li>Certificates, Payroll, Transport, Library & Assets Management</li>
                <li>Complaint Management & Messaging System</li>
                <li>Android Mobile App (under development)</li>
              </ul>
          </div>
          <div className="md:w-6/12">
              <h3 className="text-2xl font-semibold text-gray-800">Major Benefits</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mt-3">
            <li>Dedicated & comprehensive website for school</li>
            <li>Transparency in school operations</li>
            <li>Real-time information availability</li>
            <li>Centralized reporting and automation</li>
            <li>Online payment gateway integration</li>
            <li>Android App for Students/Parents (under development)</li>
            <li>Bulk SMS alerts and notifications</li>
            <li>Better interaction between parents, teachers & school management</li>
            <li>High-level data security</li>
            <li>Complete operational automation with minimal hardware requirements</li>
          </ul>
          </div>
        </div>

        {/* Benefits by Role */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Benefits by Role</h3>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Management</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Single Point School Management System</li>
              <li>Effective communication between teachers, parents and students</li>
              <li>Complete automation of all operations</li>
              <li>Centralized data storage with zero redundancy</li>
              <li>Resource optimization & cost savings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">School Administration</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Easy performance monitoring and error detection</li>
              <li>Automated report generation</li>
              <li>Centralized data repository</li>
              <li>Authenticated access control</li>
              <li>User-friendly interface</li>
              <li>High-level data security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Teachers</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Easy monitoring of students' performance</li>
              <li>Hassle-free communication with students & parents</li>
              <li>Conduct online virtual classrooms</li>
              <li>Share assignments and content digitally</li>
              <li>Hassle-free exam marks entry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Students</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Enhanced interaction with teachers & parents</li>
              <li>Access to attendance, timetable, marks, grades, and exam schedules</li>
              <li>Browse library books catalog</li>
              <li>Prior information about events & holidays</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Parents</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Get connected to the school effectively and easily</li>
              <li>Frequent interaction with teachers</li>
              <li>Reliable update on child's attendance, progress report, and fee payment</li>
              <li>Prior information about school events and holidays</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
