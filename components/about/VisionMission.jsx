"use client";

import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0D14]">
      {/* Brand-Aligned Dark Blue Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[120px] md:text-[220px] font-black text-white/[0.02] uppercase whitespace-nowrap">
          Vision Mission
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-800/50 bg-blue-950/30 text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
            Driven By
            <span className="block bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Precision engineering, innovation, and commitment to quality
            guide every project we deliver.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-20 grid lg:grid-cols-2 gap-8">
          
          {/* Center Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-[#0A0D14] flex items-center justify-center shadow-lg border border-blue-800">
              <ArrowRight className="text-pink-500" size={30} />
            </div>
          </div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-[#111621]/80 backdrop-blur-xl p-10 shadow-2xl transition-all"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-500 flex items-center justify-center mb-8 shadow-lg shadow-pink-900/20">
                <Eye className="text-white" size={30} />
              </div>

              <span className="text-pink-500 uppercase tracking-[0.3em] text-xs font-bold">
                Vision
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                Building Tomorrow's
                <span className="block text-pink-500">
                  Manufacturing Excellence
                </span>
              </h3>

              <p className="mt-6 text-slate-400 leading-relaxed text-lg">
                To become one of India's most trusted and innovative
                fabrication and manufacturing companies by delivering
                precision-engineered solutions that exceed customer
                expectations and industry standards.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-[#111621]/80 backdrop-blur-xl p-10 shadow-2xl transition-all"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-400 flex items-center justify-center mb-8 shadow-lg shadow-cyan-900/20">
                <Target className="text-white" size={30} />
              </div>

              <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold">
                Mission
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                Delivering Precision
                <span className="block text-cyan-400">
                  Through Innovation
                </span>
              </h3>

              <p className="mt-6 text-slate-400 leading-relaxed text-lg">
                To provide high-quality fabrication, laser cutting,
                powder coating, electrical panel manufacturing, and
                engineering services through advanced technology,
                skilled workmanship, continuous improvement, and
                customer-focused solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "20+", label: "Industrial Clients" },
            { value: "5+", label: "Industries Served" },
            { value: "2020", label: "Established" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 rounded-3xl bg-[#111621]/80 backdrop-blur-md border border-white/5 shadow-sm"
            >
              <h4 className="text-3xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                {item.value}
              </h4>
              <p className="text-slate-500 mt-2 text-sm uppercase tracking-wider font-bold">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}