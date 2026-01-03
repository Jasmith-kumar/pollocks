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

  // Check if mobile/tablet (including tablets in portrait/landscape)
  useEffect(() => {
    const checkMobile = () => {
      // Consider mobile/tablet as anything below 1024px (lg breakpoint)
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
      <main className="bg-white selection:bg-pollocks-blue selection:text-white overflow-x-hidden max-w-full">
        {/* Hero */}
        <section className="h-screen w-full overflow-hidden">
          <Hero />
        </section>

        {/* Academic Director */}
        <section className="bg-pollocks-sky w-full overflow-hidden">
          <DirectorShowcase />
        </section>

        {/* Programs */}
        <section className="py-12 bg-white w-full overflow-hidden">
          <AcademicsGrid />
        </section>

        {/* Campus Gallery */}
        <section className="bg-pollocks-black w-full overflow-hidden">
          <CampusGallery />
        </section>

        {/* Activities */}
        <section className="w-full overflow-hidden">
          <ActivitiesShowcase />
        </section>

        {/* Admission Process */}
        <section className="py-12 bg-white w-full overflow-hidden">
          <AdmissionProcess />
        </section>

        {/* Video */}
        <section className="py-12 bg-pollocks-navy w-full overflow-hidden">
          <VideoShowcase />
        </section>

        {/* Admission Form */}
        <section className="py-12 bg-white w-full overflow-hidden">
          <AdmissionForm />
        </section>

        {/* Footer */}
        <section id="footer-section" className="bg-pollocks-black w-full overflow-hidden py-12">
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
        
        {/* Section 1: Hero */}
        <section className="w-screen min-w-screen h-screen shrink-0 relative overflow-hidden">
          <Hero />
        </section>

        {/* Section 2: Academic Director */}
        <section className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-sky overflow-hidden">
          <DirectorShowcase />
        </section>

        {/* Section 3: Programs/Academics */}
        <section className="w-screen min-w-screen h-screen shrink-0 bg-white overflow-hidden">
          <AcademicsGrid />
        </section>

        {/* Section 4: Campus Gallery */}
        <div id="gallery-section" className="h-screen shrink-0 min-w-screen overflow-hidden">
          <CampusGallery />
        </div>

        {/* Section 5: Co-Curricular Activities */}
        <section className="w-screen min-w-screen h-screen shrink-0 overflow-hidden">
          <ActivitiesShowcase />
        </section>

        {/* Section 6: Admission Process */}
        <section id="process-section" className="w-screen min-w-screen h-screen shrink-0 bg-white overflow-hidden">
          <AdmissionProcess />
        </section>

        {/* Section 7: Video */}
        <section className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-navy overflow-hidden">
          <VideoShowcase />
        </section>

        {/* Section 8: Admission Form */}
        <section className="w-screen min-w-screen h-screen shrink-0 bg-mesh-light overflow-hidden flex items-center justify-center">
          <AdmissionForm />
        </section>

        {/* Section 9: Footer */}
        <section id="footer-section" className="w-screen min-w-screen h-screen shrink-0 bg-pollocks-black overflow-hidden">
          <Footer />
        </section>
      </div>
      </div>
    </main>
  );
}
