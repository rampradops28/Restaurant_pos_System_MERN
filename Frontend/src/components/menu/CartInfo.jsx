import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems, updateQuantity } from "../../redux/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const CartInfo = () => {
  const { isDarkMode } = useTheme();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItems(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <h2 className={`text-lg font-bold mb-4 ${
        isDarkMode ? 'text-dark-100' : 'text-gray-900'
      }`}>
        Cart Items ({cartItems.length})
      </h2>
      
      {cartItems.length === 0 ? (
        <div className={`text-center py-8 ${
          isDarkMode ? 'text-dark-400' : 'text-gray-500'
        }`}>
          <p>No items in cart</p>
        </div>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className={`p-3 rounded-lg border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-dark-800 border-dark-600' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-semibold text-sm ${
                  isDarkMode ? 'text-dark-100' : 'text-gray-900'
                }`}>
                  {item.name}
                </h3>
                <button
                  onClick={() => handleRemove(item.id)}
                  className={`p-1 rounded transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30' 
                      : 'text-red-600 hover:text-red-700 hover:bg-red-100'
                  }`}
                >
                  <FaTrash size={12} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 px-2 py-1 rounded ${
                  isDarkMode ? 'bg-dark-950' : 'bg-white'
                }`}>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-restaurant-400 hover:text-restaurant-300 hover:bg-restaurant-900/30' 
                        : 'text-restaurant-600 hover:text-restaurant-700 hover:bg-restaurant-100'
                    }`}
                  >
                    -
                  </button>
                  <span className={`text-sm font-semibold ${
                    isDarkMode ? 'text-dark-100' : 'text-gray-900'
                  }`}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-restaurant-400 hover:text-restaurant-300 hover:bg-restaurant-900/30' 
                        : 'text-restaurant-600 hover:text-restaurant-700 hover:bg-restaurant-100'
                    }`}
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right">
                  <p className={`text-sm ${
                    isDarkMode ? 'text-dark-400' : 'text-gray-600'
                  }`}>
                    ₹{item.pricePerQuantity} × {item.quantity}
                  </p>
                  <p className={`font-bold ${
                    isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
                  }`}>
                    ₹{item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartInfo;
