"use client";

import Image from "next/image";
import { ShieldCheck, BadgeCheck, Award, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    number: "100%",
    description: "Strict quality inspection and precision manufacturing processes."
  },
  {
    icon: Award,
    title: "Industrial Standards",
    number: "ISO Ready",
    description: "Built according to modern fabrication and engineering practices."
  },
  {
    icon: BadgeCheck,
    title: "Skilled Workforce",
    number: "Expert Team",
    description: "Experienced technicians and fabrication specialists."
  },
  {
    icon: FileCheck2,
    title: "Safety Compliance",
    number: "Zero Compromise",
    description: "Focus on workplace safety and reliable project execution."
  },
];

export default function Certifications() {
  return (
    <section className="relative py-28 bg-[#0b0f1a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#a23aec]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#25b3fa]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-[#25b3fa] text-xs font-bold">
            Quality & Compliance
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-black text-white">
            Operational{" "}
            <span className="bg-gradient-to-r from-[#a23aec] to-[#25b3fa] bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
            Every project is executed with precision, quality assurance,
            safety compliance, and engineering excellence.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Logo Side */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a23aec]/30 to-[#25b3fa]/30 blur-3xl rounded-full" />
              <div className="relative w-72 h-72 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#a23aec]/30" />
                <div className="absolute inset-6 rounded-full border border-[#25b3fa]/30" />
                <div className="absolute inset-12 rounded-full border border-[#a23aec]/20" />
                <Image
                  src="/logo.png"
                  alt="Entire Solutions"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Standards Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#25b3fa]/40 transition-all duration-500"
                  >
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#a23aec] to-[#25b3fa]" />
                    <Icon size={38} className="text-[#25b3fa] mb-6" />
                    <p className="text-3xl font-black bg-gradient-to-r from-[#a23aec] to-[#25b3fa] bg-clip-text text-transparent">
                      {item.number}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}