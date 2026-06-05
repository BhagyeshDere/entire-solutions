"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  { id: "01", title: "Wind Power Blade Repair Fixtures", image: "/images/projects/project-11.png", category: "Renewable Energy", desc: "Precision-engineered fixtures designed for heavy-duty blade maintenance and inspection." },
  { id: "02", title: "Hub Transportation Fixtures", image: "/images/projects/project-22.png", category: "Wind Energy", desc: "Customized transport frames ensuring secure logistics for delicate wind turbine hubs." },
  { id: "03", title: "Industrial Fabrication Projects", image: "/images/projects/project-3.png", category: "Heavy Fabrication", desc: "Large-scale structural steel fabrication tailored for industrial infrastructure requirements." },
  { id: "04", title: "Electrical Panel Fabrication", image: "/images/projects/project-4.png", category: "Electrical Systems", desc: "High-compliance electrical enclosures for complex industrial control systems." },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* HERO */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="uppercase tracking-[0.4em] text-[#6b21a8] font-black text-[10px]">Portfolio of Work</span>
          <h1 className="mt-6 text-5xl md:text-8xl font-black tracking-tighter">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#06b6d4]">Excellence</span>
          </h1>
          <p className="mt-8 text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            From renewable energy fixtures to complex industrial fabrication, our work defines precision and reliability in modern manufacturing.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:shadow-[#6b21a8]/10"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Let's Build Your Vision</h2>
        <p className="text-slate-500 mt-6 max-w-lg mx-auto">Partner with Entire Solutions for robust fabrication and engineering that meets the highest industrial standards.</p>
        <Link href="/contact" className="inline-flex mt-12 bg-[#6b21a8] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.1em] text-xs hover:bg-slate-900 transition-all shadow-xl hover:shadow-[#6b21a8]/20">
          Get Started Now
        </Link>
      </motion.section>
    </main>
  );
}