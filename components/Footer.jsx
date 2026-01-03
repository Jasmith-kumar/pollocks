import { Button } from "./ui/Button";
import { Instagram, Facebook, Youtube, GraduationCap, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pollocks-black text-white w-full h-full px-6 md:px-10 lg:px-12">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center py-8">
        {/* Final CTA */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight font-serif leading-tight">
            Ready to transform <br className="hidden sm:block" /> your child's future?
          </h2>
          <Link href="/admissions">
            <Button variant="primary" size="lg" className="h-12 px-8 text-sm rounded-full shadow-lg bg-pollocks-blue hover:bg-pollocks-blue-dark">
              Book Your Consultation
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-pollocks-blue rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold font-serif">Pollocks School</h3>
              </div>
              <p className="text-gray-400 max-w-xs mb-4 text-sm">
                Established in 1966, providing quality CBSE education from Pre-Nursery to 10th Standard in Visakhapatnam.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <a href="tel:+919391401900" className="flex items-center gap-2 text-gray-400 hover:text-pollocks-blue transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91 93914 01900</span>
                </a>
                <a href="mailto:info@pollocks.in" className="flex items-center gap-2 text-gray-400 hover:text-pollocks-blue transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>info@pollocks.in</span>
                </a>
              </div>

              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm font-serif">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-pollocks-blue transition-colors">About Us</a></li>
                <li><a href="/academics" className="hover:text-pollocks-blue transition-colors">Academics</a></li>
                <li><a href="/gallery" className="hover:text-pollocks-blue transition-colors">Gallery</a></li>
                <li><a href="/admissions" className="hover:text-pollocks-blue transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm font-serif">Our Branches</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhurawada</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhura Nagar</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">MVP</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Railway New Colony</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-xs text-gray-500 gap-3">
            <p>© {new Date().getFullYear()} Pollocks School. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-pollocks-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pollocks-blue transition-colors">Terms of Use</a>
              <span className="text-gray-600">Built by <span className="text-pollocks-blue">Xscade</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
