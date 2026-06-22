"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "@/data/galleryData";

export default function GalleryPage() {
  const categories = ["All", ...new Set(galleryData.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-20 md:mt-24">
          <span className="text-fuchsia-700 font-bold tracking-[0.2em] uppercase text-[10px]">
            Precision Engineering
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-900 tracking-tight">
            Our Industrial Portfolio
          </h1>
          <div className="w-16 h-1 bg-fuchsia-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons: Updated for 3 per line on mobile */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              // Width set to ~33% for 3 items per line on mobile, auto on desktop
              className={`px-2 py-3 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all duration-300 border w-[calc(33.33%-0.5rem)] sm:w-auto sm:px-6 sm:py-2 sm:rounded-full ${
                activeCategory === category
                  ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                  : "bg-white text-slate-500 border-slate-200 hover:border-fuchsia-300 hover:text-fuchsia-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid: Responsive 1 / 2 / 4 layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative bg-white p-2 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl h-56">
                  <Image
                    src={item.image}
                    width={400}
                    height={300}
                    alt={item.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Info Badge */}
                <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-black text-slate-900 uppercase tracking-widest shadow-lg">
                      {item.category}
                    </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}