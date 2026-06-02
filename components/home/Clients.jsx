"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clients from "@/data/clients";

export default function Clients() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-[#f8fafc] relative overflow-hidden font-sans border-b border-slate-200">
      
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6 px-4 py-1 border border-slate-200 rounded-full bg-white shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600">Global Industry Partners</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a23aec] to-[#25b3fa]">Networks</span>
          </h2>
        </div>

        {/* Kinetic Ticker */}
        <div className="relative w-full overflow-hidden py-10 mask-horizontal-fade">
          <motion.div 
            className="flex gap-8 w-max"
            animate={{ x: [0, -2304] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client.id}-${idx}`}
                whileHover={{ y: -5 }}
                className="group relative w-72 h-32 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-6 transition-all duration-500 hover:shadow-xl hover:border-purple-200"
              >
                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(162,58,236,0.05),transparent_70%)] rounded-2xl" />
                
                {/* Full Color Logo Container */}
                <div className="relative w-full h-full p-2 transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={client.image}
                    alt="Client Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Corner Technical Indicators */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-400 opacity-20 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .mask-horizontal-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}