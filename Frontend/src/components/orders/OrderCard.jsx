import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from "../../utils/index";
import { useTheme } from "../../context/ThemeContext";

const OrderCard = ({ key, order }) => {
  const { isDarkMode } = useTheme();
  
  console.log(order);
  return (
    <div key={key} className={`w-full p-4 rounded-lg mb-4 border transition-all duration-300 hover:scale-105 ${
      isDarkMode 
        ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
        : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
    }`}>
      <div className="flex items-center gap-3 sm:gap-5">
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
            }`}>#{Math.floor(new Date(order.orderDate).getTime())} / Dine in</p>
            <p className={`text-xs sm:text-sm ${
              isDarkMode ? 'text-dark-400' : 'text-gray-600'
            }`}>Table <FaLongArrowAltRight className={`ml-1 sm:ml-2 inline ${
              isDarkMode ? 'text-dark-400' : 'text-gray-500'
            }`} /> {order.table.tableNo}</p>
          </div>
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
                <p className={`text-xs sm:text-sm ${
                  isDarkMode ? 'text-dark-400' : 'text-gray-600'
                }`}>
                  <FaCircle className={`inline mr-1 sm:mr-2 ${
                    isDarkMode ? 'text-fresh-300' : 'text-fresh-600'
                  }`} /> Ready to serve
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
                <p className={`text-xs sm:text-sm ${
                  isDarkMode ? 'text-dark-400' : 'text-gray-600'
                }`}>
                  <FaCircle className={`inline mr-1 sm:mr-2 ${
                    isDarkMode ? 'text-food-300' : 'text-food-600'
                  }`} /> Preparing your order
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`flex justify-between items-center mt-4 text-xs sm:text-sm ${
        isDarkMode ? 'text-dark-400' : 'text-gray-600'
      }`}>
        <p>{formatDateAndTime(order.orderDate)}</p>
        <p>{order.items.length} Items</p>
      </div>
      <hr className={`w-full mt-4 border-t-1 ${
        isDarkMode ? 'border-dark-700' : 'border-gray-300'
      }`} />
      <div className="flex items-center justify-between mt-4">
        <h1 className={`text-base sm:text-lg font-bold ${
          isDarkMode ? 'text-dark-100' : 'text-gray-900'
        }`}>Total</h1>
        <p className={`text-base sm:text-lg font-bold ${
          isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
        }`}>₹{order.bills.totalWithTax.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
