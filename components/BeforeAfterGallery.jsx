"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
  {
    title: "Sports & Athletics",
    description: "Comprehensive sports program including cricket, football, basketball, and athletics.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Music & Dance",
    description: "Classical and contemporary arts training to nurture creative expression.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Art & Craft",
    description: "Visual arts education fostering creativity and fine motor skills.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Science Club",
    description: "Hands-on experiments and projects to spark scientific curiosity.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ActivitiesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:flex w-[120vw] h-screen bg-gradient-to-br from-pollocks-sky via-white to-pollocks-sky/50 items-center px-16 xl:px-24 shrink-0">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4"
            >
              Beyond Academics
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl xl:text-5xl font-serif font-bold text-pollocks-black mb-6"
            >
              Co-Curricular Activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-md"
            >
              Holistic development through diverse extracurricular programs that nurture talents and build character.
            </motion.p>

            {/* Activity List */}
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`w-full text-left p-4 xl:p-5 rounded-2xl transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-pollocks-blue text-white shadow-lg"
                      : "bg-white hover:bg-gray-50 text-pollocks-black"
                  }`}
                >
                  <h3 className="font-serif font-bold text-lg xl:text-xl mb-1">{activity.title}</h3>
                  <p className={`text-sm ${currentIndex === index ? "text-white/80" : "text-gray-500"}`}>
                    {activity.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[70vh] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activities[currentIndex].image}
                  alt={activities[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-serif font-bold text-white">{activities[currentIndex].title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute -bottom-16 left-0 flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-pollocks-blue text-white flex items-center justify-center hover:bg-pollocks-blue-dark transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-pollocks-blue text-white flex items-center justify-center hover:bg-pollocks-blue-dark transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="lg:hidden py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-pollocks-sky to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs sm:text-sm font-medium block mb-3">
              Beyond Academics
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pollocks-black mb-4">
              Co-Curricular Activities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
              Holistic development through diverse extracurricular programs.
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-lg font-serif font-bold text-white">
                    {activity.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
