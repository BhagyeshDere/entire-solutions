"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="pt-12 pb-12 md:pt-16 md:pb-16 bg-slate-50 relative overflow-hidden"
    >
      {/* Unique Engineering Blueprint Mesh Background - Subtle, tech-focused alternative to blurred shapes */}
      <div className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.07)" strokeWidth="1" />
              <circle cx="40" cy="40" r="1" fill="rgba(79, 70, 229, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Balanced layout boundary with optimized side spaces (px-4 md:px-8) */}
      <div className="max-w-[96vw] mx-auto px-4 md:px-8 text-center">
        
        {/* Brand New Structural Badge: Unique Mechanical Crosshair Framing (Replaced Tube Structure) */}
        <motion.div 
          className="inline-block relative px-6 py-2 select-none mix-blend-merge"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Technical Corner Bracket Elements */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-purple-600/60" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-600/60" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-indigo-600/60" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-indigo-600/60" />
          
          {/* Badge Label Inner Elements */}
          <div className="flex items-center gap-2.5">
            <span className="text-slate-800 font-black text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
              About Entire Solutions
            </span>
          </div>
        </motion.div>

        {/* Clean, Premium Centered Heading Layout with Smooth Stagger Sequence */}
        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1] overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Precision Fabrication.
          </motion.span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent inline-block"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Reliable Solutions.
          </motion.span>
        </h2>

        {/* Minimal Engineering Separator Accent */}
        <motion.div 
          className="mt-8 mx-auto h-[3px] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.45, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ width: 48 }}
        />

        {/* Full-size centralized narrative block enriched with additional information */}
        <div className="mt-10 w-full mx-auto overflow-hidden">
          <motion.p 
            className="text-base md:text-lg lg:text-[19px] leading-relaxed md:leading-loose text-slate-600 font-medium tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Entire Solutions is a premier manufacturing hub and heavy-duty engineering fabrication company established in 2020, specializing in high-tolerance light and heavy fabrication, state-of-the-art fiber laser cutting, precision CNC sheet metal processing, complex bending, certified welding operations, automated powder coating systems, end-to-end industrial electrical panel box production, and bespoke turnkey engineering solutions. Driven by advanced technological machinery, an elite pool of technical professionals, and a rigid zero-compromise approach to global manufacturing quality standards, we seamlessly serve high-demand B2B sectors including renewable energy, electrical power grids, automotive assembly chains, critical infrastructure projects, and commercial plant engineering—consistently optimizing material yields to deliver exceptionally durable, cost-effective, and precisely detailed industrial assets tailored directly to client-side blueprint configurations.
          </motion.p>
        </div>

      </div>
    </section>
  );
}