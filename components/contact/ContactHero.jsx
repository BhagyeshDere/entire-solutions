"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div className="relative bg-[#fcfcfd] pt-32 pb-24 px-6 overflow-hidden border-b border-slate-200">
      {/* Background Layer with enhanced visibility */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a23aec]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#25b3fa]/20 rounded-full blur-[140px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <span className="text-[#a23aec] font-bold tracking-[0.3em] uppercase text-xs mb-6 block drop-shadow-sm">
          Let's connect
        </span>
        
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
          Get In <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a23aec] via-[#8b5cf6] to-[#25b3fa]">
            Touch
          </span>
        </h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-gradient-to-r from-[#a23aec] to-[#25b3fa] mx-auto mt-12 rounded-full shadow-lg shadow-[#a23aec]/30"
        />
      </motion.div>
    </div>
  );
}