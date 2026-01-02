import { Button } from "./ui/Button";
import { Instagram, Facebook, Youtube, GraduationCap, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pollocks-black text-white w-full px-6 md:px-12 py-16 md:py-0">
      <div className="max-w-6xl mx-auto flex flex-col justify-center min-h-[100vh] md:min-h-[80vh]">
        {/* Final CTA */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight font-serif leading-tight">
            Ready to join the <br className="hidden sm:block" /> Pollocks family?
          </h2>
          <Link href="/admissions">
            <Button variant="primary" size="lg" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-full shadow-glow bg-pollocks-blue hover:bg-pollocks-blue-dark">
                Apply for Admission
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-pollocks-blue rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-serif">Pollocks School</h3>
              </div>
              <p className="text-gray-400 max-w-sm mb-4 md:mb-6 text-base md:text-lg">
                Established in 1966, providing quality CBSE education from Pre-Nursery to 10th Standard in Visakhapatnam.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <a href="tel:+919391401900" className="flex items-center gap-3 text-gray-400 hover:text-pollocks-blue transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">+91 93914 01900</span>
                </a>
                <a href="mailto:info@pollocks.in" className="flex items-center gap-3 text-gray-400 hover:text-pollocks-blue transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">info@pollocks.in</span>
                </a>
              </div>

              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pollocks-blue transition-colors">
                  <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg font-serif">Quick Links</h4>
              <ul className="space-y-2 md:space-y-4 text-gray-400 text-sm md:text-lg">
                <li><a href="/about" className="hover:text-pollocks-blue transition-colors">About Us</a></li>
                <li><a href="/academics" className="hover:text-pollocks-blue transition-colors">Academics</a></li>
                <li><a href="/gallery" className="hover:text-pollocks-blue transition-colors">Gallery</a></li>
                <li><a href="/admissions" className="hover:text-pollocks-blue transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg font-serif">Our Branches</h4>
              <ul className="space-y-2 md:space-y-4 text-gray-400 text-sm md:text-lg">
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhurawada</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Madhura Nagar</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">MVP</span></li>
                <li><span className="hover:text-pollocks-blue transition-colors cursor-pointer">Railway New Colony</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/10 text-xs md:text-sm text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Pollocks School. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-pollocks-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pollocks-blue transition-colors">Terms of Use</a>
              <span className="text-gray-600">Powered by Xscade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
