"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 93914 01900", href: "tel:+919391401900" },
  { icon: Mail, label: "Email", value: "info@pollocks.in", href: "mailto:info@pollocks.in" },
  { icon: MapPin, label: "Address", value: "Madhurawada, Visakhapatnam, Andhra Pradesh" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 4:00 PM" },
];

export default function ContactPage() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('+91 ');
        setMessage('');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <main className="bg-white min-h-screen pt-16 md:pt-20 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </main>
    );
  }

  // Mobile Layout - Improved Spacing
  if (isMobile) {
    return (
      <main className="bg-white min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-pollocks-navy text-white py-20 sm:py-24 md:py-28 px-5 sm:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=90&w=2000&auto=format&fit=crop" 
              alt="Contact Hero" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pollocks-navy/60 to-pollocks-navy" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-pollocks-blue uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-4">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for any queries about admissions or general information.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>

            {/* Contact Form - Mobile */}
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 shadow-xl p-5 sm:p-6 rounded-2xl max-w-md w-full">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pollocks-black mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-pollocks-black mb-5">Send us a message</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          id="name-mobile"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          id="email-mobile"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone-mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          id="phone-mobile"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                        <textarea
                          id="message-mobile"
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-pollocks-blue text-white rounded-xl hover:bg-pollocks-blue-dark transition-colors disabled:opacity-50 font-medium flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
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
              <span className="text-pollocks-blue uppercase tracking-[0.2em] text-sm font-medium block mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out for any queries about admissions or general information.
              </p>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="w-screen h-screen shrink-0 bg-gray-50 flex items-center justify-center px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
              {/* Info */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pollocks-black mb-6">Let's Connect</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-pollocks-blue rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-base text-pollocks-black font-medium hover:text-pollocks-blue transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base text-pollocks-black font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form - Desktop */}
              <div className="bg-white border border-gray-200 shadow-xl p-6 rounded-2xl max-w-md w-full">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pollocks-black mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-serif font-bold text-pollocks-black mb-5">Send us a message</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name-desktop" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          id="name-desktop"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-desktop" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          id="email-desktop"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone-desktop" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          id="phone-desktop"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all"
                          placeholder="XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="message-desktop" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                        <textarea
                          id="message-desktop"
                          required
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pollocks-blue focus:ring-2 focus:ring-pollocks-blue/20 focus:outline-none transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-pollocks-blue text-white rounded-xl hover:bg-pollocks-blue-dark transition-colors disabled:opacity-50 font-medium flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-screen h-screen shrink-0 relative pt-20">
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
            <div className="absolute top-24 left-8 bg-white p-5 rounded-xl shadow-xl max-w-sm z-10">
              <h3 className="text-lg font-serif font-bold text-pollocks-black mb-2">Main Campus</h3>
              <p className="text-gray-600 text-sm">Madhurawada, Visakhapatnam, Andhra Pradesh 530048</p>
            </div>
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
