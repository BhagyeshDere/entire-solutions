"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 mt-8 mb-24"
    >
      <div className="relative w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
        
        {/* Map Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892016462744!2d73.86470007575292!3d18.66579046603417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c813c9e6d32f%3A0x6b77209774618e40!2sWadmukhwadi%20Rd%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717319000000!5m2!1sen!2sin"
          className="w-full h-full filter grayscale contrast-100 brightness-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        />

        {/* Overlay for premium feel */}
        <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] border border-black/5" />
      </div>
    </motion.div>
  );
}