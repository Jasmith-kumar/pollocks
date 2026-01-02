"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "./ui/Card";
import { BookOpen, Users, Trophy, Palette } from "lucide-react";

const programs = [
  {
    title: "Pre-Primary",
    icon: Users,
    description: "Nurturing foundation for Pre-Nursery to UKG with play-based learning.",
    gradient: "from-pollocks-blue/10 to-pollocks-sky/20",
  },
  {
    title: "Primary School",
    icon: BookOpen,
    description: "CBSE curriculum for Classes 1-5 with focus on conceptual understanding.",
    gradient: "from-pollocks-sky/20 to-pollocks-blue-light/20",
  },
  {
    title: "Middle School",
    icon: Trophy,
    description: "Classes 6-8 preparing students for academic excellence and life skills.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Secondary School",
    icon: Palette,
    description: "Classes 9-10 with comprehensive CBSE board exam preparation.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
];

export default function AcademicsGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-pollocks-black mb-3 md:mb-4 font-serif">Our Programs</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Quality CBSE education from Pre-Nursery to 10th Standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className={`h-full border-none shadow-lg bg-gradient-to-br ${program.gradient} hover:shadow-xl min-h-[200px] sm:min-h-[250px] lg:min-h-[280px]`}>
                <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center h-full justify-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="p-3 lg:p-4 bg-white rounded-full shadow-sm">
                    <program.icon className="w-6 h-6 lg:w-8 lg:h-8 text-pollocks-blue" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-serif">{program.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
