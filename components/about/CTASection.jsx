"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-16 bg-[#FDFDFD] border-t border-slate-100">
      {/* Subtle Background Glow - Tinted to match Logo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Label */}
          <span className="inline-block px-5 py-1.5 rounded-full border border-pink-100 bg-pink-50 text-pink-600 text-[10px] font-black uppercase tracking-[0.3em]">
            Ready to start?
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Let’s Build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
              Something Strong.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-md mx-auto text-slate-500 text-lg">
            Partner with Entire Solutions for precision engineering tailored to your requirements.
          </p>

          {/* Buttons */}
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-slate-100 mt-8">
            <a href="tel:+917020493239" className="flex items-center gap-2 text-slate-500 hover:text-pink-600 transition-colors font-medium text-sm">
              <Phone size={16} className="text-pink-500" />
              +91 7020493239
            </a>
            <a href="mailto:entiresolutions20@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-medium text-sm">
              <Mail size={16} className="text-cyan-500" />
              entiresolutions20@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}