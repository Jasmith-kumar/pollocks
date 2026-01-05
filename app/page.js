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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
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

        const gallerySection = document.querySelector("#gallery-section");
        if (gallerySection) {
          gsap.to("#gallery-panel", {
            x: () => gallerySection.offsetWidth - window.innerWidth,
            ease: "none",
            scrollTrigger: {
              trigger: "#gallery-section",
              containerAnimation: mainTween,
              start: "left left",
              end: "right right",
              scrub: true,
            }
          });
        }
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

  useEffect(() => {
    if (!mounted || isMobile) return;
    
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
  }, [mounted, isMobile]);

  if (!mounted) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </main>
    );
  }

  // Mobile/Tablet: Vertical scroll layout with improved spacing
  if (isMobile) {
    return (
      <main className="bg-white selection:bg-pollocks-blue selection:text-white overflow-x-hidden">
        {/* Hero - Full Screen */}
        <section className="h-screen w-full">
          <Hero />
        </section>

        {/* Director Section */}
        <section className="py-16 sm:py-20 bg-pollocks-sky w-full">
          <DirectorShowcase />
        </section>

        {/* Academics Grid */}
        <section className="py-16 sm:py-20 bg-white w-full">
          <AcademicsGrid />
        </section>

        {/* Campus Gallery */}
        <section className="py-16 sm:py-20 bg-pollocks-black w-full">
          <CampusGallery />
        </section>

        {/* Activities - Component handles its own padding */}
        <section className="w-full">
          <ActivitiesShowcase />
        </section>

        {/* Admission Process */}
        <section className="py-16 sm:py-20 bg-white w-full">
          <AdmissionProcess />
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 bg-pollocks-navy w-full">
          <VideoShowcase />
        </section>

        {/* Admission Form */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-pollocks-sky/30 w-full">
          <AdmissionForm />
        </section>

        {/* Footer */}
        <section id="footer-section" className="bg-pollocks-black w-full">
          <Footer />
        </section>
      </main>
    );
  }

  // Desktop: Horizontal scroll layout
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-screen overflow-hidden">
        <div ref={wrapperRef} id="horizontal-wrapper" className="flex h-screen w-fit">
        
          <section className="w-screen min-w-screen h-screen shrink-0 relative overflow-hidden">
            <Hero />
          </section>

          <section className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-sky overflow-hidden">
            <DirectorShowcase />
          </section>

          <section className="w-screen min-w-screen h-screen shrink-0 bg-white overflow-hidden">
            <AcademicsGrid />
          </section>

          <div id="gallery-section" className="h-screen shrink-0 min-w-screen overflow-hidden">
            <CampusGallery />
          </div>

          <section className="w-screen min-w-screen h-screen shrink-0 overflow-hidden">
            <ActivitiesShowcase />
          </section>

          <section id="process-section" className="w-screen min-w-screen h-screen shrink-0 bg-white overflow-hidden">
            <AdmissionProcess />
          </section>

          <section className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-navy overflow-hidden">
            <VideoShowcase />
          </section>

          <section className="w-screen min-w-screen h-screen shrink-0 bg-mesh-light overflow-hidden flex items-center justify-center">
            <AdmissionForm />
          </section>

          <section id="footer-section" className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-black overflow-hidden">
            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
}
