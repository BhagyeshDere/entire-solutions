"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-24 pb-16 md:pt-32 md:pb-20 bg-[#09090b] font-sans">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover filter brightness-[0.78] contrast-[1.04]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Lightened Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/55 z-0"></div>

      {/* Atmospheric Brand Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,rgba(147,51,234,0.01)_60%,transparent_100%)] blur-3xl hidden md:block" />
      </div>

      {/* Main Structural Layout Container */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 flex-1 flex flex-col justify-between gap-16">
        
        {/* Top / Left Section */}
        <div className="w-full pt-16 md:pt-24 select-none">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px] font-black tracking-[-0.03em] text-white leading-[0.95] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            >
              Strong Builds
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            >
              Start With{" "}
              <span className="bg-gradient-to-r from-[#a855f7] via-[#818cf8] to-[#38bdf8] bg-clip-text text-transparent pr-6 inline-block">
                Sharp Cuts
              </span>
            </motion.span>
          </h1>

          <motion.div 
            className="mt-10 h-[3px] bg-gradient-to-r from-[#a855f7] to-[#38bdf8] rounded-full shadow-[0_2px_12px_rgba(168,85,247,0.45)] origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            style={{ width: 72 }}
          />
        </div>

        {/* Bottom / Right Section */}
        <motion.div 
          className="self-end text-left md:text-right w-full max-w-sm md:max-w-[440px] mb-2 pt-6 border-t border-white/[0.05]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-sm md:text-[15px] text-neutral-200 font-medium leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Premium light and heavy engineering fabrication solutions{" "}
            <span className="text-neutral-400 font-normal">
              tailored comprehensively for high-performance industrial and commercial environments.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 1.2, ease: "easeOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
          Scroll
        </span>
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center backdrop-blur-[3px] bg-black/20 shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)]">
          <motion.div 
            className="w-1 h-1.5 bg-white/80 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.35, 1, 0.35]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

    </section>
  );
}