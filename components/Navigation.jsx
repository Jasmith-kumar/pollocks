"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Desktop horizontal scroll collapse logic
      if (window.innerWidth >= 1024) {
        const footerSection = document.querySelector("#footer-section");
        if (footerSection) {
          const rect = footerSection.getBoundingClientRect();
          if (rect.left < window.innerWidth * 0.5) {
            setIsCollapsed(true);
          } else {
            setIsCollapsed(false);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled || isMobileMenuOpen ? "bg-pollocks-blue" : "bg-pollocks-blue"
              }`}>
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className={`text-lg sm:text-xl font-serif font-bold transition-colors duration-300 ${
                scrolled || isMobileMenuOpen ? "text-pollocks-black" : "text-white"
              }`}>
                Pollocks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden lg:flex items-center gap-1 xl:gap-2"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-pollocks-blue text-white"
                          : scrolled
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Phone - Hidden on very small screens */}
              <a 
                href="tel:+919391401900" 
                className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-pollocks-blue" : "text-white/90 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">+91 93914 01900</span>
              </a>

              {/* CTA Button - Desktop */}
              <Link href="/admissions" className="hidden lg:block">
                <Button 
                  variant={scrolled ? "primary" : "white"}
                  size="sm"
                  className="rounded-full px-4 xl:px-6"
                >
                  Apply Now
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                  scrolled || isMobileMenuOpen
                    ? "text-pollocks-black hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl flex flex-col"
            >
              {/* Close area */}
              <div className="h-16 md:h-20" />

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                          pathname === item.href
                            ? "bg-pollocks-blue text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">Contact Us</p>
                  <a 
                    href="tel:+919391401900"
                    className="flex items-center gap-3 text-pollocks-black hover:text-pollocks-blue transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 93914 01900</span>
                  </a>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-gray-100">
                <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-4 bg-pollocks-blue text-white rounded-xl hover:bg-pollocks-blue-dark">
                    Apply for Admission
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
