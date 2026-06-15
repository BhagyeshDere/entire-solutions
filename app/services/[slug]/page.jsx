"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import serviceDetails from "@/data/serviceDetails";

export default function ServicePage({ params }) {
  const { slug } = use(params);
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return notFound();

  const [activeImage, setActiveImage] = useState(service.mainImage);

  return (
    // Increased pt-20 to pt-32 to ensure content does not touch the navbar
    <div className="min-h-screen bg-slate-50 pt-32 pb-28 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Industrial Gallery */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[550px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-slate-200"
            >
              <Image src={activeImage} alt={service.title} fill className="object-cover" priority />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-3 gap-4">
            {[service.mainImage, ...(service.gallery || []).slice(0, 2)].map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === img ? 'border-pink-500 ring-4 ring-pink-500/20' : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <Image src={img} width={300} height={200} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Advanced Content Layout */}
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Industrial Precision</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 leading-[1.1]">
              {service.title}
            </h1>
          </motion.div>

          <div className="text-lg text-slate-600 mb-10 leading-relaxed bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            {service.description}
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-pink-300 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                  <span className="font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 w-full md:w-max rounded-2xl bg-slate-900 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-pink-500/30"
          >
            Enquiry Now
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}