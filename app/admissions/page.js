"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import ProcessTimeline from "@/components/ProcessTimeline";
import { FileText, CheckCircle, Calendar, Phone, MapPin, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const requirements = [
  "Birth Certificate (Original & Copy)",
  "Previous School Records/Transfer Certificate",
  "Passport Size Photos (4 copies)",
  "Aadhar Card Copy of Child and Parents",
  "Address Proof",
  "Medical Fitness Certificate"
];

const branches = [
  { name: "Madhurawada", address: "Main Campus, Madhurawada, Visakhapatnam", phone: "+91 93914 01900" },
  { name: "Madhura Nagar", address: "Madhura Nagar Branch, Visakhapatnam", phone: "+91 93914 01901" },
  { name: "MVP", address: "MVP Colony Branch, Visakhapatnam", phone: "+91 93914 01902" },
  { name: "Railway New Colony", address: "Railway New Colony Branch, Visakhapatnam", phone: "+91 93914 01903" },
];

export default function AdmissionsPage() {
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
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=90&w=2000&auto=format&fit=crop" 
              alt="Admissions Hero" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pollocks-blue/20 border border-pollocks-blue/30 text-pollocks-blue-light text-xs sm:text-sm font-medium mb-4"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Admissions Open 2025-26
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4"
            >
              Join Pollocks School
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Begin your child's journey towards a bright future with quality CBSE education.
            </motion.p>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pollocks-black mb-6">Required Documents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-pollocks-blue shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-left">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-12 md:py-16 bg-white overflow-x-auto">
          <ProcessTimeline />
        </section>

        {/* Branches */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-pollocks-sky">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-pollocks-black mb-8 text-center">Our Branches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {branches.map((branch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-pollocks-black mb-3">{branch.name}</h3>
                  <div className="flex items-start gap-2 mb-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-pollocks-blue" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone className="w-4 h-4 shrink-0 text-pollocks-blue" />
                    <a href={`tel:${branch.phone}`} className="hover:text-pollocks-blue transition-colors">{branch.phone}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Form */}
        <section className="py-12 md:py-16 bg-white">
          <LeadForm />
        </section>

        <Footer />
      </main>
    );
  }

  // Desktop Layout
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-screen overflow-hidden">
        <div ref={wrapperRef} className="flex h-screen w-fit">
          
          {/* Hero Section */}
          <section className="w-screen h-screen shrink-0 relative bg-pollocks-navy flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=90&w=2000&auto=format&fit=crop" 
                    alt="Admissions Hero" 
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pollocks-blue/20 border border-pollocks-blue/30 text-pollocks-blue-light text-sm font-medium mb-4"
                >
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Admissions Open 2025-26
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
                >
                    Join Pollocks School
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Begin your child's journey towards a bright future with quality CBSE education.
                </motion.p>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="w-screen h-screen shrink-0 bg-gradient-to-br from-pollocks-sky to-white flex items-center justify-center px-8 pt-20">
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-pollocks-blue rounded-xl flex items-center justify-center mb-6"
                >
                  <FileText className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black mb-4">Required Documents</h2>
                <p className="text-base text-gray-600 mb-6">Please keep the following documents ready before starting the admission process.</p>
              </div>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-pollocks-blue shrink-0" />
                    <span className="text-sm text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <div id="process-section" className="h-screen shrink-0 pt-20">
            <ProcessTimeline />
          </div>

          {/* Branches */}
          <section className="w-screen h-screen shrink-0 bg-pollocks-navy text-white flex items-center justify-center px-8 pt-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Our Branches</h2>
                <p className="text-base text-gray-400 max-w-2xl mx-auto">Visit any of our campuses across Visakhapatnam</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-pollocks-blue/50 transition-colors"
                  >
                    <h3 className="text-xl font-serif font-bold mb-3">{branch.name}</h3>
                    <div className="flex items-start gap-2 mb-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-pollocks-blue" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Phone className="w-5 h-5 shrink-0 text-pollocks-blue" />
                      <a href={`tel:${branch.phone}`} className="hover:text-pollocks-blue transition-colors">{branch.phone}</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Form */}
          <section className="w-screen h-screen shrink-0 bg-mesh-light flex items-center justify-center px-8">
            <LeadForm />
          </section>

          {/* Footer */}
          <section id="footer-section" className="w-screen h-screen shrink-0 bg-pollocks-black flex items-center justify-center">
            <Footer />
          </section>

        </div>
      </div>
    </main>
  );
}
