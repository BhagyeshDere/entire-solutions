"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data defined at the top level to ensure scope accessibility
const projects = [
  { 
    id: "01", 
    title: "Wind Power Blade Repair Fixtures", 
    image: "/images/projects/project-11.png", 
    category: "Renewable Energy", 
    desc: "Precision-engineered fixtures designed for heavy-duty blade maintenance and inspection.", 
    fullDetails: "Our custom-built blade repair fixtures provide 360-degree access and ergonomic support for maintenance crews. Built with high-tensile steel, they ensure safety and efficiency in remote wind farm locations." 
  },
  { 
    id: "02", 
    title: "Hub Transportation Fixtures", 
    image: "/images/projects/project-22.png", 
    category: "Wind Energy", 
    desc: "Customized transport frames ensuring secure logistics for delicate wind turbine hubs.", 
    fullDetails: "We engineer modular transport frames that withstand severe vibration and load stress. These fixtures are certified for international shipping standards, protecting high-value components during transit." 
  },
  { 
    id: "03", 
    title: "Industrial Fabrication Projects", 
    image: "/images/projects/project-3.png", 
    category: "Heavy Fabrication", 
    desc: "Large-scale structural steel fabrication tailored for industrial infrastructure requirements.", 
    fullDetails: "Our fabrication facility specializes in heavy-gauge steel structures. We provide end-to-end services from CAD design and laser cutting to final structural assembly and protective coating." 
  },
  { 
    id: "04", 
    title: "Electrical Panel Fabrication", 
    image: "/images/projects/project-4.png", 
    category: "Electrical Systems", 
    desc: "High-compliance electrical enclosures for complex industrial control systems.", 
    fullDetails: "We manufacture customized MCC, PCC, and AMF panels. Each unit is built to IP-rated standards, featuring precision laser-cut chassis and professional-grade powder coating for superior durability." 
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          /* Detail View */
          <motion.section 
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="py-24 px-6"
          >
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b21a8] mb-12 hover:opacity-70 transition-all"
              >
                &larr; Back to Portfolio
              </button>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={selectedProject?.image || "/fallback-image.png"} 
                    alt={selectedProject?.title || "Project"} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <span className="text-[#06b6d4] font-bold uppercase tracking-[0.2em] text-xs">
                    {selectedProject?.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black mt-4 mb-8 leading-tight">
                    {selectedProject?.title}
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {selectedProject?.fullDetails}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        ) : (
          /* Grid View */
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 flex items-center justify-center bg-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#f1f5f9_0%,#fff_100%)]" />
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-1.5 rounded-full border border-[#6b21a8]/10 bg-[#6b21a8]/5 text-[#6b21a8] uppercase tracking-[0.3em] font-bold text-[10px] mb-8">
                  Our Portfolio
                </motion.span>
                <div className="overflow-hidden">
                  <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
                    Engineering
                  </motion.h1>
                </div>
                <div className="overflow-hidden mt-2">
                  <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#06b6d4] leading-[0.9]">
                    Excellence
                  </motion.h1>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 text-slate-500 text-lg md:text-xl max-w-lg mx-auto">
                  Transforming complex industrial challenges into precision-engineered solutions with advanced fabrication and design.
                </motion.p>
              </div>
            </section>

            {/* GRID SECTION */}
            <section className="py-20 px-6">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-[#6b21a8]/20"
                  >
                    <div className="relative h-[350px] overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-600 mb-6 line-clamp-2">{project.desc}</p>
                      <button 
                        onClick={() => setSelectedProject(project)} 
                        className="inline-flex items-center text-[#6b21a8] font-bold uppercase tracking-widest text-[11px] hover:gap-2 transition-all"
                      >
                        View Detail &rarr;
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Let's Build Your Vision</h2>
          <Link href="/contact" className="inline-flex mt-10 bg-[#6b21a8] text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.1em] hover:bg-slate-900 transition-all shadow-lg shadow-[#6b21a8]/20">
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}