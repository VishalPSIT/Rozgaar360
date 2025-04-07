import React from "react";
import { FaLaptopCode, FaCogs, FaBolt, FaHardHat, FaMicrochip, FaChartLine } from "react-icons/fa";

const branches = [
  { name: "Information Technology", icon: <FaLaptopCode className="text-3xl text-blue-600" /> },
  { name: "Mechanical", icon: <FaCogs className="text-3xl text-red-500" /> },
  { name: "Electrical", icon: <FaBolt className="text-3xl text-yellow-500" /> },
  { name: "Civil", icon: <FaHardHat className="text-3xl text-green-600" /> },
  { name: "Electronics", icon: <FaMicrochip className="text-3xl text-purple-600" /> },
  { name: "Management", icon: <FaChartLine className="text-3xl text-pink-500" /> },
];

const BranchCards = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Explore by Branch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Find curated content, jobs, and notes based on your engineering stream.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            >
              {branch.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white text-center">
                {branch.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchCards;
