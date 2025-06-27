import React, { useState, useEffect } from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";
import { useTheme } from "../context/ThemeContext";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = "POS | Admin Dashboard"
  }, [])

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModal = (action) => {
    if (action === "table") setIsTableModalOpen(true);
  };

  return (
    <div className={`min-h-[calc(100vh-5rem)] transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-950' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 sm:py-14 px-4 sm:px-6 md:px-4 space-y-4 lg:space-y-0">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                key={action}
                onClick={() => handleOpenModal(action)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-md flex items-center gap-2 transition-all duration-300 hover:scale-105 border ${
                  isDarkMode 
                    ? 'bg-dark-900 hover:bg-dark-800 text-restaurant-400 border-dark-700' 
                    : 'bg-white hover:bg-gray-50 text-restaurant-600 border-gray-200 shadow-md'
                }`}
              >
                {label} {icon}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                className={`
                px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-md flex items-center gap-2 transition-all duration-300 hover:scale-105 border ${
                  activeTab === tab
                    ? isDarkMode 
                      ? "bg-dark-800 text-restaurant-400 border-dark-600"
                      : "bg-gray-200 text-restaurant-600 border-gray-300"
                    : isDarkMode 
                      ? "bg-dark-900 hover:bg-dark-800 text-dark-300 border-dark-700"
                      : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 shadow-md"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
      {activeTab === "Payments" && 
        <div className={`p-4 sm:p-6 container mx-auto ${
          isDarkMode ? 'text-dark-100' : 'text-gray-900'
        }`}>
          Payment Component Coming Soon
        </div>
      }

      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}
    </div>
  );
};

export default Dashboard;
