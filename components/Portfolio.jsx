"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    title: "Modern Classrooms",
    category: "Learning Spaces",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Science Laboratory",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sports Ground",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Library",
    category: "Knowledge Hub",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Computer Lab",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CampusGallery() {
  return (
    <>
      {/* Desktop Version - Horizontal */}
      <section id="gallery-section" className="hidden lg:flex h-full w-fit min-w-screen items-center bg-pollocks-black text-white relative overflow-hidden">
        {/* Intro Panel */}
        <div id="gallery-panel" className="w-[320px] shrink-0 h-full flex flex-col justify-center px-10 border-r border-white/10 bg-pollocks-black z-20 relative overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-3"
          >
            Campus Life
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl xl:text-4xl font-serif font-bold mb-4 leading-tight"
          >
            Selected <br /> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-400 mb-6 leading-relaxed"
          >
            A curated collection of our campus facilities and learning environments.
          </motion.p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-pollocks-blue hover:text-pollocks-blue-light transition-colors text-sm font-medium group"
          >
            Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="flex gap-4 px-6 h-full items-center py-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group shrink-0"
            >
              <div className={`relative overflow-hidden rounded-xl ${index === 0 ? 'w-64 h-72' : 'w-52 h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-pollocks-blue text-xs uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="text-white font-serif text-base font-medium">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden py-12 bg-pollocks-black text-white px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2">Campus Life</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Selected Works</h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto">A curated collection of our campus facilities.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {galleryItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-pollocks-blue text-[10px] uppercase tracking-wider mb-0.5">{item.category}</p>
                <h3 className="text-white font-serif text-sm font-medium">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-pollocks-blue text-sm font-medium">
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
