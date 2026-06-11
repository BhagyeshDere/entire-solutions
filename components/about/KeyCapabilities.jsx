"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Wrench,
  Zap,
  ShieldCheck,
  Cog,
  Drill,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Light & Heavy Fabrication",
    description:
      "Complete MS & SS fabrication solutions for industrial projects.",
    tags: ["MS Fab", "SS Fab", "Structural"],
  },
  {
    icon: Zap,
    title: "Laser Cutting",
    description:
      "High-precision laser cutting with excellent accuracy and finish.",
    tags: ["High Precision", "CNC", "Metal"],
  },
  {
    icon: Cog,
    title: "Sheet Metal",
    description:
      "Advanced bending and manufacturing solutions.",
    tags: ["Bending", "Forming", "Design"],
  },
  {
    icon: ShieldCheck,
    title: "Powder Coating",
    description:
      "Durable coating for long-term industrial protection.",
    tags: ["Protection", "Durable", "Finish"],
  },
  {
    icon: Drill,
    title: "Drilling & Tapping",
    description:
      "Precision services for industrial components.",
    tags: ["Machining", "Threading", "CNC"],
  },
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description:
      "Wind power fixtures, jigs, and engineering parts.",
    tags: ["Bespoke", "Jigs", "Engineering"],
  },
];

export default function KeyCapabilities() {
  return (
    <section className="relative py-20 md:py-28 bg-[#fcfcfd] overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #25b3fa 1px, transparent 1px),
            linear-gradient(to bottom, #25b3fa 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brand Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#25b3fa]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a23aec]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-14 md:mb-20 text-center">

          <span className="inline-flex px-5 py-2 rounded-full border border-[#25b3fa]/30 bg-[#25b3fa]/10 text-[#25b3fa] text-xs font-bold tracking-[0.3em] uppercase">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
            Key{" "}
            <span className="bg-gradient-to-r from-[#a23aec] to-[#25b3fa] bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
            Advanced fabrication, precision manufacturing,
            engineering excellence, and industrial solutions
            designed to meet the highest quality standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-[1px] rounded-[28px] bg-gradient-to-r from-[#a23aec] to-[#25b3fa] hover:shadow-[0_20px_50px_rgba(37,179,250,0.15)] transition-all duration-500"
            >
              <div className="bg-white rounded-[27px] p-6 md:p-8 h-full">

                <div className="flex flex-col sm:flex-row items-start gap-6">

                  {/* Icon */}
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#a23aec]/10 to-[#25b3fa]/10 flex items-center justify-center group-hover:from-[#a23aec] group-hover:to-[#25b3fa] transition-all duration-500">

                    <item.icon
                      size={28}
                      className="text-[#a23aec] group-hover:text-white transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">

                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#25b3fa]/10 text-[#25b3fa] border border-[#25b3fa]/20 transition-all duration-300 group-hover:bg-[#a23aec]/10 group-hover:text-[#a23aec] group-hover:border-[#a23aec]/20"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}