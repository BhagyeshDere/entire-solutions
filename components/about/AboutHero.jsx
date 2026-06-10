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
      className="relative min-h-[70vh] flex items-center py-24 overflow-hidden font-body"
      style={{
        backgroundImage: "url('/images/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0A0A0B]/65" />

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Added pt-12 to shift the heading downward */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-12"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              Strong Builds, <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Sharp Cuts.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-300 max-w-lg mx-auto font-body"
          >
            Providing high-precision light and heavy fabrication solutions since 2020. 
            Industry-leading quality for industrial and commercial needs.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                <item.icon className="text-pink-400" size={20} />
                <span className="text-[10px] font-semibold text-white uppercase tracking-widest font-heading">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-sm text-white hover:scale-105 transition-transform font-heading shadow-lg"
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