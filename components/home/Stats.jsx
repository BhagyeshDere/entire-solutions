"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Wrench, Award, TrendingUp, Users, PenTool, Settings } from "lucide-react";

const stats = [
  { val: "15+", label: "Projects Completed", icon: Factory, hoverIcon: TrendingUp },
  { val: "10+", label: "Happy Clients", icon: Users, hoverIcon: ShieldCheck },
  { val: "20+", label: "Industrial Design", icon: PenTool, hoverIcon: Wrench },
  { val: "20+", label: "Industrial Manufacturing", icon: Settings, hoverIcon: Award },
];

export default function Stats() {
  return (
    <section className="relative z-30 px-6 -mt-16 mb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = isHovered ? stat.hoverIcon : stat.icon;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      className="group relative bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center text-center transition-all duration-500"
    >
      <div className="relative mb-6">
        {/* Brand-themed Brush Stroke: Violet/Magenta gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-[#a855f7]/20 to-[#ec4899]/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transition-transform duration-500 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`}
        />
        
        <div className="relative p-4">
          <Icon 
            size={40} 
            className={`transition-all duration-500 ${isHovered ? 'text-[#a855f7] scale-110' : 'text-[#ec4899]'}`} 
          />
        </div>
      </div>

      <h3 className="text-4xl font-bold text-neutral-900 mb-2 tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        {stat.val}
      </h3>
      <p className="text-neutral-500 uppercase tracking-[0.2em] text-[10px] font-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        {stat.label}
      </p>
    </motion.div>
  );
}