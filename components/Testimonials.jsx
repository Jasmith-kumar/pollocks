"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Pollocks School has been instrumental in shaping my child's character. The teachers are dedicated and the environment is nurturing.",
    author: "Priya Sharma",
    role: "Parent of Class 5 Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "The balanced approach to academics and extracurriculars has helped my daughter develop holistically. Highly recommend this school!",
    author: "Rajesh Kumar",
    role: "Parent of Class 8 Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "From day one, my son felt welcomed. The supportive staff and excellent facilities make Pollocks stand out from other schools.",
    author: "Lakshmi Devi",
    role: "Parent of Class 3 Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    quote: "As an alumnus, I can say that Pollocks gave me a strong foundation. The values instilled here stay with you for life.",
    author: "Arun Reddy",
    role: "Alumni, Batch of 2010",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-12 lg:py-0">
      <div className="text-center mb-8 md:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pollocks-black"
        >
          What Parents Say
        </motion.h2>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-pollocks-sky/50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center"
          >
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-pollocks-blue mx-auto mb-6 opacity-50" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-pollocks-black font-serif leading-relaxed mb-6 sm:mb-8">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-pollocks-blue"
              />
              <div className="text-left">
                <p className="font-serif font-bold text-pollocks-black text-base sm:text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pollocks-blue text-white flex items-center justify-center hover:bg-pollocks-blue-dark transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setAutoplay(false); setCurrentIndex(idx); }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-pollocks-blue w-6 sm:w-8" : "bg-pollocks-blue/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pollocks-blue text-white flex items-center justify-center hover:bg-pollocks-blue-dark transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
