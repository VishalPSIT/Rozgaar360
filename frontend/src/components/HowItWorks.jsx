import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create-Your",
      description: "Free Account",
    },
    {
      number: "2",
      title: "Explore",
      description: "Modules — Notes, Jobs, Forum",
    },
    {
      number: "3",
      title: "Engage",
      description: "With Your Community",
    },
    {
      number: "4",
      title: "Build",
      description: "Your Profile from Campus to Corporate",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {step.number}
              </div>
              <div className="text-xl font-semibold text-gray-800 dark:text-white">
                {step.title}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
