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
      <section className="hidden lg:flex w-screen min-w-screen h-full bg-white items-center px-8 lg:px-10 shrink-0 overflow-hidden">
        <div className="w-full max-w-full">
          <div className="mb-8">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black"
            >
              58 Years of Excellence
            </motion.h2>
          </div>

          <div className="flex items-start gap-6 overflow-x-auto no-scrollbar">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="w-44 lg:w-48 shrink-0 relative"
              >
                {/* Timeline Line */}
                <div className="absolute top-5 left-0 right-0 h-[2px] bg-pollocks-blue/20">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pollocks-blue to-pollocks-blue/20" />
                  )}
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-10 h-10 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md mb-4">
                  {index + 1}
                </div>

                <span className="text-pollocks-blue font-bold text-base mb-1 block">{item.year}</span>
                <h3 className="text-base font-serif font-bold text-pollocks-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="lg:hidden py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-pollocks-black">
              58 Years of Excellence
            </h2>
          </div>

          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4"
              >
                <div className="shrink-0">
                  <div className="w-9 h-9 bg-pollocks-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-10 bg-pollocks-blue/20 ml-4 mt-2" />
                  )}
                </div>
                <div className="pt-0.5">
                  <span className="text-pollocks-blue font-bold text-sm mb-0.5 block">{item.year}</span>
                  <h3 className="text-base font-serif font-bold text-pollocks-black mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
