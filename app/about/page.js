"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DirectorShowcase from "@/components/FounderShowcase";
import VideoShowcase from "@/components/VideoShowcase";
import AboutTimeline from "@/components/AboutTimeline";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pollocks-navy overflow-hidden py-20 lg:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=90&w=2000&auto=format&fit=crop" 
          alt="About Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 via-pollocks-navy/40 to-pollocks-navy" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <span className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4">
          Est. 1966
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4 md:mb-6 leading-tight">
          Our Story
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
          58 years of nurturing young minds and building bright futures in Visakhapatnam.
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (!container || !wrapper) return;

      const ctx = gsap.context(() => {
        const getScrollAmount = () => {
          let scrollWidth = wrapper.scrollWidth;
          return -(scrollWidth - window.innerWidth);
        };

        gsap.to(wrapper, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: (progress) => {
                const totalScroll = wrapper.scrollWidth - window.innerWidth;
                const snapPoints = [];
                
                Array.from(wrapper.children).forEach((child) => {
                  const start = child.offsetLeft;
                  const width = child.offsetWidth;
                  
                  snapPoints.push(start / totalScroll);

                  if (width > window.innerWidth) {
                    let offset = window.innerWidth;
                    while (offset < width) {
                      const point = (start + offset) / totalScroll;
                      if (point <= 1) snapPoints.push(point);
                      offset += window.innerWidth;
                    }
                  }
                });
                
                snapPoints.push(1);
                
                const closest = snapPoints.reduce((prev, curr) => {
                  return Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev;
                });

                return closest;
              },
              duration: { min: 0.2, max: 0.6 },
              ease: "power1.inOut",
            },
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

  // Show loading state until mounted
  if (!mounted) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </main>
    );
  }

  // Mobile Layout - Improved Spacing
  if (isMobile) {
    return (
      <main className="bg-white selection:bg-pollocks-blue selection:text-white pt-16 md:pt-20">
        <div className="-mt-16 md:-mt-20">
          <AboutHero />
        </div>
        
        <section className="py-16 sm:py-20 md:py-24 bg-pollocks-sky">
          <DirectorShowcase />
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-white overflow-x-auto">
          <AboutTimeline />
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-pollocks-navy">
          <StatsSection />
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <TeamSection />
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-pollocks-navy">
          <VideoShowcase />
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <Testimonials />
        </section>

        <section className="bg-pollocks-black pt-16 pb-8">
          <Footer />
        </section>
      </main>
    );
  }

  // Desktop Layout
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-screen overflow-hidden">
        <div ref={wrapperRef} className="flex h-screen w-fit">
          
          <section className="w-screen h-screen shrink-0 relative bg-pollocks-navy flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=90&w=2000&auto=format&fit=crop" 
                alt="About Hero" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 via-transparent to-pollocks-navy" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <span className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4">
                Est. 1966
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4 leading-tight">
                Our Story
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto">
                58 years of nurturing young minds and building bright futures in Visakhapatnam.
              </p>
            </div>
          </section>

          <section className="w-screen h-screen shrink-0 flex items-center justify-center bg-pollocks-sky overflow-hidden pt-20">
            <div className="w-full h-full flex items-center overflow-y-auto lg:overflow-hidden">
              <DirectorShowcase />
            </div>
          </section>

          <section className="h-screen shrink-0 pt-20">
            <AboutTimeline />
          </section>

          <section className="w-screen h-screen shrink-0 bg-pollocks-navy flex items-center justify-center pt-20">
            <div className="w-full">
              <StatsSection />
            </div>
          </section>

          <section className="w-screen h-screen shrink-0 bg-white flex items-center justify-center overflow-hidden pt-20">
            <div className="w-full h-full flex items-center overflow-y-auto lg:overflow-hidden">
              <TeamSection />
            </div>
          </section>

          <section className="w-screen h-screen shrink-0 bg-pollocks-navy flex items-center justify-center px-8 pt-20">
            <div className="w-full">
              <VideoShowcase />
            </div>
          </section>

          <section className="w-screen h-screen shrink-0 bg-white flex items-center justify-center pt-20">
            <div className="w-full">
              <Testimonials />
            </div>
          </section>

          <section id="footer-section" className="w-screen h-screen shrink-0 bg-pollocks-black flex items-center justify-center">
            <Footer />
          </section>

        </div>
      </div>
    </main>
  );
}
