"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const videos = [
  "/videos/v1.mp4",
  "/videos/v2.mp4",
  "/videos/v3.mp4",
  "/videos/hero.mp4",
  "/videos/v4.mp4",
  "/videos/v5.mp4",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans">
      {/* Stacked Video Container */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {videos.map((src, i) => (
          <motion.video
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </motion.video>
        ))}
      </div>

      {/* Persistent Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-0 px-6 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-3xl"
        >
          {/* Fixed heading: Added pb-2 and adjusted leading to prevent clipping of 'g' descenders */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight font-heading pb-2"
          >
            Precision Fabrication &
            <span className="block mt-2 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Industrial Manufacturing
            </span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-body"
          >
            Delivering high-quality laser cutting, bending, welding,
            powder coating, and custom fabrication solutions for
            industrial and commercial sectors.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 font-body"
            >
              Get Quote
            </Link>

            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md text-white hover:bg-white/10 transition duration-300 font-body"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-bounce" />
        </div>
        <span className="text-white/70 text-xs uppercase tracking-widest font-medium font-body">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}