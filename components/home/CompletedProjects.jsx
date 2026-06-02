"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Wind Power Blade Repair Fixtures", description: "Custom-engineered fixtures designed for wind turbine maintenance.", image: "/images/projects/project-11.png" },
  { title: "Hub Transportation Fixtures", description: "Heavy-duty solutions for safe movement of turbine hubs.", image: "/images/projects/project-22.png" },
  { title: "Industrial Fabrication", description: "Large-scale infrastructure and equipment solutions.", image: "/images/projects/project-3.png" },
  { title: "Electrical Panel Fabrication", description: "Custom MCC, PCC, and industrial enclosures.", image: "/images/projects/project-4.png" },
];

export default function CompletedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-purple-600 font-bold tracking-[0.2em] uppercase text-sm">Showcase</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Completed Projects</h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-purple-600 transition-colors">←</button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-purple-600 transition-colors">→</button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                fill
                className="object-cover opacity-60"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-purple-400 font-bold mb-2">0{currentIndex + 1}</span>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 max-w-2xl">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-slate-300 max-w-lg text-lg">
                  {projects[currentIndex].description}
                </p>
               
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}