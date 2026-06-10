"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import services from "@/data/services";

export default function Services() {
  const [activeRow1, setActiveRow1] = useState(0);
  const [activeRow2, setActiveRow2] = useState(3);

  const row1Services = services.slice(0, 3);
  const row2Services = services.slice(3, 6);

  return (
    <section id="services" className="py-24 bg-slate-50/75 text-slate-900 relative overflow-hidden font-body">
      
      {/* Structural Tech Background Mesh */}
      <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-blueprint-grid)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-left mb-16 border-l-4 border-purple-600 pl-6 md:pl-8 overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-slate-900 leading-none font-heading">
              Our Services
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-purple-600/80 mt-3 block font-heading">
              Precision Systems & Custom Engineering
            </p>
          </div>
        </motion.div>

        {/* Dynamic Interactive Rows Layout */}
        <div className="flex flex-col gap-6">
          
          {/* Row 1 */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-4 w-full h-[800px] lg:h-[400px]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            {row1Services.map((service, idx) => {
              const isExpanded = activeRow1 === idx;
              return (
                <div
                  key={service.id || idx}
                  onClick={() => setActiveRow1(idx)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-in-out border border-slate-200 shadow-lg ${
                    isExpanded ? "lg:flex-[2] flex-[3]" : "lg:flex-1 flex-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-700 brightness-[0.95] hover:brightness-[1.05] scale-105"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="text-2xl font-bold text-white tracking-wide font-heading">{service.title}</h3>
                    <div className={`grid transition-all duration-500 ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-sm md:text-base text-slate-100 leading-relaxed font-body">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-4 w-full h-[800px] lg:h-[400px]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            {row2Services.map((service, idx) => {
              const realIndex = idx + 3;
              const isExpanded = activeRow2 === realIndex;
              return (
                <div
                  key={service.id || realIndex}
                  onClick={() => setActiveRow2(realIndex)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-in-out border border-slate-200 shadow-lg ${
                    isExpanded ? "lg:flex-[2] flex-[3]" : "lg:flex-1 flex-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-700 brightness-[0.95] hover:brightness-[1.05] scale-105"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="text-2xl font-bold text-white tracking-wide font-heading">{service.title}</h3>
                    <div className={`grid transition-all duration-500 ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-sm md:text-base text-slate-100 leading-relaxed font-body">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}