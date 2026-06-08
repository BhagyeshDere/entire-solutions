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
  
  // Transform to move content horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]); 

  return (
    // section is the scrolling container, h-[600vh] to accommodate horizontal travel
    <section ref={targetRef} className="relative h-[600vh] bg-[#0A0D15] font-serif">
      {/* sticky component keeps the content fixed on screen while the parent scrolls
        h-screen/w-full to fill the viewport
      */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* motion.div transforms 'x' property, gap-0 for strict side-by-side positioning */}
        <motion.div style={{ x }} className="flex gap-0">
          {facilities.map((item, index) => (
            /* This div acts as the full 'card' that slides.
              h-screen/w-screen shrink-0 ensures only one is visible at a time
            */
            <div
              key={index}
              className="h-screen w-screen shrink-0 flex items-center justify-center px-6 md:px-16"
            >
              {/* Internal grid for text and image, responsive for lg breakpoint */}
              <div className="max-w-[90rem] w-full grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C5A059] font-bold uppercase tracking-[0.2em] text-[10px]">
                      Engineering Division
                    </span>
                    <div className="h-[1px] w-12 bg-slate-700" />
                  </div>
                  
                  {/* Reduced font size for a more refined, concise appearance */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase leading-[1]">
                    {item.title}
                  </h2>
                  
                  {/* Reduced body text size, changed border/text colors for high-contrast visibility */}
                  <p className="text-slate-200 text-sm md:text-base max-w-lg leading-relaxed border-l border-white/50 pl-6 py-1">
                    {item.desc}
                  </p>
                </div>

                {/* Image Container, changed border color */}
                <div className="relative aspect-[16/10] bg-[#11141f] rounded-none border border-white/10 p-1 shadow-2xl">
                  {/* Inner container to hold image overflow */}
                  <div className="w-full h-full bg-slate-800 overflow-hidden relative">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      //object-cover maintains aspect ratio, hover effect for advanced look
                      className="object-cover transition-transform duration-[2000ms] ease-in-out hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Floating Sector Marker, border/bg color updated for unique advanced look */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#0A0D15] border border-white/20 flex flex-col items-center justify-center z-10">
                    <span className="text-2xl font-bold text-white">{item.sector}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Progress Tracker, positioned fixed in bottom left, colors updated */}
        <div className="absolute bottom-10 left-16 text-slate-100 font-serif text-[10px] uppercase tracking-widest">
          01 <span className="mx-2">—</span> 06
        </div>
      </div>
    </section>
  );
}