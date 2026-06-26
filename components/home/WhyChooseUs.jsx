"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="why-us" className="relative py-24 overflow-hidden font-body">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/facilities/welding.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/50 text-blue-200 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 font-heading">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white font-heading">
            Precision Engineering. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Unrivaled Quality.
            </span>
          </h2>
        </div>

        {/* Dynamic Grid: Centered Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/10 bg-[#0B0F1A]/50 hover:bg-[#0B0F1A]/70 hover:border-white/30 transition-all duration-500 w-full md:w-[45%] lg:w-[30%] flex flex-col items-center text-center"
            >
              {/* Professional Lucide Icon Container */}
              <div className="text-blue-400 mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              
              <div className="w-12 h-1 mb-6 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:w-20" />
              
              <h3 className="text-2xl font-semibold mb-4 text-white font-heading">
                {item.title}
              </h3>

              {/* Description is now permanently visible */}
              <p className="text-slate-300 leading-relaxed text-base max-w-[280px] font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}