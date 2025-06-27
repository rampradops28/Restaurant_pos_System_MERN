import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const MiniCard = ({title, icon, number, footerNum}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-4 sm:py-5 px-4 sm:px-5 rounded-lg w-full sm:w-[50%] border transition-all duration-300 hover:shadow-lg ${
      isDarkMode 
        ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
        : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
    }`}>
        <div className='flex items-start justify-between'>
            <h1 className={`text-base sm:text-lg font-bold tracking-wide ${
              isDarkMode ? 'text-dark-100' : 'text-gray-900'
            }`}>{title}</h1>
            <button className={`p-2 sm:p-3 rounded-lg text-xl sm:text-2xl transition-all duration-300 hover:scale-110 ${
              title === "Total Earnings" 
                ? isDarkMode 
                  ? 'bg-fresh-600 text-white hover:bg-fresh-700' 
                  : 'bg-fresh-500 text-white hover:bg-fresh-600'
                : isDarkMode 
                  ? 'bg-restaurant-600 text-white hover:bg-restaurant-700' 
                  : 'bg-restaurant-500 text-white hover:bg-restaurant-600'
            }`}>{icon}</button>
        </div>
        <div>
            <h1 className={`text-2xl sm:text-4xl font-bold mt-3 sm:mt-5 ${
              isDarkMode ? 'text-dark-100' : 'text-gray-900'
            }`}>{
              title === "Total Earnings" ? `₹${number}` : number}</h1>
            <h1 className={`text-sm sm:text-lg mt-2 ${
              isDarkMode ? 'text-dark-400' : 'text-gray-600'
            }`}><span className={`${
              isDarkMode ? 'text-fresh-400' : 'text-fresh-600'
            }`}>{footerNum}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard