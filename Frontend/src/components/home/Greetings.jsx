import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";

const Greetings = () => {
  const userData = useSelector(state => state.user);
  const [dateTime, setDateTime] = useState(new Date());
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 lg:px-8 mt-5 space-y-4 sm:space-y-0">
      <div>
        <h1 className={`text-xl sm:text-2xl font-bold tracking-wide ${
          isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
        }`}>
          Good Morning, {userData.name || "TEST USER"}
        </h1>
        <p className={`text-sm ${
          isDarkMode ? 'text-dark-300' : 'text-gray-600'
        }`}>
          Give your best services for customers 😀
        </p>
      </div>
      <div className="text-right">
        <h1 className={`text-2xl sm:text-3xl font-bold tracking-wide w-full sm:w-[130px] ${
          isDarkMode ? 'text-food-400' : 'text-food-600'
        }`}>{formatTime(dateTime)}</h1>
        <p className={`text-sm ${
          isDarkMode ? 'text-dark-400' : 'text-gray-500'
        }`}>{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
