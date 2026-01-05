"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row bg-white">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-pollocks-sky flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
        <div className="relative z-10 w-full max-w-md space-y-12">
            <div>
                <h2 className="text-4xl font-serif text-pollocks-black mb-8">Get in Touch</h2>
                <div className="space-y-8">
                    <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-pollocks-blue transition-colors duration-300">
                            <Phone className="w-5 h-5 text-pollocks-black group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Call Us</h3>
                            <a href="tel:+919391401900" className="text-xl font-medium text-pollocks-black hover:text-pollocks-blue transition-colors">
                                +91 93914 01900
                            </a>
                            <p className="text-gray-600 mt-1 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Mon - Sat, 9am - 5pm
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-pollocks-blue transition-colors duration-300">
                            <Mail className="w-5 h-5 text-pollocks-black group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Email Us</h3>
                            <a href="mailto:info@pollocks.in" className="text-xl font-medium text-pollocks-black hover:text-pollocks-blue transition-colors">
                                info@pollocks.in
                            </a>
                            <p className="text-gray-600 mt-1">
                                admissions@pollocks.in
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-pollocks-blue transition-colors duration-300">
                            <MapPin className="w-5 h-5 text-pollocks-black group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Visit Us</h3>
                            <p className="text-xl font-medium text-pollocks-black leading-relaxed">
                                Visakhapatnam,<br />
                                Andhra Pradesh
                            </p>
                            <p className="text-gray-600 mt-1">
                                Multiple branches across the city
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                    <a 
                        href="https://www.instagram.com/pollocksschool/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-pollocks-black/10 flex items-center justify-center hover:bg-pollocks-blue hover:border-pollocks-blue hover:text-white transition-all duration-300"
                    >
                        <Instagram size={18} />
                    </a>
                    <a 
                        href="https://www.facebook.com/pollocksschool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-pollocks-black/10 flex items-center justify-center hover:bg-pollocks-blue hover:border-pollocks-blue hover:text-white transition-all duration-300"
                    >
                        <Facebook size={18} />
                    </a>
                    <a 
                        href="https://www.youtube.com/channel/UClblR3cACr1ryhxm3ZZFD8Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-pollocks-black/10 flex items-center justify-center hover:bg-pollocks-blue hover:border-pollocks-blue hover:text-white transition-all duration-300"
                    >
                        <Youtube size={18} />
                    </a>
                </div>
            </div>
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif text-white opacity-40 pointer-events-none select-none leading-none">
            PS
        </div>
      </div>

      {/* Right: Map */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-100">
        <div className="absolute inset-0 filter grayscale-[50%] contrast-[1.1] brightness-[0.95]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.683978666894!2d83.3364!3d17.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943b3a64c8a0d%3A0x123456789abcdef!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
            />
        </div>
        
        {/* Map Overlay for Aesthetic */}
        <div className="absolute inset-0 bg-pollocks-blue/10 pointer-events-none mix-blend-multiply" />
      </div>
    </div>
  );
}
