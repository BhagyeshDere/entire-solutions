"use client";

import { ShieldCheck, BadgeCheck, Award, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  { icon: ShieldCheck, title: "Quality Assurance", number: "100%", description: "Strict inspection and precision manufacturing processes." },
  { icon: Award, title: "Industrial Standards", number: "ISO Ready", description: "Built according to modern fabrication engineering standards." },
  { icon: BadgeCheck, title: "Skilled Workforce", number: "Expert Team", description: "Experienced technicians and fabrication specialists." },
  { icon: FileCheck2, title: "Safety Compliance", number: "Zero Risk", description: "Focus on workplace safety and reliable project execution." },
];

export default function Certifications() {
  return (
    <section className="relative py-28 bg-[#0A0A0B] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="uppercase tracking-[0.2em] text-cyan-400 text-[10px] font-bold">Operational Credentials</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Commitment to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Engineering Excellence
            </span>
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300"
            >
              {/* Border Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-white/10 transition-colors" />
              
              <item.icon size={32} className="text-cyan-400 mb-6" />
              
              <div className="text-3xl font-black text-white mb-2">{item.number}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}