"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden font-sans bg-slate-900">
      {/* Background Image Layer - Full Color */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/images/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Dark Overlay - Replaced whitishness with deep contrast */}
      <div className="absolute inset-0 z-0 bg-slate-900/70" />
      
      {/* Brand Glows - Adjusted for dark mode compatibility */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag */}
          <span className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            Contact Us
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Ready to build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              something strong?
            </span>
          </h1>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white font-bold text-sm md:text-base mb-12">
            <div className="flex items-center gap-3 hover:text-pink-400 transition-colors bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
              <Phone size={18} className="text-pink-400" />
              <span>+91 7020493239</span>
            </div>
            <div className="flex items-center gap-3 hover:text-pink-400 transition-colors bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
              <Mail size={18} className="text-pink-400" />
              <span>entiresolutions20@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-pink-400 transition-colors bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
              <MapPin size={18} className="text-pink-400" />
              <span>Bhosari, Pune</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}