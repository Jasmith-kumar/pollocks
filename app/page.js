"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import DirectorShowcase from "@/components/FounderShowcase";
import AcademicsGrid from "@/components/ServicesGrid";
import CampusGallery from "@/components/Portfolio";
import ActivitiesShowcase from "@/components/BeforeAfterGallery";
import AdmissionProcess from "@/components/ProcessTimeline";
import VideoShowcase from "@/components/VideoShowcase";
import AdmissionForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (!container || !wrapper) return;

      const getScrollAmount = () => {
          let scrollWidth = wrapper.scrollWidth;
          return -(scrollWidth - window.innerWidth);
      };

      const mainTween = gsap.to(wrapper, {
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
              let withinProcessSection = false;
              
              Array.from(wrapper.children).forEach((child) => {
                const start = child.offsetLeft;
                const width = child.offsetWidth;
                const end = start + width;
                
                const startProgress = start / totalScroll;
                const endProgress = end / totalScroll;

                snapPoints.push(startProgress);

                if (child.id === "process-section") {
                    if (progress > startProgress && progress < endProgress) {
                        withinProcessSection = true;
                    }
                } 
                else if (width > window.innerWidth) {
                  let offset = window.innerWidth;
                  while (offset < width) {
                    const point = (start + offset) / totalScroll;
                    if (point <= 1) snapPoints.push(point);
                    offset += window.innerWidth;
                  }
                }
              });
              
              snapPoints.push(1);

              if (withinProcessSection) {
                  return progress;
              }

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

      // Pin the Gallery Intro Panel
      gsap.to("#gallery-panel", {
        x: () => {
            const section = document.querySelector("#gallery-section");
            if (!section) return 0;
            return section.offsetWidth - window.innerWidth;
        },
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-section",
            containerAnimation: mainTween,
            start: "left left",
            end: "right right",
            scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Handle hash navigation on mount (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    const timer = setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const wrapper = document.querySelector("#horizontal-wrapper");
            const section = document.getElementById(targetId);

            if (wrapper && section) {
                const scrollWidth = wrapper.scrollWidth;
                const windowWidth = window.innerWidth;
                const offsetLeft = section.offsetLeft;
                
                const maxScroll = scrollWidth - windowWidth;
                if (maxScroll > 0) {
                    const progress = offsetLeft / maxScroll;
                    const scrollPos = progress * scrollWidth;
                    
                    window.scrollTo({
                        top: scrollPos,
                        behavior: "smooth"
                    });
                }
            }
        }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Mobile/Tablet: Vertical scroll layout
  if (isMobile) {
    return (
      <main className="bg-white selection:bg-pollocks-blue selection:text-white">
        {/* Hero */}
        <section className="min-h-screen">
          <Hero />
        </section>

        {/* Academic Director */}
        <section className="min-h-screen bg-pollocks-sky py-12">
          <DirectorShowcase />
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24 bg-white">
          <AcademicsGrid />
        </section>

        {/* Campus Gallery - Simplified for mobile */}
        <section className="py-16 md:py-24 bg-pollocks-navy">
          <CampusGallery />
        </section>

        {/* Activities */}
        <section className="min-h-screen">
          <ActivitiesShowcase />
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-24 bg-white">
          <AdmissionProcess />
        </section>

        {/* Video */}
        <section className="py-16 md:py-24 bg-pollocks-navy">
          <VideoShowcase />
        </section>

        {/* Admission Form */}
        <section className="py-16 md:py-24 bg-white">
          <AdmissionForm />
        </section>

        {/* Footer */}
        <section id="footer-section" className="bg-pollocks-black">
          <Footer />
        </section>
      </main>
    );
  }

  // Desktop: Horizontal scroll layout
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-full">
        <div ref={wrapperRef} id="horizontal-wrapper" className="flex h-screen w-fit">
        
        {/* Section 1: Hero */}
        <section className="w-screen h-screen shrink-0 relative">
          <Hero />
        </section>

        {/* Section 2: Academic Director */}
        <section className="w-screen h-screen shrink-0 bg-pollocks-sky flex items-center justify-center overflow-hidden">
           <div className="h-full w-full overflow-y-auto lg:overflow-hidden">
             <DirectorShowcase />
           </div>
        </section>

        {/* Section 3: Programs/Academics */}
        <section className="w-screen h-screen shrink-0 bg-white flex items-center justify-center overflow-hidden px-8">
             <div className="h-full w-full overflow-y-auto lg:overflow-hidden flex items-center">
                <AcademicsGrid />
             </div>
        </section>

        {/* Section 4: Campus Gallery */}
        <div className="h-screen shrink-0">
          <CampusGallery />
        </div>

        {/* Section 5: Co-Curricular Activities */}
        <div className="h-screen shrink-0">
          <ActivitiesShowcase />
        </div>

        {/* Section 6: Admission Process */}
        <div id="process-section" className="h-screen shrink-0">
          <AdmissionProcess />
        </div>

        {/* Section 7: Video */}
        <section className="w-screen h-screen shrink-0 bg-pollocks-navy flex items-center justify-center px-8">
            <div className="w-full h-full flex items-center justify-center">
                <VideoShowcase />
            </div>
        </section>

        {/* Section 8: Admission Form */}
        <section className="w-screen h-screen shrink-0 bg-white flex items-center justify-center px-8">
             <div className="h-full w-full overflow-y-auto flex items-center py-12">
                <AdmissionForm />
             </div>
        </section>

        {/* Section 9: Footer */}
        <section id="footer-section" className="w-screen h-screen shrink-0 bg-pollocks-black flex items-center justify-center">
             <div className="h-full w-full overflow-y-auto lg:overflow-hidden flex items-center">
                <Footer />
             </div>
        </section>
      </div>
      </div>
    </main>
  );
}
