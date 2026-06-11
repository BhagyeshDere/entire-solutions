"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#fcfcfd]">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-100/50 to-cyan-50/50 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-8">
          <span className="uppercase tracking-[0.3em] text-slate-500 text-[10px] font-bold font-heading">
            Let's Build Together
          </span>
        </div>

        {/* Impactful Typography */}
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 font-heading">
          Ready To Start <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500">
            Your Next Project?
          </span>
        </h2>

        <p className="mt-6 text-slate-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-body">
          From fabrication and laser cutting to electrical panel manufacturing, 
          Entire Solutions is ready to support your business requirements.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-900/10 font-body"
          >
            Contact Us
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all font-body"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}