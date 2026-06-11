"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Wrench, ShieldCheck, Award } from "lucide-react";

export default function CompanyOverview() {
  const highlights = [
    { icon: Factory, title: "Manufacturing Excellence", description: "Advanced fabrication for industrial needs." },
    { icon: Wrench, title: "Custom Engineering", description: "Tailor-made solutions per requirements." },
    { icon: ShieldCheck, title: "Quality Focused", description: "Strict standards ensuring reliability." },
    { icon: Award, title: "Trusted Partner", description: "Precision and timely delivery guaranteed." },
  ];

  return (
    <section className="relative py-24 bg-[#FDFDFD] overflow-hidden">
      {/* Brand-Aligned Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/80 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50/80 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/about/about.png"
                alt="Entire Solutions"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Stat Card - Updated Colors */}
            <div className="absolute -bottom-8 -right-4 bg-white p-8 rounded-3xl shadow-xl border border-pink-100">
              <h3 className="text-5xl font-black bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent font-heading">5+</h3>
              <p className="text-slate-600 font-heading tracking-widest text-sm uppercase font-bold">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="inline-flex px-4 py-1.5 rounded-full border border-pink-100 bg-pink-50 text-pink-700 text-xs font-heading tracking-widest uppercase font-bold">
              Company Overview
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] font-heading">
              Precision Engineering. <br />
              <span className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">
                Strong Manufacturing.
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed font-body">
              Since 2020, Entire Solutions has redefined industrial fabrication. We blend advanced laser cutting, custom bending, and precision welding to deliver robust solutions tailored for modern infrastructure.
            </p>
          </div>
        </div>

        {/* Highlights Grid - Updated Gradients */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center mb-6">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">{item.title}</h3>
              <p className="mt-2 text-slate-500 text-sm font-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}