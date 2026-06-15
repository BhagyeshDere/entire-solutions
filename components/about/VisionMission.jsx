"use client";

import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";

export default function VisionMission() {
  // Brand color constants based on your logo
  const brand = {
    gradient: "from-[#8b5cf6] via-[#ec4899] to-[#06b6d4]",
    purple: "#8b5cf6",
    magenta: "#ec4899",
    cyan: "#06b6d4",
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#0B0F1A]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${brand.cyan} 1px, transparent 1px),
            linear-gradient(to bottom, ${brand.cyan} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brand Glows */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: brand.cyan }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: brand.purple }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span 
            className="inline-flex px-4 py-2 rounded-full border text-xs font-bold tracking-[0.3em] uppercase"
            style={{ borderColor: `${brand.cyan}30`, backgroundColor: `${brand.cyan}10`, color: brand.cyan }}
          >
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Driven By
            <span className={`block bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}>
              Vision & Mission
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Precision engineering, innovation, and commitment to quality
            guide every project we deliver.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-20 grid lg:grid-cols-2 gap-8">
          {/* Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-[#0B0F1A] flex items-center justify-center border border-white/10 shadow-2xl">
              <ArrowRight style={{ color: brand.magenta }} size={28} />
            </div>
          </div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-10 shadow-2xl transition-all duration-500"
          >
            <div className="relative">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${brand.purple}, ${brand.magenta})` }}
              >
                <Eye className="text-white" size={30} />
              </div>

              <span className="uppercase tracking-[0.3em] text-xs font-bold" style={{ color: brand.purple }}>
                Vision
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Building Tomorrow's
                <span className="block" style={{ color: brand.purple }}>
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

          {/* Mission */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-10 shadow-2xl transition-all duration-500"
          >
            <div className="relative">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${brand.cyan}, #0ea5e9)` }}
              >
                <Target className="text-white" size={30} />
              </div>

              <span className="uppercase tracking-[0.3em] text-xs font-bold" style={{ color: brand.cyan }}>
                Mission
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Delivering Precision
                <span className="block" style={{ color: brand.cyan }}>
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
              whileHover={{ scale: 1.03 }}
              className="text-center p-6 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/5 shadow-sm"
            >
              <h4 className={`text-3xl font-bold bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}>
                {item.value}
              </h4>
              <p className="text-slate-500 mt-2 text-sm uppercase tracking-wider font-semibold">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}