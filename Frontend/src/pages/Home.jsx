import React, { useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import OrderList from "../components/home/OrderList";
import PopularDishes from "../components/home/PopularDishes";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = "POS | Home"
  }, [])

  return (
    <section className={`min-h-[calc(100vh-5rem)] overflow-hidden pb-8 lg:pb-32 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-950' : 'bg-gray-50'
    }`}>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
        {/* Main Content - Left Side */}
        <div className="flex-1 lg:flex-[3] space-y-4 lg:space-y-6">
          <Greetings />
          <div className="flex flex-col sm:flex-row items-center w-full gap-3">
            <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
            <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
          </div>
          <RecentOrders />
        </div>
        
        {/* Side View - Popular Dishes */}
        <div className="flex-1 lg:flex-[1] lg:max-w-sm">
          <PopularDishes />
        </div>
      </div>
    </section>
  );
};

export default Home;
