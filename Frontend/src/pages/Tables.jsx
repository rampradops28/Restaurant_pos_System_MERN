import React, { useState, useEffect } from "react";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";
import { useTheme } from "../context/ThemeContext";

const Tables = () => {
  const [status, setStatus] = useState("all");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = "POS | Tables"
  }, [])

  const { data: resData, isError } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData,
  });

  if(isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" })
  }

  console.log(resData);

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
            Tables
          </h1>
        </div>
        <div className="flex items-center justify-around gap-2 sm:gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-sm sm:text-lg transition-all duration-300 ${
              status === "all" 
                ? isDarkMode 
                  ? "bg-dark-800 text-restaurant-400" 
                  : "bg-gray-200 text-restaurant-600"
                : isDarkMode 
                  ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            } rounded-lg px-3 sm:px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-sm sm:text-lg transition-all duration-300 ${
              status === "booked" 
                ? isDarkMode 
                  ? "bg-dark-800 text-restaurant-400" 
                  : "bg-gray-200 text-restaurant-600"
                : isDarkMode 
                  ? "text-dark-400 hover:text-dark-300 hover:bg-dark-800" 
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            } rounded-lg px-3 sm:px-5 py-2 font-semibold`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4 sm:px-16 py-4 h-[500px] sm:h-[650px] overflow-y-scroll scrollbar-hide">
        {resData?.data.data.map((table) => {
          return (
            <TableCard
              key={table._id}
              id={table._id}
              name={table.tableNo}
              status={table.status}
              initials={table?.currentOrder?.customerDetails.name}
              seats={table.seats}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tables;
