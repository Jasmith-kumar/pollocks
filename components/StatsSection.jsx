"use client";

import { useRef, useState, useEffect } from "react";
import { Users, GraduationCap, Trophy, Heart } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Dedicated Teachers", icon: Users },
  { value: 5000, suffix: "+", label: "Current Students", icon: GraduationCap },
  { value: 50, suffix: "+", label: "Awards Won", icon: Trophy },
  { value: 58, suffix: "", label: "Years of Excellence", icon: Heart },
];

function AnimatedCounter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value, duration]);
  
  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-0">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <span className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4">
          Our Impact
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
          Numbers That Speak
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-center border border-white/10 hover:border-pollocks-blue/50 transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pollocks-blue rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
