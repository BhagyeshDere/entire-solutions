"use client";

import { useState } from "react";
import Image from "next/image";
import services from "@/data/services";

export default function Services() {
  // Removed TypeScript type parameters for native .jsx execution
  const [activeRow1, setActiveRow1] = useState(0);
  const [activeRow2, setActiveRow2] = useState(3);

  const row1Services = services.slice(0, 3);
  const row2Services = services.slice(3, 6);

  return (
    <section id="services" className="py-24 bg-slate-50/75 text-slate-900 selection:bg-purple-600/10 relative overflow-hidden">
      
      {/* Structural Tech Background Mesh Accent Matched to Branding Palette */}
      <div className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-blueprint-grid)" />
        </svg>
      </div>

      {/* Finely adjusted the padding from px-2 sm:px-4 to px-3 md:px-5 for clean edge spacing */}
      <div className="max-w-[96vw] mx-auto px-3 md:px-5 relative z-10">
        
        {/* Left-Aligned Premium Header Section Matched with Color Theme (Ring Structure / Geometric block removed) */}
        <div className="text-left mb-16 border-l-4 border-purple-600 pl-4 md:pl-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-slate-900 leading-none">
              Our Services
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] font-black text-purple-600/80 mt-1.5 block">
              Precision Systems & Custom Engineering
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Rows Layout */}
        <div className="flex flex-col gap-4">
          
          {/* Row 1 (Items 1-3) */}
          <div className="flex flex-col lg:flex-row gap-3 w-full h-[300px] lg:h-[380px]">
            {row1Services.map((service, idx) => {
              const isExpanded = activeRow1 === idx;
              return (
                <div
                  key={service.id || idx}
                  onClick={() => setActiveRow1(idx)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out border border-slate-200/60 shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-slate-300/40 ${
                    isExpanded ? "lg:flex-[2.5] flex-[3]" : "lg:flex-1 flex-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-700 brightness-[0.85] hover:brightness-[0.95] scale-105"
                  />
                  {/* Reduced Dark Gradient Overlay for Maximum Image Visibility */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="overflow-hidden text-sm md:text-base text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 (Items 4-6) */}
          <div className="flex flex-col lg:flex-row gap-3 w-full h-[300px] lg:h-[380px]">
            {row2Services.map((service, idx) => {
              const realIndex = idx + 3;
              const isExpanded = activeRow2 === realIndex;
              return (
                <div
                  key={service.id || realIndex}
                  onClick={() => setActiveRow2(realIndex)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out border border-slate-200/60 shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-slate-300/40 ${
                    isExpanded ? "lg:flex-[2.5] flex-[3]" : "lg:flex-1 flex-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-700 brightness-[0.85] hover:brightness-[0.95] scale-105"
                  />
                  {/* Reduced Dark Gradient Overlay for Maximum Image Visibility */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="overflow-hidden text-sm md:text-base text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}