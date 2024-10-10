import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import { useState } from "react";
import DashboardStats from "./DashboardStats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import AmountStats from "./AmountStats";
import PageStats from "./PageStats";
import { FaUniversity } from "react-icons/fa";
import DoughnutChart from "./DoughnutChart";
import UserChannels from "./UserChannels";

const Stats = () => {
  const statsData = [
    {
      title: "All Users",
      value: "34.7k",
      icon: <UserGroupIcon className="w-8 h-8" />,
      description: "↗︎ 2300 (22%)",
    },
    {
      title: "Total Sales",
      value: "$34,545",
      icon: <CreditCardIcon className="w-8 h-8" />,
      description: "Current month",
    },
    {
      title: "Applications",
      value: "450",
      icon: <CircleStackIcon className="w-8 h-8" />,
      description: "Unseen Applications",
    },
    {
      title: "Universities",
      value: "5.6k",
      icon: <FaUniversity className="w-8 h-8" />,
      description: "All universities",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div>
      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div>
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div>
    </>
  );
};

export default Stats;
