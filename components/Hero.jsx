"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2574&auto=format&fit=crop",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-pollocks-black text-white">
      {/* Background Image Carousel - Using CSS transitions */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Pollocks School Campus ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-pollocks-black via-pollocks-black/70 to-pollocks-black/30 z-10" />
      </div>

      {/* Top Right Description */}
      <div className="absolute top-28 lg:top-32 right-6 lg:right-10 z-20 hidden lg:block max-w-[200px] xl:max-w-[240px]">
        <p className="text-sm xl:text-base font-light leading-relaxed text-white/70 text-right">
          Best CBSE School in Visakhapatnam providing quality education since 1966.
        </p>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Admission Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pollocks-blue/20 border border-pollocks-blue/30 text-pollocks-blue-light text-xs font-medium mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span>Admissions Open 2025-26</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] leading-[0.9] tracking-tight text-white mb-4">
            Building <br className="hidden sm:block" />
            <span className="text-pollocks-blue">Futures</span>
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-white/60 font-light max-w-md mb-6">
            58 Years of Nurturing Bright, Caring, and Confident Individuals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link href="/admissions">
              <Button className="rounded-full px-6 py-3 text-sm bg-pollocks-blue text-white hover:bg-pollocks-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl border-none">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-6 py-3 text-sm border-white/30 text-white hover:bg-white hover:text-pollocks-black transition-all duration-300">
                Explore Campus
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side Scroll Indicator */}
      <div className="absolute top-1/2 right-6 lg:right-10 -translate-y-1/2 hidden md:flex flex-col gap-3 items-center z-20">
        <div className="h-16 w-[1px] bg-white/30" />
        <span className="writing-vertical-rl text-[10px] tracking-[0.15em] uppercase text-white/50 rotate-180">Scroll</span>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 right-6 lg:right-10 flex gap-1.5 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-pollocks-blue w-6" : "bg-white/40 w-1.5 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
