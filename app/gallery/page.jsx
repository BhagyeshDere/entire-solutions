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
        <div className="text-center mb-12 mt-20 md:mt-24">
          <span className="text-fuchsia-700 font-bold tracking-[0.2em] uppercase text-[11px]">
            Precision Engineering
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-900 tracking-tight">
            Our Industrial Portfolio
          </h1>
          <div className="w-16 h-1 bg-fuchsia-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-bold text-[11px] uppercase tracking-wider transition-all duration-300 border w-[calc(33.33%-0.5rem)] sm:w-auto sm:px-8 sm:py-3 sm:rounded-full ${
                activeCategory === category
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                  : "bg-white text-slate-600 border-slate-200 hover:border-fuchsia-300 hover:text-fuchsia-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid: Optimized for mobile and desktop */}
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
                className="group relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container: Increased height for better visibility */}
                <div className="relative overflow-hidden rounded-xl h-56 md:h-72 bg-slate-50 flex items-center justify-center">
                  <Image
                    src={item.image}
                    width={600}
                    height={600}
                    alt={item.category}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Info Badge */}
                <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-slate-900 uppercase tracking-widest shadow-sm border border-slate-100">
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