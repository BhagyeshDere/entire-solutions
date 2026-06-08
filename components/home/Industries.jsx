"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Plug, Settings, Factory, Building2 } from "lucide-react";

const industries = [
  { icon: Zap, title: "Renewable Energy", desc: "Wind fixtures, battery racks & BESS skids.", img: "/images/industries/renewable2.jpg" },
  { icon: Plug, title: "Electrical Power", desc: "Panel boxes, transformer structures & enclosures.", img: "/images/industries/electrical2.jpg" },
  { icon: Settings, title: "Automotive", desc: "Precision assemblies & sheet metal parts.", img: "/images/industries/automotive2.jpg" },
  { icon: Factory, title: "Heavy Industry", desc: "Machinery frames, skids & heavy structures.", img: "/images/industries/industrial2.jpg" },
  { icon: Building2, title: "Infrastructure", desc: "Structural steel & support systems.", img: "/images/industries/construction2.jpg" },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white text-neutral-900 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[#F72585] font-bold tracking-[0.3em] uppercase text-[11px] mb-4">
            Core Competencies
          </h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Industries We Serve
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] w-full gap-3">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                animate={{ flex: active === idx ? 2 : 1 }}
                className={`relative overflow-hidden rounded-md cursor-pointer border transition-all duration-500 p-6 flex flex-col items-center justify-center ${
                  active === idx 
                    ? "border-[#3A86FF] shadow-lg" 
                    : "bg-neutral-50 hover:bg-neutral-100 border-neutral-200"
                }`}
              >
                <AnimatePresence>
                  {active === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex flex-col items-center text-center bg-white/90 backdrop-blur-sm p-4 rounded-sm">
                  <div className={`mb-4 transition-all duration-500 ${active === idx ? "scale-110" : "scale-100"}`}>
                    <Icon className={`w-8 h-8 ${active === idx ? "text-[#3A86FF]" : "text-neutral-400"}`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className={`font-bold transition-all duration-500 ${
                    active === idx 
                      ? "text-xl leading-tight mb-3 text-neutral-950" 
                      : "text-md [writing-mode:vertical-lr] rotate-180 h-32 text-neutral-600"
                  }`}>
                    {item.title}
                  </h3>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: active === idx ? "auto" : 0, opacity: active === idx ? 1 : 0 }}
                    className="overflow-hidden flex flex-col items-center"
                  >
                    <p className="text-neutral-700 text-xs pb-3 max-w-[180px]">{item.desc}</p>
                    <div className="w-10 h-[2px] bg-gradient-to-r from-[#3A86FF] to-[#F72585]" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}