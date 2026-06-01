"use client";

import React from "react";

const facilities = [
  { title: "Laser Cutting", desc: "Full-scale metal fabrication and high-precision assembly services.", sector: "01" },
  { title: "CNC Bending", desc: "Advanced bending solutions ensuring consistency and precision.", sector: "02" },
  { title: "Profile Cutting", desc: "Efficient profile cutting for customized industrial applications.", sector: "03" },
  { title: "Welding Systems", desc: "Professional welding systems for durable fabrication.", sector: "04" },
  { title: "Drilling & Tap", desc: "Precision drilling for industrial-grade manufacturing.", sector: "05" },
  { title: "Painting Unit", desc: "High-quality finishing and protective coating solutions.", sector: "06" },
];

export default function Facilities() {
  return (
    // Horizontal Snap Container:
    // flex: aligns children horizontally
    // overflow-x-auto: allows horizontal scrolling
    // snap-x snap-mandatory: forces the scroll to "lock" at the start of each section
    <div className="flex h-screen w-full overflow-x-auto snap-x snap-mandatory scroll-smooth bg-[#0B0F1A] text-white">
      {facilities.map((item, index) => (
        <section
          key={index}
          // h-screen w-screen: ensures every slide is perfectly fullscreen
          // shrink-0: prevents the slide from being compressed
          // snap-start: identifies this as a "snap" point
          className="h-screen w-screen shrink-0 snap-start flex items-center justify-center px-6 md:px-16"
        >
          <div className="max-w-[90rem] w-full grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <span className="text-[#25b3fa] font-black uppercase tracking-[0.2em] text-sm">
                Division {item.sector}
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                {item.title}
              </h2>
              <p className="text-slate-400 text-lg max-w-md border-l-2 border-[#25b3fa] pl-6 py-2">
                {item.desc}
              </p>
              <button className="flex items-center gap-3 font-bold hover:text-[#25b3fa] transition-colors group">
                <span className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-[#25b3fa] transition-colors">
                  →
                </span>
                EXPLORE DIVISION
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-slate-900 rounded-[2rem] border border-slate-800 p-4 shadow-2xl">
              <div className="w-full h-full bg-slate-800 rounded-[1.5rem] overflow-hidden relative">
                {/* Replace this placeholder div with <Image /> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#a23aec]/20 to-[#25b3fa]/20" />
              </div>
              
              {/* Sector Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0B0F1A] rounded-full border border-slate-800 flex flex-col items-center justify-center shadow-xl">
                <span className="text-3xl font-black">{item.sector}</span>
                <span className="text-[10px] uppercase text-slate-500 tracking-widest">Sector</span>
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}