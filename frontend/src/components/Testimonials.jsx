// src/components/Testimonials.jsx

import React from "react";

const testimonials = [
  {
    name: "Anjali Verma",
    role: "B.Tech Student, CSE",
    feedback:
      "Rozgaar360 helped me land my first internship and stay updated with notes and job alerts!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohan Singh",
    role: "Diploma Mechanical",
    feedback:
      "The community is super helpful, and the platform covers all branches. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Electrical Engineering",
    feedback:
      "Loved the gigs and doubt section. Everything at one place, perfect for students.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          What Students Are Saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
