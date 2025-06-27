import React from "react";
import { useNavigate } from "react-router-dom";
import { getAvatarName, getBgColor } from "../../utils"
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const TableCard = ({id, name, status, initials, seats}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  const handleClick = (name) => {
    if(status === "Booked") return;

    const table = { tableId: id, tableNo: name }
    dispatch(updateTable({table}))
    navigate(`/menu`);
  };

  return (
    <div onClick={() => handleClick(name)} key={id} className={`w-full p-3 sm:p-4 rounded-lg cursor-pointer border transition-all duration-300 hover:scale-105 ${
      isDarkMode 
        ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
        : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
    }`}>
      <div className="flex items-center justify-between px-1">
        <h1 className={`text-base sm:text-xl font-bold ${
          isDarkMode ? 'text-dark-100' : 'text-gray-900'
        }`}>Table <FaLongArrowAltRight className={`ml-1 sm:ml-2 inline ${
          isDarkMode ? 'text-dark-400' : 'text-gray-500'
        }`} /> {name}</h1>
        <p className={`px-2 py-1 rounded-lg text-xs sm:text-sm transition-colors duration-300 ${
          status === "Booked" 
            ? isDarkMode 
              ? 'text-fresh-300 bg-fresh-900/30' 
              : 'text-fresh-700 bg-fresh-100'
            : isDarkMode 
              ? 'text-restaurant-300 bg-restaurant-900/30' 
              : 'text-restaurant-600 bg-restaurant-100'
        }`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-3 sm:mt-5 mb-4 sm:mb-8">
        <h1 className={`rounded-full p-3 sm:p-5 text-lg sm:text-xl transition-all duration-300 ${
          isDarkMode ? 'text-white' : 'text-white'
        }`} style={{backgroundColor : initials ? getBgColor() : (isDarkMode ? '#374151' : '#6b7280')}} >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>
      <p className={`text-xs ${
        isDarkMode ? 'text-dark-400' : 'text-gray-600'
      }`}>Seats: <span className={`${
        isDarkMode ? 'text-dark-100' : 'text-gray-900'
      }`}>{seats}</span></p>
    </div>
  );
};

export default TableCard;
