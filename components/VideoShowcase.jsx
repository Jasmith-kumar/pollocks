"use client";

import { useState, useRef } from "react";
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
    <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center px-5 sm:px-8 lg:px-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header - Centered with better spacing */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-10">
          <span className="text-pollocks-blue uppercase tracking-[0.15em] text-xs font-medium block mb-3">
            Campus Life
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            The Detail
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            See how we bring learning to life with quality education and modern facilities.
          </p>
        </div>

        {/* Video Container - Centered */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
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
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-pollocks-blue rounded-full flex items-center justify-center shadow-lg shadow-pollocks-blue/50 hover:shadow-xl hover:scale-110 transition-all duration-300">
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1" />
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
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
        </div>
      </div>
    </div>
  );
}
