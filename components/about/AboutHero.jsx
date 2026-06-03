"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* Subtle Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-pink-600 rounded-full blur-[150px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[150px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
        {/* Pill-shaped badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="uppercase tracking-[0.2em] text-pink-400 font-bold text-[10px]">
            About Entire Solutions
          </span>
        </motion.div>

        {/* H1 - Fixed 'g' cropping by adding pb-2 and inline-flex wrapping */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.2] pb-2"
        >
          <div className="inline-block">Precision </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 inline-block md:ml-4 pb-2">
            Manufacturing
          </span>
        </motion.h1>

        {/* Text */}
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2"
        >
          Delivering advanced fabrication, laser cutting, welding, bending, 
          and engineering solutions for industrial and commercial sectors 
          <span className="text-cyan-400 font-bold"> since 2020.</span>
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
    </section>
  );
}