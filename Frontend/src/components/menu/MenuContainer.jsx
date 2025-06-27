import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";
import { useTheme } from "../../context/ThemeContext";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {
    if(itemCount === 0) return;

    const {name, price} = item;
    const newObj = { 
      id: Date.now().toString(),
      name, 
      pricePerQuantity: price, 
      quantity: itemCount, 
      price: price * itemCount 
    };

    dispatch(addItems(newObj));
    setItemCount(0);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className={`flex flex-col items-start justify-between p-3 sm:p-4 rounded-lg h-[80px] sm:h-[100px] cursor-pointer border transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'border-dark-700 hover:bg-dark-800' 
                  : 'border-gray-200 hover:bg-gray-50 shadow-md'
              }`}
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className={`text-sm sm:text-lg font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={16} />
                )}
              </div>
              <p className={`text-xs sm:text-sm font-semibold ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className={`border-t-2 mt-4 ${
        isDarkMode ? 'border-dark-700' : 'border-gray-200'
      }`} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-10 py-4 w-[100%]">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col items-start justify-between p-3 sm:p-4 rounded-lg h-[120px] sm:h-[150px] cursor-pointer border transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-dark-900 border-dark-700 hover:bg-dark-800' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <h1 className={`text-sm sm:text-lg font-bold ${
                  isDarkMode ? 'text-dark-100' : 'text-gray-900'
                }`}>
                  {item.name}
                </h1>
                <button onClick={() => handleAddToCart(item)} className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-restaurant-700 text-white hover:bg-restaurant-600' 
                    : 'bg-restaurant-600 text-white hover:bg-restaurant-500'
                }`}><FaShoppingCart size={16} /></button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className={`text-lg sm:text-xl font-bold ${
                  isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
                }`}>
                  ₹{item.price}
                </p>
                <div className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg gap-4 sm:gap-6 w-[50%] ${
                  isDarkMode ? 'bg-dark-950' : 'bg-gray-100'
                }`}>
                  <button
                    onClick={() => decrement(item.id)}
                    className={`text-xl sm:text-2xl hover:scale-110 transition-transform ${
                      isDarkMode ? 'text-restaurant-400 hover:text-restaurant-300' : 'text-restaurant-600 hover:text-restaurant-700'
                    }`}
                  >
                    &minus;
                  </button>
                  <span className={`text-sm sm:text-base ${
                    isDarkMode ? 'text-dark-100' : 'text-gray-900'
                  }`}>
                    {itemId == item.id ? itemCount : "0"}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className={`text-xl sm:text-2xl hover:scale-110 transition-transform ${
                      isDarkMode ? 'text-restaurant-400 hover:text-restaurant-300' : 'text-restaurant-600 hover:text-restaurant-700'
                    }`}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
