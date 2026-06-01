"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "Wind Power Blade Repair Fixtures", description: "Custom-engineered fixtures designed for wind turbine maintenance.", image: "/images/projects/project-11.png" },
  { title: "Hub Transportation Fixtures", description: "Heavy-duty solutions for safe movement of turbine hubs.", image: "/images/projects/project-22.png" },
  { title: "Industrial Fabrication", description: "Large-scale infrastructure and equipment solutions.", image: "/images/projects/project-3.png" },
  { title: "Electrical Panel Fabrication", description: "Custom MCC, PCC, and industrial enclosures.", image: "/images/projects/project-4.png" },
];

export default function CompletedProjects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-purple-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            Completed Projects
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 ${
                index % 3 === 0 ? "lg:col-span-8 h-[450px]" : "lg:col-span-4 h-[450px]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10 flex flex-col justify-end">
                <span className="text-purple-400 font-bold mb-2 block">0{index + 1}</span>
                <h3 className="text-3xl font-black text-white leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 max-w-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}