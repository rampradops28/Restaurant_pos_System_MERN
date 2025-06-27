import React from "react";
import { popularDishes } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const PopularDishes = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full">
      <div className={`w-full rounded-lg border transition-all duration-300 hover:shadow-lg ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
          : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
      }`}>
        <div className="flex justify-between items-center px-4 sm:px-6 py-4">
          <h1 className={`text-base sm:text-lg font-bold tracking-wide ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Popular Dishes
          </h1>
          <a href="" className={`text-sm font-semibold transition-colors duration-300 ${
            isDarkMode ? 'text-restaurant-400 hover:text-restaurant-300' : 'text-restaurant-600 hover:text-restaurant-700'
          }`}>
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[400px] sm:h-[500px] lg:h-[600px] scrollbar-hide">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className={`flex items-center gap-3 sm:gap-4 rounded-[15px] px-4 sm:px-6 py-3 mt-3 mx-4 sm:mx-6 transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-dark-950 hover:bg-dark-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <h1 className={`font-bold text-lg sm:text-xl mr-2 sm:mr-4 ${
                  isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
                }`}>{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h1 className={`font-semibold tracking-wide text-sm sm:text-base truncate ${
                    isDarkMode ? 'text-dark-100' : 'text-gray-900'
                  }`}>{dish.name}</h1>
                  <p className={`text-xs sm:text-sm font-semibold mt-1 ${
                    isDarkMode ? 'text-dark-400' : 'text-gray-600'
                  }`}>
                    <span className={`${
                      isDarkMode ? 'text-dark-500' : 'text-gray-500'
                    }`}>Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
