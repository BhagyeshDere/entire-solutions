"use client";

import { motion } from "framer-motion";

const reasons = [
  { number: "01", title: "Sharp Laser Cutting", description: "Advanced fiber laser technology for micron-level accuracy and smooth edges." },
  { number: "02", title: "Heavy-Duty Fabrication", description: "Robust structural engineering built to withstand extreme industrial loads." },
  { number: "03", title: "Modern Infrastructure", description: "State-of-the-art machinery paired with expert artisan precision." },
  { number: "04", title: "Cost-Efficient", description: "Optimized production workflows to maximize value without compromising quality." },
  { number: "05", title: "Trusted Partner", description: "Decades of proven excellence in renewable energy and industrial sectors." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 text-white overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/facilities/welding.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-16">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[#25b3fa] text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            Why Choose Us
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Built On Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a23aec] to-[#25b3fa]">
              Driven By Quality.
            </span>
          </h2>
        </div>

        {/* Combined Layout */}
        <div className="flex flex-col gap-6">
          {/* Top Row: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} index={index} />
            ))}
          </div>
          
          {/* Bottom Row: 2 Items (Centered using flexbox) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center lg:gap-6 gap-6">
            {reasons.slice(3, 5).map((item, index) => (
              <div key={index + 3} className="lg:w-[calc(33.333%-1rem)]">
                <Card item={item} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 h-full bg-[#0B0F1A]/60 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#25b3fa]/50 transition-all duration-500"
    >
      <div className="text-6xl font-black text-white/5 group-hover:text-[#a23aec]/20 transition-colors absolute top-4 right-6">
        {item.number}
      </div>
      <div className="w-12 h-1 bg-gradient-to-r from-[#a23aec] to-[#25b3fa] mb-8 rounded-full" />
      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
        {item.description}
      </p>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#25b3fa]/30 rounded-[2rem] transition-all" />
    </motion.div>
  );
}