"use client";

import { motion } from "framer-motion";
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
    <div className="w-full h-full flex items-center px-6 md:px-10 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2">
            Academics
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pollocks-black mb-3 font-serif">
            Our Programs
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm lg:text-base">
            Quality CBSE education from Pre-Nursery to 10th Standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="ios-card p-5 lg:p-6 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 shadow-lg`}>
                <program.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              
              <h3 className="text-base lg:text-lg font-serif font-bold text-pollocks-black mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
