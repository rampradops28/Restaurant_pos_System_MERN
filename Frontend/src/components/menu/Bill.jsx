import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import {
  addOrder,
  createOrderRazorpay,
  updateTable,
  verifyPaymentRazorpay,
} from "../../https/index";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import { removeAllItems } from "../../redux/slices/cartSlice";
import { removeCustomer } from "../../redux/slices/customerSlice";
import Invoice from "../invoice/Invoice";
import { useTheme } from "../../context/ThemeContext";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Bill = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();

  const customerData = useSelector((state) => state.customer);
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const [paymentMethod, setPaymentMethod] = useState();
  const [showInvoice, setShowInvoice] = useState(false);
  const [orderInfo, setOrderInfo] = useState();

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      enqueueSnackbar("Please select a payment method!", {
        variant: "warning",
      });

      return;
    }

    if (paymentMethod === "Online") {
      // load the script
      try {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
          enqueueSnackbar("Razorpay SDK failed to load. Are you online?", {
            variant: "warning",
          });
          return;
        }

        // create order

        const reqData = {
          amount: totalPriceWithTax.toFixed(2),
        };

        const { data } = await createOrderRazorpay(reqData);

        const options = {
          key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
          amount: data.order.amount,
          currency: data.order.currency,
          name: "RESTRO",
          description: "Secure Payment for Your Meal",
          order_id: data.order.id,
          handler: async function (response) {
            const verification = await verifyPaymentRazorpay(response);
            console.log(verification);
            enqueueSnackbar(verification.data.message, { variant: "success" });

            // Place the order
            const orderData = {
              customerDetails: {
                name: customerData.customerName,
                phone: customerData.customerPhone,
                guests: customerData.guests,
              },
              orderStatus: "In Progress",
              bills: {
                total: total,
                tax: tax,
                totalWithTax: totalPriceWithTax,
              },
              items: cartData,
              table: customerData.table.tableId,
              paymentMethod: paymentMethod,
              paymentData: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
              },
            };

            setTimeout(() => {
              orderMutation.mutate(orderData);
            }, 1500);
          },
          prefill: {
            name: customerData.name,
            email: "",
            contact: customerData.phone,
          },
          theme: { color: "#736a5f" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.log(error);
        enqueueSnackbar("Payment Failed!", {
          variant: "error",
        });
      }
    } else {
      // Place the order
      const orderData = {
        customerDetails: {
          name: customerData.customerName,
          phone: customerData.customerPhone,
          guests: customerData.guests,
        },
        orderStatus: "In Progress",
        bills: {
          total: total,
          tax: tax,
          totalWithTax: totalPriceWithTax,
        },
        items: cartData,
        table: customerData.table.tableId,
        paymentMethod: paymentMethod,
      };
      orderMutation.mutate(orderData);
    }
  };

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log(data);

      setOrderInfo(data);

      // Update Table
      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table,
      };

      setTimeout(() => {
        tableUpdateMutation.mutate(tableData);
      }, 1500);

      enqueueSnackbar("Order Placed!", {
        variant: "success",
      });
      setShowInvoice(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log(resData);
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="p-4">
      <h2 className={`text-lg font-bold mb-4 ${
        isDarkMode ? 'text-dark-100' : 'text-gray-900'
      }`}>
        Bill Summary
      </h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className={`text-sm ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>
            Subtotal
          </span>
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            ₹{total.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className={`text-sm ${
            isDarkMode ? 'text-dark-400' : 'text-gray-600'
          }`}>
            Tax (18%)
          </span>
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            ₹{tax.toFixed(2)}
          </span>
        </div>
        
        <hr className={`border-t ${
          isDarkMode ? 'border-dark-600' : 'border-gray-300'
        }`} />
        
        <div className="flex justify-between">
          <span className={`text-lg font-bold ${
            isDarkMode ? 'text-dark-100' : 'text-gray-900'
          }`}>
            Total
          </span>
          <span className={`text-lg font-bold ${
            isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
          }`}>
            ₹{totalPriceWithTax.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 mt-4">
        <button
          onClick={() => setPaymentMethod("Cash")}
          className={`px-3 sm:px-4 py-2 sm:py-3 w-full rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
            paymentMethod === "Cash" 
              ? isDarkMode 
                ? 'bg-dark-800 text-restaurant-400' 
                : 'bg-gray-200 text-restaurant-600'
              : isDarkMode 
                ? 'bg-dark-900 text-dark-300 hover:bg-dark-800 border border-dark-700' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md'
          }`}
        >
          Cash
        </button>
        <button
          onClick={() => setPaymentMethod("Online")}
          className={`px-3 sm:px-4 py-2 sm:py-3 w-full rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
            paymentMethod === "Online" 
              ? isDarkMode 
                ? 'bg-dark-800 text-restaurant-400' 
                : 'bg-gray-200 text-restaurant-600'
              : isDarkMode 
                ? 'bg-dark-900 text-dark-300 hover:bg-dark-800 border border-dark-700' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md'
          }`}
        >
          Online
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 mt-4">
        <button className={`px-3 sm:px-4 py-2 sm:py-3 w-full rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 hover:scale-105 ${
          isDarkMode 
            ? 'bg-dark-800 text-dark-100 hover:bg-dark-700' 
            : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
        }`}>
          Print Receipt
        </button>
        <button
          onClick={handlePlaceOrder}
          className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 ${
            isDarkMode 
              ? 'bg-restaurant-600 hover:bg-restaurant-500' 
              : 'bg-restaurant-500 hover:bg-restaurant-600'
          }`}
        >
          Proceed to Payment
        </button>
      </div>

      {showInvoice && (
        <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />
      )}
    </div>
  );
};

export default Bill;
