"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "ISO 9001:2015",
      issuer: "Quality Management System",
      img: "/images/certifications/cert1.jpg",
    },
    {
      title: "Udyam Registration",
      issuer: "Ministry of MSME",
      img: "/images/certifications/cert2.jpg",
    },
    {
      title: "GST Registration",
      issuer: "Government of India",
      img: "/images/certifications/cert3.jpg",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#fcfcfd] text-slate-900">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #25b3fa 1px, transparent 1px),
            linear-gradient(to bottom, #25b3fa 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brand Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#25b3fa]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a23aec]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 text-center"
        >
          <span className="inline-flex px-5 py-2 rounded-full border border-[#25b3fa]/30 bg-[#25b3fa]/10 text-[#25b3fa] text-xs font-bold tracking-[0.3em] uppercase">
            Verified Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#a23aec] to-[#25b3fa] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            Our certifications reflect our commitment to quality,
            compliance, and excellence in fabrication, engineering,
            and manufacturing services.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              onClick={() => setSelectedImage(cert)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">

                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] border border-slate-100 group-hover:border-[#25b3fa]/30 transition-all duration-500">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="pt-6 px-2">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-[#25b3fa] font-bold text-[11px] uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#25b3fa] transition-colors"
            >
              <X size={40} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={selectedImage.img}
              alt={selectedImage.title}
              className="max-w-[95vw] max-h-[85vh] rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}