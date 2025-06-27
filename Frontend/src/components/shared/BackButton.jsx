import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext';

const BackButton = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();

  return (
    <button onClick={() => navigate(-1)} className={`p-2 text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 ${
      isDarkMode 
        ? 'bg-restaurant-600 text-white hover:bg-restaurant-700' 
        : 'bg-restaurant-500 text-white hover:bg-restaurant-600'
    }`}> 
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton