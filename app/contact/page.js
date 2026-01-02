"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 93914 01900", href: "tel:+919391401900" },
  { icon: Mail, label: "Email", value: "info@pollocks.in", href: "mailto:info@pollocks.in" },
  { icon: MapPin, label: "Address", value: "Madhurawada, Visakhapatnam, Andhra Pradesh" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 4:00 PM" },
];

export default function ContactPage() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  // Contact Form Component
  const ContactForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl max-w-xl w-full"
    >
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-pollocks-black mb-2">Thank You!</h3>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-pollocks-black mb-6">Send us a message</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-pollocks-blue text-white rounded-xl hover:bg-pollocks-blue-dark transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </>
      )}
    </motion.form>
  );

  // Mobile Layout
  if (isMobile) {
    return (
      <main className="bg-white min-h-screen pt-16">
        {/* Hero */}
        <section className="bg-pollocks-navy text-white py-20 md:py-28 px-4 sm:px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=90&w=2000&auto=format&fit=crop" 
              alt="Contact Hero" 
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
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              We'd love to hear from you. Reach out for any queries about admissions or general information.
            </motion.p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 sm:p-6 bg-pollocks-sky/30 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-pollocks-blue rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-pollocks-black font-medium hover:text-pollocks-blue transition-colors text-sm sm:text-base">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-pollocks-black font-medium text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-80 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9936086044574!2d83.34689971477887!3d17.780673687817547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <Footer />
      </main>
    );
  }

  // Desktop Layout
  return (
    <main className="overscroll-none bg-white selection:bg-pollocks-blue selection:text-white overflow-hidden">
      <div ref={containerRef} className="w-full h-full">
        <div ref={wrapperRef} className="flex h-screen w-fit">
          
          {/* Hero Section */}
          <section className="w-screen h-screen shrink-0 relative bg-pollocks-navy flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=90&w=2000&auto=format&fit=crop" 
                    alt="Contact Hero" 
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
                    Get in Touch
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
                >
                    Contact Us
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                >
                    We'd love to hear from you. Reach out for any queries about admissions or general information.
                </motion.p>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="w-screen h-screen shrink-0 bg-gradient-to-br from-pollocks-sky to-white flex items-center justify-center px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
              {/* Info */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-pollocks-black mb-8">Let's Connect</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-5"
                    >
                      <div className="w-14 h-14 bg-pollocks-blue rounded-2xl flex items-center justify-center shrink-0">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg text-pollocks-black font-medium hover:text-pollocks-blue transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-pollocks-black font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </section>

          {/* Map Section */}
          <section className="w-screen h-screen shrink-0 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9936086044574!2d83.34689971477887!3d17.780673687817547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-sm z-10">
              <h3 className="text-xl font-serif font-bold text-pollocks-black mb-2">Main Campus</h3>
              <p className="text-gray-600">Madhurawada, Visakhapatnam, Andhra Pradesh 530048</p>
            </div>
          </section>

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
