"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP horizontal scroll - only on desktop
  useEffect(() => {
    if (!mounted || isMobile) return;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (!container || !wrapper) return;

      const ctx = gsap.context(() => {
        gsap.to(wrapper, {
          x: () => -(wrapper.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => `+=${wrapper.scrollWidth}`,
            invalidateOnRefresh: true,
          }
        });
      }, container);

      containerRef.current._gsapContext = ctx;
    }, 100);

    return () => {
      clearTimeout(timer);
      if (containerRef.current?._gsapContext) {
        containerRef.current._gsapContext.revert();
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [mounted, isMobile]);

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

  const closeLightbox = () => setSelectedImage(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <main className="bg-white min-h-screen pt-16 md:pt-20 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </main>
    );
  }

  // Mobile/Tablet Layout
  if (isMobile) {
    return (
      <main className="bg-white min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-pollocks-navy text-white py-20 md:py-28 px-4 sm:px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=90&w=2000&auto=format&fit=crop" 
              alt="Gallery Hero" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-pollocks-blue uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3">
              Our Campus
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our world-class facilities and vibrant campus life.
            </p>
          </div>
        </section>

        {/* Category Filter - Sticky */}
        <section className="py-4 px-4 sm:px-6 border-b border-gray-100 sticky top-16 md:top-20 bg-white/95 backdrop-blur-md z-30">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category 
                    ? "bg-pollocks-blue text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Photo Grid - Mobile */}
        <section className="py-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    index % 5 === 0 ? "col-span-2" : ""
                  }`}
                >
                  <div className={`${index % 5 === 0 ? "aspect-video" : "aspect-square"}`}>
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-pollocks-blue text-[10px] uppercase tracking-wider mb-0.5">{image.category}</p>
                    <h3 className="text-white text-sm font-serif font-bold">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {currentIndex > 0 && (
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[80vh]"
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-pollocks-blue text-xs uppercase tracking-wider mb-1">{selectedImage.category}</p>
                <h3 className="text-white text-lg font-serif font-bold">{selectedImage.title}</h3>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        )}
      </main>
    );
  }

  // Desktop Layout - Horizontal Scroll
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-screen overflow-hidden">
        <div ref={wrapperRef} className="flex h-screen w-fit">
          
          {/* Hero Section */}
          <section className="w-screen h-screen shrink-0 relative bg-pollocks-navy flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=90&w=2000&auto=format&fit=crop" 
                alt="Gallery Hero" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-pollocks-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-pollocks-blue/30">
                <Camera className="w-8 h-8 text-pollocks-blue" />
              </div>
              <span className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4">
                Our Campus
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                Photo Gallery
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our world-class facilities and vibrant campus life through these moments.
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
              <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
              <ChevronRight className="w-5 h-5 animate-pulse" />
            </div>
          </section>

          {/* Gallery Grid Section with Filters */}
          <section className="w-[280vw] h-screen shrink-0 bg-gray-50 flex items-center px-12 pt-20">
            <div className="h-[85vh] w-full">
              {/* Header with Filters */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-serif font-bold text-pollocks-black">
                    {selectedCategory === "All" ? "All Photos" : selectedCategory}
                  </h2>
                  <span className="px-3 py-1 bg-pollocks-blue/10 text-pollocks-blue text-sm rounded-full">
                    {filteredImages.length} images
                  </span>
                </div>
                
                {/* Category Filters - Tab Style */}
                <div className="flex gap-1.5 bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryClick(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category 
                          ? "bg-pollocks-blue text-white shadow-md" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Images Grid */}
              <div className="grid grid-cols-6 auto-rows-fr gap-4 h-[calc(85vh-70px)]">
                {filteredImages.slice(0, 12).map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                      index === 0 ? "col-span-2 row-span-2" : 
                      index === 5 ? "col-span-2 row-span-2" : ""
                    }`}
                  >
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-pollocks-blue text-xs uppercase tracking-wider mb-1">{image.category}</p>
                      <h3 className="text-white text-base font-serif font-bold">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="w-screen h-screen shrink-0 bg-pollocks-black flex items-center justify-center">
            <Footer />
          </section>

        </div>
      </div>

      {/* Lightbox - Desktop */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            type="button"
            onClick={closeLightbox}
            className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {currentIndex > 0 && (
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < filteredImages.length - 1 && (
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[80vh]"
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <p className="text-pollocks-blue text-xs uppercase tracking-wider mb-1">{selectedImage.category}</p>
              <h3 className="text-white text-xl font-serif font-bold">{selectedImage.title}</h3>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
