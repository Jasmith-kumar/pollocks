"use client";

import { BookOpen, Users, Trophy, Palette } from "lucide-react";

const programs = [
  {
    title: "Pre-Primary",
    icon: Users,
    description: "Nurturing foundation for Pre-Nursery to UKG with play-based learning.",
    color: "from-pollocks-blue to-pollocks-blue-dark",
  },
  {
    title: "Primary School",
    icon: BookOpen,
    description: "CBSE curriculum for Classes 1-5 with focus on conceptual understanding.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    title: "Middle School",
    icon: Trophy,
    description: "Classes 6-8 preparing students for academic excellence and life skills.",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Secondary School",
    icon: Palette,
    description: "Classes 9-10 with comprehensive CBSE board exam preparation.",
    color: "from-violet-400 to-purple-500",
  },
];

export default function AcademicsGrid() {
  return (
    <div className="w-full h-full lg:h-screen flex items-center px-5 sm:px-8 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header with better spacing */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-3">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pollocks-black mb-4 font-serif">
            Our Programs
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Quality CBSE education from Pre-Nursery to 10th Standard, nurturing young minds for a bright future.
          </p>
        </div>

        {/* Cards Grid with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="ios-card p-6 sm:p-7 lg:p-6 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 shadow-lg`}>
                <program.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7 lg:h-7 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-lg font-serif font-bold text-pollocks-black mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
