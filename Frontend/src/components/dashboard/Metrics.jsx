import React from "react";
import { itemsData, metricsData } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const Metrics = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto py-2 px-6 md:px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`font-semibold text-xl ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Overall Performance
          </h2>
          <p className={`text-sm ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, obcaecati?
          </p>
        </div>
        <button className={`flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${
          isDarkMode 
            ? 'text-dark-100 bg-dark-800 hover:bg-dark-700' 
            : 'text-gray-900 bg-gray-200 hover:bg-gray-300'
        }`}>
          Last 1 Month
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              className={`shadow-sm rounded-lg p-4 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-dark-900 border border-dark-700' 
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
            >
              <div className="flex justify-between items-center">
                <p className={`font-medium text-xs ${
                  isDarkMode ? 'text-dark-300' : 'text-gray-700'
                }`}>
                  {metric.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    style={{ color: metric.isIncrease ? (isDarkMode ? '#10b981' : '#059669') : '#ef4444' }}
                  >
                    <path
                      d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  <p
                    className="font-medium text-xs"
                    style={{ color: metric.isIncrease ? (isDarkMode ? '#10b981' : '#059669') : '#ef4444' }}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
              <p className={`mt-1 font-semibold text-2xl ${
                isDarkMode ? 'text-dark-100' : 'text-gray-900'
              }`}>
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-between mt-12">
        <div>
          <h2 className={`font-semibold text-xl ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Item Details
          </h2>
          <p className={`text-sm ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, obcaecati?
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itemsData.map((item, index) => {
            return (
              <div key={index} className={`shadow-sm rounded-lg p-4 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-dark-900 border border-dark-700' 
                  : 'bg-white border border-gray-200 shadow-md'
              }`}>
                <div className="flex justify-between items-center">
                  <p className={`font-medium text-xs ${
                    isDarkMode ? 'text-dark-300' : 'text-gray-700'
                  }`}>{item.title}</p>
                  <div className="flex items-center gap-1">
                    <svg className={`w-3 h-3 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none">
                      <path d="M5 15l7-7 7 7" />
                    </svg>
                    <p className={`font-medium text-xs ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>{item.percentage}</p>
                  </div>
                </div>
                <p className={`mt-1 font-semibold text-2xl ${
                  isDarkMode ? 'text-dark-100' : 'text-gray-900'
                }`}>{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
