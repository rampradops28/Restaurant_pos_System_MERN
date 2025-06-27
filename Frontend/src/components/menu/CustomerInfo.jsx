import React from "react";
import { useSelector } from "react-redux";
import { getAvatarName } from "../../utils";
import { useTheme } from "../../context/ThemeContext";

const CustomerInfo = () => {
  const { isDarkMode } = useTheme();
  const customerData = useSelector((state) => state.customer);

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 sm:p-3 text-lg sm:text-xl font-bold rounded-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-restaurant-600 text-white' 
            : 'bg-restaurant-500 text-white'
        }`}>
          {getAvatarName(customerData.customerName)}
        </div>
        <div className="flex flex-col items-start">
          <h1 className={`text-sm sm:text-md font-bold tracking-wide ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            {customerData.customerName || "Customer Name"}
          </h1>
          <p className={`text-xs ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>
            Table : {customerData.table?.tableNo || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
