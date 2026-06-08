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

  // Function to handle swipe completion
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    } else if (info.offset.x < -swipeThreshold) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }
  };

  return (
    <section className="py-24 bg-neutral-50 text-neutral-900 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="border-l-2 border-blue-900 pl-8">
            <span className="text-blue-900 font-bold tracking-[0.3em] uppercase text-[10px]">Corporate Portfolio</span>
            <h2 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight text-neutral-950">
              Completed Projects
            </h2>
          </div>
        </div>

        {/* Swipeable Viewport */}
        <div className="relative w-full aspect-[21/9] bg-neutral-200 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
                draggable={false}
              />
              
              {/* Overlay with Gold/Navy Theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent p-12 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-[#C5A059] font-mono text-sm mb-4 block">0{currentIndex + 1} / 0{projects.length}</span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-neutral-200 max-w-lg font-sans text-lg leading-relaxed">
                          {projects[currentIndex].description}
                        </p>
                    </div>
                    {/* Visual Progress Dots */}
                    <div className="hidden md:flex gap-2">
                        {projects.map((_, idx) => (
                            <div key={idx} className={`w-3 h-3 rounded-full border border-white ${idx === currentIndex ? "bg-[#C5A059]" : "bg-transparent"}`} />
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <p className="mt-6 text-neutral-500 text-sm italic text-center md:text-left">
            * Swipe left or right to navigate through projects.
        </p>
      </div>
    </section>
  );
}