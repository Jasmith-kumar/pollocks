"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const facilities = [
  {
    id: 1,
    title: "Modern Classrooms",
    category: "Academic Facilities",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2653&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Science Labs",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2653&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Library",
    category: "Learning Resources",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sports Ground",
    category: "Sports & Recreation",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2674&auto=format&fit=crop",
  },
];

export default function CampusGallery() {
  return (
    <>
      {/* Desktop Version - Horizontal */}
      <section id="gallery-section" className="hidden lg:flex h-screen w-fit items-center bg-pollocks-black text-white relative">
        {/* Intro Panel */}
        <div id="gallery-panel" className="w-[40vw] shrink-0 h-full flex flex-col justify-center px-12 xl:px-24 border-r border-white/10 bg-pollocks-black z-20 relative overflow-hidden">
          <h2 className="text-4xl xl:text-6xl font-serif font-bold mb-4 xl:mb-6 leading-tight relative z-10">
              Our <br/> Campus
          </h2>
          <p className="text-white/60 text-base xl:text-xl max-w-md mb-6 xl:mb-8 relative z-10">
            World-class facilities designed to inspire learning and growth.
          </p>
          
          {/* Pollocks Brand Watermark */}
          <div className="absolute -bottom-10 -right-10 text-[10rem] xl:text-[12rem] font-serif text-white opacity-5 pointer-events-none select-none leading-none z-0">
              PS
          </div>
        </div>

        {/* Facilities */}
        <div className="flex h-full items-center">
          {facilities.map((facility) => (
            <div key={facility.id} className="relative w-[45vw] xl:w-[40vw] h-full border-r border-white/10 group shrink-0 overflow-hidden">
               <div className="block w-full h-full">
                 <div className="absolute inset-0">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                 </div>
                 
                 <div className="absolute bottom-0 left-0 p-8 xl:p-16 w-full z-10">
                    <p className="text-pollocks-blue uppercase tracking-widest text-xs xl:text-sm mb-2 xl:mb-3 font-medium">{facility.category}</p>
                    <h3 className="text-2xl xl:text-4xl font-serif font-bold">{facility.title}</h3>
                 </div>
               </div>
            </div>
          ))}
          
          {/* View All CTA */}
          <div className="w-[35vw] xl:w-[30vw] shrink-0 h-full flex items-center justify-center bg-pollocks-blue cursor-pointer">
              <Link href="/gallery" className="text-center text-white w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl xl:text-3xl font-serif font-bold mb-4 xl:mb-6">View Full Gallery</h3>
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto hover:bg-white hover:text-pollocks-blue transition-all">
                      <ArrowRight className="w-6 h-6 xl:w-8 xl:h-8" />
                  </div>
              </Link>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version - Grid */}
      <div className="lg:hidden py-12 md:py-16 px-4 sm:px-6 text-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4">Our Campus</h2>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            World-class facilities designed to inspire learning and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <p className="text-pollocks-blue uppercase tracking-widest text-[10px] sm:text-xs mb-1 font-medium">{facility.category}</p>
                <h3 className="text-lg sm:text-xl font-serif font-bold">{facility.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link href="/gallery" className="inline-flex items-center gap-2 bg-pollocks-blue text-white px-6 py-3 rounded-full font-medium hover:bg-pollocks-blue-dark transition-colors">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
