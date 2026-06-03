"use client";

import { Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#fcfcfd] relative overflow-hidden">
      {/* Background decoration with animated color spots */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-[120px]" 
      />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            variants={cardVariants}
            className="group p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-50 to-purple-50 rounded-bl-[4rem] transition-all group-hover:scale-110" />
            
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-8">
              <Target className="text-pink-600 w-6 h-6" />
            </div>
            
            <span className="text-pink-600 uppercase tracking-[0.25em] text-xs font-bold">Our Vision</span>
            <h3 className="mt-4 text-4xl font-black text-slate-900 tracking-tight">
              Leading Industrial<br/>Innovation
            </h3>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              To become the global benchmark in manufacturing and fabrication. We envision a future where precision engineering integrates seamlessly with sustainable practices, empowering industries to achieve more through long-term value, unmatched quality, and groundbreaking technical solutions.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={cardVariants}
            className="group p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-900 to-purple-900 rounded-bl-[4rem] transition-all group-hover:scale-110" />
            
            <div className="w-12 h-12 rounded-2xl bg-cyan-900 flex items-center justify-center mb-8">
              <Zap className="text-cyan-400 w-6 h-6" />
            </div>
            
            <span className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-bold">Our Mission</span>
            <h3 className="mt-4 text-4xl font-black tracking-tight">
              Precision. Quality.<br/>Reliability.
            </h3>
            <p className="mt-6 text-slate-400 leading-relaxed text-lg">
              Our mission is to translate complex fabrication challenges into reliable, high-performance realities. By utilizing state-of-the-art technology and fostering a team of highly skilled professionals, we guarantee continuous improvement, strict safety adherence, and client-focused solutions that elevate industrial standards.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}