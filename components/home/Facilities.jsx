"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const facilities = [
  { title: "Laser Cutting", desc: "High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries.", sector: "01", img: "/images/facilities/laser-cutting.jpg" },
  { title: "CNC Bending", desc: "Automated multi-axis CNC bending cells ensuring consistent angles and structural integrity for high-volume production.", sector: "02", img: "/images/facilities/cnc-bending.jpg" },
  { title: "Profile Cutting", desc: "Advanced plasma and oxy-fuel profile cutting for heavy-duty structural components used in demanding industrial environments.", sector: "03", img: "/images/facilities/profile-cutting.jpg" },
  { title: "Welding Systems", desc: "Certified MIG/TIG welding operations focusing on structural strength, seamless finishes, and rigorous quality standards.", sector: "04", img: "/images/facilities/welding.jpg" },
  { title: "Drilling & Tap", desc: "Precision-engineered hole pattern, tapping, and countersinking services for specialized mechanical assemblies.", sector: "05", img: "/images/facilities/drilling.jpg" },
  { title: "Painting Unit", desc: "In-house industrial coating facility providing electrostatic powder coating and high-durability finishes for all climates.", sector: "06", img: "/images/facilities/painting.jpg" },
];

export default function Facilities() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]); 

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#05070d] font-sans">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-0">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="h-screen w-screen shrink-0 flex items-center justify-center px-6 md:px-16"
            >
              <div className="max-w-[90rem] w-full grid lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] text-[10px]">
                      Engineering Division
                    </span>
                    <div className="h-[1px] w-12 bg-white/20" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase leading-[1]">
                    {item.title}
                  </h2>
                  
                  <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed border-l border-[#a855f7] pl-6 py-1">
                    {item.desc}
                  </p>
                </div>

                {/* Updated border to reflect the gradient theme */}
                <div className="relative aspect-[16/10] bg-gradient-to-tr from-[#11141f] to-[#1e152e] rounded-none border border-white/10 p-1 shadow-2xl">
                  <div className="w-full h-full bg-slate-900 overflow-hidden relative">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-[2000ms] ease-in-out hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Floating Sector Marker with brand accent color */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#05070d] border-2 border-[#a855f7] flex flex-col items-center justify-center z-10">
                    <span className="text-2xl font-bold text-white">{item.sector}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute bottom-10 left-16 text-white font-serif text-[10px] uppercase tracking-widest">
          01 <span className="mx-2 text-[#a855f7]">—</span> 06
        </div>
      </div>
    </section>
  );
}