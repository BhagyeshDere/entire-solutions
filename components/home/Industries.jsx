"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      icon: "⚡",
      title: "Renewable Energy",
      description: "Fabrication solutions for wind power fixtures, battery racks, BESS skids and renewable energy infrastructure.",
      bgImage: "/images/industries/renewable.jpg", // Ensure file is at public/images/renewable.jpg
    },
    {
      icon: "🔌",
      title: "Electrical & Power Industry",
      description: "Electrical panel boxes, transformer structures, enclosures and power distribution components.",
      bgImage: "/images/industries/electrical.jpg",
    },
    {
      icon: "⚙️",
      title: "Automotive & Engineering",
      description: "Precision fabricated components, sheet metal parts and engineering assemblies.",
      bgImage: "/images/industries/automotive.jpg",
    },
    {
      icon: "🏭",
      title: "Industrial Equipment",
      description: "Custom manufacturing solutions for machinery frames, skids, fixtures and heavy structures.",
      bgImage: "/images/industries/industrial.jpg",
    },
    {
      icon: "🏗️",
      title: "Construction & Infrastructure",
      description: "Structural fabrication, support systems and industrial steel solutions for infrastructure projects.",
      bgImage: "/images/industries/construction.jpg",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Structural Tech Background Mesh Accent Lineage */}
      <div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industries-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industries-blueprint-grid)" />
        </svg>
      </div>

      <div className="max-w-[96vw] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-left mb-16 border-l-4 border-purple-600 pl-4 md:pl-6">
          <motion.span 
            className="inline-block px-3 py-1 rounded-md bg-purple-50 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 border border-purple-100"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            Sectors Covered
          </motion.span>
          <motion.h2 
            className="mt-3 text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            Industries We Serve
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Controls */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {industries.map((industry, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative text-left w-full p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 outline-none ${
                    isActive
                      ? "bg-white border-purple-500/40 shadow-[0_10px_30px_rgba(147,51,234,0.06)]"
                      : "bg-white/40 backdrop-blur-sm border-slate-200 hover:border-slate-300 hover:bg-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSideLine"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-600 to-indigo-600 rounded-l-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20" 
                      : "bg-slate-100 text-slate-700 group-hover:scale-105"
                  }`}>
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-base font-bold uppercase tracking-tight transition-colors duration-300 ${
                      isActive ? "text-purple-700" : "text-slate-800"
                    }`}>
                      {industry.title}
                    </h3>
                  </div>
                  <div className={`text-slate-400 transition-transform duration-300 ${
                    isActive ? "translate-x-1 text-purple-500" : "group-hover:translate-x-0.5"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Viewport */}
          <div className="lg:col-span-7 h-full min-h-[380px] lg:min-h-[460px] relative">
            <div className="absolute inset-0 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
                  style={{ backgroundImage: `url(${industries[activeIndex].bgImage})` }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10">
                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs tracking-widest select-none z-20">
                SYS.REF_092
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="relative z-20 flex flex-col justify-between h-full space-y-8"
                >
                  <div className="max-w-xl text-left">
                    <div className="flex items-center gap-3 text-purple-300 font-mono text-xs uppercase tracking-[0.2em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      Live Operation Specifications
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {industries[activeIndex].title}
                    </h4>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 my-4 shadow-sm" />
                    <p className="text-slate-100 text-base md:text-lg font-semibold leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                      {industries[activeIndex].description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/20 flex flex-wrap gap-y-4 gap-x-8 items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">System Grade</span>
                      <span className="text-xs font-mono text-white font-bold tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Heavy Industrial / Custom</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Execution Mode</span>
                      <span className="text-xs font-mono text-purple-300 font-bold tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Precision Engineered</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}