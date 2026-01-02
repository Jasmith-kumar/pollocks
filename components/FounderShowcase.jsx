"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DirectorShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-pollocks-sky text-pollocks-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square overflow-hidden rounded-2xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Academic Director - Rajini Chitra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-navy/40 to-transparent" />
            </div>
            {/* Floating Badge - Hidden on small screens */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-white p-4 lg:p-6 rounded-xl shadow-xl max-w-[180px] lg:max-w-[220px] hidden sm:block"
            >
              <p className="text-xs lg:text-sm font-medium text-pollocks-black">
                "To nurture bright, caring, enthusiastic, confident and well-balanced individuals."
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div ref={ref} className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-pollocks-blue font-semibold tracking-wider uppercase mb-2 lg:mb-4 text-sm"
            >
              Academic Director's Message
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 leading-tight font-serif"
            >
              Building Futures, <br className="hidden sm:block" /> One Child at a Time.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 lg:mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              At Pollocks School, we believe every child is unique and deserves an education that nurtures their individual potential. Our holistic approach combines academic excellence with character development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              With 58 years of experience in shaping young minds, we continue to innovate while staying true to our core values of integrity, excellence, and compassion.
            </motion.p>

            {/* Signature */}
            <div className="mx-auto lg:mx-0">
               <p className="text-xl lg:text-2xl font-serif text-pollocks-navy italic mb-1 lg:mb-2">Rajini Chitra</p>
               <p className="text-xs lg:text-sm text-gray-500">Academic Director, Pollocks School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
