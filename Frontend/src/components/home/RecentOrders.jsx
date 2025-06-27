import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders } from "../../https/index";
import { useTheme } from "../../context/ThemeContext";

const RecentOrders = () => {
  const { isDarkMode } = useTheme();
  
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <div className="px-4 lg:px-8 mt-6">
      <div className={`w-full h-[400px] sm:h-[450px] rounded-lg border transition-all duration-300 hover:shadow-lg ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
          : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
      }`}>
        <div className="flex justify-between items-center px-4 sm:px-6 py-4">
          <h1 className={`text-base sm:text-lg font-bold tracking-wide ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Recent Orders
          </h1>
          <a href="" className={`text-sm font-semibold transition-colors duration-300 ${
            isDarkMode ? 'text-restaurant-400 hover:text-restaurant-300' : 'text-restaurant-600 hover:text-restaurant-700'
          }`}>
            View all
          </a>
        </div>

        <div className={`flex items-center gap-4 rounded-[15px] px-4 sm:px-6 py-4 mx-4 sm:mx-6 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-dark-950 border border-dark-600' 
            : 'bg-gray-100 border border-gray-300'
        }`}>
          <FaSearch className={`${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search recent orders"
            className={`outline-none w-full text-sm sm:text-base transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-dark-950 text-dark-100 placeholder-dark-400' 
                : 'bg-gray-100 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-4 sm:px-6 overflow-y-scroll h-[250px] sm:h-[300px] scrollbar-hide">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderList key={order._id} order={order} />;
            })
          ) : (
            <p className={`col-span-3 ${
              isDarkMode ? 'text-dark-400' : 'text-gray-500'
            }`}>No orders available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
