"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DirectorShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="h-full w-full bg-pollocks-sky text-pollocks-black overflow-hidden">
      <div className="h-full w-full flex items-center px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-h-[60vh] overflow-hidden rounded-2xl shadow-xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Academic Director - Rajini Chitra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-navy/30 to-transparent" />
            </div>
            {/* Floating Quote Badge with iOS Glass */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 ios-glass p-5 rounded-2xl max-w-[200px] hidden sm:block"
            >
              <p className="text-xs font-medium text-pollocks-black italic leading-relaxed">
                "To nurture bright, caring, enthusiastic, confident and well-balanced individuals."
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div ref={ref} className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-pollocks-blue font-medium tracking-wider uppercase mb-2 text-xs"
            >
              The Visionary
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif"
            >
              Building Futures, <br className="hidden sm:block" /> One Child at a Time.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm lg:text-base text-gray-600 mb-3 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              At Pollocks School, we believe every child is unique and deserves an education that nurtures their individual potential. Our holistic approach combines academic excellence with character development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm lg:text-base text-gray-600 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              With 58 years of experience in shaping young minds, we continue to innovate while staying true to our core values of integrity, excellence, and compassion.
            </motion.p>

            {/* Signature */}
            <div className="mx-auto lg:mx-0">
              <p className="text-lg lg:text-xl font-serif text-pollocks-navy italic mb-1">Rajini Chitra</p>
              <p className="text-xs text-gray-500">Academic Director, Pollocks School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
