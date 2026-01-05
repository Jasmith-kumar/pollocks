"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DirectorShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="w-full bg-pollocks-sky text-pollocks-black">
      {/* Mobile: Stack layout with proper spacing */}
      <div className="lg:hidden px-5 sm:px-8">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-pollocks-blue font-medium tracking-wider uppercase mb-3 text-xs block">
              The Visionary
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight font-serif text-pollocks-black mb-4">
              Building Futures, One Child at a Time.
            </h2>
          </div>

          {/* Image */}
          <div className="relative mb-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Academic Director - Rajini Chitra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-navy/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              At Pollocks School, we believe every child is unique and deserves an education that nurtures their individual potential. Our holistic approach combines academic excellence with character development.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              With 58 years of experience in shaping young minds, we continue to innovate while staying true to our core values of integrity, excellence, and compassion.
            </p>

            {/* Quote Box */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl mb-6 border border-white/50 shadow-sm">
              <p className="text-sm font-medium text-pollocks-black italic leading-relaxed">
                "To nurture bright, caring, enthusiastic, confident and well-balanced individuals."
              </p>
            </div>

            {/* Signature */}
            <div>
              <p className="text-lg font-serif text-pollocks-navy italic mb-1">Rajini Chitra</p>
              <p className="text-xs text-gray-500">Academic Director, Pollocks School</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Side by side layout */}
      <div className="hidden lg:flex h-full w-full items-center px-10 xl:px-12">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-h-[60vh] overflow-hidden rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Academic Director - Rajini Chitra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-navy/30 to-transparent" />
            </div>
            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-6 ios-glass p-5 rounded-2xl max-w-[200px]">
              <p className="text-xs font-medium text-pollocks-black italic leading-relaxed">
                "To nurture bright, caring, enthusiastic, confident and well-balanced individuals."
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div ref={ref} className="flex flex-col justify-center">
            <span 
              className={`text-pollocks-blue font-medium tracking-wider uppercase mb-2 text-xs transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              The Visionary
            </span>
            
            <h2 
              className={`text-3xl xl:text-4xl font-bold mb-4 leading-tight font-serif transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Building Futures, <br /> One Child at a Time.
            </h2>

            <p 
              className={`text-base text-gray-600 mb-4 leading-relaxed max-w-md transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              At Pollocks School, we believe every child is unique and deserves an education that nurtures their individual potential. Our holistic approach combines academic excellence with character development.
            </p>

            <p 
              className={`text-base text-gray-600 mb-6 leading-relaxed max-w-md transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              With 58 years of experience in shaping young minds, we continue to innovate while staying true to our core values of integrity, excellence, and compassion.
            </p>

            {/* Signature */}
            <div className={`transition-all duration-500 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-xl font-serif text-pollocks-navy italic mb-1">Rajini Chitra</p>
              <p className="text-xs text-gray-500">Academic Director, Pollocks School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
