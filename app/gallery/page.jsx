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
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-fuchsia-700 font-bold tracking-[0.2em] uppercase text-sm">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 text-slate-900">
            Industrial Gallery
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-fuchsia-600 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                  : "bg-white text-slate-600 hover:bg-fuchsia-50 hover:text-fuchsia-700 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid with Framer Motion */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 p-2"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    width={500}
                    height={400}
                    alt={item.category}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                  />
                </div>
                
                {/* Subtle Overlay on hover */}
                <div className="absolute inset-x-2 bottom-2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}