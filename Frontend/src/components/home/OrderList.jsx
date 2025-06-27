import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";
import { useTheme } from "../../context/ThemeContext";

const OrderList = ({ order }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex items-center gap-3 sm:gap-5 mb-3 p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
      isDarkMode 
        ? 'hover:bg-dark-800' 
        : 'hover:bg-gray-50'
    }`}>
      <button className={`p-2 sm:p-3 text-lg sm:text-xl font-bold rounded-lg transition-all duration-300 hover:scale-110 ${
        isDarkMode 
          ? 'bg-restaurant-600 text-white hover:bg-restaurant-700' 
          : 'bg-restaurant-500 text-white hover:bg-restaurant-600'
      }`}>
        {getAvatarName(order.customerDetails.name)}
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className={`text-base sm:text-lg font-bold tracking-wide ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            {order.customerDetails.name}
          </h1>
          <p className={`text-xs sm:text-sm ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>{order.items.length} Items</p>
        </div>

        <h1 className={`font-semibold border rounded-lg p-1 text-xs sm:text-sm transition-colors duration-300 ${
          isDarkMode 
            ? 'text-restaurant-300 border-restaurant-600' 
            : 'text-restaurant-600 border-restaurant-500'
        }`}>
          Table <FaLongArrowAltRight className={`ml-1 sm:ml-2 inline ${
            isDarkMode ? 'text-dark-400' : 'text-gray-500'
          }`} /> {order.table.tableNo}
        </h1>

        <div className="flex flex-col items-end gap-2">
          {order.orderStatus === "Ready" ? (
            <>
              <p className={`px-2 py-1 rounded-lg text-xs sm:text-sm transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-fresh-300 bg-fresh-900/30' 
                  : 'text-fresh-700 bg-fresh-100'
              }`}>
                <FaCheckDouble className="inline mr-1 sm:mr-2" /> {order.orderStatus}
              </p>
            </>
          ) : (
            <>
              <p className={`px-2 py-1 rounded-lg text-xs sm:text-sm transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-food-300 bg-food-900/30' 
                  : 'text-food-700 bg-food-100'
              }`}>
                <FaCircle className="inline mr-1 sm:mr-2" /> {order.orderStatus}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
