"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#fafbfc] relative overflow-hidden font-sans border-b border-slate-100"
    >
      {/* ── ADVANCED BRAND-THEMED ARCHITECTURAL MESH BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.07)" strokeWidth="1" />
              <circle cx="50" cy="50" r="1.2" fill="rgba(162, 58, 236, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-blueprint-grid)" />
        </svg>
      </div>

      {/* Atmospheric Soft Light Flares */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,179,250,0.05)_0%,transparent,70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(162,58,236,0.05)_0%,transparent,70%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* ── MASTER LAYOUT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: EDITORIAL NARRATIVE LAYER (6/12 Columns) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1 lg:pr-4">
            
            {/* Technical Mechanical Crosshair Badge */}
            <motion.div 
              className="inline-block relative px-5 py-1.5 select-none mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a23aec]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#25b3fa]" />
              
              <span className="text-slate-800 font-black text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text">
                About Entire Solutions
              </span>
            </motion.div>

            {/* Premium Two-Line Heading Block */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1] overflow-hidden whitespace-normal lg:whitespace-nowrap">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Precision Fabrication.
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-[#a23aec] via-[#6366f1] to-[#25b3fa] bg-clip-text text-transparent block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Reliable Solutions.
              </motion.span>
            </h2>

            {/* Architectural Accent Line */}
            <motion.div 
              className="mt-6 h-[3px] bg-gradient-to-r from-[#a23aec] to-[#6366f1] rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: 64, transformOrigin: "left" }}
            />

            {/* Narrative Editorial Block — Re-positioned into Clean Copy Breaks */}
            <div className="mt-8 space-y-5 text-slate-600 font-medium text-base sm:text-[17px] leading-relaxed tracking-wide max-w-xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Established in 2020, Entire Solutions is a premier manufacturing hub specializing in high-tolerance light and heavy fabrication, state-of-the-art fiber laser cutting, precision CNC sheet metal processing, and certified welding operations. 
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-500 font-normal"
              >
                Driven by advanced machinery and a rigid approach to quality, we serve high-demand B2B sectors including renewable energy, power grids, automotive chains, and infrastructure projects—consistently delivering precisely detailed industrial assets.
              </motion.p>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-SCALE DISPLAY CANVAS (6/12 Columns) */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2 px-2 sm:px-6 lg:px-0">
            
            {/* Ambient Background Glow Behind the Free Floating Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_65%)] pointer-events-none" />

            {/* Technical Target Crosshair Framework Underlying Image Layer */}
            <div className="absolute inset-0 max-w-[580px] aspect-[4/3] mx-auto pointer-events-none opacity-40 hidden sm:block">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-slate-300" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-slate-300" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-slate-300" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-slate-300" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-dashed bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-dashed bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />
            </div>

            <motion.div
              className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center overflow-visible group z-10"
              initial={{ opacity: 0, scale: 0.95, x: 35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* High-Fidelity Interactive Asset Layer with Maximized Scaling Layout */}
              <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:drop-shadow-[0_25px_60px_rgba(99,102,241,0.12)]">
                <Image
                  src="/about.png"
                  alt="Entire Solutions Brand Asset"
                  fill
                  sizes="(max-width: 1024px) 95vw, 50vw"
                  className="object-contain pointer-events-none drop-shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}