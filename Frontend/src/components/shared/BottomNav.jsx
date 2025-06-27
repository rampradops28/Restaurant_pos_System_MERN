import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar, MdDashboard } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { FaBell, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlice";
import { removeUser } from "../../redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { path: "/", icon: <FaHome size={24} />, label: "Home" },
  { path: "/orders", icon: <MdOutlineReorder size={24} />, label: "Orders" },
  { path: "/tables", icon: <MdTableBar size={24} />, label: "Tables" },
  { path: "/more", icon: <CiCircleMore size={24} />, label: "More" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
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
    setIsMenuOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {
    dispatch(setCustomer({ name, phone, guests: guestCount }));
    navigate("/tables");
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`fixed top-4 right-4 z-[10001] p-3 rounded-full shadow-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-dark-900 text-dark-100 border border-dark-700' 
              : 'bg-white text-gray-900 border border-gray-200 shadow-md'
          }`}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[10000] bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <div 
              className={`absolute top-0 right-0 w-80 h-full p-6 transition-all duration-300 ${
                isDarkMode ? 'bg-dark-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4 mt-16">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 rounded-lg border-b border-gray-200 dark:border-dark-700">
                  <span className={`font-semibold ${
                    isDarkMode ? 'text-dark-100' : 'text-gray-900'
                  }`}>Theme</span>
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-dark-800 text-food-400 hover:bg-dark-700' 
                        : 'bg-gray-100 text-food-600 hover:bg-gray-200'
                    }`}
                  >
                    {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                  </button>
                </div>

                {/* Navigation Items */}
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? isDarkMode
                          ? 'bg-dark-800 text-restaurant-400'
                          : 'bg-gray-100 text-restaurant-600'
                        : isDarkMode
                          ? 'text-dark-300 hover:bg-dark-800 hover:text-restaurant-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-restaurant-600'
                    }`}
                  >
                    {item.icon}
                    <span className="font-semibold">{item.label}</span>
                  </button>
                ))}
                
                {/* Dashboard (Admin Only) */}
                {userData.role === "Admin" && (
                  <button
                    onClick={() => handleNavClick("/dashboard")}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      isActive("/dashboard")
                        ? isDarkMode
                          ? 'bg-dark-800 text-restaurant-400'
                          : 'bg-gray-100 text-restaurant-600'
                        : isDarkMode
                          ? 'text-dark-300 hover:bg-dark-800 hover:text-restaurant-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-restaurant-600'
                    }`}
                  >
                    <MdDashboard size={24} />
                    <span className="font-semibold">Dashboard</span>
                  </button>
                )}

                {/* Notifications */}
                <button
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'text-dark-300 hover:bg-dark-800 hover:text-spice-400'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-spice-600'
                  }`}
                >
                  <FaBell size={24} />
                  <span className="font-semibold">Notifications</span>
                </button>

                {/* User Profile */}
                <div className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'text-dark-300 hover:bg-dark-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  <FaUserCircle size={24} className={isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'} />
                  <div className="flex-1 text-left">
                    <div className={`font-semibold ${
                      isDarkMode ? 'text-dark-100' : 'text-gray-900'
                    }`}>
                      {userData.name || "TEST USER"}
                    </div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-dark-400' : 'text-gray-600'
                    }`}>
                      {userData.role || "Role"}
                    </div>
                  </div>
                </div>

                {/* Create Order Button */}
                <button
                  disabled={isActive("/tables") || isActive("/menu")}
                  onClick={openModal}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-restaurant-600 text-white hover:bg-restaurant-700' 
                      : 'bg-restaurant-500 text-white hover:bg-restaurant-600'
                  }`}
                >
                  <BiSolidDish size={24} />
                  <span className="font-semibold">Create Order</span>
                </button>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'text-red-400 hover:bg-red-900/30'
                      : 'text-red-600 hover:bg-red-100'
                  }`}
                >
                  <IoLogOut size={24} />
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Floating Navigation */}
      <div className="hidden lg:block">
        <nav
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center justify-between w-[90vw] max-w-md px-3 py-3 rounded-3xl shadow-2xl backdrop-blur-md border transition-colors duration-300
            ${
              isDarkMode
                ? "bg-dark-900/90 border-dark-700"
                : "bg-white/90 border-gray-200"
            }
          `}
          style={{ 
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
            bottom: "1.5rem"
          }}
        >
          {navItems.map((item, idx) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`relative flex flex-col items-center justify-center flex-1 px-2 py-1 group transition-all duration-300
                ${
                  isActive(item.path)
                    ? isDarkMode
                      ? "text-restaurant-400"
                      : "text-restaurant-600"
                    : isDarkMode
                      ? "text-dark-400 hover:text-restaurant-400"
                      : "text-gray-500 hover:text-restaurant-600"
                }
              `}
            >
              <span className="flex items-center justify-center">
                {item.icon}
              </span>
              {/* Animated active indicator */}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300
                  ${
                    isActive(item.path)
                      ? isDarkMode
                        ? "bg-restaurant-400 scale-100"
                        : "bg-restaurant-600 scale-100"
                      : "bg-transparent scale-0"
                  }
                `}
              ></span>
              {/* Label: hidden on mobile, visible on md+ */}
              <span className="hidden md:block text-xs font-semibold mt-1">
                {item.label}
              </span>
            </button>
          ))}

          {/* Floating Action Button (FAB) - always centered and above navbar */}
          <button
            disabled={isActive("/tables") || isActive("/menu")}
            onClick={openModal}
            className={`absolute -top-8 left-1/2 -translate-x-1/2 rounded-full p-3 sm:p-4 flex items-center justify-center shadow-lg border-4 transition-all duration-300 hover:scale-110 z-[10000]
              ${
                isDarkMode
                  ? "bg-restaurant-600 text-white hover:bg-restaurant-700 border-dark-900"
                  : "bg-restaurant-500 text-white hover:bg-restaurant-600 border-white"
              }
            `}
            style={{ 
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
              top: "-2rem"
            }}
          >
            <BiSolidDish size={28} className="sm:w-8 sm:h-8" />
          </button>
        </nav>
      </div>

      {/* Modal for creating order */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className={`block mb-2 text-sm font-medium ${
            isDarkMode ? "text-dark-300" : "text-gray-700"
          }`}>Customer Name</label>
          <div className={`flex items-center rounded-lg p-3 px-4 ${
            isDarkMode ? "bg-dark-800" : "bg-gray-100"
          }`}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter customer name"
              className={`bg-transparent flex-1 focus:outline-none ${
                isDarkMode
                  ? "text-dark-100 placeholder-dark-400"
                  : "text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>
        </div>
        <div>
          <label className={`block mb-2 mt-3 text-sm font-medium ${
            isDarkMode ? "text-dark-300" : "text-gray-700"
          }`}>Customer Phone</label>
          <div className={`flex items-center rounded-lg p-3 px-4 ${
            isDarkMode ? "bg-dark-800" : "bg-gray-100"
          }`}>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="+91-9999999999"
              className={`bg-transparent flex-1 focus:outline-none ${
                isDarkMode
                  ? "text-dark-100 placeholder-dark-400"
                  : "text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>
        </div>
        <div>
          <label className={`block mb-2 mt-3 text-sm font-medium ${
            isDarkMode ? "text-dark-300" : "text-gray-700"
          }`}>Guest</label>
          <div className={`flex items-center justify-between px-4 py-3 rounded-lg ${
            isDarkMode ? "bg-dark-800" : "bg-gray-100"
          }`}>
            <button
              onClick={decrement}
              className={`text-2xl hover:scale-110 transition-transform ${
                isDarkMode
                  ? "text-restaurant-400 hover:text-restaurant-300"
                  : "text-restaurant-600 hover:text-restaurant-700"
              }`}
            >
              &minus;
            </button>
            <span className={isDarkMode ? "text-dark-100" : "text-gray-900"}>
              {guestCount} Person
            </span>
            <button
              onClick={increment}
              className={`text-2xl hover:scale-110 transition-transform ${
                isDarkMode
                  ? "text-restaurant-400 hover:text-restaurant-300"
                  : "text-restaurant-600 hover:text-restaurant-700"
              }`}
            >
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={handleCreateOrder}
          className={`w-full rounded-lg py-3 mt-8 font-semibold transition-colors duration-300 ${
            isDarkMode
              ? "bg-restaurant-600 text-white hover:bg-restaurant-700"
              : "bg-restaurant-500 text-white hover:bg-restaurant-600"
          }`}
        >
          Create Order
        </button>
      </Modal>
    </>
  );
};

export default BottomNav;
