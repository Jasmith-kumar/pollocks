"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2574&auto=format&fit=crop",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-pollocks-black text-white">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt="Pollocks School Campus"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pollocks-navy/90 via-pollocks-black/60 to-transparent z-10" />
      </div>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12 flex justify-between items-start z-20 pointer-events-none">
         {/* Logo Area */}
         <div className="flex flex-col pointer-events-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-pollocks-blue rounded-xl flex items-center justify-center mb-2 shadow-lg">
               <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase opacity-80">Est. 1966</span>
         </div>

         {/* Top Right Text - Hidden on mobile */}
         <div className="hidden lg:block max-w-xs text-right mt-20 mr-8">
            <p className="text-base lg:text-lg font-light leading-relaxed text-white/90 font-sans">
               Best CBSE School in Visakhapatnam providing quality education from Pre-Nursery to 10th Standard.
            </p>
         </div>
      </div>

      {/* Bottom Content - Massive Title */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Admission Banner */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pollocks-blue/20 border border-pollocks-blue/30 text-pollocks-blue-light text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-pollocks-blue rounded-full animate-pulse"></span>
            Admissions Open for 2025-26
          </div>

          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] hero-title leading-[0.9] tracking-tighter text-white">
            Pollocks <br /> School
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light max-w-md lg:max-w-xl mt-4 sm:mt-6 mb-6 sm:mb-8">
            58 Years of Infinite Possibilities. Nurturing bright, caring, and confident individuals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto">
             <Link href="/admissions">
               <Button 
                  className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg tracking-wide bg-pollocks-blue text-white hover:bg-pollocks-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-none"
               >
                  Apply Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
               </Button>
             </Link>
             <Link href="/about">
               <Button 
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg tracking-wide border-white/30 text-white hover:bg-white hover:text-pollocks-black transition-all duration-300"
               >
                  Explore Campus
               </Button>
             </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side Vertical Indicator - Hidden on mobile */}
      <div className="absolute top-1/2 right-6 lg:right-12 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center z-20">
         <div className="h-16 lg:h-24 w-[1px] bg-white/30" />
         <span className="writing-vertical-rl text-[10px] lg:text-xs tracking-widest uppercase opacity-60 rotate-180">CBSE Affiliated</span>
      </div>
    </section>
  );
}
