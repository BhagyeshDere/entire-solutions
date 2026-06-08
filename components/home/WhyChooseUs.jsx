"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Construction, Building2, TrendingUp, Users } from "lucide-react";

const reasons = [
  { 
    title: "Sharp Laser Cutting", 
    description: "Advanced fiber laser technology for micron-level accuracy and smooth edges.",
    icon: <Zap size={28} />
  },
  { 
    title: "Heavy-Duty Fabrication", 
    description: "Robust structural engineering built to withstand extreme industrial loads.",
    icon: <Construction size={28} />
  },
  { 
    title: "Modern Infrastructure", 
    description: "State-of-the-art machinery paired with expert artisan precision.",
    icon: <Building2 size={28} />
  },
  { 
    title: "Cost-Efficient", 
    description: "Optimized production workflows to maximize value without compromising quality.",
    icon: <TrendingUp size={28} />
  },
  { 
    title: "Trusted Partner", 
    description: "Decades of proven excellence in renewable energy and industrial sectors.",
    icon: <Users size={28} />
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/facilities/welding.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/50 text-blue-200 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight font-serif text-white">
            Precision Engineering. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Unrivaled Quality.
            </span>
          </h2>
        </div>

        {/* Dynamic Grid: Centered Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className={`cursor-pointer group relative p-8 rounded-3xl border transition-all duration-500 w-full md:w-[45%] lg:w-[30%] flex flex-col items-center text-center ${
                index === activeIndex 
                  ? "bg-[#0B0F1A]/90 border-blue-500 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)]" 
                  : "bg-[#0B0F1A]/50 border-white/10 hover:bg-[#0B0F1A]/70 hover:border-white/30"
              }`}
            >
              {/* Professional Lucide Icon Container */}
              <div className="text-blue-400 mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              
              <div className={`w-12 h-1 mb-6 rounded-full transition-all duration-500 ${index === activeIndex ? "bg-gradient-to-r from-purple-500 to-blue-500 w-20" : "bg-white/20"}`} />
              
              <h3 className="text-2xl font-semibold mb-4 font-serif text-white">
                {item.title}
              </h3>

              <AnimatePresence mode="wait">
                {(index === activeIndex) && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-slate-300 leading-relaxed text-base font-serif max-w-[280px]"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}