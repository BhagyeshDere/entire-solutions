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
    <div className="min-h-screen bg-slate-50 pt-32 pb-28 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Industrial Gallery */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="relative h-[500px] w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200 flex items-center justify-center"
            >
              <Image 
                src={activeImage} 
                alt={service.title} 
                fill 
                className="object-contain p-4" 
                priority 
              />
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-3 gap-4">
            {[service.mainImage, ...(service.gallery || []).slice(0, 2)].map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${
                  activeImage === img ? 'border-pink-500' : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <Image src={img} width={300} height={200} alt="Thumbnail" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Content Layout */}
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Industrial Precision</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 text-slate-900 leading-[1.1]">
              {service.title}
            </h1>
          </motion.div>

          <div className="text-lg text-slate-600 mb-10 leading-relaxed bg-white p-8 rounded-3xl border border-slate-100">
            {service.description}
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                  <span className="font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Updated Enquiry Button with query parameters */}
          <Link
            href={{
              pathname: '/contact',
              query: { service: service.title },
            }}
            className="inline-flex items-center justify-center px-10 py-5 w-full md:w-max rounded-2xl bg-slate-900 text-white font-bold transition-all hover:bg-slate-800"
          >
            Enquiry Now
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}