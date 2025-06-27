import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Modal = ({ isOpen, onClose, title, children }) => {
  const { isDarkMode } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`rounded-lg shadow-xl w-full max-w-sm sm:max-w-lg mx-4 border transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className={`flex justify-between items-center px-4 sm:px-6 py-4 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-dark-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-lg sm:text-xl font-bold ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>{title}</h2>
          <button
            className={`text-xl sm:text-2xl transition-colors duration-300 hover:scale-110 ${
              isDarkMode ? 'text-dark-400 hover:text-dark-200' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
