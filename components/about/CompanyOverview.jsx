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
    <section className="relative py-16 md:py-24 bg-[#FDFDFD] overflow-hidden">
      {/* Brand-Aligned Background Blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-100/50 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-100/50 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/about/about.png"
                alt="Entire Solutions Facility"
                width={800}
                height={600}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-pink-100">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">6+</h3>
              <p className="text-slate-600 text-[10px] md:text-sm uppercase font-bold tracking-widest mt-1">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
            <div className="inline-flex px-4 py-1.5 rounded-full border border-pink-100 bg-pink-50 text-pink-700 text-[10px] md:text-xs uppercase font-bold tracking-widest">
              Company Overview
            </div>

            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Precision Engineering. <br />
              <span className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">
                Strong Manufacturing.
              </span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Since 2020, Entire Solutions has redefined industrial fabrication. We blend advanced laser cutting, custom bending, and precision welding to deliver robust solutions tailored for modern infrastructure.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center mb-6 shadow-md shadow-pink-100">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-500 text-xs md:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}