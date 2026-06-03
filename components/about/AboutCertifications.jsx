"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    { title: "ISO 9001:2015", issuer: "Quality Management System", img: "/images/certifications/cert1.jpg" },
    { title: "Udyam Registration", issuer: "Ministry of MSME", img: "/images/certifications/cert2.jpg" },
    { title: "GST Registration", issuer: "Government of India", img: "/images/certifications/cert3.jpg" },
  ];

  return (
    <section className="py-24 bg-[#fcfcfd] relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <span className="uppercase tracking-[0.3em] text-pink-600 text-xs font-bold">Verified Expertise</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            Our <span className="text-[#1e3a8a]">Certifications</span>
          </h2>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(cert)}
            >
              {/* Image Container with Thick Dark Border */}
              <div className="h-[500px] rounded-[2rem] overflow-hidden mb-8 border-[6px] border-slate-900 bg-white shadow-xl transition-all duration-500 group-hover:border-pink-600 group-hover:shadow-2xl">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="px-4">
                <h3 className="text-2xl font-bold text-slate-900">{cert.title}</h3>
                <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zoom-in Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-pink-500 transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              src={selectedImage.img} 
              className="max-h-[85vh] max-w-[90vw] rounded-2xl border-4 border-white shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}