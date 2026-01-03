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
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-6 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-2"
          >
            Campus Life
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-2"
          >
            The Detail
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm max-w-md mx-auto"
          >
            See how we bring learning to life with quality education.
          </motion.p>
        </div>

        {/* Video Container - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Video Placeholder */}
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
              className="w-16 h-16 md:w-20 md:h-20 bg-pollocks-blue rounded-full flex items-center justify-center shadow-lg shadow-pollocks-blue/50 group-hover:shadow-xl transition-shadow"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-8 md:h-8 text-white" />
              ) : (
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
              )}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
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
    </div>
  );
}
