"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Laser Cutting Machine",
    desc: "High-precision fiber laser technology that delivers clean edges and intricate designs with micron-level accuracy.",
    number: "01",
    image: "/images/facilities/laser-cutting.jpg",
  },
  {
    title: "CNC Bending Machine",
    desc: "Automated hydraulic bending systems ensuring perfect angles and consistency across high-volume production batches.",
    number: "02",
    image: "/images/facilities/cnc-bending.jpg",
  },
  {
    title: "Advanced Fabrication",
    desc: "Integrated heavy and light fabrication stations capable of handling complex industrial structures and custom assemblies.",
    number: "03",
    image: "/images/facilities/profile-cutting.jpg",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-[#fafbfc] overflow-x-hidden">
      
      {/* DARK THEME HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#6b21a8_0%,#0f172a_70%)] opacity-50" />
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-[#06b6d4] text-xs font-bold"
          >
            Infrastructure Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 text-5xl md:text-8xl font-black text-white leading-tight"
          >
            Precision <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#06b6d4]">Engineering</span>
          </motion.h1>
          <p className="mt-8 max-w-xl mx-auto text-slate-400 text-lg">
            Our state-of-the-art facility combines cutting-edge CNC technology with expert craftsmanship.
          </p>
        </div>
      </section>

      {/* FACILITIES LAYOUT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
        
          
          <div className="space-y-32">
            {facilities.map((item, index) => (
              <motion.div 
                key={item.number} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full h-[500px] md:h-[550px] rounded-[3rem] overflow-visible shadow-2xl"
              >
                <Image src={item.image} alt={item.title} fill className="object-cover rounded-[3rem]" />
                <div className="absolute inset-0 bg-black/20 rounded-[3rem]" />
                
                {/* Description Box - Edge Anchored */}
                <div className={`absolute -bottom-16 ${index % 2 === 0 ? "left-0 md:left-12" : "right-0 md:right-12"} w-full md:w-[450px]`}>
                  <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-100 mx-4 md:mx-0">
                    <span className="text-[#6b21a8] text-sm font-black uppercase tracking-widest">Unit {item.number}</span>
                    <h3 className="text-3xl font-black text-slate-900 mt-2">{item.title}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Ready to scale your production?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At Entire Solutions, we bridge the gap between complex engineering concepts and 
              industrial-grade reality. Partner with us for unparalleled precision, 
              faster turnaround times, and quality that exceeds international standards. 
              Let's build the future of your infrastructure together.
            </p>
            
            <div className="pt-8">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-[#6b21a8] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-indigo-500/20"
              >
                Get A Quote &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}