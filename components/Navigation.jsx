"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      // Desktop: Collapse menu after scrolling past 80% of first viewport
      if (window.innerWidth >= 1024) {
        const scrollProgress = window.scrollY;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (scrollProgress > triggerPoint) {
          setIsMenuOpen(false);
        } else {
          setIsMenuOpen(true);
        }
      } else {
        setIsMenuOpen(true);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes & reset menu state
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMenuOpen(true);
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

  if (!mounted) return null;

  return (
    <>
      {/* Logo - Top Left (Always Visible with Glass Background) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-10 z-50"
      >
        <Link 
          href="/" 
          className="flex items-center group bg-white/80 backdrop-blur-xl rounded-full px-2 py-1.5 shadow-lg border border-white/50 hover:shadow-xl transition-all hover:bg-white/90"
        >
          <Image
            src="https://storage.googleapis.com/new_client_files/pollocks/Pollocks%20logo.png"
            alt="Pollocks School Logo"
            width={160}
            height={50}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            priority
          />
        </Link>
      </motion.div>

      {/* Desktop Menu - Top Right (Collapsible with Glass Effect) */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-10 z-50 hidden lg:block">
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.nav
              key="menu-open"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-1 bg-white/80 backdrop-blur-xl rounded-full px-1.5 py-1.5 shadow-lg border border-white/50"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-pollocks-blue to-pollocks-blue-dark text-white shadow-md"
                      : "text-gray-700 hover:text-pollocks-black hover:bg-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/admissions" className="ml-1">
                <Button className="rounded-full px-5 py-2 text-sm whitespace-nowrap bg-gradient-to-r from-pollocks-blue to-pollocks-blue-dark text-white hover:shadow-lg hover:scale-105 transition-all shadow-md">
                  Apply Now
                </Button>
              </Link>
            </motion.nav>
          ) : (
            <motion.button
              key="menu-closed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/50"
            >
              <Menu className="w-5 h-5 text-pollocks-black" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Button - Top Right (Glass Effect) */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition-all shadow-lg backdrop-blur-xl border ${
          isMobileMenuOpen
            ? "bg-pollocks-black text-white border-pollocks-black"
            : "bg-white/80 text-pollocks-black border-white/50"
        }`}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Menu Panel with Glass Effect */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col border-l border-white/20"
            >
              {/* Header spacing */}
              <div className="h-20" />

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="space-y-2">
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
                        className={`block px-5 py-3.5 text-lg font-medium rounded-2xl transition-all ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-pollocks-blue to-pollocks-blue-dark text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100/80"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-gray-100/50 bg-white/50">
                <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-4 bg-gradient-to-r from-pollocks-blue to-pollocks-blue-dark text-white rounded-2xl hover:shadow-lg transition-all text-base font-medium">
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
