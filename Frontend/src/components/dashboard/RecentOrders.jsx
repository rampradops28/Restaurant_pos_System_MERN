import React from "react";
import { orders } from "../../constants";
import { GrUpdate } from "react-icons/gr";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders, updateOrderStatus } from "../../https/index";
import { formatDateAndTime } from "../../utils";
import { useTheme } from "../../context/ThemeContext";

const RecentOrders = () => {
  const { isDarkMode } = useTheme();
  const queryClient = useQueryClient();
  
  const handleStatusChange = ({orderId, orderStatus}) => {
    console.log(orderId)
    orderStatusUpdateMutation.mutate({orderId, orderStatus});
  };

  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({orderId, orderStatus}) => updateOrderStatus({orderId, orderStatus}),
    onSuccess: (data) => {
      enqueueSnackbar("Order status updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["orders"]); // Refresh order list
    },
    onError: () => {
      enqueueSnackbar("Failed to update order status!", { variant: "error" });
    }
  })

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  console.log(resData.data.data);

  return (
    <div className={`container mx-auto p-4 rounded-lg transition-all duration-300 ${
      isDarkMode 
        ? 'bg-dark-900 border border-dark-700' 
        : 'bg-white border border-gray-200 shadow-md'
    }`}>
      <h2 className={`text-xl font-semibold mb-4 ${
        isDarkMode ? 'text-dark-100' : 'text-gray-900'
      }`}>
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className={`w-full text-left ${
          isDarkMode ? 'text-dark-100' : 'text-gray-900'
        }`}>
          <thead className={`${
            isDarkMode ? 'bg-dark-800 text-dark-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className={`border-b transition-colors duration-300 hover:bg-opacity-50 ${
                  isDarkMode 
                    ? 'border-dark-600 hover:bg-dark-800' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`border p-2 rounded-lg focus:outline-none transition-colors duration-300 ${
                      order.orderStatus === "Ready"
                        ? isDarkMode 
                          ? 'bg-dark-800 text-green-400 border-green-600' 
                          : 'bg-green-50 text-green-700 border-green-300'
                        : isDarkMode 
                          ? 'bg-dark-800 text-yellow-400 border-yellow-600' 
                          : 'bg-yellow-50 text-yellow-700 border-yellow-300'
                    }`}
                    value={order.orderStatus}
                    onChange={(e) => handleStatusChange({orderId: order._id, orderStatus: e.target.value})}
                  >
                    <option className={isDarkMode ? 'text-yellow-400' : 'text-yellow-700'} value="In Progress">
                      In Progress
                    </option>
                    <option className={isDarkMode ? 'text-green-400' : 'text-green-700'} value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateAndTime(order.orderDate)}</td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">Table - {order.table.tableNo}</td>
                <td className={`p-4 font-semibold ${
                  isDarkMode ? 'text-restaurant-400' : 'text-restaurant-600'
                }`}>₹{order.bills.totalWithTax}</td>
                <td className="p-4">
                  {order.paymentMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
