"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#02040a] text-[#e8e4dc] py-16 overflow-hidden">
      
      {/* --- BRAND-ALIGNED GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transform: "perspective(1000px) rotateX(60deg)",
            transformOrigin: "center top",
            opacity: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: HEADING */}
        <div className="w-full mb-16">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-4xl md:text-6xl font-light mb-12 leading-[1.1] text-white">
              Precision engineering <br/> 
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
                for your vision.
              </span>
            </h3>
          </motion.div>

          {/* MAIN LAYOUT: Left (Cards) + Right (Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* LEFT SIDE: Info Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="p-8 rounded-[2rem] bg-[#0b0f1a]/60 border border-white/5 backdrop-blur-md">
                 <MapPin className="text-purple-400 mb-4" size={24} />
                 <p className="text-white/60 text-[11px] uppercase tracking-widest leading-relaxed">
                   Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar,<br/> 
                   Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
                 </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-[#0b0f1a]/60 border border-white/5 backdrop-blur-md">
                 <div className="flex gap-4 mb-4">
                     <Phone size={24} className="text-purple-400" />
                     <Mail size={24} className="text-purple-400" />
                 </div>
                 <p className="text-white/60 text-[11px] uppercase tracking-widest leading-relaxed">
                   7020493239 / 9222089025<br/>
                   <span className="lowercase font-mono text-[10px] block mt-1">entiresolutions20@gmail.com</span>
                 </p>
                 <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4 font-bold">
                   GST No: 27AAIFE3965C1ZG
                 </p>
              </div>
            </div>
            
            {/* RIGHT SIDE: Inquiry Form */}
            <div className="lg:col-span-5 bg-[#0b0f1a] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
               <div className="mb-6">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-2 block font-bold">Full Identity</label>
                 <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:border-purple-500 outline-none text-white placeholder:text-white/20" />
               </div>
               <div className="mb-8">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-2 block font-bold">Direct Line</label>
                 <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:border-purple-500 outline-none text-white placeholder:text-white/20" />
               </div>
               <button className="w-full bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-cyan-300 transition-all">
                 <span>Initialize Request</span>
                 <ArrowUpRight size={16} />
               </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
            © {new Date().getFullYear()} ENTIRE SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-white/50 uppercase tracking-widest">
            Developed by <span className="text-white font-bold">Qiro Tech Innovation PVT. LTD.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;