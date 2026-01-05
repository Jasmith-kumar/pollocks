import { Button } from "./ui/Button";
import { Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pollocks-black text-white w-full h-full lg:h-screen px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center py-12 sm:py-16 lg:py-8">
        {/* Final CTA - Compact for desktop */}
        <div className="mb-8 lg:mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3 lg:mb-2 tracking-tight font-serif leading-tight">
            Ready to transform <br className="hidden sm:block" /> your child's future?
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4 lg:mb-3">
            Join the Pollocks family and give your child the education they deserve.
          </p>
          <Link href="/admissions">
            <Button variant="primary" size="lg" className="h-10 lg:h-11 px-6 lg:px-8 text-sm rounded-full shadow-lg bg-pollocks-blue hover:bg-pollocks-blue-dark">
              Book Your Consultation
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/10 pt-6 lg:pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-6 lg:mb-5">
            {/* Brand & Contact */}
            <div className="sm:col-span-2">
              <div className="mb-3 lg:mb-2">
                <Link href="/" className="inline-block bg-white rounded-xl p-2 hover:shadow-lg transition-shadow">
                  <Image
                    src="https://storage.googleapis.com/new_client_files/pollocks/Pollocks%20logo.png"
                    alt="Pollocks School Logo"
                    width={180}
                    height={56}
                    className="h-9 lg:h-10 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-gray-400 max-w-xs mb-3 lg:mb-2 text-sm leading-relaxed">
                Established in 1966, providing quality CBSE education from Pre-Nursery to 10th Standard in Visakhapatnam.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-3 lg:mb-2">
                <a href="tel:+919391401900" className="flex items-center gap-2 text-gray-400 hover:text-pollocks-blue transition-colors text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 93914 01900</span>
                </a>
                <a href="mailto:info@pollocks.in" className="flex items-center gap-2 text-gray-400 hover:text-pollocks-blue transition-colors text-sm">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@pollocks.in</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                <a href="https://www.instagram.com/pollocksschool/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/pollocksschool" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/channel/UClblR3cACr1ryhxm3ZZFD8Q" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-3 lg:mb-2 text-sm font-serif">Quick Links</h4>
              <ul className="space-y-2 lg:space-y-1.5 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-pollocks-blue transition-colors">About Us</a></li>
                <li><a href="/academics" className="hover:text-pollocks-blue transition-colors">Academics</a></li>
                <li><a href="/gallery" className="hover:text-pollocks-blue transition-colors">Gallery</a></li>
                <li><a href="/admissions" className="hover:text-pollocks-blue transition-colors">Admissions</a></li>
                <li><a href="/contact" className="hover:text-pollocks-blue transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Branches */}
            <div>
              <h4 className="font-bold mb-3 lg:mb-2 text-sm font-serif">Our Branches</h4>
              <ul className="space-y-2 lg:space-y-1.5 text-gray-400 text-sm">
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhurawada</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhura Nagar</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">MVP</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Railway New Colony</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-5 lg:pt-4 border-t border-white/10 text-xs text-gray-500 gap-3">
            <p>© {new Date().getFullYear()} Pollocks School. All rights reserved.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a href="/privacy-policy" className="hover:text-pollocks-blue transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-pollocks-blue transition-colors">Terms of Use</a>
              <a href="https://www.xscade.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pollocks-blue transition-colors">
                Built by <span className="text-pollocks-blue">Xscade</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
