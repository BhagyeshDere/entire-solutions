"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[#fafbfc] relative overflow-hidden font-sans border-b border-slate-100"
    >
      {/* Background elements remain unchanged */}
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

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
            
            <motion.div 
              className="inline-block relative px-5 py-1.5 select-none mb-4"
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

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1]">
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

            <motion.div 
              className="mt-5 h-[3px] bg-gradient-to-r from-[#a23aec] to-[#6366f1] rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: 64, transformOrigin: "left" }}
            />

            <div className="mt-6 space-y-4 text-slate-600 font-medium text-base sm:text-[17px] leading-relaxed tracking-wide max-w-xl">
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

          {/* RIGHT COLUMN: Updated max-width for larger image size */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2">
            <motion.div
              className="relative w-full max-w-[650px] aspect-[4/3] flex items-center justify-center overflow-visible group z-10"
              initial={{ opacity: 0, scale: 0.95, x: 35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:drop-shadow-[0_25px_60px_rgba(99,102,241,0.12)]">
                <Image
                  src="/about.png"
                  alt="Entire Solutions Brand Asset"
                  fill
                  sizes="(max-width: 1024px) 95vw, 60vw"
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