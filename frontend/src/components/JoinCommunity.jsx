import React from "react";

const JoinCommunity = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-800 py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Be Part of the <span className="text-blue-600 dark:text-yellow-400">Rozgaar360</span> Community
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Join thousands of students from every branch who are learning, earning, and evolving together.
        </p>
        <div className="mt-6">
          <a
            href="https://t.me/campustocorporate_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Join Telegram Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
