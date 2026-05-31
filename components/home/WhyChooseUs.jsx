"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Sharp Laser Cutting Precision",
      description:
        "Advanced laser cutting technology ensures accurate dimensions, smooth edges and consistent quality.",
      metric: "TOLERANCE_±0.1MM",
    },
    {
      num: "02",
      title: "Strong Light & Heavy Fabrication",
      description:
        "Expertise in manufacturing industrial structures, skids, fixtures and customized fabrication solutions.",
      metric: "MAX_CAPACITY",
    },
    {
      num: "03",
      title: "Modern Machinery & Skilled Workforce",
      description:
        "Equipped with advanced machinery and experienced professionals for superior manufacturing performance.",
      metric: "TECH_GRADE_A",
    },
    {
      num: "04",
      title: "Competitive Pricing",
      description:
        "Cost-effective fabrication solutions without compromising on quality, durability or reliability.",
      metric: "OPTIMIZED_ROI",
    },
    {
      num: "05",
      title: "Trusted by Leading Industries",
      description:
        "Successfully delivering projects for renewable energy, engineering, electrical and industrial sectors.",
      metric: "COMPLIANCE",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-tr from-purple-50/40 via-slate-50/70 to-purple-50/30 relative overflow-hidden border-t border-slate-100"
    >
      {/* Light Ambient Branding Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-purple-400/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-[140px] pointer-events-none z-0" />

      {/* Subtle Engineering Dot Grid Blueprint Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-[96vw] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 border-l-4 border-purple-600 pl-4 md:pl-6">
          <span className="inline-block px-3 py-1 rounded-md bg-purple-50 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 border border-purple-100">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            Engineering Excellence
          </h2>
          <p className="mt-2 text-sm md:text-base font-semibold text-purple-600 uppercase tracking-wider">
            Built Into Every Single Project
          </p>
        </div>

        {/* Dynamic Asymmetrical Responsive Grid for 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {points.map((item, index) => {
            // Cards 01 and 02 occupy half the top row on desktop and are Dark Premium theme
            const isDarkCard = index < 2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className={`group flex flex-col justify-between p-6 md:p-8 rounded-xl transition-all duration-300 ${
                  isDarkCard 
                    ? "lg:col-span-3 md:col-span-1 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 text-white border border-slate-800 shadow-xl hover:border-purple-500/40 hover:shadow-[0_12px_40px_rgba(147,51,234,0.15)]" 
                    : "lg:col-span-2 md:col-span-1 bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-purple-500/30 hover:shadow-[0_12px_30px_rgba(147,51,234,0.06)]"
                }`}
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                      isDarkCard 
                        ? "text-purple-300 bg-purple-500/10 border-purple-500/20" 
                        : "text-purple-600 bg-purple-50 border-purple-100/50"
                    }`}>
                      FEATURE {item.num}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      isDarkCard ? "text-slate-400" : "text-slate-400"
                    }`}>
                      {item.metric}
                    </span>
                  </div>

                  {/* Title Content */}
                  <h3 className={`text-xl font-bold tracking-tight transition-colors duration-200 ${
                    isDarkCard 
                      ? "text-white group-hover:text-purple-300" 
                      : "text-slate-900 group-hover:text-purple-700"
                  }`}>
                    {item.title}
                  </h3>

                  {/* Body Copy */}
                  <p className={`mt-3 text-sm md:text-base font-medium leading-relaxed ${
                    isDarkCard ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Rule details */}
                <div className={`mt-8 pt-4 border-t flex items-center justify-between transition-colors duration-200 ${
                  isDarkCard 
                    ? "border-slate-800 text-slate-400 group-hover:text-purple-300" 
                    : "border-slate-100 text-slate-400 group-hover:text-purple-600"
                }`}>
                  <span className="text-[11px] font-mono tracking-wider uppercase opacity-70">
                    System Verified
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-all duration-200 ${
                    isDarkCard 
                      ? "bg-slate-800 group-hover:bg-purple-600 group-hover:text-white" 
                      : "bg-slate-50 group-hover:bg-purple-600 group-hover:text-white"
                  }`}>
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}