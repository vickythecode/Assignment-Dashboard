"use client";
import { useState } from "react";
import { FiHome, FiBarChart2, FiBriefcase, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("skill-test");
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="flex">

      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-blue-500 text-white rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`fixed md:relative h-screen w-64 bg-white shadow-md p-5 flex flex-col transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-5">What Bytes</h2>
        <nav className="space-y-4">
          <button
            className={`flex items-center space-x-3 p-2 rounded-md w-full text-left ${
              active === "dashboard" ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActive("dashboard")}
          >
            <FiHome />
            <Link href="/dashboard"><span>Dashboard</span></Link>
          </button>

          <button
            className={`flex items-center space-x-3 p-2 rounded-md w-full text-left ${
              active === "skill-test" ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActive("skill-test")}
          >
            <FiBarChart2 />
            <span>Skill Test</span>
          </button>

          <button
            className={`flex items-center space-x-3 p-2 rounded-md w-full text-left ${
              active === "internship" ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActive("internship")}
          >
            <FiBriefcase />
            <span><Link href="/internship">Internship</Link></span>
          </button>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
