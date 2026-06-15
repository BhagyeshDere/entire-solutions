"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Wrench, ShieldCheck, Award } from "lucide-react";

export default function CompanyOverview() {
  // Theme extracted directly from your logo's gradient palette
  const theme = {
    gradient: "from-[#8b5cf6] via-[#ec4899] to-[#06b6d4]",
    primary: "#8b5cf6", // Deep Purple
    accent: "#06b6d4",  // Bright Cyan
    bg: "#f8fafc"
  };

  const highlights = [
    { icon: Factory, title: "Manufacturing Excellence", description: "Advanced fabrication for industrial needs." },
    { icon: Wrench, title: "Custom Engineering", description: "Tailor-made solutions per requirements." },
    { icon: ShieldCheck, title: "Quality Focused", description: "Strict standards ensuring reliability." },
    { icon: Award, title: "Trusted Partner", description: "Precision and timely delivery guaranteed." },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* Brand-Aligned Background Blobs using logo colors */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20" 
        style={{ backgroundColor: theme.primary }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-[120px] rounded-full opacity-20" 
        style={{ backgroundColor: theme.accent }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-b-4 border-transparent bg-gradient-to-r p-1" style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.accent})` }}>
              <div className="rounded-[1.25rem] overflow-hidden">
                <Image
                  src="/images/about/about.png"
                  alt="Entire Solutions Facility"
                  width={800}
                  height={600}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
            </div>
            
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 bg-white p-8 rounded-3xl shadow-xl border-t-4" style={{ borderColor: theme.primary }}>
              <h3 className={`text-5xl font-black bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>6+</h3>
              <p className="text-slate-600 text-sm uppercase font-bold tracking-widest mt-1">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8 mt-8 lg:mt-0">
            <div 
              className="inline-flex px-4 py-1.5 rounded-full border text-xs uppercase font-bold tracking-widest"
              style={{ borderColor: theme.primary + '30', backgroundColor: theme.primary + '05', color: theme.primary }}
            >
              Company Overview
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Precision Engineering. <br />
              <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                Strong Manufacturing.
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Since 2020, Entire Solutions has redefined industrial fabrication. We blend advanced laser cutting, custom bending, and precision welding to deliver robust solutions tailored for modern infrastructure.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-br ${theme.gradient}`}
              >
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}