"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const facilities = [
  { title: "Laser Cutting", desc: "High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries.", sector: "01", img: "/images/facilities/laser-cutting.jpg" },
  { title: "CNC Bending", desc: "Automated multi-axis CNC bending cells ensuring consistent angles and structural integrity for high-volume production.", sector: "02", img: "/images/facilities/cnc-bending.jpg" },
  { title: "Profile Cutting", desc: "Advanced plasma and oxy-fuel profile cutting for heavy-duty structural components used in demanding industrial environments.", sector: "03", img: "/images/facilities/profile-cutting.jpg" },
  { title: "Welding Systems", desc: "Certified MIG/TIG welding operations focusing on structural strength, seamless finishes, and rigorous quality standards.", sector: "04", img: "/images/facilities/welding.jpg" },
  { title: "Drilling & Tap", desc: "Precision-engineered hole patterns, tapping, and countersinking services for specialized mechanical assemblies.", sector: "05", img: "/images/facilities/drilling.jpg" },
  { title: "Painting Unit", desc: "In-house industrial coating facility providing electrostatic powder coating and high-durability finishes for all climates.", sector: "06", img: "/images/facilities/painting.jpg" },
];

export default function Facilities() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Maps vertical scroll to horizontal slider movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]); 

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#0B0F1A]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-0">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="h-screen w-screen shrink-0 flex items-center justify-center px-6 md:px-16"
            >
              <div className="max-w-[90rem] w-full grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[#25b3fa] font-black uppercase tracking-[0.2em] text-sm">
                      Engineering Division
                    </span>
                    <div className="h-[1px] w-12 bg-slate-700" />
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                    {item.title}
                  </h2>
                  
                  <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-[#25b3fa] pl-8 py-1">
                    {item.desc}
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-[#1a1f2e] rounded-[2rem] border border-slate-800 p-2 shadow-2xl">
                  <div className="w-full h-full bg-slate-800 rounded-[1.5rem] overflow-hidden relative">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-[2000ms] ease-in-out hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F1A]/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Sector Marker */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0B0F1A] rounded-full border border-slate-800 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(37,179,250,0.15)] z-10">
                    <span className="text-4xl font-black text-white">{item.sector}</span>
                    <span className="text-[10px] uppercase text-slate-500 tracking-[0.2em]">Asset</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Progress Tracker */}
        <div className="absolute bottom-10 left-16 text-slate-600 font-mono text-sm">
          01 <span className="mx-2 text-white/20">—</span> 06
        </div>
      </div>
    </section>
  );
}