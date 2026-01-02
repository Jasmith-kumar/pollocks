"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "1966", title: "Foundation", description: "Pollocks School established with a vision to provide quality education." },
  { year: "1980", title: "Expansion", description: "Opened second branch to serve growing community needs." },
  { year: "1995", title: "CBSE Affiliation", description: "Achieved CBSE affiliation, expanding academic offerings." },
  { year: "2005", title: "Infrastructure", description: "Modern campus with state-of-the-art facilities inaugurated." },
  { year: "2015", title: "Digital Era", description: "Introduced smart classrooms and digital learning platforms." },
  { year: "2024", title: "Excellence", description: "Continuing legacy with 4 branches and 5000+ students." },
];

export default function AboutTimeline() {
  return (
    <>
      {/* Desktop Horizontal Version */}
      <section className="hidden lg:flex w-fit h-screen bg-white items-center px-16 xl:px-24 shrink-0">
        <div>
          <div className="mb-12 xl:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl xl:text-5xl font-serif font-bold text-pollocks-black"
            >
              58 Years of Excellence
            </motion.h2>
          </div>

          <div className="flex items-start gap-8 xl:gap-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-52 xl:w-60 shrink-0 relative"
              >
                {/* Timeline Line */}
                <div className="absolute top-6 left-0 right-0 h-[2px] bg-pollocks-blue/20">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pollocks-blue to-pollocks-blue/20" />
                  )}
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-12 h-12 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-pollocks-blue/30 mb-6">
                  {index + 1}
                </div>

                <span className="text-pollocks-blue font-bold text-xl xl:text-2xl mb-2 block">{item.year}</span>
                <h3 className="text-xl xl:text-2xl font-serif font-bold text-pollocks-black mb-2 xl:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm xl:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="lg:hidden py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs sm:text-sm font-medium block mb-3">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pollocks-black">
              58 Years of Excellence
            </h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-pollocks-blue/20">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-pollocks-blue/20 ml-5 sm:ml-6 mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <span className="text-pollocks-blue font-bold text-sm mb-1 block">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-pollocks-black mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
