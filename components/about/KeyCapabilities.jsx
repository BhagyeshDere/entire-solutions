"use client";

import { motion } from "framer-motion";
import { Factory, Wrench, Zap, ShieldCheck, Cog, Drill } from "lucide-react";

const capabilities = [
  { icon: Factory, title: "Light & Heavy Fabrication", description: "Complete MS & SS fabrication solutions for industrial projects.", tags: ["MS Fab", "SS Fab", "Structural"] },
  { icon: Zap, title: "Laser Cutting", description: "High-precision laser cutting with excellent accuracy and finish.", tags: ["High Precision", "CNC", "Metal"] },
  { icon: Cog, title: "Sheet Metal", description: "Advanced bending and manufacturing solutions.", tags: ["Bending", "Forming", "Design"] },
  { icon: ShieldCheck, title: "Powder Coating", description: "Durable coating for long-term industrial protection.", tags: ["Protection", "Durable", "Finish"] },
  { icon: Drill, title: "Drilling & Tapping", description: "Precision services for industrial components.", tags: ["Machining", "Threading", "CNC"] },
  { icon: Wrench, title: "Custom Manufacturing", description: "Wind power fixtures, jigs, and engineering parts.", tags: ["Bespoke", "Jigs", "Engineering"] },
];

export default function KeyCapabilities() {
  return (
    <section className="relative py-16 md:py-24 bg-[#FDFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Optimized for mobile readability */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">Our Expertise</h2>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 tracking-[-0.04em]">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">Crafted.</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-[1px] rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-white rounded-[1.4rem] p-6 md:p-8 h-full transition-colors duration-500 group-hover:bg-slate-50/50">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon Container */}
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-pink-50 to-cyan-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:to-cyan-500 transition-all duration-500">
                    <item.icon className="text-pink-600 group-hover:text-white transition-colors" size={26} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-pink-700 bg-pink-100/80 px-3 py-1 rounded-full group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}