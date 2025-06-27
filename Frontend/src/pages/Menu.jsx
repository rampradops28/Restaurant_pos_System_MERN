import React, { useEffect } from "react";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const Menu = () => {
  const { isDarkMode } = useTheme();
  const customerData = useSelector((state) => state.customer);

  useEffect(() => {
    document.title = "POS | Menu"
  }, [])

  return (
    <section className={`min-h-[calc(100vh-5rem)] overflow-hidden flex flex-col lg:flex-row gap-3 pb-8 lg:pb-32 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-950' : 'bg-gray-50'
    }`}>
      {/* Left Div */}
      <div className="flex-1 lg:flex-[3]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-10 py-4 space-y-4 sm:space-y-0">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className={`text-xl sm:text-2xl font-bold tracking-wider ${
              isDarkMode ? 'text-dark-100' : 'text-gray-900'
            }`}>
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className={`text-3xl sm:text-4xl ${
                isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
              }`} />
              <div className="flex flex-col items-start">
                <h1 className={`text-sm sm:text-md font-semibold tracking-wide ${
                  isDarkMode ? 'text-dark-100' : 'text-gray-900'
                }`}>
                  {customerData.customerName || "Customer Name"}
                </h1>
                <p className={`text-xs ${
                  isDarkMode ? 'text-dark-400' : 'text-gray-600'
                } font-medium`}>
                  Table : {customerData.table?.tableNo || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>
      {/* Right Div */}
      <div className={`flex-1 lg:flex-[1] mt-4 mx-3 lg:mr-3 h-[400px] lg:h-[780px] rounded-lg pt-2 border transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-700' 
          : 'bg-white border-gray-200 shadow-md'
      }`}>
        {/* Customer Info */}
        <CustomerInfo />
        <hr className={`border-t-2 ${
          isDarkMode ? 'border-dark-700' : 'border-gray-200'
        }`} />
        {/* Cart Items */}
        <CartInfo />
        <hr className={`border-t-2 ${
          isDarkMode ? 'border-dark-700' : 'border-gray-200'
        }`} />
        {/* Bills */}
        <Bill />
      </div>
    </section>
  );
};

export default Menu;
