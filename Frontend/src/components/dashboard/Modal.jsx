import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https";
import { enqueueSnackbar } from "notistack"
import { useTheme } from "../../context/ThemeContext";

const Modal = ({ setIsTableModalOpen }) => {
  const { isDarkMode } = useTheme();
  const [tableData, setTableData] = useState({
    tableNo: "",
    seats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tableData);
    tableMutation.mutate(tableData);
  };

  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: (res) => {
        setIsTableModalOpen(false);
        const { data } = res;
        enqueueSnackbar(data.message, { variant: "success" })
    },
    onError: (error) => {
        const { data } = error.response;
        enqueueSnackbar(data.message, { variant: "error" })
        console.log(error);
    }
  })


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`p-6 rounded-lg shadow-lg w-96 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-dark-900 border border-dark-700' 
            : 'bg-white border border-gray-200'
        }`}
      >
        {/* Modal Header */}

        <div className="flex justify-between item-center mb-4">
          <h2 className={`text-xl font-semibold ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>Add Table</h2>
          <button
            onClick={handleCloseModal}
            className={`hover:text-red-500 transition-colors duration-300 ${
              isDarkMode ? 'text-dark-300' : 'text-gray-600'
            }`}
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal Body */}

        <form onSubmit={handleSubmit} className="space-y-4 mt-10">
          <div>
            <label className={`block mb-2 mt-3 text-sm font-medium ${
              isDarkMode ? 'text-dark-300' : 'text-gray-700'
            }`}>
              Table Number
            </label>
            <div className={`flex item-center rounded-lg p-5 px-4 transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-800 border border-dark-600' : 'bg-gray-100 border border-gray-300'
            }`}>
              <input
                type="number"
                name="tableNo"
                value={tableData.tableNo}
                onChange={handleInputChange}
                className={`bg-transparent flex-1 focus:outline-none transition-colors duration-300 ${
                  isDarkMode ? 'text-dark-100 placeholder-dark-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter table number"
                required
              />
            </div>
          </div>
          <div>
            <label className={`block mb-2 mt-3 text-sm font-medium ${
              isDarkMode ? 'text-dark-300' : 'text-gray-700'
            }`}>
              Number of Seats
            </label>
            <div className={`flex item-center rounded-lg p-5 px-4 transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-800 border border-dark-600' : 'bg-gray-100 border border-gray-300'
            }`}>
              <input
                type="number"
                name="seats"
                value={tableData.seats}
                onChange={handleInputChange}
                className={`bg-transparent flex-1 focus:outline-none transition-colors duration-300 ${
                  isDarkMode ? 'text-dark-100 placeholder-dark-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter number of seats"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full rounded-lg mt-10 mb-6 py-3 text-lg font-bold transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-restaurant-600 text-white hover:bg-restaurant-500' 
                : 'bg-restaurant-500 text-white hover:bg-restaurant-600'
            }`}
          >
            Add Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
