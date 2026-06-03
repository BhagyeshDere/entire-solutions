"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#fcfcfd]">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-50 to-cyan-50 rounded-full blur-[100px] opacity-70 z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        
        {/* Minimalist Badge */}
        <span className="inline-block uppercase tracking-[0.3em] text-slate-400 text-[10px] font-bold mb-6">
          Let's Build Together
        </span>

        {/* Impactful Typography */}
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
          Ready To Start <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500">
            Your Next Project?
          </span>
        </h2>

        <p className="mt-8 text-slate-600 text-md md:text-lg max-w-xl mx-auto leading-relaxed">
          From fabrication and laser cutting to electrical panel manufacturing, 
          Entire Solutions is ready to support your business requirements.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-slate-900/10"
          >
            Contact Us
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}