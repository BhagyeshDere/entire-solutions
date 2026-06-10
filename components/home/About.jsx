"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Wrench, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-[#F9F7FC] overflow-hidden py-24 font-body">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-100/50 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.5em] text-[#F72585] text-[12px] font-bold font-heading">
            About Company
          </span>
          {/* Reduced font size from 5xl/7xl to 4xl/6xl */}
          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight font-heading">
            Engineering Excellence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F72585] to-[#3A86FF]">
              Since 2020
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <h3 className="text-3xl text-neutral-950 font-bold font-heading">Entire Solutions</h3>
            <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
              <p>
                Entire Solutions is a premier fabrication and manufacturing partner 
                dedicated to precision engineering. We transform raw potential into 
                durable reality through advanced technology and expertise.
              </p>
              <p>
                From laser cutting to complex heavy fabrication, our commitment to 
                quality ensures that every project meets the highest industry standards, 
                tailored specifically to your unique commercial and industrial needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Laser Cutting", "Fabrication", "Powder Coating"].map((tag) => (
                <span key={tag} className="px-6 py-2 rounded-sm border border-[#3A86FF]/20 bg-white text-[#3A86FF] font-medium text-sm font-body">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Advanced Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Factory, color: "text-[#F72585]", title: "Industrial Expertise", desc: "Complete light and heavy fabrication solutions." },
              { icon: ShieldCheck, color: "text-[#3A86FF]", title: "Quality Focus", desc: "Rigorous standards in every weld and cut." },
              { icon: Wrench, color: "text-[#F72585]", title: "Modern Machinery", desc: "State-of-the-art precision equipment." },
              { icon: Award, color: "text-[#3A86FF]", title: "Trusted Partner", desc: "Timely delivery with unmatched reliability." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-[#3A86FF] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <item.icon className={`${item.color} mb-6 transition-transform group-hover:scale-110`} size={32} />
                <h4 className="text-lg font-bold mb-3 text-neutral-900 font-heading">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}