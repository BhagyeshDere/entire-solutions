"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clients from "@/data/clients";

export default function Clients() {
  // Triple the list array length dynamically to accommodate seamless infinite scrolling loops
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-24 bg-[#fafbfc] relative overflow-hidden font-sans"
    >
      {/* ── ADVANCED BRAND-THEMED ARCHITECTURAL BLUEPRINT GRID ── */}
      <div className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="clients-blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.07)" strokeWidth="1" />
              <circle cx="50" cy="50" r="1.2" fill="rgba(162, 58, 236, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clients-blueprint-grid)" />
        </svg>
      </div>

      {/* Atmospheric Soft Light Flares */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,179,250,0.03)_0%,transparent,70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(162,58,236,0.03)_0%,transparent,70%)] pointer-events-none" />

      <div className="max-w-[92vw] mx-auto px-4 md:px-8 relative z-10">

        {/* ── ADVANCED BRAND-THEMED HEADING CONFIGURATION ── */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            className="inline-block relative px-5 py-1.5 select-none mb-5"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Minimal Technical Framing Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a23aec]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#25b3fa]" />
            
            <span className="text-slate-800 font-black text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text">
              Strategic Networks
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Major{" "}
            <span className="bg-gradient-to-r from-[#a23aec] via-[#6366f1] to-[#25b3fa] bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h2>

          <motion.p 
            className="mt-5 max-w-2xl mx-auto text-slate-500 text-sm sm:text-base font-medium leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We deploy precision fabrication assets and electrical solutions alongside the world's most demanding industrial and engineering enterprises.
          </motion.p>
        </div>

        {/* ── HIGH-PERFORMANCE SINGLE SLIDER TICKER ── */}
        <div className="relative w-full overflow-hidden py-6 mask-horizontal-fade select-none">
          
          {/* Subtle Ambient Mask Gradients covering outer track vectors */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#fafbfc] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#fafbfc] to-transparent z-20 pointer-events-none" />

          <motion.div 
            className="flex gap-6 w-max items-center"
            animate={{ x: [0, -2304] }} // Calibrated exact offsets to ensure seamless loop resets
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 38,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex-shrink-0 w-60 sm:w-64 aspect-[16/10] bg-white border border-slate-200/75 rounded-xl flex items-center justify-center p-9 transition-all duration-500 ease-out shadow-[0_4px_20px_rgba(241,245,249,0.6)] hover:shadow-[0_24px_45px_rgba(99,102,241,0.07)] hover:border-[#6366f1]/40 hover:scale-[1.02] origin-center overflow-hidden"
              >
                {/* Brand Identity Neon Accent Inbound Flares */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,58,236,0.02)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Laser Linear Calibration Guides */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#25b3fa] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#a23aec] to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out delay-75" />

                {/* Precision Micro Corner Dots */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-slate-300 rounded-full opacity-60 group-hover:bg-[#6366f1] group-hover:opacity-100 transition-colors" />
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-slate-300 rounded-full opacity-60 group-hover:bg-[#a23aec] group-hover:opacity-100 transition-colors" />

                {/* Unified Bottom Anchor Ribbon */}
                <div className="absolute inset-x-0 bottom-0 h-[2.5px] bg-gradient-to-r from-[#a23aec] via-[#6366f1] to-[#25b3fa] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Optimized High-Contrast Full-Color Logo Viewport */}
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-400 ease-out group-hover:scale-105">
                  <Image
                    src={client.image}
                    alt="Strategic Enterprise Asset"
                    fill
                    sizes="240px"
                    className="object-contain pointer-events-none"
                    priority={idx < 6}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Global CSS Style Layer Injector to enforce hardware-accelerated composition bounds */}
      <style jsx global>{`
        .mask-horizontal-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}</style>

    </section>
  );
}