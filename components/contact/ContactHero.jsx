"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden font-sans">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/contact.png')" }}
      />
      
      {/* Refined Overlays for Brand Color Integration */}
      <div className="absolute inset-0 bg-slate-950/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/70 z-0" />

      {/* Brand-Aligned Glows (Using Logo Colors) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/15 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/15 blur-[150px] rounded-full z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag - Updated to match logo gradient aesthetics */}
          <span className="inline-block px-5 py-2 rounded-full border border-pink-500/30 bg-slate-950/40 backdrop-blur-md text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            Contact Us
          </span>

          {/* Heading - Updated with custom gradient matching the logo */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-50 leading-tight mb-8">
            Ready to build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
              something strong?
            </span>
          </h1>

          {/* Contact Details - Using Brand-specific iconography colors */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-slate-200 font-medium text-sm md:text-base mb-12">
            <div className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone size={18} className="text-pink-500" />
              <span>+91 7020493239</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail size={18} className="text-pink-500" />
              <span>entiresolutions20@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors">
              <MapPin size={18} className="text-pink-500" />
              <span>Bhosari, Pune</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}