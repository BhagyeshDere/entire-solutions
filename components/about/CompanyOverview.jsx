"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-[#fcfcfd] relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Left Aligned with Black & Dark Blue */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
            Engineering {" "}
            <span className="text-[#1e3a8a]">Excellence</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Primary Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Entire Solutions is a leading manufacturing and fabrication company specializing in light and heavy fabrication solutions for industrial and commercial needs. We deliver high-precision engineering services since 2020.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our expertise extends to windmill fixture manufacturing, heavy structural fabrication, precision metal cutting, and electrical assembly works, ensuring robust performance and global industrial standards.
            </p>
          </motion.div>

          {/* Highlights Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900 text-white p-10 rounded-[2rem] flex flex-col justify-between shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Our Core Focus</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl">•</span>
                <span className="font-medium">Trusted Industrial Fabrication Partner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl">•</span>
                <span className="font-medium">High-Precision Laser Cutting & Metal Processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl">•</span>
                <span className="font-medium">Reliable, Durable & On-Time Delivery</span>
              </li>
            </ul>
          </motion.div>

          {/* Image Cards with updated paths */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-64 bg-slate-200 rounded-[2rem] overflow-hidden relative group"
          >
            <img 
              src="/images/about/fabrication-1.png" 
              alt="Fabrication" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-2 h-64 bg-slate-200 rounded-[2rem] overflow-hidden relative group"
          >
            <img 
              src="/images/about/machinery-2.png" 
              alt="Advanced Machinery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white font-bold text-xl">Advanced Machinery & Skilled Manpower</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}