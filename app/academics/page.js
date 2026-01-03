"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Check, BookOpen, Users, Trophy, FlaskConical } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const programsList = [
    {
        title: "Pre-Primary Education",
        description: "Our Pre-Primary program (Pre-Nursery to UKG) focuses on holistic development through play-based learning, building a strong foundation for future academic success.",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2000&auto=format&fit=crop",
        features: ["Play-Based Learning", "Motor Skills Development", "Social Skills", "Early Literacy"],
        icon: Users,
    },
    {
        title: "Primary School",
        description: "Classes 1-5 follow a comprehensive CBSE curriculum designed to develop conceptual understanding, critical thinking, and a love for learning.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
        features: ["CBSE Curriculum", "Smart Classrooms", "Activity-Based Learning", "Value Education"],
        icon: BookOpen,
    },
    {
        title: "Middle School",
        description: "Classes 6-8 bridge primary and secondary education, preparing students for higher academic challenges while developing life skills and leadership qualities.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
        features: ["Science Labs", "Computer Education", "Sports Training", "Personality Development"],
        icon: FlaskConical,
    },
    {
        title: "Secondary School",
        description: "Classes 9-10 focus on comprehensive CBSE board exam preparation while ensuring students develop the skills needed for higher education and beyond.",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2000&auto=format&fit=crop",
        features: ["Board Exam Prep", "Career Guidance", "Competitive Exams", "Research Projects"],
        icon: Trophy,
    }
];

function ProgramCard({ program, index }) {
    const Icon = program.icon;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="relative h-48 sm:h-56 md:h-64">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pollocks-blue rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-pollocks-black mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{program.description}</p>
                <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Check size={14} className="text-pollocks-blue shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function AcademicsPage() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (!container || !wrapper) return;

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
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile Layout
  if (isMobile) {
    return (
      <main className="bg-white min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-pollocks-navy text-white py-20 md:py-28 px-4 sm:px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=90&w=2000&auto=format&fit=crop" 
              alt="Academics Hero" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-pollocks-blue uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3"
            >
              CBSE Curriculum
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4"
            >
              Our Academics
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Quality education from Pre-Nursery to 10th Standard, nurturing young minds for a bright future.
            </motion.p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programsList.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/admissions" className="inline-flex items-center gap-2 bg-pollocks-blue text-white px-8 py-4 rounded-full font-medium hover:bg-pollocks-blue-dark transition-colors">
              Apply for Admission
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Desktop - Horizontal Scroll
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-screen overflow-hidden">
        <div ref={wrapperRef} className="flex h-screen w-fit">
          
          {/* Hero Section */}
          <section className="w-screen h-screen shrink-0 relative bg-pollocks-navy flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=90&w=2000&auto=format&fit=crop" 
                    alt="Academics Hero" 
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4"
                >
                    CBSE Curriculum
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
                >
                    Our Academics
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Quality education from Pre-Nursery to 10th Standard, nurturing young minds for a bright future.
                </motion.p>
            </div>
          </section>

          {/* Program Sections */}
          {programsList.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;
            
            return (
              <section key={index} className="w-screen h-screen shrink-0 bg-white overflow-hidden relative flex items-center px-8 lg:px-12 pt-20">
                <div className={`container mx-auto h-full flex items-center gap-8 lg:gap-16 ${isEven ? '' : 'flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="w-1/2 h-[60vh] relative">
                    <div className="absolute inset-0 bg-pollocks-sky/20 rounded-[2rem] transform rotate-3 scale-95" />
                    <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-2xl">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                      <div className="absolute -bottom-8 -right-8 text-[8rem] font-serif font-bold text-white/20 pointer-events-none">
                        0{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-1/2">
                    <div className="w-12 h-12 bg-pollocks-blue rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black mb-4">{program.title}</h2>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">{program.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-pollocks-blue/10 flex items-center justify-center">
                            <Check size={12} className="text-pollocks-blue" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/admissions" className="inline-flex items-center bg-pollocks-blue text-white px-8 py-4 rounded-full font-medium hover:bg-pollocks-blue-dark transition-colors shadow-lg">
                      Apply for Admission
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Footer */}
          <section id="footer-section" className="w-screen h-screen shrink-0 bg-pollocks-black flex items-center justify-center">
             <div className="w-full h-full flex items-center overflow-y-auto lg:overflow-hidden">
                <Footer />
             </div>
          </section>

        </div>
      </div>
    </main>
  );
}
