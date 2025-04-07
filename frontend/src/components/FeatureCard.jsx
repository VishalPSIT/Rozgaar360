import React from "react";
import { BookOpen, Rocket, MessageSquare, Briefcase, ClipboardList, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Study Material Vault",
    description: "Offer and share your notes, PYQs, and MCQs.",
    icon: BookOpen,
  },
  {
    title: "Micro Freelance Gigs",
    description: "Find small freelance tasks for quick earnings.",
    icon: Rocket,
  },
  {
    title: "Doubt Solver Forum",
    description: "Ask questions, get answers, and help others.",
    icon: MessageSquare,
  },
  {
    title: "Internships & Hackathons",
    description: "Discover remote and on-site opportunities.",
    icon: Briefcase,
  },
  {
    title: "Career Content",
    description: "Get resources from campus to corporate life.",
    icon: ClipboardList,
  },
  {
    title: "Skill Building Events",
    description: "Join contests, workshops, and learning events.",
    icon: GraduationCap,
  },
];

const FeatureCards = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Explore What You Can Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-[#f9fbff] dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
