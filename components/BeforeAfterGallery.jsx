"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
  {
    title: "Sports & Athletics",
    description: "Comprehensive sports program including cricket, football, basketball, and athletics.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Music & Dance",
    description: "Classical and contemporary arts training to nurture creative expression.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Art & Craft",
    description: "Visual arts education fostering creativity and fine motor skills.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Science Club",
    description: "Hands-on experiments and projects to spark scientific curiosity.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ActivitiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % activities.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + activities.length) % activities.length);

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:flex w-screen min-w-screen h-full bg-gradient-to-br from-pollocks-sky via-white to-pollocks-sky/50 items-center px-8 lg:px-10 shrink-0 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-3"
            >
              Beyond Academics
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black mb-4"
            >
              Co-Curricular Activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-600 mb-6 max-w-sm"
            >
              Holistic development through diverse extracurricular programs that nurture talents and build character.
            </motion.p>

            {/* Activity List */}
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-pollocks-blue text-white shadow-lg"
                      : "bg-white/50 hover:bg-white text-pollocks-black"
                  }`}
                >
                  <h4 className="font-semibold text-sm mb-1">{activity.title}</h4>
                  <p className={`text-xs ${activeIndex === index ? "text-white/80" : "text-gray-500"}`}>
                    {activity.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={activities[activeIndex].image}
                  alt={activities[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-navy/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-serif text-xl font-bold">{activities[activeIndex].title}</h3>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-pollocks-blue flex items-center justify-center text-white hover:bg-pollocks-blue-dark transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-pollocks-blue flex items-center justify-center text-white hover:bg-pollocks-blue-dark transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden py-12 bg-pollocks-sky px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2">Beyond Academics</span>
          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-2">Co-Curricular Activities</h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">Holistic development through diverse programs.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-square"
            >
              <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-serif text-sm font-medium">{activity.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
