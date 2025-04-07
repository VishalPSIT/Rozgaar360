import React from "react";
import { FaBook, FaBriefcase, FaComments, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBook className="text-blue-600 text-3xl" />,
    title: "Notes & Resources",
    description: "Get curated notes and materials for all branches and semesters.",
  },
  {
    icon: <FaBriefcase className="text-yellow-500 text-3xl" />,
    title: "Internships & Jobs",
    description: "Access verified internships, jobs and placement updates.",
  },
  {
    icon: <FaComments className="text-green-600 text-3xl" />,
    title: "Doubt Forums",
    description: "Ask questions, solve doubts and collaborate with peers.",
  },
  {
    icon: <FaUsers className="text-purple-600 text-3xl" />,
    title: "Community Access",
    description: "Join branch-wise communities and grow your network.",
  },
];

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why <span className="text-blue-600 dark:text-yellow-400">Rozgaar360</span>?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Everything you need for campus life, career prep, and beyond — all in one place!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f9fbff] dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
