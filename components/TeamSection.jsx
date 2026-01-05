"use client";

const educators = [
  {
    name: "Rajini Chitra",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Leading Pollocks with a vision for holistic education.",
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "20+ years of experience in educational leadership.",
  },
  {
    name: "Anitha Rao",
    role: "Vice Principal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Expert in curriculum development and student welfare.",
  },
  {
    name: "Ramesh Babu",
    role: "Head of Sports",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "National level athlete, training champions.",
  },
];

export default function TeamSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-0">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <span className="text-pollocks-blue uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3 md:mb-4">
          Our Leadership
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pollocks-black">
          Meet Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {educators.map((educator, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl mb-4 aspect-[3/4]">
              <img 
                src={educator.image}
                alt={educator.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollocks-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white/90 text-sm">{educator.bio}</p>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-pollocks-black mb-1">{educator.name}</h3>
            <p className="text-pollocks-blue text-sm sm:text-base">{educator.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
