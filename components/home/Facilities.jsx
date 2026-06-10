"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const facilities = [
  { title: "Laser Cutting", desc: "High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries.", sector: "01", img: "/images/facilities/laser-cutting1.jpg" },
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
    <section ref={targetRef} className="relative h-[600vh] bg-[#050816] font-body">
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
                    <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] text-[10px] font-heading">
                      Engineering Division
                    </span>
                    <div className="h-[1px] w-12 bg-white/10" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase leading-[1] font-heading">
                    {item.title}
                  </h2>
                  
                  <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed border-l border-fuchsia-600 pl-6 py-1 font-body">
                    {item.desc}
                  </p>
                </div>

                <div className="relative aspect-[16/10] bg-gradient-to-tr from-[#0a0d1a] to-[#1a1224] rounded-none border border-white/5 p-1 shadow-2xl">
                  <div className="w-full h-full bg-[#050816] overflow-hidden relative">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-[2000ms] ease-in-out hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#050816] border-2 border-fuchsia-600 flex flex-col items-center justify-center z-10">
                    <span className="text-2xl font-bold text-white font-heading">{item.sector}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute bottom-10 left-16 text-white font-heading text-[10px] uppercase tracking-widest">
          01 <span className="mx-2 text-fuchsia-600">—</span> 06
        </div>
      </div>
    </section>
  );
}