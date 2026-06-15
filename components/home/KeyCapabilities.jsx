"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Light & Heavy Fabrication in MS & SS",
  "Laser Cutting & Sheet Metal Processing",
  "CNC Bending & Forming",
  "Powder Coating & Industrial Painting",
  "Electrical Panel Box Manufacturing",
  "Drilling & Tapping Operations",
  "Welding Jig & Fixture Manufacturing",
  "Wind Power Fixtures Manufacturing",
  "Custom Engineering Components",
  "Industrial Structural Fabrication",
];

export default function KeyCapabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600 to-sky-500 blur-3xl"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-black uppercase tracking-widest border border-purple-100">
            Core Strengths
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight">
            Key Capabilities
          </h2>
          <p className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed">
            Equipped with advanced manufacturing infrastructure, skilled manpower, and modern engineering practices to deliver precision-driven industrial solutions.
          </p>
        </div>

        {/* 5x5 Split Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center gap-6 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
            >
              {/* Number with Gradient Effect */}
              <span className="text-4xl font-black text-slate-200 group-hover:text-purple-600 transition-colors duration-500">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-purple-900 transition-colors">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}