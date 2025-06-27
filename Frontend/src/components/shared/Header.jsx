import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className={`sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 shadow-lg transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-dark-900 border-b border-dark-700' 
        : 'bg-white border-b border-gray-200'
    }`}>
      {/* LOGO with Animation - Centered on mobile */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer mb-4 sm:mb-0 group w-full sm:w-auto justify-center sm:justify-start relative">
        <img 
          src={logo} 
          className="h-8 w-8 sm:h-8 sm:w-8 transition-all duration-500 group-hover:scale-125 group-hover:rotate-180 group-hover:drop-shadow-2xl animate-float hover-lift" 
          alt="restro logo" 
        />
        <h1 className={`text-2xl sm:text-lg font-bold tracking-wide transition-all duration-500 group-hover:scale-110 relative ${
          isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
        }`}>
          <span className="inline-block animate-pulse group-hover:animate-spin group-hover:text-yellow-400 transition-all duration-300 hover:scale-150 hover-glow animate-rainbow">R</span>
          <span className="inline-block transition-all duration-300 group-hover:text-spice-500 group-hover:animate-ping hover:scale-125 animate-shimmer">e</span>
          <span className="inline-block transition-all duration-300 group-hover:text-food-500 delay-75 group-hover:animate-bounce hover:scale-125 animate-wiggle">s</span>
          <span className="inline-block transition-all duration-300 group-hover:text-fresh-500 delay-100 group-hover:animate-pulse hover:scale-125 animate-glow">t</span>
          <span className="inline-block transition-all duration-300 group-hover:text-restaurant-500 delay-150 group-hover:animate-spin hover:scale-125 animate-float">r</span>
          <span className="inline-block transition-all duration-300 group-hover:text-spice-500 delay-200 group-hover:animate-bounce hover:scale-125 animate-rainbow">o</span>
        </h1>
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-400 via-spice-500 to-food-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 pointer-events-none animate-pulse"></div>
        {/* Floating particles effect */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-spice-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-700 delay-200"></div>
        <div className="absolute top-1 -right-1 w-1 h-1 bg-food-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-600 delay-300"></div>
      </div>

      {/* SEARCH - Hidden on mobile */}
      <div className={`hidden sm:flex items-center gap-4 rounded-[15px] px-3 sm:px-5 py-2 w-full sm:w-[400px] lg:w-[500px] mb-4 sm:mb-0 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-dark-800 border border-dark-600' 
          : 'bg-gray-100 border border-gray-300'
      }`}>
        <FaSearch className={`${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder="Search"
          className={`outline-none w-full text-sm sm:text-base transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-dark-800 text-dark-100 placeholder-dark-400' 
              : 'bg-gray-100 text-gray-900 placeholder-gray-500'
          }`}
        />
      </div>

      {/* LOGGED USER DETAILS - Hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
        {/* Theme Toggle - Hidden on mobile */}
        <button
          onClick={toggleTheme}
          className={`p-2 sm:p-3 rounded-[15px] transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-dark-800 text-food-400 hover:bg-dark-700' 
              : 'bg-gray-100 text-food-600 hover:bg-gray-200'
          }`}
        >
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Dashboard - Hidden on mobile */}
        {userData.role === "Admin" && (
          <div onClick={() => navigate("/dashboard")} className={`p-2 sm:p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-dark-800 text-restaurant-400 hover:bg-dark-700' 
              : 'bg-gray-100 text-restaurant-600 hover:bg-gray-200'
          }`}>
            <MdDashboard className="text-xl sm:text-2xl" />
          </div>
        )}
        
        {/* Notifications - Hidden on mobile */}
        <div className={`p-2 sm:p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-dark-800 text-spice-400 hover:bg-dark-700' 
            : 'bg-gray-100 text-spice-600 hover:bg-gray-200'
        }`}>
          <FaBell className="text-xl sm:text-2xl" />
        </div>
        
        {/* User Profile - Hidden on mobile */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <FaUserCircle className={`text-3xl sm:text-4xl ${
            isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
          }`} />
          <div className="flex flex-col items-start hidden sm:block">
            <h1 className={`text-sm sm:text-md font-semibold tracking-wide ${
              isDarkMode ? 'text-dark-100' : 'text-gray-900'
            }`}>
              {userData.name || "TEST USER"}
            </h1>
            <p className={`text-xs ${
              isDarkMode ? 'text-dark-400' : 'text-gray-600'
            } font-medium`}>
              {userData.role || "Role"}
            </p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className={`ml-1 sm:ml-2 transition-colors duration-300 hover:text-spice-500 ${
              isDarkMode ? 'text-dark-100' : 'text-gray-700'
            }`}
            size={32}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
