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
    // Reduced bottom padding from pb-24 to pb-16
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/images/about/hero1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 z-0 bg-slate-900/60" />
      
      {/* Brand-Aligned Soft Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Strong Builds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Sharp Cuts.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-slate-200 max-w-lg mx-auto font-medium"
          >
            Providing high-precision light and heavy fabrication solutions since 2020. 
            Industry-leading quality for your industrial and commercial projects.
          </motion.p>

          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-3 p-4 md:p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-pink-500/50 transition-all"
              >
                <item.icon className="text-pink-400" size={24} />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 md:mt-12"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white px-8 py-5 rounded-2xl font-bold text-sm text-slate-900 hover:bg-pink-500 hover:text-white transition-all shadow-xl"
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