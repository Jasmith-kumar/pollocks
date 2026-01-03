"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    id: 1,
    title: "Modern Classrooms",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Science Laboratory",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Computer Lab",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Library",
    category: "Learning",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sports Ground",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Art Room",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Playground",
    category: "Recreation",
    image: "https://images.unsplash.com/photo-1564429238533-4cd545d0a365?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Assembly Hall",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Student Activities",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Outdoor Learning",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Music Room",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Reading Corner",
    category: "Learning",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = ["All", "Academic", "Labs", "Technology", "Learning", "Sports", "Creative", "Campus Life", "Events"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <main className="bg-white min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-pollocks-navy text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=90&w=2000&auto=format&fit=crop" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/80 to-pollocks-navy" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pollocks-blue uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4"
          >
            Our Campus
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6"
          >
            Photo Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore our world-class facilities and vibrant campus life through these moments.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 px-4 sm:px-6 border-b border-gray-100 sticky top-16 md:top-20 bg-white/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category 
                    ? "bg-pollocks-blue text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group ${
                    index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <div className={`aspect-square ${index % 5 === 0 ? "sm:aspect-square" : ""}`}>
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-pollocks-blue text-[10px] md:text-xs uppercase tracking-wider mb-1">{image.category}</p>
                    <h3 className="text-white text-sm md:text-base font-serif font-bold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Prev Button */}
            {currentIndex > 0 && (
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}

            {/* Next Button */}
            {currentIndex < filteredImages.length - 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[80vh]"
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-pollocks-blue text-xs uppercase tracking-wider mb-1">{selectedImage.category}</p>
                <h3 className="text-white text-lg md:text-xl font-serif font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </main>
  );
}
