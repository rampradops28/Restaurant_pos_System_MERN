import React, { useState, useEffect } from "react";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../https/index";
import { enqueueSnackbar } from "notistack"
import { useTheme } from "../context/ThemeContext";

const Orders = () => {
  const [status, setStatus] = useState("all");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = "POS | Orders"
  }, [])

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData
  })

  if(isError) {
    enqueueSnackbar("Something went wrong!", {variant: "error"})
  }

  return (
    <section className={`min-h-[calc(100vh-5rem)] overflow-hidden pb-8 lg:pb-32 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-950' : 'bg-gray-50'
    }`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-10 py-4 space-y-4 sm:space-y-0">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className={`text-xl sm:text-2xl font-bold tracking-wider ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-2 sm:gap-4 flex-wrap">
          <button onClick={() => setStatus("all")} className={`text-sm sm:text-lg transition-all duration-300 ${
            status === "all" 
              ? isDarkMode 
                ? "bg-dark-800 text-restaurant-400" 
                : "bg-gray-200 text-restaurant-600"
              : isDarkMode 
                ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
          } rounded-lg px-3 sm:px-5 py-2 font-semibold`}>
            All
          </button>
          <button onClick={() => setStatus("progress")} className={`text-sm sm:text-lg transition-all duration-300 ${
            status === "progress" 
              ? isDarkMode 
                ? "bg-dark-800 text-restaurant-400" 
                : "bg-gray-200 text-restaurant-600"
              : isDarkMode 
                ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
          } rounded-lg px-3 sm:px-5 py-2 font-semibold`}>
            In Progress
          </button>
          <button onClick={() => setStatus("ready")} className={`text-sm sm:text-lg transition-all duration-300 ${
            status === "ready" 
              ? isDarkMode 
                ? "bg-dark-800 text-restaurant-400" 
                : "bg-gray-200 text-restaurant-600"
              : isDarkMode 
                ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
          } rounded-lg px-3 sm:px-5 py-2 font-semibold`}>
            Ready
          </button>
          <button onClick={() => setStatus("completed")} className={`text-sm sm:text-lg transition-all duration-300 ${
            status === "completed" 
              ? isDarkMode 
                ? "bg-dark-800 text-restaurant-400" 
                : "bg-gray-200 text-restaurant-600"
              : isDarkMode 
                ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
          } rounded-lg px-3 sm:px-5 py-2 font-semibold`}>
            Completed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 sm:px-16 py-4 overflow-y-scroll scrollbar-hide">
        {
          resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderCard key={order._id} order={order} />
            })
          ) : <p className={`col-span-1 sm:col-span-2 lg:col-span-3 ${
            isDarkMode ? 'text-dark-400' : 'text-gray-500'
          }`}>No orders available</p>
        }
      </div>
    </section>
  );
};

export default Orders;
