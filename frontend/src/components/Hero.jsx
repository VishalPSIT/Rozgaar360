import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f9fbff] dark:bg-gray-900 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            One Platform for <br />
            <span className="text-blue-600 dark:text-yellow-400">Learning, Earning,</span><br />
            and Evolving!
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Notes | Internships | Gigs | Doubts | Jobs — <br />
            All in One Place for Students
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Hero Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
