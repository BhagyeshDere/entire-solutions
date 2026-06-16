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
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-fuchsia-700 font-bold tracking-[0.2em] uppercase text-xs">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-slate-900">
            Industrial Gallery
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-fuchsia-600 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-fuchsia-50 hover:text-fuchsia-700 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 p-2"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    width={500}
                    height={400}
                    alt={item.category}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                
                {/* Subtle Overlay */}
                <div className="absolute inset-x-3 bottom-3 bg-white/90 backdrop-blur-md p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-bold text-fuchsia-700 uppercase tracking-widest">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}