"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const features = [
    { icon: Zap, label: "Precision Cutting" },
    { icon: Target, label: "Custom Fabrication" },
    { icon: ShieldCheck, label: "Quality Assured" },
    { icon: Users, label: "Expert Team" },
  ];

  return (
    <section 
      className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/hero1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* IMPROVED OVERLAY: Gradient mask ensures text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/60 to-[#0A0A0B]/90" />

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-12"
          >
            {/* Added drop-shadow to text for extra visibility against busy images */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg">
              Strong Builds, <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Sharp Cuts.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-200 max-w-lg mx-auto font-medium drop-shadow-md"
          >
            Providing high-precision light and heavy fabrication solutions since 2020. 
            Industry-leading quality for industrial and commercial needs.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="text-pink-400" size={24} />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-cyan-500 px-8 py-4 rounded-full font-bold text-sm text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              Partner With Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}