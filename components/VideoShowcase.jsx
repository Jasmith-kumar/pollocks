"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-8 md:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4"
        >
          Campus Life
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 md:mb-4"
        >
          A Glimpse of Pollocks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
        >
          Experience the vibrant learning environment and joyful moments at our campus.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group"
      >
        {/* Video Placeholder - Replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-pollocks-blue/20 to-pollocks-navy">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop"
            alt="Campus Life"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Play Button Overlay */}
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pollocks-blue rounded-full flex items-center justify-center shadow-lg shadow-pollocks-blue/50 group-hover:shadow-xl group-hover:shadow-pollocks-blue/60 transition-shadow"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-1" />
            )}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); toggleMute(); }}
            className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Hidden Video Element */}
        <video
          ref={videoRef}
          className="hidden"
          muted={isMuted}
          loop
          playsInline
        >
          <source src="/videos/campus-tour.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
